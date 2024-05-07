import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ccss from '../Contact/Contact.module.css'

const ContactForm = () => {
 
  
 
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  

  const [disabled, setDisabled] = useState(false);
const [alertInfo, setAlertInfo] = useState({
  display: false,
  message: '',
  type: '',
});

// Shows alert message for form submission feedback
const toggleAlert = (message, type) => {
  setAlertInfo({ display: true, message, type });

  // Hide alert after 5 seconds
  setTimeout(() => {
    setAlertInfo({ display: false, message: '', type: '' });
  }, 5000);
};

// Function called on submit that uses emailjs to send email of valid contact form
const onSubmit = async (data) => {
  // Destrcture data object
  const { name, email, subject, message } = data;
  try {
    // Disable form while processing submission
    setDisabled(true);

    // Define template params
    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    // Use emailjs to email contact form data
    await emailjs.send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_PUBLIC_KEY
    );

    // Display success alert
    toggleAlert('Form submission was successful!', 'success');
  } catch (e) {
    console.error(e);
    // Display error alert
    toggleAlert('Uh oh. Something went wrong.', 'danger');
  } finally {
    // Re-enable form submission
    setDisabled(false);
    // Reset contact form fields after submission
    reset();
  }
};

{alertInfo.display && (
  <div
    className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
    role='alert'
  >
    {alertInfo.message}
    <button
      type='button'
      className='btn-close'
      data-bs-dismiss='alert'
      aria-label='Close'
      onClick={() =>
        setAlertInfo({ display: false, message: '', type: '' })
      } // Clear the alert when close button is clicked
    ></button>
  </div>
)}

  return (
    <div className='ContactForm' id={ccss.cont}>
      <div className='container'>
      
        <div className="" id={ccss.div1} style={{marginBottom:"40px", color:"white",display:"flex",justifyContent:"space-around",fontSize:"1rem"}}>

         <h6> Email Us : <a style={{color:"purple",textDecoration:"none"}} href='mailto:arbazmadani25@gmail.com'><strong className="purple">arbazmadani25@gmail.com</strong> </a></h6>
        <h6> Contact Us : <strong className="purple"> +91 6268 961 995 &nbsp;&nbsp;&nbsp;</strong> </h6>
        
        </div>
       

        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: { value: true, message: 'Please enter your name' },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span style={{color:"red"}} className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-6'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span  style={{color:"red"}} className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span style={{color:"red"}} className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span style={{color:"red"}} className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>
                <button className='' id={ccss.btn} type='submit'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
