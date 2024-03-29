// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xjvaajap");
  if (state.succeeded) {
    return <form> <p>Thank you, I will get back to you soon!</p></form>;
  }
  return (
    
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email:
      </label>
      <input
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <div className='label'>
        <label>Message:</label>
      </div>
      
      <textarea className = "messageInput"
        id="message"
        name="message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;