import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="py-8 border-t"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-2">
            <span className="text-gray-600 mr-2">Feito com</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="text-gray-600 ml-2">para NOAH ou ADAH</span>
          </div>
          <p className="text-sm text-gray-500">
            © 05/07/{new Date().getFullYear()} Chá de Fraldas - Rodrigo e Renata
            - Todos os direitos reservados
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
