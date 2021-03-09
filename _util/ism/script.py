import pandas as pd
import xml.etree.ElementTree as ET


# read in ISM xml file
#tree = ET.parse('ISM - List of Security Controls (October 2020).xml')
tree = ET.parse('ISM - List of Security Controls (January 2021).xml')
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



# read in Blueprint's SSP Annex spreadsheet
df = pd.read_excel (r'DTA - Cloud-Native Blueprint - System Security Plan Annex (October 2020 v2 Edits).xlsx', engine='openpyxl', sheet_name=1)
sspa = {}
for i in df.index:
    if not pd.isnull(df['Identifier'][i]):
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



# show controls not covered
diff = {}
for identifier in ism:
    if str(identifier) not in sspa:
        diff[identifier] = ism[identifier]

print("ISM: {}\nSSPAnnex: {}\n".format(len(ism), len(sspa)))
import json
print(json.dumps(diff, indent=4))


