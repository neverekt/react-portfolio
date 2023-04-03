const axios = require('axios');

const submissionHandler = (event, formData) => {
    event.preventDefault();
    axios.post('/api/contact', formData)
    .then(response => {
        console.log(response.data);
      // Show a success message to the user here
    })
    .catch(error => {
        console.log(error);
      // Show an error message to the user here
    });
};

export default submissionHandler;
