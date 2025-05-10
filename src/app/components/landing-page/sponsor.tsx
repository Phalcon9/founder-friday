"use client"

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import { z } from "zod"


const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .max(50, { message: "Name must be 50 characters or less" }),

    company: z
        .string()
        .min(2, { message: "Company name must be at least 2 characters" })
        .max(50, { message: "Company name must be 50 characters or less" })
        .optional()
        .or(z.literal("")), // allows empty string too

    email: z
        .string()
        .email({ message: "Invalid email address" })
        .max(50, { message: "Email must be 50 characters or less" }),

    phone: z
        .string()
        .regex(/^\+?[0-9\s\-]{7,15}$/, {
            message: "Phone must be a valid number (7–15 digits)",
        })
        .max(50, { message: "Phone must be 50 characters or less" }),
});
const Sponsor = () => {
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            company: undefined,
            email: "",
            phone: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <>
            <div className="max-w-[1568px] mx-auto w-full px-4">
                <div className="flex flex-col gap-16">
                    {/* Header Section */}
                    <div className="flex flex-col gap-3 max-md:text-center">
                        <p className="text-[#5C00B3] font-bold text-xl md:text-3xl">
                            Sponsor The Next Friday
                        </p>
                        <p className="font-bold text-3xl md:text-5xl max-w-[503px] mx-auto">
                            Why Sponsor Founders Friday?
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col lg:flex-row gap-[110px] justify-between items-start max-w-[1380px] mx-auto">
                        {/* Left Circle Grid */}
                        <div className="shadow-2xl border-2 grid grid-cols-2 items-center justify-center gap-2 border-[#CA92FF] w-full  max-w-[600px] p-8 rounded-2xl">
                            {[
                                { title: "Networking Opportunities", desc: "Connect with industry leaders, founders, and potential partners.", bg: "#DCB6FF" },
                                { title: "Community Impact", desc: "Support the growth and development of the startup ecosystem.", bg: "#EDDBFF" },
                                { title: "Brand Association", desc: "Connect with industry leaders, founders, and potential partners.", bg: "#EDDBFF" },
                                { title: "Visibility", desc: "Connect with industry leaders, founders, and potential partners.", bg: "#DCB6FF" },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className={`rounded-full border-2 border-[#A649FF] w-[170px] h-[170px] mx-auto lg:w-[250px] lg:h-[250px] flex items-center justify-center flex-col text-center px-4`}
                                    style={{ backgroundColor: item.bg }}
                                >
                                    <p className="text-lg lg:text-2xl font-bold">{item.title}</p>
                                    <p className="text-xs lg:text-lg font-normal">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Right Form Section */}
                        <div className="w-full max-w-[670px] flex flex-col gap-4">
                            <p className="text-2xl md:text-[28px] font-bold">How To Sponsor</p>
                            <p className="text-xl md:text-2xl text-[#605668] italic">Ready to Make an Impact?</p>
                            <p className="text-base md:text-lg font-normal">
                                Fill out the form below or contact us at [contact email/phone number]
                                to learn more about how you can sponsor the next Founders Friday.
                            </p>

                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                                >
                                    {/* Form Fields */}
                                    {[
                                        { name: "name" as const, label: "Name", placeholder: "Full name" },
                                        { name: "company" as const, label: "Company (optional)", placeholder: "Company name" },
                                        { name: "email" as const, label: "Email", placeholder: "Email address" },
                                        { name: "phone" as const, label: "Phone", placeholder: "Phone number" },
                                    ].map((fieldProps, i) => (
                                        <FormField
                                            key={i}
                                            control={form.control}
                                            name={fieldProps.name}
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className="font-semibold text-lg">{fieldProps.label}</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className="h-[50px] md:h-[63px] border border-[#121212] text-lg"
                                                            placeholder={fieldProps.placeholder}
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ))}

                                    {/* Submit Button */}
                                    <div className="md:col-span-2">
                                        <Button
                                            type="submit"
                                            className="bg-[#9524FF] w-full md:w-[235px] py-4 h-[60px] md:h-[70px] text-xl md:text-2xl flex items-center justify-center gap-2"
                                        >
                                            Sponsor
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M5.14 12H18.86" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 5.14L18.86 12L12 18.86" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Sponsor;