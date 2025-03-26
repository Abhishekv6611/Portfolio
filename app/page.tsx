"use client";
import { useEffect, useState } from "react";
import Banner from "./component/Banner";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Projects from "./component/Projects";
import SkillCard from "./component/SkillCard";
import { motion } from "framer-motion";

export default function Home() {
  const nameText = "WELCOME";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true); 

  useEffect(() => {
    if (index < nameText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + nameText[index]);
        setIndex(index + 1);
      }, 200); // Speed reduced for better effect
      return () => clearTimeout(timeout);
    } else {
      // Show welcome text for 1.5s, then show portfolio
      setTimeout(() => {
        setShowWelcome(false);
      }, 1500);
    }
  }, [index, nameText]);

  return (
    <>
      {showWelcome ? (
        <div className="flex justify-center items-center h-screen text-white">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-9xl font-bold"
          >
            {displayText}
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.h2>
        </div>
      ) : (
        <div className="w-full overflow-x-hidden">
          <nav className="bg-white p-1 w-full">
            <div className="text-center">
              <h2 className="text-2xl">Abhishek - Portfolio</h2>
            </div>
          </nav>

          <section className="mt-10 flex flex-col justify-center items-center md:flex-row gap-10">
            <Banner />
          </section>

          <section className="mt-20 flex flex-col justify-center items-center">
            <SkillCard />
          </section>
          <section className="mt-20 flex flex-col justify-center items-center">
            <Projects />
          </section>
          <section className="mt-20 flex flex-col justify-center items-center">
            <Contact />
          </section>
          <section className="mt-20 flex flex-col justify-center items-center">
            <Footer />
          </section>
        </div>
      )}
    </>
  );
}
