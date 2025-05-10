import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FAQ = () => {
    return (
        <div className="w-full px-4 md:px-20 py-10">
            <p className="font-bold text-3xl md:text-[45px] text-center mb-8">FAQs</p>
            <Accordion
                type="single"
                collapsible
                className="w-full max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {Array.from({ length: 6 }).map((_, i) => (
                    <AccordionItem key={i} value={`item-${i + 1}`}>
                        <AccordionTrigger className="text-lg md:text-2xl font-semibold text-[#340066]">
                            Lorem ipsum dolor sit amet, consectetur adi elit.
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FAQ;
