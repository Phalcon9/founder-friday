import ArrowIcon from "@/app/icons/icons";
import Image from "next/image";

const Community = () => {
    return (
        <div className="w-full px-4 md:px-10 mt-20 flex flex-col gap-20">
            {/* Top section */}
            <div className="flex flex-col gap-10">
                <div className="text-center flex flex-col gap-4 items-center max-w-4xl mx-auto">
                    <p className="text-3xl md:text-5xl font-bold">
                        Register And Be Part of Our Community
                    </p>
                    <p className="text-lg md:text-2xl text-[#8E8E93] font-normal">
                        Join our community of over 1000+ founders, developers, and tech junkies in general.
                        Be inspired by people who live to inspire!
                    </p>
                </div>

                <div className="flex flex-col gap-6 items-center">
                    <Image
                        src={'/community.svg'}
                        alt="community"
                        width={1743}
                        height={333}
                        className="w-full h-auto"
                    />
                    <button className="flex items-center border-[#9524FF] border rounded-[40px] py-2 px-5 md:py-[15px] md:px-[30px] text-[#9524FF] font-medium text-lg md:text-2xl">
                        Register Now
                        <ArrowIcon />
                    </button>
                </div>
            </div>

            {/* Bottom section */}
            <div className="flex flex-col md:flex-row gap-10 md:gap-[40px] items-center max-w-[1568px] mx-auto">
                <Image
                    src={'/registerimage.svg'}
                    alt="register"
                    width={795}
                    height={564}
                    className="w-full max-w-2xl h-auto"
                />

                <div className="flex flex-col gap-8 md:gap-[55px] max-w-xl text-center md:text-left">
                    <p className="text-xl md:text-2xl font-semibold">
                        At Founder’s Friday, Every Friday Is a Learning Experience!
                    </p>
                    <p className="font-semibold text-base md:text-lg">
                        Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.
                    </p>
                    <button className="w-fit mx-auto md:mx-0 flex items-center border-[#9524FF] border rounded-[40px] py-2 px-5 md:py-[15px] md:px-[30px] bg-[#9524FF] text-[#FDF7FF] font-medium text-lg md:text-2xl">
                        Register Now
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Community;
