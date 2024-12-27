import Image from "next/image";

export default function LogoBar() {
    const logos = [
        { src: "/Logo-4.svg", alt: "Zapier logo", width: 200, height: 80 },
        { src: "/Logo-7.svg", alt: "Pipedrive logo", width: 240, height: 80 },
        { src: "/Logo-2.svg", alt: "CIB Bank logo", width: 240, height: 80 },
        { src: "/Logo-4.svg", alt: "X logo", width: 80, height: 80 },
        { src: "/Logo-5.svg", alt: "Burnt Toast logo", width: 260, height: 80 },
        { src: "/Logo-6.svg", alt: "PandaDoc logo", width: 240, height: 80 },
        { src: "/Logo-7.svg", alt: "Moz logo", width: 200, height: 80 },
    ];

    return (
        <div className="w-full py-8 md:py-12 overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="relative">
                    <div className="animate-scroll flex space-x-8">
                        {/* First set of logos */}
                        {logos.map((logo, index) => (
                            <div key={`first-${index}`} className="flex-shrink-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className="h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                        {/* Duplicate set of logos for seamless loop */}
                        {logos.map((logo, index) => (
                            <div key={`second-${index}`} className="flex-shrink-0">
                                <Image
                                    src={logo.src}
                                    alt={logo.alt}
                                    width={logo.width}
                                    height={logo.height}
                                    className="h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
