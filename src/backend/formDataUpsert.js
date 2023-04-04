import { createClient } from '@supabase/supabase-js'
// require('dotenv').config();

const supabaseUrl = 'https://ljlsmmwbjmfbgslcmpra.supabase.co'
// const supabaseKey = ''
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const submissionHandler = (event, formData) => {
  event.preventDefault()

  supabase
    .from('form_submissions')
    .insert([
        { first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phoneNumber,
            message: formData.message }
        ])
    .then(response => {
      console.log(response)
      // Show a success message to the user here
    })
    .catch(error => {
      console.log(error)
      // Show an error message to the user here
    })
}

export default submissionHandler;


