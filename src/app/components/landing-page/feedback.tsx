import Image from "next/image";

const Feedback = () => {
    return (
        <div className="w-full flex flex-col gap-[80px] mt-[100px]">
            <div className="text-center flex flex-col gap-[20px] items-center">
                <p className="text-5xl font-bold">What Do Our Attendees Have To Say?</p>
                <p className="text-[#8E8E93] text-2xl font-normal">Well See For Yourself!</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[100px] w-full flex-wrap px-4">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex flex-col items-center gap-7 w-full max-w-sm">
                        <Image
                            src={"/man.svg"}
                            alt="feedback"
                            width={196}
                            height={196}
                            className="border-4 rounded-full border-[#8300FF] p-[18px]"
                        />
                        <div className="flex flex-col items-center text-center">
                            <p className="text-2xl md:text-3xl font-semibold">Mr Belba Ngoy</p>
                            <p className="text-lg md:text-2xl font-normal">
                                Always a remarkable experience for my team and myself
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feedback;
