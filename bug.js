const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might fail
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(error => {
    // Error handling is missing here! 
    console.error(error); // This will log the error, but the client receives nothing
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that sometimes fails
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve({ message: 'Success!' });
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
}