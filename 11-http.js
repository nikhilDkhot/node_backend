const http = require('http')

const server = http.createServer((req,res) => {

    // console.log(req);
    // res.write('hello nikhil you are going to do many amazing things in this world')
    

    if(req.url == '/'){
        res.end('hello nikhil you are going to do many amazing things in this world');
    }
    if(req.url === '/about'){
        res.end('thanks alot sohan and shazan mam');
    }

    res.end(`
    <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">back home</a>
    `)

})

server.listen(3333)