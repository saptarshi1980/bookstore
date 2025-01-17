import React from 'react'
import banner from '../../public/banner1.jpeg';

function Banner() {
    return (
        <> <br></br>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex mt-5'>
                <div className='w-full'><br></br><br></br><br></br>
                    <div className='space-y-10'>
                        <h1 className='text-4xl font-bold'>
                            Welcome to Book Bazar ! Learn something {" "}
                            <span className='text-pink-500'>new everyday!!</span>
                        </h1>
                        <div>
                            <h6 className='text-2xl font-bold text-justify'>Welcome to Book Bazar, where stories come to life! Whether you're an avid reader or a casual book lover, we offer a wide selection of books across genres—fiction, non-fiction, mystery, romance, and more. Explore our collection of bestsellers, new releases, and timeless classics. We believe that every book opens a new door, ignites creativity, and nurtures the mind. Browse, shop, and enjoy seamless delivery right to your doorstep. Your literary adventure starts here</h6>
                            </div>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                    </div>
                    <button className ="btn mt-6 btn-secondary">Secondary</button>
                </div>

                <div className='w-full mt-20'>
                    <img src={banner} alt="Book Store Banner" className='object-contain w-full h-96' />
                </div>

            </div>
        </>
    )
}

export default Banner;