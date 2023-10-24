/* eslint-disable react/no-unescaped-entities */
import { workingMan } from '../../assets';

function About() {
  return (
    <>
      <section id='about' className="w-full lg:px-20 md:px-14  mb-16 md:mb-24  flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 flex justify-center items-center px-10 md:px-7 ">
          <p className="text-sm text-[#c8b3f5] hover:text-[#d8cdf3]"> 
            I'm a passionate and skilled <strong>Full Stack Web Developeer</strong> with expertize in the <strong>MERN</strong> (MongoDB, Express.js, React.js, Node.js) stack. I thrive on creating elegant and efficient solutions for complex problems. With a keen eye for detail and a strong foundation in web development, I craft seamless and responsive web applications that deliver exceptional user experiences.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex  justify-center items-center mt-16 md:mt-0">
            <img className="w-[75%] md:w-[60%] rounded-lg" src={workingMan} alt="WorkingStudent" />
        </div>
      </section>
    </>
  )
}

export default About