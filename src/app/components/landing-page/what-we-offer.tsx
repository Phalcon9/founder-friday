import PlusIcon from "@/app/icons/plus-icon";

const WhatWeOffer = () => {
    return (
        <div className="flex flex-col w-full max-w-[1568px] mx-auto px-4 gap-10 mt-[100px]">
            <p className="text-3xl sm:text-4xl md:text-5xl font-semibold">What We Offer</p>

            {[
                {
                    title: "Monthly Meetups",
                    desc: "Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.",
                },
                {
                    title: "Diverse Network",
                    desc: "Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.",
                },
                {
                    title: "Knowledge Sharing",
                    desc: "Engage in peer-to-peer learning and knowledge exchange through talks, panels, and workshops.",
                },
                {
                    title: "Collaboration Opportunities",
                    desc: "Find potential co-founders, mentors, or partners for your next big venture.",
                },
            ].map((item, i) => (
                <div
                    key={i}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-[50px] py-6 md:py-[40px] border-b border-[#3C3641]"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center w-full justify-between gap-4 sm:gap-[40px]">
                        <div className="flex items-center gap-4 sm:gap-[40px]">
                            <svg
                                width="25"
                                height="26"
                                viewBox="0 0 25 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="12.4" cy="13.0001" r="12.4" fill="#8300FF" />
                            </svg>
                            <p className="text-xl sm:text-2xl md:text-4xl font-semibold">{item.title}</p>
                        </div>
                        <p className="text-sm sm:text-base text-[#75687E] max-w-full sm:max-w-[755px] w-full">
                            {item.desc}
                        </p>
                    </div>
                   <PlusIcon/>
                </div>
            ))}
        </div>
    );
};

export default WhatWeOffer;
