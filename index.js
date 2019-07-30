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
    console.log(`https://api.github.com/repos/${ownerName}/${repoName}/issues`);
    let gitResponse = await axios.get(`https://api.github.com/repos/${ownerName}/${repoName}/issues`);
    console.log(gitResponse);
    for (var key in gitResponse) {
        if (gitResponse.hasOwnProperty(key)) {
          
            console.log(gitResponse[key]);
        }
      }
    let response = { "Total number of open issues" : ownerName, "opened in the last 24 hours" : repoName, "opened more than 24 hours ago but less than 7 days ago" : repoName, "opened more than 7 days ago" : repoName};
    res.send(response);
});

app.get('/', async (req, res) =>{
    res.send("gitResponse");
});

app.listen(port, () => console.log(`Here Start the Project ${port}!`));
