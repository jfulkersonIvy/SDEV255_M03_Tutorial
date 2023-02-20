const fs = require('fs');

// Reading files
/* fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    // Convert data to a string during output
    console.log(data.toString());
});

console.log('last line'); */

// Writing files
/* fs.writeFile('./docs/blog1.txt', 'Hello, world', () => {
    console.log('file was written');
});

// If a file does not exist when executed, the file will be created
fs.writeFile('./docs/blog2.txt', 'Hello, again', () => {
    console.log('file was written');
}); */

// Directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('folder deleted');       
    })
};

// Deleting files
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('file deleted');
    })
};