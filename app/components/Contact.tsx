"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import SectionHeader from "./SectionHeader";
import SectionDescription from "./SectionDescription";
import ContactCard from "./ContactCard";
import Lottie from "lottie-react";
import CallAnimation from '../../public/Call ringing animation.json';
import WhatsappAnimation from '../../public/whatsapp loop.json';
import GmailAnimation from '../../public/Gmail Loading ICON.json';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .send(
                "service_t6tsr9g",
                "template_460pr1d",
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                },
                "Y8Z38rquZYLEtDuOC"
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setFormData({ name: "", email: "", message: "" });
                    setLoading(false);
                },
                (error) => {
                    console.error(error);
                    setStatus("Failed to send message. Try again.");
                    setLoading(false);
                }
            );
    };

    return (
        <section
            id="contact-me"
            className="pt-10 md:pt-15 px-5 min-h-screen md:px-10 lg:px-20 font-[spectral] bg-[linear-gradient(135deg,rgba(255,255,255,0.14)_0%,rgba(255,255,255,0.06)_18%,rgba(255,255,255,0)_38%)]"
        >
            <SectionHeader title="Get in Touch" />
            <SectionDescription description="Have a project in mind or just want to say hello? Drop me a message and let's create something amazing together" />

            <section className="md:flex gap-10 py-10 mx-auto md:items-center">

                <form
                    onSubmit={handleSubmit}
                    className="border-2 border-[#090d1674] py-5 px-5 mb-20 md:mb-0 rounded-3xl mx-auto bg-[#111827cc] md:min-w-[40%] max-w-100 md:h-125"
                >
                    <div className="mb-3">
                        <label htmlFor="name" className="font-[DMSerif]">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="block border py-2 rounded-sm w-full px-1 font-[spectral]"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="font-[DMSerif]">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="block border py-1 rounded-sm w-full font-[spectral] px-2"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="font-[DMSerif]">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            cols={40}
                            rows={5}
                            className="border block font-[spectral] px-2 py-1 w-full md:h-50 rounded-xl"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-[#4f46e5] px-4 py-2 rounded-md block m-auto mt-5 cursor-pointer hover:bg-[#4e46e5af] md:mt-10"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                    {status && <p className="mt-2 text-center">{status}</p>}
                </form>


                <section>
                    <h3 className="font-[DMSerif] text-lg mb-2 text-[24px]">Let's Connect</h3>
                    <p className="mb-10 text-[20px] text-[#94a3b8]">
                        I'm always excited to work on new projects and collaborate with new people. Whether you
                        have a specific project in mind or just want to explore possibilities, I'll love to hear from you
                    </p>
                    <div className="flex flex-col gap-y-5">
                        <ContactCard title="Email" data="Adejames97@gmail.com" lottieFile={GmailAnimation} />
                        <ContactCard title="Phone" data="+2348080392216" lottieFile={CallAnimation} />
                        <ContactCard title="Whatsapp" data="+2348080392216" lottieFile={WhatsappAnimation} />
                    </div>
                </section>
            </section>
        </section>
    );
}
