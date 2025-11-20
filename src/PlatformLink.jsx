const PlatformLink = ({ title, description, Url, iconUrl, color }) => {

    let glowColor = "";
    let borderColor = "";
    switch (color) {

        case 'pink':
            borderColor = 'border-pink-500/60';
            glowColor = 'shadow-[inset_0_0_30px_rgba(255,0,100,0.6),0_0_10px_rgba(0,0,0,1)]';
            break;
        case 'green':
            borderColor = 'border-green-500/60';
            glowColor = 'shadow-[inset_0_0_30px_rgba(0,255,100,0.6),0_0_10px_rgba(0,0,0,1)]';
            break;
        case 'cyan':
            borderColor = 'border-blue-500/60';
            glowColor = 'shadow-[inset_0_0_30px_rgba(0,100,255,0.6),0_0_10px_rgba(0,0,0,1)]';
            break;
    }
    return (
        <a href={Url}
            className={`text-white! w-100 h-50 bg-zinc-950 border-2 flex flex-col items-center justify-center
                        bg-[radial-gradient(circle,rgba(75,75,75,0.75),transparent_80%)]
                        ${borderColor} 
                        ${glowColor}
        `}>
            <div className="flex gap-2">
                <img className="w-12 h-12" src={iconUrl}></img>
                <div className="flex flex-col gap-2">

                    <h1 className='text-3xl text-zinc-100'>{title}</h1>
                    <p className="text-zinc-400">{description}</p>
                </div>
            </div>
        </a>
    )
}

export default PlatformLink;