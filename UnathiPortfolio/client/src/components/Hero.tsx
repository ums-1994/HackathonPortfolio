import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { useState, useEffect } from "react";

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  
  // Trigger animation after component mounts
  useEffect(() => {
    // Short delay before starting animation
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Unathi Sibanda</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            A Web Developer/Cloud Data Engineer passionate about building scalable data solutions and creating engaging web experiences
          </p>
          <SocialLinks />
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ 
              opacity: animate ? 1 : 0, 
              scale: animate ? 1 : 0.8,
              rotate: animate ? 0 : -10
            }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.img
              src="/profile_image.jpg"
              alt="Unathi Sibanda"
              className="w-full h-full object-cover"
              initial={{ filter: "grayscale(100%)" }}
              animate={{ 
                filter: animate ? "grayscale(0%)" : "grayscale(100%)",
                scale: animate ? 1 : 1.1
              }}
              transition={{ duration: 2 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}