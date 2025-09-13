"use client"

import { processData } from "../../helpers/functionhelper"
import { Input } from '../../components/ui/input'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectLabel } from '../../components/ui/select'
import { Textarea } from '../../components/ui/textarea'
import { useState } from "react"
import { Button } from "../../components/ui/button"
import { l15 } from "../../helpers/imagehelper"
import Image from "next/image"
import { toast } from "sonner"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"



const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    phone: z.string().min(1, "Contact number is required"),
    service: z.string().min(1, "Please select a service"),
    description: z.string().min(1, "Description is required"),
});

const ContactOne = () => {
    const [service, setService] = useState("")
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
       
    });

    
  const onError = () => {
    toast.error("Please fill all required fields correctly.");
  };

    const onSubmit = () => {
        toast.success('Your message has been sent successfully!')
    }
    return (
        <section>
            <div className="container mx-auto max-w-[85rem] px-10">
                <div className="py-8 sm:py-18">
                    <div className='grid lg:grid-cols-2 items-center gap-8'>
                        <div>
                            <h1 className='dm-sans font-medium text-[#0F172A] text-[20px] sm:text-[38px] xl:text-[44px] mt-1 sm:leading-14 mt-2'>The Way We Build
                                <span className='text-[#B4DD13]'> Your <br></br> Packaging</span>
                            </h1>

                            <div className="mt-10 relative">
                                <ol className="relative space-y-8 sm:space-y-10 md:space-y-12 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-5 md:before:left-6 before:border-l-2 before:border-dashed before:border-[#8E98A8]">
                                    {processData.map((process, i) => (
                                        <li key={i} className="relative pl-20">
                                            <span
                                                aria-hidden="true"
                                                className="absolute left-0 top-0 z-10 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-md bg-[#B4DD13] text-[#0F0A0A] text-sm md:text-base  font-normal"
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>

                                            <div className="pt-0.5">
                                                <h3 className="text-[20px] dm-sans font-normal text-[#0F172A]">{process.title}</h3>
                                                <p className="text-[16px] text-[#0F0A0A]/70 dm-sans font-normal mt-2 leading-6">
                                                    {process.description}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>

                        <div className="bg-[#F6F8F0] p-8  rounded-xl space-y-8">
                            <h2 className="text-[24px] text-[#0F172A] md:text-[26px] lg:text-[30px] dm-sans font-medium mb-6">Let’s Talk</h2>

                            <form className="space-y-12" onSubmit={handleSubmit(onSubmit, onError)}>
                                {/* Name + Email */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <Input
                                            type="text"
                                            placeholder="Name"
                                            className="border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-black shadow-none"
                                            {...register("name")}
                                        />
                                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <Input
                                            type="email"
                                            placeholder="Email"
                                            className="border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-black shadow-none"
                                            {...register("email")}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                    </div>
                                </div>

                                {/* Phone + Service */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <Input
                                            type="tel"
                                            placeholder="Contact No"
                                            className="border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-black shadow-none"
                                            {...register("phone")}
                                        />
                                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                    </div>

                                    <div>
                                        <Select onValueChange={(value) => setValue("service", value)}>
                                            <SelectTrigger className="border-0 border-b rounded-none focus:ring-0 shadow-none w-full">
                                                <SelectValue placeholder="Select Services" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="product">Product</SelectItem>
                                                <SelectItem value="app">App Value</SelectItem>
                                                <SelectItem value="box">Box</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        {errors.service && <p className="text-red-500 text-sm">{errors.service.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <Textarea
                                        placeholder="Description"
                                        className="border-0 border-b rounded-none focus-visible:ring-0 focus-visible:border-black shadow-none"
                                        {...register("description")}
                                    />
                                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
                                </div>

                                <div className="flex items-center mt-4">
                                    <Button
                                        type="submit"
                                        className="bg-[#BFFF00] hover:bg-[#BFFF00] text-[#0F1419] dm-sans font-normal cursor-pointer text-[14px] sm:text-[17px] py-6 rounded-[6.5rem] transition-all duration-200 hover:scale-105"
                                    >
                                        <span className="px-2 flex items-center">
                                            Submit
                                            <Image src={l15} width={10} height={10} alt="logo" className="w-[10px] h-[10px] ml-2" />
                                        </span>
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default ContactOne