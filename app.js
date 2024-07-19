const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname );
    },
  });
  
const upload = multer({storage:storage});

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/api/upload',upload.single('file'),(req,res)=>{
    //res.send('Uploaded succesfully!');
    res.json(req.file);
});

app.listen(port,()=>{
    console.log(`Listening to port ${port}`);
});