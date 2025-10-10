
const MButton = ({text})=>{
    
    return (
        <>
            <button className="font-bold bg-gradient-to-t from-green-600 to-lime-600
            border-2 border-green-400 hover:border-green-100
            shadow-green-600/100 shadow-lg
            rounded-xl my-5
            text-green-200
            ">{text}</button>
        </>
    )
};

export default MButton;