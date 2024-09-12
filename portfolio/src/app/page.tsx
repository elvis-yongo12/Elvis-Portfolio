import About from "./components/About";
import HeaderTop from "./components/HeaderTop";
import Navbar from "./components/Navbar";
import Image from "next/image";
import next from "../../public/image1.png";
import Python from "../../public/Python.png";
import csss from "../../public/csss.jpg";
import html from "../../public/html.png";
import javascript from "../../public/javascript.jpg";
import sql from "../../public/sql.png";
import Education from "./components/Education";
import ContactForm from "./components/Callme";

export default function Home() {
  return (
    <main>
      <HeaderTop/>
      <Navbar/>
      
      <div className='headings'>
        <div className='bg-slate-600 text-white  p-20'>
            <h1 className='align-middle font-bold text-4xl text-center font-serif'>Hi, I'm Elvis Odhiambo Yongo</h1><br />
            <p className='text-lg p-28'>
                I'm Elvis Odhiambo Yongo, a full-stack developer with a deep passion for building innovative and efficient software solutions. I have experience working across both front-end and back-end development, which allows me to handle projects from start to finish. Whether it's designing user-friendly interfaces or optimizing back-end systems, I enjoy bringing everything together to create applications that perform seamlessly.
            </p>

            <button className=' button border border-black rounded '>Hire me</button>
        </div>
      </div>

      <About/>

      <div className='bg-slate-400 text-black p-20 pt-6'>
        <h1 className='align-middle font-bold text-4xl text-center font-serif'>
           Programming Language
        </h1>
        <br />
          <div className='flex justify-center items-center space-x-4 pb-8'>
            <Image src={next} width={100} height={200} alt="Next.js"/>
           <Image src={Python} width={100} height={200} alt="Python" />
           <Image src={csss} width={100} height={200} alt="CSS" />
           <Image src={javascript} width={100} height={200} alt="JavaScript" />
           <Image src={html} width={100} height={200} alt="JavaScript" />
           <Image src={sql} width={100} height={200} alt="JavaScript" />
          </div>

     <Education/>
     </div>
     <ContactForm/>

     
     

     






      


      
      
      
        

  </main>
    
  );
}
