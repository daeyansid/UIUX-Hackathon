import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/app/ui/card"

interface Category {
    title: string
    products: number
    image: string
    href: string
}

const categories: Category[] = [
    {
        title: "Wing Chair",
        products: 3584,
        image: "/placeholder.svg?height=400&width=600",
        href: "/categories/wing-chair"
    },
    {
        title: "Wooden Chair",
        products: 157,
        image: "/placeholder.svg?height=400&width=600",
        href: "/categories/wooden-chair"
    },
    {
        title: "Desk Chair",
        products: 154,
        image: "/placeholder.svg?height=400&width=600",
        href: "/categories/desk-chair"
    }
]

export default function CategorySection() {
    return (
        <section className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">Top Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                    <Link key={category.title} href={category.href}>
                        <Card className="overflow-hidden group transition-transform hover:scale-[1.02]">
                            <CardContent className="p-0 relative aspect-[4/3]">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/50">
                                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                                        <h3 className="text-lg font-medium">{category.title}</h3>
                                        <p className="text-sm text-gray-200">{category.products} Products</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </section>
    )
}

