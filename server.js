const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/contact', (req, res) => {
  const formData = req.body;
  // Handle the form submission data here
  console.log(formData);
  
  // Save form data to file with timestamp
  const timestamp = new Date().toISOString();
  const filename = `form-${timestamp}.json`;
  fs.writeFile(`./${filename}`, JSON.stringify(formData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving form data');
    } else {
      console.log(`Form data saved to ${filename}`);
      res.sendStatus(200);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
