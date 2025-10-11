import {motion} from 'framer-motion'

const MButton = ({text,click})=>{
    
    return (
        <>
            <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.95}}
            
             onClick={()=>click()} className="font-bold bg-gradient-to-t from-green-600 to-lime-600
            border-2 border-green-400 hover:border-green-100
            shadow-green-600/100 shadow-lg
            rounded-xl my-5
            text-green-200
            ">{text}</motion.button>
        </>
    )
};

export default MButton;