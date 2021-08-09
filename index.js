///a constant kelvin is created to hold the default temperature in kelvin
const kelvin = 293;
//convert kelvin to celcius
let celcius = kelvin - 273;
//the formular for farhenheit
let fahrenheit = celcius*(9/5)+32;
//we will now round up fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is '+fahrenheit+' degrees Fahrenheit');


let newtown = celcius*(33/100);
newtown = Math.floor(newtown);
console.log('The temperatre is '+newtown+' using the Newtown Scale');