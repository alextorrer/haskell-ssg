const config = require('../config');
const fm = require('front-matter');
const marked = require('marked');
const fs = require('fs');
const posthtml = require('../templates/posthtml');

//Función para convertir el md a HTML, devuelve un objeto con el nombre del archivo y el contenido (html)
const createPost = (postPath) =>{
    const data = fs.readFileSync(`${config.dev.postdir}/${postPath}.md`, 'utf8');
    const content = fm(data); //Convertir a un objeto la información en yaml, con los atributos y el body
    content.body = marked(content.body); //content.body es el .md
    content.path = postPath;
    return content;
};

//Función para exportar los posts a public
const createPosts = (posts) => {
    posts.forEach((post) => {
        if(!fs.existsSync(`${config.dev.outdir}/${post.path}`)){
            fs.mkdirSync(`${config.dev.outdir}/${post.path}`);
        }
        fs.writeFile(
            `${config.dev.outdir}/${post.path}/index.html`, //directorio
            posthtml(post), //contenido
            (e) => {
                if(e){
                    throw e;
                }
                console.log(`${post.path}/index.html was created succesfully`);
            }
        );
    });
};

module.exports = {
    createPost: createPost,
    createPosts: createPosts
};