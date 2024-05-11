import { Card } from "flowbite-react";
import KalShield from "../assets/my.jpg";
import ContactCard from "../components/ContactCard";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="flex flex-col p-3 mx-auto text-center max-w-7xl md:flex-row">
        <div className="flex-1 md:mr-6">
          <h1 className="mt-0 mb-6 text-3xl font-semibold text-center font">
            What is Baby Hacker's Blog
          </h1>
          <div className="flex flex-col gap-6 text-gray-500 text-md">
            <p>
              Welcome to Baby Hacker Cyber Security, founded by Kavishka
              Kalhara, a passionate Computer Engineering undergraduate at the
              University of Ruhuna with a keen interest in cybersecurity.
            </p>

            <p>
              At Baby Hacker, we are driven by a shared passion for
              cybersecurity and a commitment to fostering a safer digital world.
              With Kavishka's expertise and dedication, our blog serves as a hub
              for insightful content, practical tips, and engaging discussions
              on all things cybersecurity.
            </p>

            <p>
              From beginner-friendly guides to advanced security strategies,
              Baby Hacker offers a diverse range of content tailored to meet the
              needs of learners at every stage of their cybersecurity journey.
              Whether you're a fellow student, a concerned parent, or simply
              someone curious about the world of cybersecurity, you'll find
              valuable resources and support within our community.
            </p>
            <p>
              Join us as we explore the fascinating world of cybersecurity
              together, guided by Kavishka's expertise and fueled by our
              collective passion for learning and innovation. Together, we can
              build a safer and more secure digital future.
            </p>
          </div>
        </div>
        <div className="flex-1 mx-auto mt-7 md:ml-6">
          <ContactCard />
        </div>
      </div>
    </motion.div>
  );
}
