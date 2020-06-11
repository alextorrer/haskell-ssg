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
        <section class="home-main-container">
            <div class="home-logo-container">
                <img src="" alt="haskell logo">
            </div>
            <h1>${config.blogName}</h1>
        </section>

        <section class="posts-main-container">
            <div>
                ${posts.map((post) => `
                    <article class="post">
                        <h3>${post.attributes.title}</h3>
                        <p>${post.attributes.description}</p>
                        <div class="post-link-container">
                            <a href="./${post.path}"><img src="" alt="arrow icon"></a>
                        </div>
                    </article>
                `).join("")} 
            </div>
        </section>

        <footer>
            <div class="footer-logo-container">
                <img src="" alt="">
                <a href="https://github.com/alextorrer/haskell-ssg">Github Repository</a>
            </div>
        </footer>

    </body>
    </html>
`;

module.exports = homepage;

