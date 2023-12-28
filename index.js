const  express =  require('express') ;
require('dotenv').config()

console.log('hello');


const app = express()
const port = 4000
app.get('/',(req,res)=>{
  res.send('hello');
}) 

app.get('/login',(req,res)=>{
  res.send('<h1>login successful at here<h1>')
})

app.listen(process.env.PORT ,()=>{
  console.log(`listening on pot ${port}`)
})