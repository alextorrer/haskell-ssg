const fs = require('fs'); //Servicio de archivos de Node
const homepage = require('../templates/homepagehtml'); //Home page
const config = require('../config');

//Función para exportar el archivo HTML de Homepage al directorio public
const addHomePage = (posts) =>{
    fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), (e)=>{ //Params: directorio, contenido, error
        if(e){
            throw e;
        }
        console.log('index.html was created succesfully');
    });
};

module.exports = addHomePage;