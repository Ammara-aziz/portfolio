'use client'
import Image from "next/image";
import Typewriter from 'typewriter-effect';


const Hero = () => {
    return (
<section className="text-blue-100 body-font bg-fixed bg-cover bg-center custom-image">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#b6dad8]">
      Hi,I'm Ammara Gul
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: [' a Full Stack Web Developer proficient in TypeScript',' HTML, CSS',' JavaScript', 'Next.js, React.js', 'Tailwind CSS, and ShadcnUI.'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className="w-[150px] h-[2px] bg-blue-900"></div>
      <p className="mb-8 leading-relaxed">
       

I specialize in developing web applications with expertise in Next.js and React.js, I create seamless user experiences that are both engaging and visually appealing.

<p className="font-semibold">My solid understanding of TypeScript allows me to ensure the scalability and robustness of my projects. I also excel in crafting responsive interfaces using HTML, CSS, and modern CSS frameworks like Tailwind CSS and ShadcnUI.<br></br></p>
<p className="font-semibold">I have the skills to handle the full spectrum of web development. I continuously stay updated with the latest industry trends to deliver cutting-edge solutions.

If you're in need of a Full Stack Web Developer who can bring your ideas to life, I'm here to help. Let's collaborate and create something exceptional together!</p>
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded mx-auto w-[15rem] h-[21rem]"
        alt="hero"
        height={250}
        width={250}
        src={require('../../../public/assets/portfolio-pict.png')}
      />
    </div>
  </div>
</section>

    )
};
export default Hero;