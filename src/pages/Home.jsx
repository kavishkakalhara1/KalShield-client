import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { motion } from "framer-motion";

export default function Home() {
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
    exit={{ x:window.innerWidth, transition:{duration:0.2} }}
    >
      <div className="flex flex-col max-w-6xl gap-6 px-3 mx-auto p-28 ">
        <h1 className="text-3xl font-bold lg:text-6xl">
          Empowering You to Navigate the Digital World Safely
        </h1>
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
      </div>
      <div className="p-3 bg-amber-100 dark:bg-slate-700">
        <CallToAction />
      </div>

      <div className="flex flex-col max-w-6xl gap-8 p-3 mx-auto py-7">
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
      </div>
    </motion.div>
  );
}
