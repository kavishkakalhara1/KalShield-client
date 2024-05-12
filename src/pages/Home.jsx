import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="z-10 flex flex-col max-w-6xl min-h-screen gap-6 px-3 mx-auto p-28">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "{Empowering You to Navigate the Digital World Safely}",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "{Empowering You to Navigate the Digital World Securely}",
            1000,
            "{Empowering You to Navigate the Digital World Creatively}",
            1000,
            "{Empowering You to Navigate the Digital World Confidently}",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-3xl font-bold lg:text-6xl"
        />

        <p className="text-xs text-gray-400 sm:text-sm">
          At Baby Hacker Cyber Security, we believe that everyone should have
          the knowledge and tools to protect themselves in the digital age. With
          the rapid advancement of technology, cybersecurity has become more
          critical than ever. Whether you're a student, a parent, a business
          owner, or simply someone who wants to stay safe online, our blog is
          here to help.
        </p>
        <Link
          to="/search"
          className="text-xs font-bold text-teal-500 sm:text-sm hover:underline"
        >
          View all posts
        </Link>
        <div className="absolute right-0 flex justify-center top-8">
          <img
            className="flex float-right h-auto max-w-lg mt-0 overflow-hidden transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 ms-auto"
            src="src/assets/me12.png"
            alt="image description"
          />
        </div>
      </div>
      

      <motion.div
        className="z-20 p-3 bg-amber-100 dark:bg-slate-700"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 200 : -200,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 2, // Animation duration
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
            duration: 2, // Animation duration
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
