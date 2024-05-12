import { Card } from "flowbite-react";
import React from "react";
import { motion } from "framer-motion";

export default function ContactCard() {
  return (
    <div>
      <Card className="max-w-sm mx-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <div className="flex flex-col items-center pb-10">
          <img
            alt="Kalhara image"
            height="96"
            src="src\assets\my.jpg"
            width="96"
            className="mb-3 rounded-full shadow-lg"
            
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            Kavishka Kalhara
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Computer Engineering Undergraduate
          </span>
          <div className="flex mt-4 space-x-3 lg:mt-6">
            <motion.a
              href="https://wa.me/94701117791"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              target="_blank"
              whileTap={{ scale: 0.85 }}
            >
              WhatsApp
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kavishkakalhara/"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              target="_blank"
              whileTap={{ scale: 0.85 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </Card>
    </div>
  );
}
