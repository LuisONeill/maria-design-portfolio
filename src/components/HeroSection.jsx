import '../css/HeroSection.css'

function HeroSection({ imageSrc, imageAlt, className }) {
    if (!imageSrc)  return null
    if (!imageAlt)  return null
    if (!className) return null

    return (
        <div className={`hero ${className} w-[100%]`}>
            <img 
                src={imageSrc} 
                alt={imageAlt}
                loading='eager'
                fetchPriority='high'
                // decoding='sync'
                
                id="hero-image" 
                className='w-[100%]' 
            />
        </div>
    )
}

export default HeroSection