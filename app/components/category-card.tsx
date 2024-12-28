import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/app/ui/card"



export interface Category {
    title: string
    products: number
    image: string
    href: string
}

export interface CategoryCardProps {
    category: Category
}

export interface Category {
    title: string
    products: number
    image: string
    href: string
}

export interface CategoryCardProps {
    category: Category
}
export function CategoryCard({ category }: CategoryCardProps) {
    return (
        <Link href={category.href}>
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
    )
}

