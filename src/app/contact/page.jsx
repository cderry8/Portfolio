"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/reusable/Navbar';
import '@fontsource/monomaniac-one';
import '@fontsource/inter';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { BsFillChatDotsFill } from 'react-icons/bs';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submissionSuccess, setSubmissionSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const serviceID = 'service_uqztmaj';
        const templateID = 'template_3cs4qrm';
        const userID = 'NynwdPUsUgbrIajXY';

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        try {
            await emailjs.send(serviceID, templateID, templateParams, userID);
            setSubmissionSuccess(true);
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmissionSuccess(false);
        }

        setIsSubmitting(false);
    };

    return (
        <div className="bg-gradient-to-r from-[#081b29] via-[#0a0a0a] to-[#0a0a0a] overflow-hidden">
            <Navbar />
            <section id="contact" className="min-h-screen flex pt-[140px] sm:mb-0 mb-10 mx-auto flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0">

                {/* Contact Form Section */}
                <motion.div
                    className="w-[90%] sm:w-[45%] mx-auto min-h-[70vh] bg-black/50 p-6 rounded-xl border-2 border-[rgb(0,191,255)] backdrop-blur-xl"
                    initial={{ opacity: 0, y: 50 }} // Initial state for form
                    animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
                    transition={{ duration: 0.5 }}
                >
                    {submissionSuccess !== null && (
                        <div className={`mt-4 mb-4 font-bold text-center text-lg ${submissionSuccess ? 'text-green-500' : 'text-red-500'}`}>
                            {submissionSuccess ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="mb-4">
                            <label htmlFor="name" className="text-white block font-inter text-base font-medium mb-2">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-black/30 text-white border-2 border-[rgb(0,191,255)] focus:outline-none focus:border-[rgb(0,191,255)] transition-all"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="text-white font-inter block text-base font-medium mb-2">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-black/30 text-white border-2 border-[rgb(0,191,255)] focus:outline-none focus:border-[rgb(0,191,255)] transition-all"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="text-white font-inter block text-base font-medium mb-2">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded-xl bg-black/30 text-white border-2 border-[rgb(0,191,255)] focus:outline-none focus:border-[rgb(0,191,255)] transition-all"
                                rows="4"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 font-inter bg-black/40 border-[rgb(0,191,255)] border text-[rgb(0,191,255)] rounded-md cursor-pointer font-semibold text-base transition-colors duration-300"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                </motion.div>

                {/* Contact Information Section */}
                <motion.div
                    className="w-[90%] sm:w-[45%] flex flex-col justify-center items-center mx-auto min-h-[70vh] bg-black/50 text-center p-6 rounded-xl border-2 border-[rgb(0,191,255)] backdrop-blur-xl text-white"
                    initial={{ opacity: 0, x: 50 }} // Initial state for contact info
                    animate={{ opacity: 1, x: 0 }} // Animate to full opacity and position
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-2xl sm:text-xl text-white font-monomaniac tracking-widest font-semibold">Contact Information</h2>
                    <p className="text-base font-inter text-gray-300 mt-4">Have some big idea or brand to develop and need help? Reach out!</p>
                    <ul className="mt-8 space-y-6 items-center text-center flex flex-col">
                        <li className="flex items-center font-inter hover:scale-105 transition-transform duration-300">
                            <BsFillChatDotsFill className="text-gray-300 w-5 h-5" />
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm ml-4">kg 317 st, Kigali, Rwanda</a>
                        </li>
                        <li className="flex items-center font-inter hover:scale-105 transition-transform duration-300">
                            <AiOutlineMail className="text-gray-300 w-5 h-5" />
                            <a href="mailto:info@example.com" className="text-gray-300 text-sm ml-4">derry@gmail.com</a>
                        </li>
                        <li className="flex font-inter items-center hover:scale-105 transition-transform duration-300">
                            <AiOutlinePhone className="text-gray-300 w-5 h-5" />
                            <a href="tel:+250123456789" className="text-gray-300 text-sm ml-4">+250 123 456 789</a>
                        </li>
                        <li className="flex font-inter items-center hover:scale-105 transition-transform duration-300">
                            <FaGithub className="text-gray-300 w-5 h-5" />
                            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm ml-4">GitHub</a>
                        </li>
                        <li className="flex font-inter items-center hover:scale-105 transition-transform duration-300">
                            <FaLinkedin className="text-gray-300 w-5 h-5" />
                            <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm ml-4">LinkedIn</a>
                        </li>
                        <li className="flex font-inter items-center hover:scale-105 transition-transform duration-300">
                            <FaTwitter className="text-gray-300 w-5 h-5" />
                            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-300 text-sm ml-4">Twitter</a>
                        </li>
                    </ul>
                </motion.div>
            </section>
        </div>
    );
}
