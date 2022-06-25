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
      <input class="form-input px-3 py-2 rounded-md"
        id="email"
        type="email"
        name="email"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <div className="flex flex-col col-span-2">
        <div className='label'>
          <label>Message:</label>
        </div>

        <textarea className="messageInput" class="form-input px-3 py-2 rounded-md"
          id="message"
          name="message"
        />
      </div>
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