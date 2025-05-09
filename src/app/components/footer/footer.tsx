import FaceBookIcon from "@/app/icons/socials/facebook-icon";
import InstagramIcon from "@/app/icons/socials/insta-icon";
import TwiterIcon from "@/app/icons/socials/twitter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full max-w-[1572px] mx-auto mt-[50px] mb-[30px]">
            <div className="flex items-center gap-2">
                <Image src="/logotext.svg" alt="Logo" width={204} height={81} />
            </div>
            <div className="flex flex-col gap-[20px] justify-center items-center w-full">
                <p>Want To Be A Part Of Abuja’s Biggest Tech Community?</p>
                <button className="flex items-center gap-3 border border-[#9524FF] rounded-full py-3 px-6 text-[#9524FF] font-medium text-lg sm:text-2xl w-fit hover:bg-[#f3e8ff] transition">
                    Register For Our Next Event
                    <Image src="/rightarrow.svg" alt="Arrow Icon" width={24} height={25} />
                </button>
            </div>

            <hr className="mt-[100px] text-[#B86DFF]" />
            <div className="flex items-center justify-between mt-[20px] px-4 md:px-0">
                <div className="flex gap-1">
                    <FaceBookIcon />
                    <InstagramIcon />
                    <TwiterIcon />
                </div>
                <div className="flex gap-8">
                    <Link href='' className="text-base md:text-xl font-medium">Home</Link>
                    <Link href='' className="text-base md:text-xl font-medium">About Us</Link>
                    <Link href='' className="text-base md:text-xl font-medium">Gallery</Link>
                    <Link href='' className="text-base md:text-xl font-medium">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;