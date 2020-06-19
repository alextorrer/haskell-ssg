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
        <main class="home-main-container">
            <section class="container logo-main-container">
                <div>
                    <img src="./assets/img/haskell-logo.png" alt="haskell logo">
                </div>
                <h1>${config.blogName}</h1>
            </section>
    
            <section class="posts-main-container">
                <div>
                    ${posts.map((post) => `
                        <article class="post-container">
                            <div class="post-data-container">
                                <h3>${post.attributes.title}</h3>
                                <p>${post.attributes.description}</p>
                            </div>
                            
                            <div class="post-link-container">
                                <a href="./${post.path}"><img class="arrow-icon" src="./assets/img/arrow.png" alt="arrow icon"></a>
                            </div>
                        </article>
                    `).join("")} 
                </div>
            </section>    
        </main>
        
        <footer>
            <div>
                <p>Iconos por <a href="https://www.flaticon.es/autores/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a></p>
            </div>
            <div>
                <a href="https://github.com/alextorrer/haskell-ssg"><img src="./assets/img/github.png" alt=""></a>
            </div>
        </footer>

    </body>
    </html>
`;

module.exports = homepage;

