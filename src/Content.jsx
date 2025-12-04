import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MButton from './MButton'
const Content = ({ delay, title, img, txt }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="backdrop-blur-sm fixed inset-0 bg-black/70 bg-opacity-75 flex items-center justify-center z-50 " onClick={() => setIsOpen(false)}>
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative">
                            <img src={img} alt="Enlarged" className="max-w-full max-h-full" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: delay / 5 }}
                viewport={{ once: false, amount: 0.3 }}
                className='w-76 border-2 border-green-800 bg-zinc-800 rounded-sm hover:bg-zinc-700 p-5 shadow-[0_30px_30px_rgba(0,0,0,0.6),inset_0_0_64px_rgba(0,0,0,0.6)] '>
                <h1 className="text-2xl mb-4 text-green-400/80 font-bold">{title}</h1>
                {img &&
                    <img onClick={() => setIsOpen(true)} src={img} className="border-2 border-green-800 rounded-md w-64 h-64 object-cover mb-5 " alt="img" />
                }
                {!img &&
                    <div className="border-2 border-green-800 w-64 h-64 object-cover mb-5 bg-zinc-700" />
                }
                <p className="text-gray-400">{txt}</p>
                {/* <MButton text={title}></MButton> */}
            </motion.div>

        </>
    )

}
export default Content