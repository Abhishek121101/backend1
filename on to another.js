const fs = require('fs');

fs.readFile('\\Users\\aspire 5.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
const fs = require('fs');

try {
  console.log(data);
} catch (err) {
  console.error(err);
}
const fs = require('fs/promises');

async function example() {
  try {
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

example();
const fs = require('fs');

// Read file asynchronously using fs.readFile
fs.readFile('C:/Users/aspire 5.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// Read file synchronously using fs.readFileSync
try {
  const data = fs.readFileSync('C:/Users/aspire 5.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}

// Using async/await and fs.promises.readFile
const fsPromises = require('fs/promises');

async function example() {
  try {
    const data = await fsPromises.readFile('C:/Users/aspire 5.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

example();
