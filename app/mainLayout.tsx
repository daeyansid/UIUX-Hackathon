import { ReactNode } from "react";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="bg-white">
            <TopBar />
            <div className="mx-4 sm:mx-8 lg:mx-16">
            {children}
            </div>
            <Footer />
        </div>
    );
}
