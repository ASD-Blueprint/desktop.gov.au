#!/bin/sh
# Export documents to DOCX and PDF formats
# This script is meant to be run within the pandoc/latex Docker container
# under the BusyBox Ash shell

set -o errexit
set -o pipefail

. ./_util/files-to-export.sh

# export security documents
items="$security"

echo "*** Building security documents"
set -- $items
while [ -n "$1" ]; do
    filename=`basename $1`
    last_updated=`git log -1 --pretty="format:%cs" $1.md`
    echo "+ Doing $filename" 
    echo "  Updated $last_updated"
    pandoc --lua-filter=_util/assets-path.lua --metadata=date:$last_updated $1.md -o assets/files/$filename.docx
    pandoc --pdf-engine=xelatex --lua-filter=_util/assets-path.lua -H assets/deeplists.tex --metadata=date:$last_updated --variable=papersize:a4 --variable=geometry:margin=1in $1.md -o assets/files/$filename.pdf
    shift
done



# to offer a single docx of all content, export all documents to docx for binding later
items="$overviews $abacs $security"

echo ""
echo "*** Exporting all documents to docx"
set -- $items
while [ -n "$1" ]; do
    filename=`basename $1`
    last_updated=`git log -1 --pretty="format:%cs" $1.md`
    echo "+ Doing $filename" 
    echo "  Updated $last_updated"
    pandoc --lua-filter=_util/assets-path.lua --lua-filter=_util/document-title.lua --metadata=date:$last_updated $1.md -o assets/files/scratch/$filename.docx
    shift
done

# insert today's date in the coverpage
pandoc --lua-filter=_util/assets-path.lua --lua-filter=_util/coverpage.lua --metadata=date:`date +%Y-%m-%d` assets/coverpage-template.docx -o assets/files/scratch/coverpage.docx
