import express from 'express';
import path from 'path'
import { requestTime,logger } from './middleware.js';

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views',path.resolve(__dirname,'ejs'))

app.use(express.static(path.resolve(__dirname,'ejs')))
app.use(requestTime)
app.use(logger)

app.get('/',(req,res)=>{
    res.render('index', {title: 'Main page'})
})

app.get('/features',(req,res)=>{
    res.render('index', {title: 'features page'})
})


//app.get('/', (req,res)=>{
    // res.sendfile(path.resolve(__dirname,'static','index.html'))
    //res.send('<h1>Hello express!<h1>')
//})

//app.get('/features', (req,res)=>{
  //  res.sendfile(path.resolve(__dirname,'static','features.html'))
//})

//app.get('/downoload', (req,res)=>{
  //  console.log(req.requestTime)
    //res.download(path.resolve(__dirname,'static','index.html'))
//})

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`)
})
