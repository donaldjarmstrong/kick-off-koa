var koa = require('koa');
var router = require('koa-router')

var app = koa();	
app.use(router(app));

// handlers here
app.get('/', function *(next) {
	this.body = "hello koa";

	return yield next;
});

app.get('/404', function *(next) {
	this.body = "page not found";

	return yield next;
});

app.get('/500', function *(next) {
	this.body = "internal server error";

	return yield next;
});

app.listen(process.argv[2]);
