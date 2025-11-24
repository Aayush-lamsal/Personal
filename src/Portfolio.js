import React from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
// "proxy": "http://localhost:5000",

const NAV_ITEMS = [
    { id: "info", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
];

const skills = {
    Frontend: ["HTML5", "CSS3", "JSX", "Responsive Design", "JavaScript (ES6+)", "React.js", "TypeScript", "C#", "SQL"],
    "Backend & Apis": ["Python", "Flask", "Django", "Node.js", "Java", "Spring Boot", "REST API Development"],
    Databases: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
    "Tools & Platforms": ["Git", "GitHub", "Docker", "AWS", "Maven", "Gradle"],
    "Data/Cloud": ["ETL pipelines", "Airflow", "Snowflake", "Pandas", "Excel", "Machine Learning", "Fine-tuning LLMs"],
    "Testing & CI/CD": ["Junit5", "Mockito", "Github Action", "Debugging and Testing"],
    "Coursework": ["Data Engineering", "Operating Systems", "Algorithm Analysis", " Embedded Systems", "Big Data & Distributed Systems", "Discrete Mathematics", "Artificial Intelligence", "Computer Networks", "Data Science", " Object-Oriented Programming(OOP)", "Cloud Computing"]



};

const Schooldata = [
    {
        title: "North Dakota State University",
        degree: "Master's degree in Computer Science",
        location: "Fargo,North Dakota",
        date: "08/2024-Present"
    },
    {
        title: "Tribhuvan University",
        degree: "Bachelor's in Information Management",
        location: "Kathmandu,Nepal",
        date: "2017-2022"
    }
];
const projects = [
    {
        title: "Medical Chatbot",
        tech: ["React", "Flask", "REST API"],
        description:
            "Medical Chatbot using Multi-Agentic Retrieval Augmented Generation (RAG).",
        highlights: [
            "Built a multi-agent medical QA system with an LLM-powered Orchestrator coordinating retrieval, web search, and synthesis agents.",
            "Implemented Retrieval-Augmented Generation (RAG) using a Pinecone vector database and real-time DuckDuckGo web search.",
            "Integrated Google Gemini 1.5 Flash for high-quality context synthesis and accurate medical answer generation."
        ],
        link: "#",
    },
    {
        title: "Event Management System",
        tech: ["React", "Python", "MySQL", "Tailwind"],
        description: "Designed a responsive React UI featuring modals, client-side filtering, while connecting to backend APIs to fetch, modify, and sync event data seamlessly.",
        highlights: [
            "Developed a full-stack Event Management System using React (Tailwind) for the frontend and Flask + MySQL for the backend.",
            "Modern React dashboard — search, filters, inline editing.",
            "Secure CRUD operations with MySQL backend.",
            "Built RESTful APIs for event creation, editing, attendee management, and secure data handling.",
        ],
        link: "#",
    },
    {
        title: "Code Evolution Analyzer",
        tech: ["Java", "Python", "Git", "Pandas", "AST"],
        description:
            "Research tool analyzing thousands of commits for test maintenance evolution.",
        highlights: [
            "Automated test method parsing using AST.",
            "Complexity, LOC, assertions, method call metrics.",
            "Correlation + visualization for research study.",
        ],
        link: "#",
    },
    {
        title: "ClapCam Gesture Detector",
        tech: ["Python", "OpenCV", "MediaPipe"],
        description: "AI-powered gesture-controlled camera tool.",
        highlights: [
            "Real-time hand & audio detection.",

        ],
        link: "#",
    },
    {
        title: "Online Bookstore with Recommendations",
        tech: ["React", "Node.js", "MongoDB", "Tensor-Flow"],
        description: "Website for buying and selling books with integrated Recommendation System for Users.",
        highlights: [
            "Built an online bookstore platform with user-friendly browsing, search, and book detail pages.",
            "Designed a clean frontend interface (React/Tailwind) for smooth navigation and personalized user experience.",
            "Developed backend APIs for book data, user preferences, and recommendation delivery.",
        ],
        link: "#",
    },
    {
        title: "Mini Doctor Server",
        tech: ["NodeJS ", "Flutter", "MongoDB ", "API medic"],
        description:
            "Digital health management platform for quick assessments.",
        highlights: [
            "REST API for triage & medical assessments.",
            "React UI with clean form handling.",
            "Secure role-based routing.",
        ],
        link: "#",
    },
];

const experiences = [
    {
        role: "Graduate Research Assistant",
        org: "North Dakota State University",
        time: "2024 - Present",
        details: [
            "Analyze large open-source repositories to study test maintenance and evolution.",
            "Build Python tooling for automated metric extraction and correlation analysis.",
            "Extracted and processed large code repository datasets using Python, performing automated parsing and analysis.",
            "Applied data extraction, parsing, and analysis tools (Python, Git, CSV/JSON processing) to derive insights from large repositories."
        ],
    },
    {
        role: "Technology Assistant(GA)",
        org: "North Dakota State University",
        time: "2024 - Present",
        details: [
            "Assisted faculty and staff in integrating technology into teaching and learning.",
            "Provided LMS (Blackboard) support and troubleshooting and monitored IT system functionality.",
            "Led technology workshops and one-on-one training sessions for faculty and students.",
            "Develop and review learning materials, tutorials, and other documentation on university - standard technologies and multimedia"
        ],
    },
    {
        role: "Software Developer/Technical Consultant",
        org: "North Dakota State University",
        time: "2024 - Present",
        details: [
            "Assisted faculty and staff in integrating technology into teaching and learning.",
            "Provided LMS (Blackboard) support and troubleshooting and monitored IT system functionality.",
            "Led technology workshops and one-on-one training sessions for faculty and students.",
            "Develop and review learning materials, tutorials, and other documentation on university - standard technologies and multimedia"
        ],
    },

    {
        role: "Technical Support Coordinator",
        org: "IMS Software Pvt. Ltd",
        time: "2022-2023",
        details: [
            "Assisted clients by identifying issues, reproducing problems, and coordinating with developers for resolutions.",
            "Validated new builds and verified bug fixes before deployment in staging/production environments.",
            "Provided technical support to clients by generating custom ERP reports and resolving report-related issues.",
            "Develop and maintain knowledge base articles, user manuals, and internal documentation to streamline support processes."
        ],
    },
    {
        role: "Software Engineer Intern ",
        org: "National Data Center",
        time: "2019-2020",
        details: [
            "Built secure and efficient REST API endpoints (GET/POST/PUT/DELETE) using Python/Node.",
            "Designed and implemented new features for in-house applications to improve workflow efficiency and user experience.",
            "Refactored and upgraded in-house applications, enhancing reliability, scalability, and maintainability."
        ],
    }
];


const contactLinks = [
    {
        label: "Email",
        value: "",
        href: "aayush.lamsal3@gmail.com",
    },
    {
        label: "LinkedIn",
        value: "",
        href: "https://www.linkedin.com/in/aayush-lamsal-08a158362/",
    },
    {
        label: "GitHub",
        value: "",
        href: "https://github.com/Aayush-lamsal?tab=repositories",
    },
];


function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen w-full overflow-hidden text-white"
        >
            <video
                src={process.env.PUBLIC_URL + "/backgroung.mp4"}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="relative z-10 flex justify-between items-start px-20 pt-20">

                <div>
                    <h1 className="text-5xl font-light tracking-tight">Aayush Lamsal</h1>
                    <p className="text-sm mt-2">Software Engineer</p>

                    <div className="mt-10 text-sm space-y-4">
                        {NAV_ITEMS.map((item) => (
                            <button
                                key={item.id}
                                onClick={() =>
                                    document.getElementById(item.id)?.scrollIntoView({
                                        behavior: "smooth",
                                    })
                                }
                                className="block hover:text-gray-300 transition"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="py-180 right-20 max-w-xs text-right text-sm leading-relaxed">
                    <p>Born in 1999</p>
                    <p>in Hetauda, Nepal.</p>
                    <p>Believes great tech design</p>
                    <p>Learning and growing every single day.</p>
                    <p className="mt-2">Exploring new software development opportunities</p>
                </div>
            </div>
        </section>
    );
}

function Section({ id, title, children }) {
    return (
        <section id={id} className="text-white py-10">

            <div className="w-full flex items-center justify-center gap-3 mb-3 px-4">
                <div className="w-[600px] h-px bg-gradient-to-r from-slate-700 via-sky-500/40 to-slate-700"></div>

                <h2 className="text-lg font-semibold md:text-xl whitespace-nowrap">{title}</h2>

                <div className="w-[600px] h-px bg-gradient-to-r from-slate-700 via-sky-500/40 to-slate-700"></div>
            </div>

            <div className="mx-auto max-w-6xl px-6">
                {children}
            </div>

        </section>
    );
}


function About() {
    return (
        <Section id="info" title="About Me">

            <div className="grid gap-4 text-sm text-white md:grid-cols-[3fr,2fr] bg-transparent">
                <p>
                    I am a Computer Science student who enjoys building clean, user-focused
                    applications and researching how real-world codebases grow and change.
                </p>
                <p>
                    I care about clean abstractions, communication, and maintainable,
                    meaningful software built on strong fundamentals.
                </p>
            </div>
        </Section>
    );
}

function Skills() {
    return (
        <Section id="skills" title="Skills">
            <div className="grid gap-7 md:grid-cols-3">
                {Object.entries(skills).map(([group, items]) => (
                    <div
                        key={group}
                        className={
                            "rounded-2xl border border-slate-500 bg-slate-900/60 p-4 " +
                            (group === "Coursework" ? "md:col-span-3" : "")
                        }
                    >
                        <h3 className=" max-w-300 mb-4 text-sm font-semibold text-slate-100">
                            {group}
                        </h3>

                        <div className="flex flex-wrap gap-2 text-xs">
                            {items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-slate-600 bg-slate-700 px-3 py-1 text-slate-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}


function Projects() {
    return (
        <Section id="projects" title="Projects">
            <div className="grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <article
                        key={project.title}
                        className="flex flex-col rounded-2xl border border-slate-700 bg-slate-900/60 p-4 shadow-sm"
                    >
                        <h3 className="text-sm font-semibold text-slate-50">
                            {project.title}
                        </h3>
                        <p className=" mt-1 text-xs text-slate-300">
                            {project.description}
                        </p>

                        <div className="mt-2 flex flex-wrap gap-2 text-[0.65rem]">
                            {project.tech.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-sky-500/40 bg-sky-500/10 px-2.5 py-1 text-sky-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <ul className=" flex flex-col text-left mt-3 list-disc space-y-1 pl-4 text-xs text-slate-300">
                            {project.highlights.map((h, i) => (
                                <li key={i}>{h}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </Section>
    );
}



function Experience() {
    return (
        <Section id="experience" title="Experience">
            <div className="space-y-4">
                {experiences.map((exp) => (
                    <div
                        key={exp.role}
                        className="rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
                    >
                        <div className="flex justify-between text-sm text-slate-100">
                            <div className="flex flex-col text-left">
                                <p className="font-semibold">{exp.role}</p>
                                <p className="flex-col text-xs text-slate-100">{exp.org}</p>
                            </div>
                            <p className="text-xs font-medium text-sky-300">{exp.time}</p>
                        </div>
                        <ul className="mt-3 list-disc list-inside space-y-1 text-xs text-slate-300 text-left pl-0">
                            {exp.details.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}

function Education() {
    return (
        <Section id="education" title="Education">
            <div className="space-y-5">
                {Schooldata.map((school) =>
                    <div
                        key={school.title}
                        className="font-semibold text-xs rounded-2xl border border-slate-700 bg-slate-900/60 p-4"
                    >
                        {/* Flex row for left + right */}
                        <div className="flex justify-between items-start">

                            {/* LEFT SIDE */}
                            <div className="text-left">
                                <p>{school.title}</p>
                                <p>{school.degree}</p>

                            </div>

                            {/* RIGHT SIDE (location + date stacked) */}
                            <div className="text-right flex flex-col items-end text-slate-100 -mt-1">
                                <p>{school.location}</p>
                                <p className="text-xs text-slate-400">{school.date}</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>
        </Section>

    );
}

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        emailjs
            .send(serviceID, templateID, publicKey)
            .then(
                (result) => {
                    alert("Message sent successfully!");
                },
                (error) => {
                    alert("Failed to send message.");
                }
            );
    };

    return (
        <Section id="education" title="Contact">
            <form onSubmit={sendEmail} className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-700">

                <input
                    name="name"
                    placeholder="Name"
                    className="w-full border border-slate-700 bg-slate-900 rounded-lg p-2 text-xs"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />

                <input
                    name="email"
                    placeholder="Email"
                    className="w-full border border-slate-700 bg-slate-900 rounded-lg p-2 text-xs"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />

                <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    className="w-full border border-slate-700 bg-slate-900 rounded-lg p-2 text-xs"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />

                <button className="w-full bg-sky-500 py-2 text-white rounded-xl text-xs hover:bg-sky-400">
                    Submit
                </button>
            </form>
        </Section>
    );

}



export default function Portfolio() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-50">

            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />

        </div>
    );
}
