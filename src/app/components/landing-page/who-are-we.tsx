import Image from "next/image";

const WhoAreWe = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 mt-[50px] items-center md:items-start max-w-[1572px] mx-auto">
            <Image
                src={"founders.svg"}
                height={564}
                width={698}
                alt="who are we"
                className="w-full md:w-auto max-w-[90%] md:max-w-none"
            />
            <div className="flex gap-2">
                <div className="border-l-[3px] border-t-[3px] border-b-[3px] mt-[30px] mb-[10px] border-[#A649FF] w-[34px] rounded-tl-[20px] rounded-bl-[20px] hidden sm:block"></div>

                <div className="flex flex-col justify-between max-w-[802px]">
                    <div className="flex flex-col gap-[50px]">
                        <p className="font-bold text-[32px] md:text-[45px]">Who Are We?</p>
                        <p>
                            Born from the vibrant startup ecosystem of Abuja, we recognized the
                            need for a consistent, high-quality networking platform where
                            founders, innovators, and tech enthusiasts could connect, share
                            ideas, and foster collaboration.
                        </p>
                        <div className="flex flex-wrap gap-[10px]">
                            <button className="flex items-center gap-2 bg-[#A649FF] text-white px-6 py-3 rounded-full font-medium shadow hover:bg-[#7b1fd9] transition">
                                Register
                            </button>

                            <button className="flex items-center gap-2 border-2 border-[#9524FF] text-[#A649FF] px-6 py-3 rounded-full font-medium hover:bg-[#f3e8ff] transition">
                                <span>Donate</span>
                                <span role="img" aria-label="donate">💰</span>
                            </button>
                        </div>
                    </div>
                    <p className="mt-6 md:mt-0">
                        Founder&apos;s Friday is more than just a meetup — it&apos;s a movement.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhoAreWe;
