import React from 'react';
import Section from '../layout/Section';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch" className="text-center md:text-left">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-bold text-lightest-slate mb-6">
                    Ready to Build Together?
                </h3>

                <p className="text-lg text-slate max-w-2xl mb-12">
                    I am currently pursuing new opportunities as a Cloud Engineer or Backend Developer.
                    Whether you have an open role, a complex cloud architecture problem, or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:your.email@example.com"
                    className="px-8 py-4 bg-transparent border border-cyan text-cyan font-bold rounded-md hover:bg-cyan/10 transition-all duration-300 inline-block mb-16"
                >
                    Say Hello
                </a>
            </div>
        </Section>
    );
};

export default Contact;
