import ArrowIcon from "@/app/icons/icons";
import Image from "next/image";

const ComingToKaduna = () => {
    return (<>
        <div className="bg-[url(/large.svg)] w-full pl-[80px] bg-cover flex items-center justify-center  h-[808px] bg-no-repeat bg-center ">

            <div className="flex items-center justify-center">
                <div className="flex flex-col gap-5 ">
                    <p className="text-[#EBE9ED] text-[50px] font-bold">
                        Founders Friday is coming to
                    </p>

                    <p className="text-[#A649FF] text-9xl font-bold">
                        Kaduna
                    </p>

                    <p className="text-white font-normal text-xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at,
                        vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget
                        accumsan leo suscipit id. Maecenas ut ante quis quam lobortis
                        consequat eu id turpis. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                    </p>

                    <button className="flex items-center w-fit border-[#9524FF] border rounded-[40px] py-2 px-5 md:py-[15px] md:px-[30px] text-[#9524FF] font-medium text-lg md:text-2xl">
                        Register
                        <ArrowIcon />
                    </button>
                </div>
                <div>
                    <Image
                        src="/biglogo.svg"
                        height={554}
                        width={595}
                        alt="who are we"
                        className="w-full md:w-auto max-w-[90%] md:max-w-none"
                    />
                </div>
            </div>
        </div>
    </>);
}

export default ComingToKaduna;