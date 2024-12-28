import Image from "next/image"
import { Button } from "@/app/ui/button"
import MainLayout from "@/app/mainLayout"


const features = [
    {
        icon: '/delivery.svg',
        title: "Next day as standard",
        description: "Order before 3pm and get your order the next day as standard",
    },
    {
        icon: '/checkmark-outline.svg',
        title: "Made by true artisans",
        description: "Handmade crafted goods made with real passion and craftmanship",
    },
    {
        icon: '/purchase.svg',
        title: "Unbeatable prices",
        description: "For our materials and quality you won't find better prices anywhere",
    },
    {
        icon: '/sprout.svg',
        title: "Recycled Packaging",
        description: "We use 100% recycled to ensure our footprint is more manageable",
    },
]

const products = [
    {
        name: "The Plush Velvet Sofa",
        price: "899.00",
        image: "/image2.png",
    },
    {
        name: "The Comfy Chair",
        price: "299.00",
        image: "/image3.png",
    },
    {
        name: "The Quality Stool",
        price: "99.00",
        image: "/image4.png",
    },
]



export default function Home() {
    return (
        <MainLayout>
            <main className="container mx-auto px-4 text-black">
                {/* Hero Section */}
                <section className="grid md:grid-cols-2 gap-8 items-center py-12">
                    <div className="p-8 rounded-lg text-white h-[400px] bg-bgGreen">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 pt-10">About Us - Comforty</h1>
                        <p className="mb-6 text-teal-50">
                            At Comforty, we believe that the way you furnish your space reflects who you are. We're dedicated to providing timely furniture solutions, and helping you create a space that seamlessly blends style and functionality.
                        </p>
                        <Button variant="secondary" size="lg" className="rounded-none bg-buttonGreen mt-14">
                            View Collection
                        </Button>
                    </div>
                    <div className="relative h-[400px]">
                        <Image
                            src="/image2.png"
                            alt="Minimalist white chair"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16">
                    <h2 className="text-2xl font-semibold text-center mb-12">
                        What Makes Our Brand Different
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-bgGreen">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-bgGrayShade rounded-none shadow-none"
                            >
                                <div className="flex justify-center items-center mb-4">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        width={20}
                                        height={20}
                                        className="mr-36"
                                    />
                                </div>
                                <h3 className="font-medium mb-2 text-lg">{feature.title}</h3>
                                <p className="text-muted-foreground text-sm px-4 text-start">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Products Section */}
                <section className="py-16">
                    <h2 className="text-2xl font-semibold mb-12">Our Popular Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {products.map((product, index) => (
                            <div key={index} className={`${index === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}>
                                <div className="relative h-[300px] mb-4">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover rounded-lg transition-transform hover:scale-105"
                                    />
                                </div>
                                <h3 className="font-medium">{product.name}</h3>
                                <p className="text-muted-foreground">${product.price}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </MainLayout>

    )
}
