const express =  require('express');
const app = express();
const path = require('path');
const bodyparser=require('body-parser');
app.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,'index.html'));
});
app.listen(3000,()=>{
    console.log("listening to port 3000")
})