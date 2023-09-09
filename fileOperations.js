const fs = require('fs');

// Creates a new file and writes the variable message into to it
const contentToWrite = 'adding this message to the file ';
fs.writeFile('example.txt', contentToWrite, 'utf8', (err) => {
    if (err) {
        console.error('Error writing the file:', err);
        return;
    }
    console.log('File has been written.');
});

// Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:', data);
});
