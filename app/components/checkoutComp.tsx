"use client"

import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { Button } from "@/app/ui/button"
import { Card, CardContent } from "@/app/ui/card"

interface CartItem {
    id: string
    name: string
    color: string
    size: string
    quantity: number
    price: number
    image: string
}

export default function Checkout() {
    const cartItems: CartItem[] = [
        {
            id: "1",
            name: "Library Stool Chair",
            color: "Ashen Slate/Cobalt Bliss",
            size: "L",
            quantity: 1,
            price: 99,
            image: "/image2.png",
        },
        {
            id: "2",
            name: "Library Stool Chair",
            color: "Ashen Slate/Cobalt Bliss",
            size: "L",
            quantity: 1,
            price: 99,
            image: "/image3.png",
        },
    ]

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = "Free"
    const total = subtotal

    return (
        <div className="mx-auto max-w-7xl p-6 text-black mt-14">
            <div className="grid gap-8 lg:grid-cols-3">
                {/* Bag Section */}
                <div className="lg:col-span-2">
                    <h2 className="mb-6 text-2xl font-medium">Bag</h2>
                    <div className="space-y-6">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4">
                                <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-medium">{item.name}</h3>
                                        <p className="text-sm text-gray-600">{item.color}</p>
                                        <div className="flex gap-4 text-sm text-gray-600">
                                            <p>Size: {item.size}</p>
                                            <p>Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                                            <Heart className="h-4 w-4" />
                                        </button>
                                        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">MRP: ${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Summary Section */}
                <div className="lg:col-span-1">
                    <Card className="shadow-none border-none">
                        <CardContent className="p-6">
                            <h2 className="mb-6 text-2xl font-medium">Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Subtotal</p>
                                    <p className="font-medium">${subtotal.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Estimated Delivery & Handling</p>
                                    <p className="font-medium">{shipping}</p>
                                </div>
                                <hr />
                                <div className="flex justify-between">
                                    <p className="font-medium">Total</p>
                                    <p className="font-medium">${total.toFixed(2)}</p>
                                </div>
                                <hr />
                                <Button className="w-60 ml-10 py-7 bg-buttonGreen text-white rounded-full hover:bg-teal-600">
                                    Member Checkout
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

