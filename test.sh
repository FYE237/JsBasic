rm linthtml_report.txt;

npx htmlhint *.html -r style-disabled >> linthtml_report.txt;

if grep "no errors" "linthtml_report.txt" ;

then 
     echo 0;
else 
     echo 1;
fi