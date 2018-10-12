const Koa = require('koa');
const fs = require('fs');
const logger = require('koa-logger');
const Router = require('koa-router')
const server = require('koa-static');
const app = new Koa();
const router = new Router();

//  主页 路由
router.get('/',async (ctx)=>{
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream('./views/main.html');  
});

//  日志
app.use(logger());
//  加载静态资源
app.use(server('.'));
//  加载路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(80);
console.log('listening on port 80');
