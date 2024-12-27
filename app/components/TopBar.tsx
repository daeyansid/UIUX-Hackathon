'use client';
import { useState } from 'react';
import Image from 'next/image';

const TopBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className='shadow-md font-sans tracking-wide relative z-50 w-full'>
                <section className='flex justify-between py-2 bg-topBarColor text-white text-right px-10'>
                    <p className='ml-24 flex justify-between text-sm'>
                        <Image src="/tick.svg" width={20} height={20} alt="tick" />
                        <p className="mx-3">Free shipping on all orders over $50</p>
                    </p>

                    <div className='flex justify-between text-sm items-center gap-4 mr-24'>

                        <p className='flex justify-between text-sm items-center'>
                            <p className="mx-1">Eng</p>
                            <Image src="/down-arrow.svg" width={10} height={10} alt="tick" />
                        </p>
                        <p className='text-sm'>
                            Faqs
                        </p>
                        <p className='flex justify-between text-sm items-center'>
                            <Image src="/alert-circle.svg" width={20} height={20} alt="alert" />
                            <p className="mx-1">Need Help</p>
                        </p>
                    </div>
                </section>

                <div className='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-bgFillColor min-h-[70px]'>

                    <div className='ml-14 flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-bgFillColor min-h-[70px]'>
                        <Image src="/logo.svg" width={45} height={45} alt="logo" />
                        <p className='text-textColor text-2xl font-bold font-sans'>Comforty</p>
                    </div>

                    <button className="inline-flex items-center justify-center rounded-md border border-white bg-white  w-28 h-10 text-center text-base px-3 py-2 mr-40 font-medium text-textColor shadow-1 hover:bg-gray-4 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-textColor dark:bg-gray-2 dark:shadow-box-dark dark:hover:bg-dark-3">
                        <span className="mr-[10px]">
                            <Image
                                src="/cart.svg"
                                alt="cart"
                                width={20}
                                height={20} />
                        </span>
                        Cart
                        <span className="mr-[10px]">
                            <Image
                                src="/cart-num.svg"
                                className='ml-2'
                                alt="cart"
                                width={20}
                                height={20} />
                        </span>
                    </button>

                </div>
            </header>

        </>


    );
};

export default TopBar;