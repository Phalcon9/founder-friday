import ArrowIcon from "@/app/icons/icons";
import Image from "next/image";

const ComingToKaduna = () => {
    return (
        <div className="bg-[url(/large.svg)] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center py-16 px-6 md:px-20 min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-7xl w-full">
                <div className="flex flex-col gap-5 max-w-xl text-center md:text-left">
                    <p className="text-[#EBE9ED] text-3xl md:text-5xl font-bold">
                        Founders Friday is coming to
                    </p>

                    <p className="text-[#A649FF] text-6xl md:text-9xl font-bold">
                        Kaduna
                    </p>

                    <p className="text-white font-normal text-base md:text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at,
                        vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget
                        accumsan leo suscipit id. Maecenas ut ante quis quam lobortis
                        consequat eu id turpis. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                    </p>

                    <button className="flex items-center justify-center w-fit border-[#9524FF] border rounded-[40px] py-2 px-5 md:py-[15px] md:px-[30px] text-[#9524FF] font-medium text-base md:text-2xl mx-auto md:mx-0">
                        Register
                        <ArrowIcon />
                    </button>
                </div>

                <div className="w-full max-w-md md:max-w-none">
                    <Image
                        src="/biglogo.svg"
                        height={554}
                        width={595}
                        alt="who are we"
                        className="w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ComingToKaduna;
