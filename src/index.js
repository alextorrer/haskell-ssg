const config = require('./config');
const postMethods = require('./posts');
const fs = require('fs');
const addHomePage = require('./homepage');

const posts = fs
                .readdirSync(config.dev.postdir)
                .map((post)=>post.slice(0,-3)) //Remove .md
                .map((post) => postMethods.createPost(post));
console.log(posts);

if(!fs.existsSync(config.dev.outdir)){
    fs.mkdirSync(config.dev.outdir);
}

postMethods.createPosts(posts);
addHomePage(posts);