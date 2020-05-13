const fs = require('fs');
const homepage = require('./templates/homepagehtml');
const config = require('./config');

const addHomePage = (posts) =>{
    fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), (e)=>{
        if(e){
            throw e;
        }
        console.log('index.html was created succesfully');
    });
};

module.exports = addHomePage;