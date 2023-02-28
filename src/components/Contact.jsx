import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const form = useRef();
    const [displayMessage, setDisplayMessage] = useState("");
    const [error, setError] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6nh3e1b', 'template_ojpopop', form.current, '-0hL-IrbUvZEmn6I_')
          .then((result) => {
              console.log(result.text);
               e.target.reset()
            setDisplayMessage('Your message was sent successfully!');
          }, (error) => {
              console.log(error.text);
            setError(true)
            setDisplayMessage('Your message was not sent!');
          });
      };
  return (

    <div id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b53]'>Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name='user_name' required/>
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name='user_email' required />
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'required/>
                <input type="submit" value="Send Message" className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'  />
            </div>
        </form>
        <div className={error?"bg-red-500":"bg-green-500"}>
        {displayMessage}
        </div>
    </div>
  )
}
