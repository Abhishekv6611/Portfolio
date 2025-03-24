import Banner from "./component/Banner";
import Conatct from "./component/Contact";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import SkillCard from "./component/SkillCard";

export default function Home() {
  return (
    <>
    <div className="w-full overflow-x-hidden">

     <nav className="bg-white p-1 w-full">
      <div className="text-center">
      <h2 className="text-2xl">Abhishek - Portfolio</h2>
      </div>
     </nav>

     <section className="mt-10 flex flex-col justify-center items-center md:flex-row gap-10 justify-evenly ">  
          <Banner/>
     </section>

     <section className="mt-20 flex flex-col justify-center items-center">
       <SkillCard/>
     </section>
     <section className="mt-20 flex flex-col justify-center items-center">
       <Projects/>
     </section>
     <section className="mt-20 flex flex-col justify-center items-center">
       <Conatct/>
     </section>
     <section className="mt-20 flex flex-col justify-center items-center">
       <Footer/>
     </section>
    </div>
    </>
  );
}
