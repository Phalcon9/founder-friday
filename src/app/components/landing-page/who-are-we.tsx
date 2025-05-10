import { Button } from "@/components/ui/button";
import Image from "next/image";

const WhoAreWe = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-10 my-[150px] items-center px-4 max-w-[1572px] mx-auto">
            <Image
                src={"founders.svg"}
                height={564}
                width={698}
                alt="who are we"
                className="w-full md:w-auto max-w-[90%] md:max-w-none"
            />
            <div className="flex gap-2">
                <div className="border-l-[3px] border-t-[3px] border-b-[3px] mt-[30px] mb-[10px] border-[#A649FF] w-[34px] rounded-tl-[20px] rounded-bl-[20px] hidden sm:block"></div>

                <div className="flex flex-col justify-between max-w-[802px] h-[556px]">
                    <div className="flex flex-col gap-[50px]">
                        <p className="font-bold text-[32px] md:text-[45px]">Who Are We?</p>
                        <p>
                            Born from the vibrant startup ecosystem of Abuja, we recognized the
                            need for a consistent, high-quality networking platform where
                            founders, innovators, and tech enthusiasts could connect, share
                            ideas, and foster collaboration.
                        </p>
                        <div className="flex flex-wrap gap-[10px]">
                            <Button className="bg-[#A649FF] text-white px-[70px] py-[20px] gap-[10px] rounded-full font-medium shadow hover:bg-[#7b1fd9] transition">
                                Register
                                <span>
                                    <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.1875 10.4999C0.1875 10.2098 0.302734 9.93164 0.507852 9.72652C0.71297 9.5214 0.991169 9.40617 1.28125 9.40617H27.0784L20.1944 2.52429C19.989 2.31891 19.8736 2.04036 19.8736 1.74992C19.8736 1.45947 19.989 1.18092 20.1944 0.975542C20.3998 0.770164 20.6783 0.654785 20.9688 0.654785C21.2592 0.654785 21.5377 0.770165 21.7431 0.975542L30.4931 9.72554C30.595 9.82714 30.6758 9.94784 30.7309 10.0807C30.7861 10.2136 30.8145 10.3561 30.8145 10.4999C30.8145 10.6438 30.7861 10.7862 30.7309 10.9191C30.6758 11.052 30.595 11.1727 30.4931 11.2743L21.7431 20.0243C21.5377 20.2297 21.2592 20.345 20.9688 20.345C20.6783 20.345 20.3998 20.2297 20.1944 20.0243C19.989 19.8189 19.8736 19.5404 19.8736 19.2499C19.8736 18.9595 19.989 18.6809 20.1944 18.4755L27.0784 11.5937H1.28125C0.991169 11.5937 0.71297 11.4784 0.507852 11.2733C0.302734 11.0682 0.1875 10.79 0.1875 10.4999Z" fill="#FDF7FF" />
                                    </svg>
                                </span>
                            </Button>

                            <Button variant={"ghost"} className="py-[20px]  gap-[10px] font-semibold border-2 border-[#9524FF] text-[#A649FF] hover:text-[#A649FF] px-[70px] rounded-full hover:bg-[#f3e8ff] transition">
                                Donate
                                <Image
                                    src={"money.svg"}
                                    height={35}
                                    width={35}
                                    alt="money bag"
                                />
                            </Button>
                        </div>
                    </div>
                    <p className="mt-6 md:mt-0 font-bold text-2xl">
                        Founder&apos;s Friday is more than just a meetup — it&apos;s a movement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
