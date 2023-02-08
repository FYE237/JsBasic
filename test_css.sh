rm "css_report.txt";

node_modules/.bin/csslint *.css >> css_report.txt;

if grep "error" "css_report.txt" ;  

then 
     echo 1;
else 
     echo 0;
fi