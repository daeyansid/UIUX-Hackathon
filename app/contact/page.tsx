"use client"

import { Button } from "@/app/ui/button"
import { Input } from "@/app/ui/input"
import { Clock, MapPin, Phone, Shield, Star, HeadphonesIcon } from 'lucide-react'
import MainLayout from "../mainLayout"

export default function ContactForm() {
    return (
        <MainLayout>
            <div className="max-w-6xl mx-auto px-4 py-12 text-black">
                <h1 className="text-2xl font-semibold text-center mb-8">Get In Touch With Us</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-6 h-6 mt-1 text-black" />
                            <div>
                                <h3 className="font-semibold mb-1">Address</h3>
                                <p className="text-black">123 Business Street, New</p>
                                <p className="text-black">York, NY 12345</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Phone className="w-6 h-6 mt-1 text-black" />
                            <div>
                                <h3 className="font-semibold mb-1">Phone</h3>
                                <p className="text-black">Mobile: +1 234 567 8910</p>
                                <p className="text-black">Hotline: +1 234 567 8910</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 mt-1 text-black" />
                            <div>
                                <h3 className="font-semibold mb-1">Working Time</h3>
                                <p className="text-black">Monday-Friday: 9AM - 6PM</p>
                                <p className="text-black">Saturday: Sunday: 9AM - 1PM</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <Input
                                placeholder="Your name"
                                className="w-full p-10 bg-transparent border border-gray-300"
                            />
                        </div>
                        <div>
                            <Input
                                type="email"
                                placeholder="Email address"
                                className="w-full p-10 bg-transparent border border-gray-300"
                            />
                        </div>
                        <div>
                            <Input
                                placeholder="Subject"
                                className="w-full p-10 bg-transparent border border-gray-300"
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Message"
                                className="w-full p-10 bg-transparent border border-gray-300 min-h-[120px]"
                            >
                            </textarea>
                        </div>
                        <Button
                            type="submit"
                            className="w-48 bg-buttonGreen hover:bg-teal-600 text-white"
                        >
                            Submit
                        </Button>
                    </form>
                </div>

                {/* Features Section */}
                <div className="grid md:grid-cols-3 gap-8 mt-16 bg-gray-50 p-8 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-full">
                            <Star className="w-6 h-6 text-teal-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold">High Quality</h3>
                            <p className="text-sm text-black">Premium materials</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-full">
                            <Shield className="w-6 h-6 text-teal-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Warranty Protection</h3>
                            <p className="text-sm text-black">Over 2 years</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-white rounded-full">
                            <HeadphonesIcon className="w-6 h-6 text-teal-500" />
                        </div>
                        <div>
                            <h3 className="font-semibold">24/7 Support</h3>
                            <p className="text-sm text-black">Dedicated support</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>

    )
}