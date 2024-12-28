import React from 'react'
import MainLayout from "../mainLayout";
import ProductCard from "../components/card";
import NewsletterInstagram from '../components/newsLetter';

export default function ProductPage() {
    return (
        <MainLayout>
            {/* Product Grid */}
            <>
            <h1 className="font-bold text-2xl sm:text-4xl text-black ml-5 mt-20">All Products</h1>
            <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image2.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image6.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image3.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image4.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image6.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image5.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image4.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image2.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image3.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image2.png"
                    isNew={false}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image3.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
                <ProductCard
                    title="Library Stool Chair"
                    price={20}
                    image="/Image4.png"
                    isNew={true}
                    heightProp={300}
                    widthProp={300}
                />
            </div>
            
            {/* NewsLetter */}
            <NewsletterInstagram />
            </>
        </MainLayout>
    );
}