#!/bin/bash
NBERR_HTML=$(grep -e "^error" linthtml_report.txt | wc -l)
NBWARN_HTML=$(grep -e "^warning" linthtml_report.txt | wc -l)
color="green"
if [[ $NBERR_HTML > 0 ]]
then 
  color="red"
  else if [[ $NBWARN_HTML > 0 ]]
  then 
    color="orange"
  fi
fi
anybadge -o -l "linthtml" -v "$NBERR_HTML $NBWARN_HTML" -c "$color" -f "linthtml.svg"



