// 赵猛-东 2019/6/28 15:20:50
const Koa = require('koa');
const app = new Koa()
const koaStatic = require('koa-static');
const path = require('path');
const router = require('koa-router')();
// res.set
app.use(koaStatic(
  // koaStatic 通过后端端口号 接 iframe.html 可以访问到里面的内容
  path.join(__dirname,'./public/')
))
app.use(async(ctx, next) => {
    //允许哪个域名请求 或者 * 代表所有的域名
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080')
    // 服务器支持的头部 'X-custom' 可以 是 *  * 代表所有的头
    ctx.set('Access-Control-Allow-Headers', 'X-custom,content-type')
    // 支持的方法 
    ctx.set('Access-Control-Allow-Methods', '*')
    // 允不允许 携带 cookie
    // 设置为 允许 true 的时候，Access-Control-Allow-Origin 需要时一个具体的域名，不能是 *
    ctx.set('Access-Control-Allow-Credentials', true)
    await next()
})


router.get('/api/post', async function (ctx) {
  console.log('cookie', ctx.cookies.get('name'));
  ctx.body = [
    { title: 'node.js 入门到精通', createTime: '2018-12-12' },
    { title: 'php 入门到精通', createTime: '2018-11-11' },
  ]
});

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(1234, () => {
  console.log('server is running 1234');
});
router.get('/api/user',async(ctx) => {
    const callback = ctx.request.query.callback;
    const user = {
        name: 'abc',
        age: 18
    }
    ctx.body= `${ callback }(${JSON.stringify(user)})`;
})