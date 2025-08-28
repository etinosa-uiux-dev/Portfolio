import { useEffect, useRef, useState } from "react";


function Skills () {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect ( () => {
        const observer = new IntersectionObserver ( (entries) => {
            if (entries[0].isIntersecting) {
                setInView (true);
                observer.disconnect();
            }
        }, {threshold: 0.3} // trigger when 30% visible 
        );

        if (sectionRef.current) {
            observer.observe (sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const skills = {
        design: [
            { name: "UI", level: "95%" },
            { name: "UX", level: "90%" },
            { name: "Wireframing", level: "70%" },
            { name: "Prototyping", level: "85%" },
        ],
        development: [
            { name: "HTML", level: "95%" },
            { name: "CSS", level: "90%" },
            { name: "Responsive Design", level: "90%" },
        ],
        tools: [
            { name: "Figma", level: "95%" },
            { name: "VS Code", level: "95%" },
            { name: "GitHub", level: "70%" },
        ]  
    };

    return (
        <section id="skills" data-title="Skills" ref={sectionRef} className="p-5 pb-10">
            <div>
                <h2 className="text-3xl font-bold mb-20">My Skills</h2>

                <div className="flex flex-wrap justify-center gap-6 tab:gap-15 mb-20">
                    <div className="flex flex-wrap gap-8 bg-gray-300 p-3 rounded-2xl max-w-80 mb-4">
                        <div className="flex-1 min-w-[250px]">
                            <h3 className="text-xl font-semibold mb-4 text-center">Design</h3>

                            <ul className="space-y-5">
                                {skills.design.map ( (skill) => (
                                    <li key={skill.name}>
                                        <p>{skill.name}</p>
                                        <span className="block bg-gray-200 h-2 rounded overflow-hidden">
                                            <span className={"block bg-sky-500 h-2 rounded transition-all duration-1000 ease-out"} style={{width: inView ? skill.level : "0%"}} ></span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 bg-gray-300 p-3 rounded-2xl max-w-80 mb-4">
                        <div className="flex-1 min-w-[250px]">
                            <h3 className="text-xl font-semibold mb-4 text-center">Development</h3>

                            <ul className="space-y-5">
                                {skills.development.map((skill) => (
                                    <li key={skill.name}>
                                        <p>{skill.name}</p>
                                        <span className="block bg-gray-200 h-2 rounded overflow-hidden">
                                            <span
                                            className={`block bg-sky-500 h-2 rounded transition-all duration-1000 ease-out`}
                                            style={{
                                                width: inView ? skill.level : "0%",
                                            }}
                                            ></span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-8 bg-gray-300 p-3 rounded-2xl max-w-80 mb-4">
                        <div className="flex-1 min-w-[250px]">
                            <h3 className="text-xl font-semibold mb-4 text-center">Tools</h3>

                            <ul className="space-y-5">
                                {skills.tools.map((skill) => (
                                    <li key={skill.name}>
                                        <p>{skill.name}</p>
                                        <span className="block bg-gray-200 h-2 rounded overflow-hidden">
                                            <span
                                            className={`block bg-sky-500 h-2 rounded transition-all duration-1000 ease-out`}
                                            style={{
                                                width: inView ? skill.level : "0%",
                                            }}
                                            ></span>
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;