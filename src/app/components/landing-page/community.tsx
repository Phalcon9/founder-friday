import ArrowIcon from "@/app/icons/icons";
import Image from "next/image";

const Community = () => {
    return (
        <div>
            <div className="w-full flex flex-col gap-[50px] mt-[100px]">
                <div className="text-center flex flex-col gap-4 items-center px-4 max-w-[1079px] mx-auto">
                    <p className="text-3xl md:text-5xl font-bold">
                        Register And Be Part of Our Community
                    </p>
                    <p className="text-lg md:text-2xl text-[#8E8E93] font-normal">
                        Join our community of over 1000+ founders, developers, and tech junkies in general.Be inspired by people who live to inspire!
                    </p>
                </div>
                <div>
                    <Image src={'community.svg'} layout="responsive" height={333} width={1743} alt="community" />
                    <button className="w-fit mx-auto flex items-center border-[#9524FF] border rounded-[40px] py-2 px-5 md:py-[15px] md:px-[30px] text-[#9524FF] font-medium text-lg md:text-2xl">
                        Register Now
                        <ArrowIcon />
                    </button>
                </div>
            </div>

            <div className="flex gap-[40px] max-w-[1568px] mx-auto items-center">
                
                <Image src={'registerimage.svg'} height={564} width={795} alt="community" className="mt-[100px]" />

                <div className="flex flex-col gap-[55px] max-w-[718px]">
                    <p className="text-2xl font-semibold">At Founder’s Friday, Every Friday Is a Learning Experience!</p>
                    <p className="font-semibold text-lg">Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.</p>
                    <button className="w-fit flex items-center border-[#9524FF] border rounded-[40px] py-2 px-5 md:py-[15px] md:px-[30px] bg-[#9524FF] text-[#FDF7FF] font-medium text-lg md:text-2xl">
                        Register Now
                        <ArrowIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Community;