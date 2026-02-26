import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', index = 0, ...props }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass rounded-xl p-6 hover:-translate-y-2 transition-transform duration-300 ${className}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
