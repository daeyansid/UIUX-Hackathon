"use client";
import React, { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="text-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Questions Looks Here</h2>
            <p className="text-center text-gray-600 mb-12">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            </p>
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 bg-bgGrayShade2">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 relative"
                        style={{ minHeight: '80px' }}
                    >
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleFAQ(index)}
                        >
                            <h3 className="text-lg font-medium text-gray-800">{item.question}</h3>
                            <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
                        </div>
                        {openIndex === index && (
                            <div className="absolute top-full left-0 right-0 border border-gray-200 rounded-b-lg shadow-sm p-4 z-10 mt-[-1px] bg-bgGrayShade2">
                                <p className="text-gray-600">{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;