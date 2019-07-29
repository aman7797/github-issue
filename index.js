"use strict;"
var FileSaver = require('file-saver');
const express = require('express');
const axios = require('axios');
const app = express();
const port = 3030;

var IssuesCount = `<span itemprop="name">Issues</span>`;

app.get('/check/:ownername/:repoName', async (req, res) =>{
    let ownerName = req.params.ownername;
    let repoName = req.params.repoName;
    let json = { OwnerName : ownerName, RepoName : repoName};
    console.log(json);
    console.log(`https://github.com/${ownerName}/${repoName}/issues`);
    // let gitResponse = await axios.get(`https://github.com/${ownerName}/${repoName}/issues`);
    FileSaver.saveAs(await axios.get(`https://github.com/${ownerName}/${repoName}/issues`),"document.txt");
    res.send(json);
});

app.get('/', async (req, res) =>{
    res.send("gitResponse");
});

app.listen(port, () => console.log(`Here Start the Project ${port}!`));
