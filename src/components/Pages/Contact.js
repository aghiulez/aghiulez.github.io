// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  // const [state, handleSubmit] = useForm("xjvaajap");
  // if (state.succeeded) {
  //   return <form> <p>Thank you, I will get back to you soon!</p></form>;
  // }
  //https://tailwindcomponents.com/component/tailwind-css-modal
  //https://tailwindcomponents.com/component/tailwind-contact-form
  return (

    // <form onSubmit={handleSubmit}>
    //   <label htmlFor="email">
    //     Email:
    //   </label>
    //   <input class="form-input px-3 py-2 rounded-md"
    //     id="email"
    //     type="email"
    //     name="email"
    //   />
    //   <ValidationError
    //     prefix="Email"
    //     field="email"
    //     errors={state.errors}
    //   />
    //   <div className="flex flex-col col-span-2">
    //     <div className='label'>
    //       <label>Message:</label>
    //     </div>

    //     <textarea className="messageInput" class="form-input px-3 py-2 rounded-md"
    //       id="message"
    //       name="message"
    //     />
    //   </div>
    //   <ValidationError
    //     prefix="Message"
    //     field="message"
    //     errors={state.errors}
    //   />
    //   <button type="submit" disabled={state.submitting}>
    //     Submit
    //   </button>

    // </form>

    <div class="flex items-center justify-center p-12">
      <div class="mx-auto w-full max-w-[550px]">
        <form    
          action="https://formspree.io/f/xjvaajap"
          method="POST"
        >
          <div class="mb-5">
            <label
              for="email"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div class="mb-5">
            <label
              for="message"
              class="mb-3 block text-base font-medium text-[#07074D]"
            >
              Message
            </label>
            <textarea
              rows="4"
              name="message"
              id="message"
              placeholder="Type your message"
              class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div>
            <button
              class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;