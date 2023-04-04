import axios from 'axios';

const submissionHandler = (event, formData) => {
    axios.post('http://localhost:5000/api/contact', formData)
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

