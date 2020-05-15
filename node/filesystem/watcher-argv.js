const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
    throw new Error('A file to watch must be specified');
}

fs.watch(filename, () => console.log(`File ${filename} changed!`));
console.log(`Watching ${filename}...`);
