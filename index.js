import express from 'express'
import morgan from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'
const app = express()
// 中间件（监听请求日志）
app.use(morgan('dev'))
// 
app.use(bodyParser.urlencoded({extended:false}))

let comments = []
app.locals.comments = comments
app.set('views', path.resolve(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    // 直接响应文字
    // response.send('hello')
    // 渲染视图
    response.render('index')
})
app.get('/comments',(request,response)=>{
    response.render('comments/index')
})
app.get('/comments/new', (request, response) => {
    response.render('comments/new')
})

app.post('/comments/new',(request,response)=>{
    if(!request.body.comment){
        response.status(400).send('Do you have something to say ?')
        return 
    }
    comments.push({
        comment:request.body.comment,
        created_at:new Date()
    })
    response.redirect('/comments')
})


app.listen(3100, () => {
    console.log('listen port 3100')
})