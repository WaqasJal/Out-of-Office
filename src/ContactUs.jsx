import React, { useState } from "react";
import { Frame } from "../src/Frame"; // Update this import based on your component structure

export const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted:", formData);
        // Reset form data after submission if needed
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        });
    };

    return (
        <div className="bg-[#0d1418] flex flex-row justify-center w-full">
            <div className="bg-[#0d1418] w-[1920px] h-[1080px] relative">
            <p className="absolute w-[693px] top-[232px] left-[56px] text-white text-5xl font-thin font-Inter">
    Gorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
                <img
                    className="absolute w-[80px] h-[80px] top-[74px] left-[46px]"
                    alt="Ooo"
                    src="https://i.gyazo.com/d01ba3e1a57ff268e8d0539bb981df8e.png" // Replace with your actual image URL
                />
                <div className="flex flex-wrap w-[804px] items-start justify-end gap-[0px_0px] absolute top-[207px] left-[1058px]">
                    <div className="w-[402px] relative">
                        <Frame />
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="border-none border-b border-white absolute left-0 right-0"
                        />
                    </div>
                    <div className="w-[402px] relative">
                        <Frame text="L A S T    N A M E" />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="border-none border-b border-white absolute left-0 right-0"
                        />
                    </div>
                    <div className="w-[804px] relative">
                        <Frame text="E M A I L" />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border-none border-b border-white absolute left-0 right-0"
                        />
                    </div>
                    <div className="h-[263px] w-[804px] relative">
                        <Frame text="M E S S A G E" />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            className="border-none border-b border-white absolute left-0 right-0"
                        />
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="absolute top-[691px] left-[1699px]">
                    <button
                        style={{
                            color: 'white',
                            fontSize: '0.75rem', // equivalent to text-xs
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            fontFamily: 'Inter, sans-serif',
                            letterSpacing: '0.177em', // equivalent to tracking-[7.08px]
                        }}
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <img
                    className="!fixed !left-0 !top-[941px]"
                    alt="Brand Name"
                    src="https://i.gyazo.com/d01ba3e1a57ff268e8d0539bb981df8e.png" // Replace with your actual brand image URL
                />
            </div>
        </div>
    );
};
