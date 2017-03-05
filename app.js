import Koa from 'koa'
import Views from 'koa-views'
import Router from 'koa-router'
import BodyParser from 'koa-bodyparser'

const app = new Koa()

const router = new Router()
app.use(Views(__dirname + '/www', { map: {html: 'nunjucks' }}))
app.use(BodyParser())

router.get('/', async function(ctx, next){
  await ctx.render('login/index.html')
})

router.get('/login', async function(ctx, next){
  await ctx.render('login.html')
})
