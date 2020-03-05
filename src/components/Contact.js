import React from 'react';


const Contact = () => {
    const email = 'aghiulezian@gmail.com';
    return (
        <section id="contact">
            <h1 className='title'> Get in touch with me!</h1>
            <form  className='contactForm' action='' method="post">
                <div className='prompts'>

                    <div className='labels'>
                        <label htmlFor="contactName">Name <span className="required"></span></label>
                        <label htmlFor="contactEmail">Email <span className="required"></span></label>
                        <label htmlFor="contactMessage">Message <span className="required"></span></label>
                    </div>
                    <div className='inputs'>
                    <input type="text" className='inputs' defaultValue="" size="35" id="contactName" name="contactName" />
                    <input type="text" className='inputs' defaultValue="" size="35" id="contactEmail" name="contactEmail"/>
                    <textarea cols="50" rows="15" className='inputs'  id="contactMessage" name="contactMessage"></textarea>
                    </div>

                    

                </div>
                <div className="submit">
                    <button >Submit</button>

                </div>

                




            </form>



        </section>
    );

}


export default Contact;