
import React from "react";
import { motion } from "framer-motion";
import GiftCard from "@/components/GiftCard";

const GiftList = ({ gifts, onReserveGift }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {gifts.map((gift) => (
            <GiftCard 
              key={gift.id} 
              gift={gift} 
              onReserve={onReserveGift} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GiftList;
