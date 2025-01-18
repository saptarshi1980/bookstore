import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Welcome to <span className="font-bold text-pink-500">Book Bazar</span>, your number one source for all things books. 
                    We're dedicated to giving you the very best of literary experiences, with a focus on quality, variety, and affordability.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Founded in 2023, Book Bazar has come a long way from its beginnings. 
                    Our passion for making books accessible to everyone drove us to create a platform where readers can find and share their favorite stories.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    We hope you enjoy our platform as much as we enjoy offering it to you. 
                    If you have any questions or comments, please don't hesitate to contact us.
                </p>
            </div>
        </div>
    );
};

export default About;
