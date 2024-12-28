"use client"

import { useState } from "react"
import Image from "next/image"

export default function NewsletterInstagram() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Subscribing email:", email)
        setEmail("")
    }

    const instagramPosts = [
        {
            id: 1,
            image: "/image1.png",
            alt: "Wooden bar stool",
        },
        {
            id: 2,
            image: "/image2.png",
            alt: "Gray swivel chair",
        },
        {
            id: 3,
            image: "/image3.png",
            alt: "Pink accent chair",
        },
        {
            id: 4,
            image: "/image4.png",
            alt: "White wooden chair",
        },
        {
            id: 5,
            image: "/image5.png",
            alt: "Orange modern chair",
        },
        {
            id: 6,
            image: "/image6.png",
            alt: "Green office chair",
        },
    ]

    return (
        <section className="mx-auto max-w-6xl px-4 py-16">
            {/* Newsletter Subscription */}
            <div className="mb-16 text-center">
                <h2 className="mb-8 text-2xl font-semibold text-black">Or Subscribe To The Newsletter</h2>
                <form
                    onSubmit={handleSubmit}
                    className="mx-auto flex max-w-md items-center"
                >
                    <input
                        type="email"
                        placeholder="Email Address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 bg-transparent border-b border-black px-0 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-0"
                    />
                    <button
                        type="submit"
                        className="bg-transparent ml-9 border-b border-black px-2 py-2 text-black text-md font-thin hover:text-black focus:outline-none"
                    >
                        SUBMIT
                    </button>
                </form>


            </div>

            {/* Instagram Section */}
            <div className="text-center">
                <h2 className="mb-8 text-2xl font-semibold text-black">Follow Products And Discounts On Instagram</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
                    {instagramPosts.map((post) => (
                        <a
                            key={post.id}
                            href="#"
                            className="group relative aspect-square overflow-hidden bg-gray-100"
                        >
                            <Image
                                src={post.image}
                                alt={post.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

