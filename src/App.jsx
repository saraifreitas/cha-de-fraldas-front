import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import GiftList from "@/components/GiftList";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import Confetti from "@/components/Confetti";
import { Toaster } from "@/components/ui/toaster";

// Mock de dados para a lista de presentes

const sheetUrl =
  "https://script.google.com/macros/s/AKfycbySRujFfUelB7WaVrgzLyoi9FSIfF-c_CZrrT-XEdGTawPrtETKjTIlUa0QbpQxXXXl/exec";

const App = () => {
  const [gifts, setGifts] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const readUrl = sheetUrl + "?action=Read";

    fetch(readUrl, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        setGifts(
          json.map((item) => {
            return {
              id: item.id,
              gift: item.Presente,
              reserved: item.Usuario != null && item.Usuario != "",
              reservedBy: item.Usuario,
            };
          })
        );
      })
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  }, []);

  const handleReserveGift = (giftId, name) => {
    const updateUrl = sheetUrl + `?action=Update&id=${giftId}&Usuario=${name}`;

    fetch(updateUrl, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(() => {
        setGifts((prevGifts) =>
          prevGifts.map((gift) =>
            gift.id === giftId
              ? { ...gift, reserved: true, reservedBy: name }
              : gift
          )
        );

        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 4000);
      })
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col baby-bg">
      <Confetti show={showConfetti} />
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <ProgressBar gifts={gifts} />
      </motion.div>

      <main className="flex-grow">
        <GiftList gifts={gifts} onReserveGift={handleReserveGift} />
      </main>

      <Footer />
      <Toaster />
    </div>
  );
};

export default App;
