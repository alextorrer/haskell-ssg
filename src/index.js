const config = require('./config');
const postMethods = require('./util/posts'); //Funciones para convertir los .md a html y exportarlos
const fs = require('fs'); //Servicio de archivos de Node
const addHomePage = require('./util/homepage'); //Función para crear el home y exportarlo a public

//Leer los .md y enviar el nombre del archivo a createPost para convertirlos
const posts = fs
                .readdirSync(config.dev.postdir)
                .map((post)=>post.slice(0,-3)) //Remove .md
                .map((post) => postMethods.createPost(post));
console.log(posts);

if(!fs.existsSync(config.dev.outdir)){
    fs.mkdirSync(config.dev.outdir);
}

postMethods.createPosts(posts); //Exportar los posts ya convertidos a sus carpetas en public
addHomePage(posts); //Añadir la información de los posts a Home