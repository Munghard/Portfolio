const PlatformLink = ({ title, description, Url, iconUrl, color }) => {

    let glowColor = "";
    switch (color) {

        case 'pink':
            glowColor = '255,0,100,0.6';
            break;
        case 'green':
            glowColor = '0,255,100,0.6';
            break;
        case 'cyan':
            glowColor = '0,100,255,0.6';
            break;
    }
    return (
        <a href={Url}
            className={`text-white! w-100 h-50 bg-zinc-950 border-2 flex flex-col items-center justify-center
                        bg-[radial-gradient(circle,rgba(75,75,75,0.75),transparent_80%)]
                    border-${color}-500/60 
                        shadow-[inset_0_0_30px_rgba(${glowColor}),0_0_10px_rgba(0,0,0,1)]
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