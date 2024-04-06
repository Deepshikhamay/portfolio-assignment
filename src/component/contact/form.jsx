import React from 'react';

const ContactForm = () => {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const handleChange = (e:any) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e:any) => {
    //     e.preventDefault();
    //     try {
    //         await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID');
    //         alert('Message Sent Successfully!');
    //         setFormData({ name: '', email: '', message: '' });
    //     } catch (error) {
    //         console.error('Error sending message:', error);
    //         alert('Failed to send message. Please try again later.');
    //     }
    // };

    return (
        <div >
            <form className="sm:mt-0 mt-8" >
                <div className='flex flex-col space-y-6'>
                    <input type="text" name="name" placeholder="Your Full Name" required className="px-6 py-6 border-2 border-[#FFF]"
                    />
                    <input type="email" name="email" placeholder="Your Email" required className="px-6 py-6 border-2 border-[#FFF]"
                    />
                    <textarea name="message" placeholder="Your Message.." required className="px-6 py-10 border-2 border-[#FFF]"
                    ></textarea>
                </div>

                <div className="mt-10 flex justify-center">
                    <button type='submit' className='sm:px-6 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'black' }}>Send Message</button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
