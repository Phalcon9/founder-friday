import Image from "next/image";
const HeroSection = () => {
    return (<div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 max-w-[1572px] mx-auto">
        {/* Left Section - Text */}
        <div className="flex flex-col gap-10 max-w-2xl">
            <div className="flex flex-col gap-6 text-center sm:text-left">
                <p className="font-semibold text-lg">
                    Join our premier monthly meetup for startup founders and tech visionaries
                </p>
                <p className="text-[#5C00B3] font-bold text-4xl sm:text-5xl leading-tight">
                    Connect, Collaborate, Innovate!
                </p>
                <p className="text-lg sm:text-2xl font-normal text-gray-800">
                    Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.
                </p>
            </div>

            {/* CTA Button and Date */}
            <div className="flex flex-col  gap-4">
                <button className="flex items-center gap-3 border border-[#9524FF] rounded-full py-3 px-6 text-[#9524FF] font-medium text-lg sm:text-2xl w-fit hover:bg-[#f3e8ff] transition">
                    Register For Our Next Event
                    <Image src="/rightarrow.svg" alt="Arrow Icon" width={24} height={25} />
                </button>
                <p className="text-base font-semibold text-[#6750A4] text-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
                    Join Us for our next meetup on the 26th of July 2024
                </p>
            </div>

            {/* Sponsor Logos */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
                {['/cafe.svg', '/mswitch.svg', '/start.png', '/boldspace.svg', '/solana.svg'].map((src, i) => (
                    <Image key={i} src={src} alt="Sponsor Logo" width={80} height={80} />
                ))}
            </div>
        </div>

        {/* Hero Image - hidden on small screens */}
        <Image
            src="/group.png"
            alt="Hero Image"
            width={700}
            height={746}
            className="hidden lg:block"
        />
    </div>);
}

export default HeroSection;