rm "js_report.txt";

npx eslint public_html/js/myScript.js >> js_report.txt ;

npx eslint *.js >> js_report.txt;

NBERR=$(grep -e "error" js_report.txt | wc -l);

if [[ $NBERR  > 5 ]]

then 
     echo 0;
else 
     echo 1;
fi