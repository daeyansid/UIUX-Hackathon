import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'
import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="w-full border-t bg-white text-black">
            <div className="max-w-7xl px-6 sm:px-6 lg:px-8 py-12 mx-5">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image src="/logo.svg" width={20} height={20} alt="logo" className="h-8 w-8 rounded-full bg-primary" />
                            <span className="text-xl font-semibold">Comforty</span>
                        </div>
                        <p className="text-sm text-muted-foreground  text-textColor">
                            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Youtube className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Category Section */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-textColor">Category</h3>
                        <ul className="space-y-2">
                            {['Sofa', 'Armchair', 'Wing Chair', 'Desk Chair', 'Wooden Chair', 'Park Bench'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-textColor">Support</h3>
                        <ul className="space-y-2">
                            {[
                                'Help & Support',
                                'Tearms & Conditions',
                                'Privacy Policy',
                                'Help'
                            ].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className='text-textColor'>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Newsletter</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4 max-w-sm items-center space-x-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-[155px] border border-gray-200 rounded-lg py-2 px-2"
                                />
                                <button className='text-white font-bold border rounded-md py-3 px-4 bg-buttonGreen'>Subscribe</button>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
                    <p className="text-sm text-muted-foreground">
                        © 2024 - E-Commerce Template - Designed & Develop by M Daeyan Siddiqui Tuesday (2-5)
                    </p>
                    <div className="flex items-center space-x-4">
                        <Image src="/mastercard.svg" alt="Card" width={32} height={32} />
                        <Image src="/paypal.svg" alt="PayPal" width={32} height={32} />
                        <Image src="/amex.svg" alt="AEX" width={32} height={32} />
                        <Image src="/visa.svg" alt="Visa" width={32} height={32} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

