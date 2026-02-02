"use client";
import { ArrowRight, Bike, ShoppingBag, ShoppingBasket } from "lucide-react";
import { motion } from "motion/react";
type propType = { nextStep: (s: number) => void };

const Welcome = ({ nextStep }: propType) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center gap-3"
      >
        <ShoppingBag className=" w-10 h-9 text-blue-500" />
        <h1 className="text-4xl md:text-5xl mb-5 font-extrabold text-blue-500">
          Eatoo
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        className="mt-4 text-gray-700 text-lg md:text-xl max-w-lg"
      >
        One stop for Shopping fresh groceries , organic products, and daily
        essentials delivered to your door step
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.8,
          delay: 0.6,
        }}
        className="flex items-center justify-center gap-2 mt-10"
      >
        <ShoppingBasket className="w-24 h-24 md:w-32 text-blue-500 drop-shadow-md" />
        <Bike className="w-24 h-24 md:w-32 text-orange-500 drop-shadow-md" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 30, scale: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 0.9,
        }}
        transition={{
          duration: 0.8,
          delay: 0.7,
        }}
        className="inline-flex items-center bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-2xl shadow-md transition-all duration-200 mt-10 gap-2 mt-10"
        onClick={() => nextStep(2)}
      >
        Next <ArrowRight />
      </motion.button>
    </div>
  );
};

export default Welcome;
