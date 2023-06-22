#!/bin/sh
# Export documents to DOCX and PDF formats
# This script is meant to be run within the pandoc/latex Docker container
# under the BusyBox Ash shell

set -o errexit
set -o pipefail

# remove file extension ".md" from items
items="./blueprint/security/hybrid-incident-response-plan
./blueprint/security/hybrid-security-risk-management-plan
./blueprint/security/hybrid-system-security-plan
./blueprint/security/hybrid-standard-operating-procedures
./blueprint/security/incident-response-plan
./blueprint/security/security-risk-management-plan
./blueprint/security/system-security-plan
./blueprint/security/standard-operating-procedures
./blueprint/security/continuous-monitoring-plan
./blueprint/security/cloud-assessment-and-authorisation-alignment"

set -- $items
while [ -n "$1" ]; do
    filename=`basename $1`
    last_updated=`git log -1 --pretty="format:%cs" $1.md`
    echo "+ Doing $filename" 
    echo "Updated $last_updated"
    pandoc --lua-filter=_util/assets-path.lua --metadata=date:$last_updated $1.md -o assets/files/$filename.docx
    pandoc --pdf-engine=xelatex --lua-filter=_util/assets-path.lua --metadata=date:$last_updated --variable=papersize:a4 --variable=geometry:margin=1in $1.md -o assets/files/$filename.pdf
    shift
done
