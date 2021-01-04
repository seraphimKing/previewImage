const fs = require('fs');
const path = require('path');
const koa = require('koa');
const Router = require('@koa/router');
const app = new koa()
const router = new Router();


router.get('/', async ( ctx )=>{
  const file = fs.readFileSync(path.join(__dirname, '../src/demo.js'));
  ctx.set('content-type', 'application/javascript')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = file;
})

router.get('/index', async ( ctx )=>{
  const file = fs.readFileSync(path.join(__dirname, '../src/index.js'));
  ctx.set('content-type', 'application/javascript')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = file;
})

router.get('/image1', async (ctx) => {
  const file = fs.readFileSync(path.join(__dirname, '../static/testImage/1.png'));
  ctx.set('content-type', 'image/png')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = file;
})

router.get('/image2', async (ctx) => {
  const file = fs.readFileSync(path.join(__dirname, '../static/testImage/2.png'));
  ctx.set('content-type', 'image/png')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = file;
})

router.get('/image3', async (ctx) => {
  const file = fs.readFileSync(path.join(__dirname, '../static/testImage/3.png'));
  ctx.set('content-type', 'image/png')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = file;
})

router.get('/image4', async (ctx) => {
  const file = fs.readFileSync(path.join(__dirname, '../static/testImage/4.png'));
  ctx.set('content-type', 'image/png')
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.body = file;
})


app.use(router.middleware());

app.listen(3000);
console.log('程序启动127.0.0.0:3000')