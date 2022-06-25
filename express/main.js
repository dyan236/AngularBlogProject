const express=require('express');
const app=express();
const PORT=process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send("Hello World");
})

app.use('/api/posts', require('./routes/api/posts'));

app.use(express.static('static'));

app.listen(PORT, () => console.log(`Server started port ${PORT}`));