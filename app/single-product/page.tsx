import { Button } from "@/app/ui/button"
import MainLayout from "../mainLayout"
import Image from "next/image"

interface Product {
    id: string
    name: string
    price: number
    image: string
}

const featuredProducts: Product[] = [
    {
        id: "1",
        name: "Library Stool Chair",
        price: 299,
        image: "/image3.png",
    },
    {
        id: "2",
        name: "Library Stool Chair",
        price: 399,
        image: "/image3.png",
    },
    {
        id: "3",
        name: "Library Stool Chair",
        price: 359,
        image: "/image3.png",
    },
    {
        id: "4",
        name: "Library Stool Chair",
        price: 459,
        image: "/image3.png",
    },
    {
        id: "5",
        name: "Library Stool Chair",
        price: 499,
        image: "/image3.png",
    },
]

export default function ProductDetails() {
    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Product Image */}
                    <div className="bg-pink-50 rounded-lg overflow-hidden">
                        <Image
                            src="/image4.png"
                            alt="Library Stool Chair"
                            className="w-full h-full object-cover"
                            width={600}
                            height={600}
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4 mt-8">
                        <h1 className="text-4xl font-bold text-gray-900">Library Stool Chair</h1>
                        <div className="relative top-6 inline-block bg-buttonGreen text-white px-3 py-1 rounded-full text-sm">
                            $20.00 USD
                        </div>
                        <hr className="relative top-8"/>
                        <p className="relative top-8 text-xl text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                        <Button
                            className="relative top-10 bg-buttonGreen hover:bg-teal-600 text-white w-full md:w-auto"
                        >
                            Add To Cart
                        </Button>
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold text-gray-900">FEATURED PRODUCTS</h2>
                        <a href="#" className="text-gray-600 border-b border-black hover:text-gray-900">
                            View all
                        </a>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {featuredProducts.map((product) => (
                            <div key={product.id} className="space-y-2">
                                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                                <p className="text-sm text-gray-600">${product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}