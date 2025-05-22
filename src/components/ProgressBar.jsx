
import React from "react";
import { motion } from "framer-motion";

const ProgressBar = ({ gifts }) => {
  const totalGifts = gifts.length;
  const reservedGifts = gifts.filter(gift => gift.reserved).length;
  const percentReserved = (reservedGifts / totalGifts) * 100;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">
            Progresso das Reservas
          </span>
          <span className="text-sm font-medium text-primary">
            {reservedGifts} de {totalGifts} ({Math.round(percentReserved)}%)
          </span>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentReserved}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
