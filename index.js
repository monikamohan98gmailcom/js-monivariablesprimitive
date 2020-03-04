/*
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
