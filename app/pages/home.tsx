import React from 'react';
import Image from 'next/image';
import LogoBar from '../components/LogoBar';

const HomePage: React.FC = () => {
    return (
        <>
        <section className="sm:mx-5 text-gray-600 body-font bg-bgFillColor border rounded-bl-3xl pl-10 sm:mb-40">
            <div className="container mx-auto flex px-4 py-12 sm:px-5 sm:py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left sm:pl-10 mb-8 md:mb-0 items-center text-center">
                    <label className="leading-7 text-sm text-gray-600">Welcome to chairy</label>
                    <h1 className="title-font text-2xl sm:text-3xl lg:text-4xl mb-4 font-bold text-gray-900">Best Furniture Collection for your interior.</h1>
                    <div>
                        <button className="inline-flex items-center gap-2 text-white bg-teal-500 border-0 py-2 px-4 sm:px-6 focus:outline-none hover:bg-buttonGreen rounded-md text-sm sm:text-base font-medium">
                            Shop Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                                <path d="M5 12h14" />
                                <path d="m12 5 7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="pl-0 md:pl-12 lg:max-w-lg lg:w-full md:w-1/2 w-full">
                    <Image 
                        className="object-cover object-center rounded mx-auto w-full max-w-[300px]" 
                        alt="hero" 
                        src="/hero-img.png" 
                        width={300} 
                        height={150} 
                        priority
                    />
                </div>
            </div>
        </section>
        <LogoBar />
        </>
    );
};

export default HomePage;
