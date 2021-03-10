## script.py

This script identifies controls that differ between the ACSC's Information Security Manual (ISM) and a System Security Plan Annex (SSPA) document. It displays:

* controls that are not currently covered by the SSPA that need to be added
* SSPA controls that no longer appear in the ISM and need to be removed

Although this script was created for the [SSPA documents](https://desktop.gov.au/blueprint/security.html) supplied with the Protected Utility program, you can use it to analyse other SSPA documents as long as they follow the same format.

### What you need

1. Download a copy of the ISM in XML format available at [https://www.cyber.gov.au/acsc/view-all-content/ism](https://www.cyber.gov.au/acsc/view-all-content/ism)
1. Your SSP Annex document in XSLX format
1. Python 3, or Docker

### Usage

If you have Python 3 available:

```
$ python3 script.py --ism ism_file.xml --sspa sspa_file.xslx
```

Or if you prefer, run it in a Docker container:

```
host$ docker run -it --volume="$PWD:/workdir" -it python:3 /bin/bash
$ cd /workdir
workdir$ pip3 install -r requirements.txt
workdir$ python3 script.py --ism ism_file.xml --sspa sspa_file.xslx
```

Without supplying any parameters, you will get a help message similar to:

```
# python3 script.py
Please provide file locations

usage: script.py [-h] [--ism ISM] [--sspa SSPA]

optional arguments:
  -h, --help   show this help message and exit
  --ism ISM    Location of Information Security Manual XML file
  --sspa SSPA  Location of the System Security Plan Annex XLSX file
```

### Example output

```
--- ISM controls not covered in the SSP Annex ---
{
    "1633": {
        "guideline": "Guidelines for Cyber Security Roles",
        "section": "System owners",
        "topic": "Protecting systems and their resources",
        "revision": "0",
        "updated": "Jan-21",
        "official": "Yes",
        "protected": "Yes",
        "secret": "Yes",
        "top_secret": "Yes",
        "description": "System owners determine the type, value and security objectives for each system based on an assessment of the impact if it were to be compromised."
    },
    "1634": {
        "guideline": "Guidelines for Cyber Security Roles",
        "section": "System owners",
        "topic": "Protecting systems and their resources",
        "revision": "0",
        "updated": "Jan-21",
        "official": "Yes",
        "protected": "Yes",
        "secret": "Yes",
        "top_secret": "Yes",
        "description": "System owners select security controls for each system and tailor them to achieve desired security objectives."
    },
    ...

--- SSP Annex controls no longer appear in the ISM ---
These may need to be removed from the SSP Annex
{
    "825": {
        "guideline": "Guidelines for Communications Infrastructure",
        "section": "Cable management",
        "topic": "Cable colours for foreign systems in Australian facilities",
        "description": "Cable colours for foreign systems installed in Australian facilities are not the same colour as those used for Australian systems.",
        "azure-implementation-statement": "Alternative controls implemented and operating effectively"
    },
    "826": {
        "guideline": "Guidelines for Communications Infrastructure",
        "section": "Cable management",
        "topic": "Cable colours for foreign systems in Australian facilities",
        "description": "Cable colours used for foreign systems are agreed between the host organisation and the foreign system\u2019s owner.",
        "azure-implementation-statement": "Alternative controls implemented and operating effectively"
    },
    ...

--- Summary ---
ISM: 772
SSP Annex: 765
ISM controls to be added: 18
SSPA controls to be removed: 11
```
