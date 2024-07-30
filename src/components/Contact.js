import React from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = React.useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs
        .sendForm("service_ew2r5bp","template_lufso7o", form.current, {
            publicKey:"pLYgGXzq6XqZdBONu",
        })
        .then(
        () => {
            console.log('SUCCESS!');
            toast.success('Message has been Send Successfullly', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });

        },
        (error) => {
            console.log('FAILED...', error.text);
        },
        );
    };
  
    return (
        <div className='relative flex flex-col py-10 mx:8 lg:mx-20  text-white'>
            <ToastContainer />
            <h1 className='headings'>Contact Us</h1>
            <div className=''>
            <form className='w-9/12 lg:w-3/6 mx-auto' ref={form} onSubmit={sendEmail}>
            <div className='my-4'>
                <label htmlFor="">Name</label>
                <input
                className='h-12 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 '
                placeholder='Name'
                name="user_name"
                required
                />
            </div>
            <div className='my-4'>
                <label htmlFor="">Email</label>
                <input
                className='h-12 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 '
                placeholder='Email'
                type='email'
                name="user_email"
                required
                />
            </div>
            <div className=''>
                <label htmlFor="">Message</label>
                <textarea
                className='h-24 w-full rounded-md border border-gray-800 bg-gray-950 px-3 py-2 '
                placeholder='Message'
                name='message'
                required
                />
            </div>
            <input className="my-4 font-semibold h-12 rounded-md bg-gray-400 shadow-lg shadow-gray-400/50 py-2 px-6 hover-effect hover:ring-2" type="submit" value="Submit" />
            </form>
            </div>
        </div>

    )
}

export default Contact