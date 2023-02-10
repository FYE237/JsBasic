# npm install minify
rm -r  build/public_html/js

mkdir -p build/public_html/js #On crée le dossier public_html dans le build

for f in *.{html,css,js} ; do 
     npx minify "$f" > "build/$f" ; 
done

for file in public_html/*.html ; do 
     npx minify "$file" > "build/$file" ; 
done


for subfile in public_html/js/*.js ; do
     npx minify "$subfile" > "build/$subfile" ;
     cp "$subfile" "build/$subfile" ;
done

#Je les mets à la racine du dossier build
mv build/public_html/* build/;
rm -r build/public_html



