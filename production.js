var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 5000,
  env: 'development',
  db: {
    host: 'ds027751.mongolab.com',
    port: 27751, 
    name: 'dh',
    credentials: {
      username: 'hemant',
      password: '123'
    }
  }
  // db: {
  //   host: 'localhost',
  //   port: 27017, 
  //   name: 'test'
  // }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening on " + process.env.PORT || 5000);
});

server.on('error', function(err) {
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});


