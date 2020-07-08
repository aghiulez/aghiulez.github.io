import React from 'react';



export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "show"
    };
  }

  render() {
    const { status } = this.state;
    console.log(status);
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xjvaajap"
        method="POST"
      >
      
        {status !== "SUCCESS" ? 
        <div>
          <div className='row'>
            <div className='label'>
              <label>Email:</label>
            </div>
            <div className='input'>
              <input type="email" name="email" />
            </div>
          </div>
          <div className='row'>
            <div className='label'>
              <label>Message:</label>
            </div>      
            <div className='input'>
              <textarea className="messageInput" type="text" />
            </div>    
          </div>
        </div>
        :<p>Sent.</p>

      }



        {status === "SUCCESS" ? <p>Thank you, I will get back to you soon!</p> : <button>Submit</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
      
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}