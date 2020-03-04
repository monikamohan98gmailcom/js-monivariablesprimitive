/*string methods
two types of data- primitive datatype
                  -reference
  primitive-strings,number,boolean,sumbol
  reference-objects,(array)
special values-null,nan,undefined
null is object type 
*/
let a='monika';
//returns a string which concats the given strings
//output='monikamohan'
console.log(a.concat('mohan'))
//returns boolean value if the string ends with the given values
//output=true
console.log(a.endsWith('a'))
//returns boolean value if the string contains in the strings
//output=false
console.log(a.includes('f'))
//returns the index position of the given values
//output=3
console.log(a.indexOf('i'))
//This method returns -1 if the value to search for never occurs.
//The lastIndexOf() method is case sensitive!
//output=4
console.log(a.lastIndexOf('k'))
//it returns by concatinating the given string by the given no times
//output=monikamonikamonikamonika
console.log(a.repeat(4))
//it replaces the given string with the given value
//output=vijaya
console.log(a.replace("monika",'vijaya'))
console.log(a.replace(/a/g,'c')) // gloablly it chages all a with c
//it searches for the given value in the string and returns the index value
//output=1
console.log(a.search('o'))
//returns the sliced part of the strings
//output=nika
console.log(a.slice(3))
//it splits the string by searching the given value and puts into array
//output=(2) ["mo", "ika"]
console.log(a.split('n'))
//returns boolean value if the string starts with the given values
//output=true
let b='thisisasentence'
console.log(b.startsWith('this'))
//returns the sub part of th string indicated by starting and ending indexOf
//output=s a senten
console.log(b.substr(6,10))
//returns the sub part of th string indicated by starting indexOf,and length of the sub string
//output=s a 
console.log(b.substring(6,10))
//returns the string with capital letters
//output=MONIKA
console.log(a.toUpperCase())
//returns the string with capital letters
//output=monika
console.log(a.toLowerCase())
//it removes the white spaces in the strings
//output=this is a sentence
console.log(b.trim())

/*
-----------------------------------------
*/
/*
number methods
*/
//it changes the number to string values
//output=1234.56789
var number=1234.56789;
console.log(number.toString())
console.log(typeof(number.toString()))
//it rounds the value and changes it to exponential value
//output=1.23456789e+3
console.log(number.toExponential())
//it rounds off the value in the number
//output=1234.57
console.log(number.toFixed(20))

/*
----------------------------------------------------------
*/
/*
global methods
*/

//console object hs different type of displays
console.info('hii this is monika')
console.log('hii this is monika')
console.table(["Audi", "Volvo", "Ford"]);
console.warn('hii this is monika')
console.error('hii this is monika')

//alert gives the pop up box
//alert("you are using monika's webites")

//prompt give the pop up with  the feed given whic is storedin variable
//var userName=prompt("Enter your user name","monika")

//confirm also displays pop up window
//confirm('are you sure you want to exit')

//Number definesthe number for the variable given
//output=0
console.log(Number(false));
//returns boolean value if it is not a number 
//output=false
console.log(isNaN(123.45));
//parses a string and returns a number. Spaces are allowed. Only the first number is returned
//output=10.2334
console.log(parseFloat('10.2334 years'))
//parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
//output=12
console.log(parseInt('12.73*34'))
//it returns the string values
//output=false
console.log(String(Boolean(0)))
//boolean returns true or false
//output=true
console.log(Boolean('moni'))