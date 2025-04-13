// GLOBALS - NO WINDOW !!!
// __dirname - path to currnt dirctory
//__filename - file name
// require   - function to use modules (CommonJS)
// module    - info about current module
// process   - info about env where the program is being excuted

console.log(__dirname);
console.log(__filename);

// setInterval(() => {
//  console.log('learning is most beatiful thing ');   
// }, 1000);  
//in setInterval function whatever line we want to print will print repeatelly after that time

setTimeout(() => {
    console.log('learning is most beatiful thing ');  
}, 5000);

//in settime out whatever want to print will print only once at that time

