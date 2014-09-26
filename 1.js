var koa = require('koa');
var router = require('koa-router')

var app = koa();	
app.use(router(app));

// handlers here
app.use(function *(next) {
  this.body = "hello koa";
});

app.listen(process.argv[2]);