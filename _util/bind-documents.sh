#!/bin/bash

. _util/files-to-export.sh

items="$overviews $abacs $security"
arr=($items)

# attach .docx to the end of each element
arr=("${arr[@]/%/.docx}")

# replace ./blueprint/abac with assets/files/scratch
arr=("${arr[@]/\.\/blueprint\/abac/assets\/files\/scratch}")

# replace ./blueprint/security with assets/files/scratch
arr=("${arr[@]/\.\/blueprint\/security/assets\/files\/scratch}")

# replace ./blueprint with assets/files/scratch
arr=("${arr[@]/\.\/blueprint/assets\/files\/scratch}")

# join the array elements into one string
final_docs=""
final_docs=$(IFS=" "; echo "${arr[*]}")

# stitch together all documents in the correct order
docxcompose assets/files/scratch/coverpage.docx $final_docs -o final-output.docx

# remove the scratch files
rm assets/files/scratch/*
