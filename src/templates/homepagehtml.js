const config = require('../config');

//Homepage es una función que recibe la información de los posts por parámetro y devuelve un documento HTML
const homepage = (posts) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="${config.blogDescription}" />
        <link href="./assets/main.css" rel="stylesheet" type="text/css"/>
        <title>${config.blogName}</title>
    </head>
    <body>
        <div class="grotesk">

            <header>
                <h1>${config.blogName}</h1>
                <p>-</p>
                <p>This blog is written by ${config.authorName}</p>
                <hr/>
            </header>
        
            <div class="posts">
                ${posts.map((post) => `
                    <div class="post">
                        <h3><a href="./${post.path}" >${post.attributes.title}</a></h3>
                        <p>${post.attributes.description}</p>
                    </div>
                `).join("")}
            </div>

            <footer>
                <p>Find the code on <a href="https://github.com/alextorrer"> github</a></p>
            </footer>
        </div>
    </body>
    </html>
`;

module.exports = homepage;
