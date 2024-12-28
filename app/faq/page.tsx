import React from 'react'
import MainLayout from "../mainLayout";
import FAQ from '../components/faq';

export default function ProductPage() {

    const faqItems = [
        { question: "What types of chairs do you offer?", answer: "We offer a variety of chairs including ergonomic, executive, and gaming chairs." },
        { question: "How can we get in touch with you?", answer: "You can contact us via email at support@example.com or call us at (123) 456-7890." },
        { question: "Do your chairs come with a warranty?", answer: "Yes, all our chairs come with a 1-year warranty covering manufacturing defects." },
        { question: "What will be delivered? And When?", answer: "Your order will include the selected chair and instructions. Delivery takes 5-7 business days." },
        { question: "Can I try a chair before purchasing?", answer: "Yes, you can visit our showroom to try out our chairs before buying." },
        { question: "How do I clean and maintain my Comforty chair?", answer: "To clean your chair, use a damp cloth and mild soap. Avoid harsh chemicals." }
    ];

    return (
        <MainLayout>
            <>
                <FAQ items={faqItems} />
            </>
        </MainLayout>
    );
}