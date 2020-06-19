//Funcion que recibe la información de un post y devuelve un HTML

const posthtml = (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${data.attributes.description}" />
        <link href="../assets/main.css" rel="stylesheet" type="text/css"/>
        <title>${data.attributes.title}</title>
    </head>
    <body>
        <header>
            <a href="/"><img class="arrow-icon" src="../assets/img/arrow-back.png" alt="arrow icon"></a>
        </header>
        <div class="content">
            <h1>${data.attributes.title}</h1>
            <hr />
            ${data.body}
        </div>

        <footer>
            <div>
                <p>Iconos por <a href="https://www.flaticon.es/autores/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.es/" title="Flaticon"> www.flaticon.es</a></p>
            </div>
            <div>
                <a href="https://github.com/alextorrer/haskell-ssg"><img src="../assets/img/github.png" alt=""></a>
            </div>
        </footer>
    </body>

    </html>
`;

module.exports = posthtml;