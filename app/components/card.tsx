import { Badge } from "@/app/ui/badge";
import { Card, CardContent, CardFooter } from "@/app/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    title: string;
    price: number;
    image: string;
    heightProp: number;
    widthProp: number;
    isNew?: boolean;
}

export default function ProductCard({
    title,
    price,
    image,
    widthProp,
    heightProp,
    isNew = false,
}: ProductCardProps) {
    return (
        <Card className="w-full max-w-[300px] overflow-hidden">
            <div className="relative aspect-square">
                {isNew && (
                    <Badge className="absolute left-3 top-3 bg-emerald-500 hover:bg-emerald-500/90">
                        New
                    </Badge>
                )}
                <Image src={image} width={widthProp} height={heightProp} alt={title} className="h-full w-full object-cover" />
            </div>
            <CardContent className="p-4 pt-5">
                <h3 className="text-base font-medium text-gray-900">{title}</h3>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4 pt-0">
                <p className="text-base font-medium text-black">${price}</p>
                <button
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500 text-white transition-colors hover:bg-teal-600"
                    aria-label="Add to cart"
                >
                    <ShoppingCart className="h-5 w-5" />
                </button>
            </CardFooter>
        </Card>
    );
}
