var koa = require('koa');
var app = koa();	

// handlers here
app.use(function *(next) {
  this.body = "hello koa";
  return yield next;
});

app.listen(process.argv[2]);