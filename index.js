import express from 'express';
import path from 'path'

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.static(path.resolve(__dirname,'static')))

//app.get('/', (req,res)=>{
    // res.sendfile(path.resolve(__dirname,'static','index.html'))
    //res.send('<h1>Hello express!<h1>')
//})

//app.get('/features', (req,res)=>{
  //  res.sendfile(path.resolve(__dirname,'static','features.html'))
//})

app.get('/downoload', (req,res)=>{
    res.download(path.resolve(__dirname,'static','index.html'))
})

app.listen(PORT, () => {
    console.log(`server has been started on port ${PORT}`)
})
