import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from '../../public/banner1.jpeg';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                    {/* Contact Form Section */}
                    <div className="w-1/2 pr-6">
                        <h1 className="text-3xl font-bold text-center mb-6 text-blue-500">Contact Us</h1>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-lg"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-lg"
                            />
                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border rounded-lg"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Image Section */}
                    <div className="w-1/2">
                        <img src={banner} alt="Book Store Banner" className="object-contain w-full h-96" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
