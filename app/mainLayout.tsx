import { ReactNode } from "react";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <TopBar />
            {children}
            <Footer />
        </>
    );
}
