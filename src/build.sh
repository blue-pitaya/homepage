#!/bin/sh

cp index.html ../html/index.html.tmp
cp index.html ../html/nvim.html.tmp
cp index.html ../html/linux.html.tmp
cp index.html ../html/code.html.tmp
cp index.html ../html/fun.html.tmp

sed '/<\!--content-->/ r fragments/home.html' ../html/index.html.tmp > ../html/index.html
sed '/<!--content-->/ r fragments/nvim.html' ../html/nvim.html.tmp > ../html/nvim.html
sed '/<!--content-->/ r fragments/linux.html' ../html/linux.html.tmp > ../html/linux.html
sed '/<!--content-->/ r fragments/code.html' ../html/code.html.tmp > ../html/code.html
sed '/<!--content-->/ r fragments/fun.html' ../html/fun.html.tmp > ../html/fun.html

rm ../html/*.tmp
