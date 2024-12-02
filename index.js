const text = "  JavaScript — это удивительный язык программирования! Он используется для создания сайтов, мобильных приложений и многого другого.  ";  
 console.log(text.trim());//1
 console.log(text.toUpperCase());//2
 console.log(text.toLowerCase());//3
 console.log(text.indexOf("язык"));//4
 console.log(text.lastIndexOf("о"));//5
const b=text.indexOf("!");
console.log(text.substr(0, b+1));//6
console.log(text.trim().split("!"));//7
console.log(text.trim().split(" ").length);//8
console.log(text.replace("удивительный", "потрясающий"));//9
console.log(text.trim().startsWith("JavaScript"));//10
console.log(text.trim().endsWith("другого."));//11
console.log(text.slice(20, 40));//12
if(text.trim().length>60)//13
console.log(text.trim().substr(0,60)+"...");
console.log(text.trim().split(" ").sort());//14
console.log(text.trim().replace("!",""));//15