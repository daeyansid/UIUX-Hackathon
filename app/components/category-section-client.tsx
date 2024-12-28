'use client';

import { Category } from '../pages/home';
import Link from 'next/link';
import Image from 'next/image';

interface CategorySectionProps {
    title: string;
    categories: Category[];
}

export default function CategorySectionClient({ title, categories }: CategorySectionProps) {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h1 className="font-bold text-2xl sm:text-4xl text-black mb-8">{title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.map((category, index) => (
                        <Link href={category.href} key={index}>
                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    width={600}
                                    height={483}
                                    className="object-cover w-full h-96"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                                    <h2 className="text-xl font-semibold">{category.title}</h2>
                                    <p>{category.products} Products</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
