const posthtml = (data) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${data.attributes.description}" />
        <title>${data.attributes.title}</title>
    </head>
    <body>
        <header>
            <a href="/">Go back home</a>
        </header>
        <div class="content">
            <h1>${data.attributes.title}</h1>
            <hr />
            ${data.body}
        </div>
    </body>
    </html>
`;

module.exports = posthtml;