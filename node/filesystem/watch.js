const fs = require('fs');

fs.watch('example_file.txt', () => console.log('File changed'))
