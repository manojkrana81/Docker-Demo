const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs/promises');

const dataFolder = path.join(__dirname, 'data/files');

fs.mkdir(dataFolder, {recursive: true});


app.get('/ping', (req, res)=>{
    console.log('hey there');
    res.send('pong');
});

app.get('/create-file', async (req, res) => {
    try {
      const fileName = `${(Math.random()*100 + 10)}_file.txt`;
      const filePath = path.join(dataFolder, fileName);
  
      // Write content to a file
      await fs.writeFile(filePath, 'Hello, Docker Volumes!');
  
      res.send('File created successfully!');
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

app.listen(3000, ()=>{
    console.log("server started");
});


