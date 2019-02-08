const fetch = require('node-fetch');
const { createWriteStream } = require('fs');
const { join } = require('path');
/**
 * Creates an image file that contains a random cat, from the [Random Cat Site](https://aws.random.cat/meow)
 * @param {WritableStream} filePath The path that you want the cat in
 * @returns {Cat}
 */
const streamCat = (filePath) => {
    if (typeof filePath !== 'string') throw new TypeError(`File path must be a string, got ${typeof filePath}`);
    const fullPath = join(__dirname, '..', '..', filePath);
    fetch('https://aws.random.cat/meow')
        .then(res => res.json())
        .then(json => fetch(json.file))
        .then(cat => {
            const dest = createWriteStream(fullPath);
            cat.body.pipe(dest);
        });
};
/**
 * @typedef {string} Cat
 */
module.exports = streamCat;