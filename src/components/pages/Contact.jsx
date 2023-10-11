/* eslint-disable react/no-unescaped-entities */
import FileSaver from "file-saver";

function Contact() {
  return (
    <section id='contact' className="w-full lg:px-24 md:px-20 sm:px-16 px-12">
      <div className="text-5xl md:text-6xl lg:text-7xl font-bold flex flex-col text-white w-[70%] md:w-full pt-14">
        <span>Interested?</span>
        <span>Let's Get In Touch!</span>
      </div>

      <p className="pt-8 text-[#b396f1] md:max-w-[50%] md:text-base lg:text-lg">
        I'm thrilled to connect with you! Whether you have a project in mind, a collaboration proposal, or just want to say hello, I'd love to hear from you. Feel free to contact.
      </p>

      <div className="flex justify-center items-center mt-16 lg:justify-start">
        <div onClick={() => {FileSaver.saveAs('src/assets/ankitsahu.png', 'AnkitSahu_resume.pdf'); console.log('success')}} className="flex items-center justify-center border border-white w-[80%] md:w-[30%] py-4 rounded-full hover:scale-[0.98] cursor-pointer transition-all">
          <img src="src/assets/pdfIcon.png" alt="" className="w-[24px] h-[24px] bg-transparent invert" />
          <p className="text-white font-bold ml-2">Download Resume</p>
        </div>
      </div>

      <div className="[&_img]:bg-transparent [&_img]:invert mt-28 [&_img]:w-8 [&_img]:h-auto flex w-[80%] [&>a]:flex-1 [&>a]:flex [&>a]:justify-center [&>a]:items-center mx-auto pb-2 cursor-pointer">
        <a href="mailto:ankitsahu789844@gmail.com" className="border-r-2"><img src="src/assets/mail.png" alt="Gmail" /></a>
        <a className="border-r-2"><img src="src/assets/gitHub.svg" alt="GitHub" /></a>
        <a><img src="src/assets/instagramIconBW.svg" alt="instagram" /></a>
      </div>
    </section>
  )
}

export default Contact

