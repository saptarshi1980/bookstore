import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import banner from '../../public/banner1.jpeg';

const About = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
                    {/* About Text Section */}
                    <div className="w-1/2 pr-6">
                        <h1 className="text-4xl font-bold text-center mb-4 text-blue-500">About Us</h1>
                        {/* Added padding to ensure the spacing is balanced */}
                        <div className="text-lg text-justify leading-relaxed text-gray-700 space-y-6">
                            <p>
                                Welcome to <span className="font-bold text-pink-500">Book Bazar</span>, your number one source for all things books. 
                                We're dedicated to giving you the very best of literary experiences, with a focus on quality, variety, and affordability.
                            </p>
                            <p>
                                Founded in 2023, Book Bazar has come a long way from its beginnings. 
                                Our passion for making books accessible to everyone drove us to create a platform where readers can find and share their favorite stories.
                            </p>
                            <p>
                                We hope you enjoy our platform as much as we enjoy offering it to you. 
                                If you have any questions or comments, please don't hesitate to contact us.
                            </p>
                        </div>
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

export default About;
