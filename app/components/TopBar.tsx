'use client';
import Image from 'next/image';
import { useState } from 'react';

const TopBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='shadow-md font-sans tracking-wide relative z-50 w-full'>
            <section className='bg-topBarColor text-white'>
                <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 max-w-7xl'>
                    <div className='flex flex-col sm:flex-row sm:justify-between py-2'>
                        {/* Shipping Info */}
                        <p className='flex items-center justify-center sm:justify-start text-sm mb-2 sm:mb-0'>
                            <Image src="/tick.svg" width={20} height={20} alt="tick" />
                            <span className="mx-3">Free shipping on all orders over $50</span>
                        </p>

                        {/* Right Section */}
                        <div className='flex justify-center sm:justify-end items-center gap-4 text-sm'>
                            <div className='flex items-center'>
                                <span className="mx-1">Eng</span>
                                <Image src="/down-arrow.svg" width={10} height={10} alt="tick" />
                            </div>
                            <span>Faqs</span>
                            <div className='flex items-center'>
                                <Image src="/alert-circle.svg" width={20} height={20} alt="alert" />
                                <span className="mx-1">Need Help</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Navigation Bar */}
            <div className='bg-bgFillColor'>
                <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 max-w-7xl'>
                    <div className='py-3 flex flex-col sm:flex-row items-center justify-between gap-4'>
                        {/* Logo Section */}
                        <div className='flex items-center gap-2'>
                            <Image src="/logo.svg" width={45} height={45} alt="logo" />
                            <p className='text-topBarColor text-xl sm:text-2xl font-bold'>Comforty</p>
                        </div>

                        {/* Cart Button */}
                        <button className="inline-flex items-center justify-center rounded-md border border-white bg-white w-full sm:w-28 h-10 px-3 py-2 font-medium text-textColor shadow-1 hover:bg-gray-100 transition-colors">
                            <span className="mr-2">
                                <Image
                                    src="/cart.svg"
                                    alt="cart"
                                    width={20}
                                    height={20}
                                />
                            </span>
                            Cart
                            <span className="ml-2">
                                <Image
                                    src="/cart-num.svg"
                                    alt="cart"
                                    width={20}
                                    height={20}
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu Bar */}
            <div className='bg-white border-t border-gray-300 shadow-sm'>
                <div className='container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 max-w-7xl'>
                    <div className={`${isMenuOpen ? 'block' : 'max-lg:hidden'} h-12 lg:!block`}>
                        {isMenuOpen && (
                            <button onClick={handleToggleMenu} className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" />
                                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" />
                                </svg>
                            </button>
                        )}

                        <ul className='h-full lg:flex lg:items-center lg:gap-x-8 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
                            <li className='mb-6 hidden max-lg:block'>
                                <a href="#">
                                    <Image 
                                        src="/logo.svg" 
                                        alt="logo" 
                                        width={100}
                                        height={10}
                                    />
                                </a>
                            </li>
                            {['Home', 'Shop', 'Product', 'Pages', 'About'].map((item, index) => (
                                <li key={index} className='max-lg:border-b max-lg:py-3'>
                                    <a href='#' className={`hover:text-[#007bff] ${
                                        item === 'Home' ? 'text-[#007bff]' : 'text-gray-600'
                                    } block text-sm font-medium transition-colors`}>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='lg:hidden flex justify-start py-2'>
                        <button onClick={handleToggleMenu} className='lg:hidden'>
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default TopBar;