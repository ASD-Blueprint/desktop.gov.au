# A Python 3 script to display differences between an ACSC's ISM XML file
# and a System Security Plan Annex XSLX document
#
# This script lives at https://github.com/govau/desktop.gov.au/tree/master/_util/ism
#

import argparse
import sys
import os
import json
import pandas as pd
import xml.etree.ElementTree as ET

ism_file = ''
sspa_file = ''
tree = ''
df = ''


parser = argparse.ArgumentParser()
parser.add_argument('--ism', help='Location of Information Security Manual XML file', action='store')
parser.add_argument('--sspa', help='Location of the System Security Plan Annex XLSX file', action='store')
args = parser.parse_args()

if len(sys.argv) > 1:
    if args.ism != None:
        ism_file = args.ism
        if os.path.isfile(ism_file):
            tree = ET.parse(ism_file)
        else:
            print('ISM XML file not found')
            exit(4)
    else:
        print('Please provide ISM XML file location')
        exit(2)

    if args.sspa != None:
        sspa_file = args.sspa
        if os.path.isfile(sspa_file):
            df = pd.read_excel(sspa_file, engine='openpyxl', sheet_name=1)
        else:
            print('SSP Annex XLSX file not found')
            exit(5)
    else:
        print('Please provide SSPA XLSX file location')
        exit(3)
else:
    print('Please provide file locations\n')
    parser.print_help()
    exit(1)


# Read in the ISM XML
root = tree.getroot()
ism = {}

for control in root.findall('.//Control'):
    identifier = str(int(control.find('Identifier').text))

    if identifier not in ism:
        ism[identifier] = {
            'guideline': control.find('Guideline').text,
            'section': control.find('Section').text,
            'topic': control.find('Topic').text,
            'revision': control.find('Revision').text,
            'updated': control.find('Updated').text,
            'official': control.find('OFFICIAL').text,
            'protected': control.find('PROTECTED').text,
            'secret': control.find('SECRET').text,
            'top_secret': control.find('TOP_SECRET').text,
            'description': control.find('Description').text
        }
    else:
        print("** %s already exists!", identifier)



# Read in the Blueprint's SSP Annex spreadsheet
sspa = {}
for i in df.index:
    if not pd.isnull(df['Identifier'][i]):
        # strip out leading 0, then convert back to a string for comparison
        identifier = str(int(df['Identifier'][i]))
        if identifier not in sspa:
            sspa[identifier] = {
                'guideline': df['Guideline'][i],
                'section': df['Section'][i],
                'topic': df['Topic'][i],
                'description': df['Description'][i],
                'azure-implementation-statement': df['Azure Implementation Statement'][i]
            }
        else:
            print("** %s already exists!", identifier)



# Determine ISM controls not covered in the SSP Annex
diff_a = {}
for identifier in ism:
    if str(identifier) not in sspa:
        diff_a[identifier] = ism[identifier]

# Output ISM controls that do not appear in the SSP Annex
print('--- ISM controls not covered in the SSP Annex ---')
print(json.dumps(diff_a, indent=4))
print('\n')


# Determine SSP Annex controls no longer relevant in the ISM
# These controls have likely been removed from the ISM
diff_b = {}
for identifier in sspa:
    if str(identifier) not in ism:
        diff_b[identifier] = sspa[identifier]

# Output ISM controls that do not appear in the SSP Annex
print('--- SSP Annex controls no longer appear in the ISM ---')
print('These may need to be removed from the SSP Annex')
print(json.dumps(diff_b, indent=4))
print('\n')


print('--- Summary ---')
print("ISM: {}\nSSP Annex: {}\nISM controls to be added: {}\nSSP Annex controls to be removed: {}\n".format(len(ism), len(sspa), len(diff_a), len(diff_b)))
