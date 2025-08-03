import { BriefcaseBusiness, Code, User } from "lucide-react";
import React from "react";


export const AboutSection =() =>
{
return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">

                    <h3 className="text-2xl font-semibold">Passionate Web Developer </h3>
                    <p className="text-muted-foreground">
                      Hi, I’m Shivam Kumar — a Computer Science student and web developer with over 2 years of hands-on experience building responsive and user-friendly websites.
                       I specialize in modern front-end technologies like React and Tailwind CSS, and I enjoy crafting clean, interactive UI experiences. 
                       </p>
                       <p className="text-muted-foreground">
                       I’ve worked on a variety of projects, from personal websites to functional web apps, and I’m always eager to learn and implement new tools that make development faster and smarter. 
                      Outside of coding, I’m an athlete who brings the same discipline and focus from the badminton court into every line of code I write.  
                    </p>

                    <div div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">Get In Touch</a>
                        

                       
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-color duration-300">
                        Download CV
                        </a>
                        </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-4 w-4 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">Creating respomsive website and web 
                                    applications with modern frameworks.</p>
                            </div>

                        </div>

                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-4 w-4 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                <p className="text-muted-foreground">Desigining intuitaive user interface and seamless user experience.</p>
                            </div>

                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <BriefcaseBusiness className="h-4 w-4 text-primary" />
                            </div>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">Leading projects from conception to completion with agile methodologies.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
);
};