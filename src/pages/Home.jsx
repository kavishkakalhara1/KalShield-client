import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "flowbite-react";
import Spline from "@splinetool/react-spline";

export default function Home({ text, index }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 2 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="z-10 flex flex-col max-w-6xl min-h-screen gap-6 px-3 mx-auto mt-20 p-28">
        <motion.div
          className="absolute right-0 flex justify-center float-right top-14"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 2 } }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
          whileHover={{ y: -8 }}
        >
          {/* <img
            className="flex float-right h-auto max-w-lg mt-0 overflow-hidden transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ms-auto"
            src="src/assets/hacker.png"
            alt="image description"
          /> */}
          <Spline
            scene="https://prod.spline.design/SnWScgl2fe-FO2QZ/scene.splinecode"
            className="flex h-auto mt-0 overflow-hidden transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ms-auto"
          />
        </motion.div>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "{ Empowering You to Navigate the Digital World Safely}",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "{ Empowering You to Navigate the Digital World Securely}",
            1000,
            "{ Empowering You to Navigate the Digital World Creatively}",
            1000,
            "{ Empowering You to Navigate the Digital World Confidently}",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="z-20 text-3xl font-bold lg:text-6xl"
        />

        <motion.p
          className="text-xs text-gray-400 sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 10 } }}
          exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        >
          At Baby Hacker Cyber Security, we believe that everyone should have
          the knowledge and tools to protect themselves in the digital age.
          {/* With
          the rapid advancement of technology, cybersecurity has become more
          critical than ever. Whether you're a student, a parent, a business
          owner, or simply someone who wants to stay safe online, our blog is
          here to help. */}
        </motion.p>

        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-bl-none w-80 rounded-tl-xl"
        >
          <Link to="/search">Learn More</Link>
        </Button>
      </div>

      <motion.div
        className="z-40 bg-amber-100 dark:bg-slate-700"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 200 : -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: false }}
      >
        <CallToAction />
      </motion.div>

      <motion.div
        className="flex flex-col max-w-6xl gap-8 p-3 mx-auto py-7"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: false }}
      >
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-center text-teal-500 hover:underline"
            >
              View all posts
            </Link>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
