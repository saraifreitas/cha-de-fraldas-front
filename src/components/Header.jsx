import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-8 text-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            Chá de Fraldas de NOAH ou ADAH
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 rounded-full"></div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Ajude os futuros papais Rodrigo e Renata com fraldas* e mimos para o
          bebê! Escolha um item da lista abaixo e reserve seu presente.
          Agradecemos sua participação neste momento especial!
        </motion.p>
        <motion.p className="text-sm text-gray-500">
          * Sugestão de marcas: Pampers e Huggies
        </motion.p>
      </div>
    </motion.header>
  );
};

export default Header;
