'use client'
import { motion } from "framer-motion";

const TypingEffect = ({ text }) => {
    return (
        text.split("").map((char, index) => (
            <motion.span
                key={index}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }} // Ensures animation runs only once
            >
                {char}
            </motion.span>
        ))
    );
};

export default TypingEffect;
