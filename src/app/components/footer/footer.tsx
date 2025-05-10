import FaceBookIcon from "@/app/icons/socials/facebook-icon";
import InstagramIcon from "@/app/icons/socials/insta-icon";
import TwiterIcon from "@/app/icons/socials/twitter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full max-w-[1572px] mx-auto mt-12 mb-8 px-4">
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center mb-6">
          <Image src="/logotext.svg" alt="Logo" width={204} height={81} />
        </div>
      
        {/* CTA Section */}
        <div className="flex flex-col gap-5 text-center items-center w-full">
          <p className="text-lg md:text-xl font-medium">
            Want To Be A Part Of Abuja’s Biggest Tech Community?
          </p>
          <button className="flex items-center gap-3 border border-[#9524FF] rounded-full py-3 px-6 text-[#9524FF] font-medium text-base sm:text-xl md:text-2xl w-fit hover:bg-[#f3e8ff] transition">
            Register For Our Next Event
            <Image src="/rightarrow.svg" alt="Arrow Icon" width={24} height={25} />
          </button>
        </div>
      
        {/* Divider */}
        <hr className="mt-24 border-[#B86DFF]" />
      
        {/* Footer Nav & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6 px-0">
          {/* Social Icons */}
          <div className="flex gap-3">
            <FaceBookIcon />
            <InstagramIcon />
            <TwiterIcon />
          </div>
      
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="" className="text-base md:text-xl font-medium">Home</Link>
            <Link href="" className="text-base md:text-xl font-medium">About Us</Link>
            <Link href="" className="text-base md:text-xl font-medium">Gallery</Link>
            <Link href="" className="text-base md:text-xl font-medium">Contact Us</Link>
          </div>
        </div>
      </div>
      
    );
}

export default Footer;