import React from 'react'
// import icons
import { MdOutlineEmail, MdLocalPhone } from 'react-icons/md'

const Contact  = () => {
    return (
      <div className='section' id = 'contact'>
        <div className='container mx-auto'>
          {/*my contact infos */}
          <div className='flex-1 text-center font-secondary lg:text-left mb-14'>
            <h2 className='h2 title'> Contact</h2>
            <p className="mb-8">Feel free to contact me.</p>
            <div className='flex flex-1 flex-wrap justify-between'>
              <div className='contact flex flex-1 flex-col flex-wrap lg:gap-5'>
                {/**email contact */}
                <article class="contact-card mb-4">
                  <MdOutlineEmail/>
                  <h4>Email</h4>
                  <p className='mb-8'> mguimfack@hotmail.com </p>
                  <a href="mailto:
                    mailto:mguimfack@hotmail.com" target="_top" >
                    Send a Message</a> 
                </article>
                {/**phone contact */}
                <article class="contact-card">
                  <MdLocalPhone/>
                  <h4>Phone</h4>
                  <p className='mb-8'> +1 (438) 835 4940  </p>
                  <a href="tel:+1 (438) 835- 4940" target="_top">
                    Call me</a>
                </article>
              </div>
              {/**contact form */}
              <div className='contact-form flex flex-1 flex-col flex-wrap lg:gap-5'>
                <form action="" method="POST"> 
                {/**Todo: be able to send the message */}
                  <div className='flex flex-1 flex-col flex-wrap lg:gap-5'>
                    <div className='flex flex-1 flex-col flex-wrap lg:gap-5 z-10 '>
                      <input type="text" name="name" placeholder=" Your full name" className='area' required/>
                      <input type="email" name="email" placeholder=" Your email" className='area'required/>
                      <textarea rows={6} cols={50} name="message"
                        placeholder=" Your Message" className='area' required/>
                        </div>
                      <button type="submit" className='btn btn:lg'>Send Message</button>
                      </div>
                    </form>
                    </div>
            </div>
            </div>
            </div>
      </div>
    )
}

export default Contact;