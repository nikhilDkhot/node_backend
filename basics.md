#this course includes
>enviroment to run JS outside browser
>built on chrome's V8 JS engine
>big community
>full stack

course requirements 
>HTML,CSS,JS,ES6
>callbacks,promises,async-await
>youtube - coding addict
>playlist - JS nuggets

## course structure
>intro
>install
>node fundamentals
>express tutorial
>building apps 

## node.js 

>no dom
>no window
>server side apps
>filesystem
>versions
>commonJS

# repl

# cli

# modules setup

# builtup modules
>os module
>path module -fs module(sync)
             -fs module(async)

# http 
brief intro
cover in detail later (next section)

# npm info
> npm command
> nodemon
>uninstall
>global install
>package-Lock.Json

# event loop , async patterns , event emitter and streams

// const _ = require('lodash')

// let array = [1,[2,[3,[4]]]]

// const flat = _.flatMapDeep(array)

// console.log(flat);
// console.log("nikhil you are doing well");

const { readFile } = require('fs')

console.log('started a first task');

readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err);
    }
    console.log(result);
    console.log('completed first task');
})

console.log('starting next task');






# main concept 

# pre - built code



            














npm - global command , comes with node 
npm --version

local dependancy - use it only in this particular project 
npm i <packageName>

glabal dependancy - use it in any project
npm install -g <packageName>
sudo npm install -g <packageName>   (mac)

-package.json - menifest file (stores important info about project/package)
-manual approach (create package.json in root, create properties etc)
-npm init (step by step , press enter to skip)
npm init -y (everything default)


3:13
3.25
3.32



