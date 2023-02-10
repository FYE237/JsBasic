#!/bin/bash

# Badge HTML

NBERR_HTML=$(grep -e "error " linthtml_report.txt | wc -l)
NBWARN_HTML=$(grep -e "warning" linthtml_report.txt | wc -l)
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


#Badge CSS

#!/bin/bash
NBERR_CSS=$(grep -e "error" css_report.txt | wc -l)
NBWARN_CSS=$(grep -e "warning" css_report.txt | wc -l)
color="green"
if [[ $NBERR_CSS > 0 ]]
then 
  color="red"
  else if [[ $NBWARN_CSS > 0 ]]
  then 
    color="orange"
  fi
fi
anybadge -o -l "lintcss" -v "$NBERR_CSS $NBWARN_CSS" -c "$color" -f "lintcss.svg"


#Badge JS
NBERR_JS=$(grep -e "error" js_report.txt | wc -l)
NBWARN_JS=$(grep -e "warning" js_report.txt | wc -l)
color="green"
if [[ $NBERR_JS > 7 ]]
then 
  color="red"
else if [[ $NBWARN_JS > 0 ]]
  then 
    color="orange"
  fi
fi
anybadge -o -l "lintjs" -v "$NBERR_JS $NBWARN_JS" -c "$color" -f "lintjs.svg"

echo $NBERR_JS;
echo  $NBWARN_JS
