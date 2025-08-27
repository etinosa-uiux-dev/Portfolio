import abtImg from "../assets/images/about.jpg";


function About () {

    return (
        <section id="about" data-title="About" className="p-5 pb-10">
            <div className="">
                <h1 className="text-3xl font-bold mb-8">About me</h1>
                <div className="bg-zinc-400 w-20 h-20 rounded-full overflow-hidden float-left mr-3">
                    <img className="w-full h-full object-cover" src={abtImg} alt="" />
                </div>
                
                <p className="leading-7.5 lmobile:leading-8">
                    I’m <strong>Caleb</strong> — a curious UI/UX designer with a growing love for front-end development. I spend most of my creative time in <strong>Figma</strong>, shaping ideas into clean, intuitive interfaces. Lately, I’ve been diving into <strong>HTML</strong> and <strong>CSS</strong>, bridging the gap between design and code.
                    
                    I believe in simplicity, accessibility, and thoughtful design that feels effortless to the user. I strive to create interfaces that are not only visually clear but also inclusive, responsive, and performant across devices. Whether wireframing or writing code, my goal is to design experiences that just make sense; intuitive, fast, and human-centered.
                    
                    When I’m not nudging pixels or fussing over font sizes, I’m out scoring goals on the pitch, vibing to music like it’s a full-time job, plotting my next chess victory one move at a time, engaging in video games, or just catching up with friends over a good laugh.
                    
                    Let's create something beautiful together.
                    
                    To see my work, you can scroll or navigate to the Projects section. 
                </p>
            </div>
        </section>
    );
}

export default About;