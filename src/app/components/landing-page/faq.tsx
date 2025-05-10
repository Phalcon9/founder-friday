import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
const FAQ = () => {
    return (
        <>
            <div className="w-full md:px-[80px] ">
                <p className="font-bold text-[45px]">FAQs</p>
                <Accordion type="single" collapsible className="w-full max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <AccordionItem value="item-1">
                        <AccordionTrigger  className="text-2xl font-semibold text-[#340066]">Lorem ipsum dolor sit amet, consectetur adi elit.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger  className="text-2xl font-semibold text-[#340066]">Lorem ipsum dolor sit amet, consectetur adi elit.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="text-2xl font-semibold text-[#340066]">Lorem ipsum dolor sit amet, consectetur adi elit.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className="text-2xl font-semibold text-[#340066]">Lorem ipsum dolor sit amet, consectetur adi elit.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger className="text-2xl font-semibold text-[#340066]">Lorem ipsum dolor sit amet, consectetur adi elit.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger className="text-2xl font-semibold text-[#340066]">Lorem ipsum dolor sit amet, consectetur adi elit.</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </>
    );
}

export default FAQ;