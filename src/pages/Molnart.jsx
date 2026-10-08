import { useEffect } from "react"

// Components
import HeroSection from "../components/HeroSection"
import ProjectContentInfo from "../components/ProjectContentInfo"

// Images
import heroImage from "../assets/molnart/hero-image.png"
import contentImage1 from '../assets/molnart/candeeiro-escuro.png'
import contentImage2 from '../assets/molnart/candeeiro-claro-1.png'
import contentImage3 from '../assets/molnart/candeeiro-claro-2.png'


function Molnart() {
    
    const contentImages = [
        {
            img: contentImage1,
            alt: 'Molnart lamp in the dark',
            objectPosition: 'object-bottom'
            
        },
        {
            img: contentImage2,
            alt: 'Molnart lamp in the light - paralel',
            objectPosition: ''
        },
        {
            img: contentImage3,
            alt: 'Molnart lamp in the light - diagonal',
            objectPosition: ''
        },
    ]

    const paragraphs = [
        "This project originated from a laboratory exercise, proposing a fictional collaboration \
        between the Swedish brand IKEA and designer Thomas Vincent, founder of BằNG. The final   \
        product merges the designer's formal and aesthetic language, particularly inspired by    \
        the Lop ORANGE acrylic lamp. Constructed from layered panels with varied cut-outs, the   \
        piece takes the form of a parallelepiped, reflecting Vincent's characteristic geometric  \
        precision and visual clarity."
    ]

    return (
        <div className="">
            <HeroSection 
                imageSrc={heroImage}
                imageAlt={'Molnart lamp hero image'}
                className={'molnart-hero'}
            />
            <div className="site-container">
                <ProjectContentInfo 
                    title={'Molnart'}
                    paragraphs={paragraphs}
                    activeTag={'2025'}
                    activeDesignSubject={'Product Design'}
                />
                <div className="w-full my-10">
                    {/* New */}
                    {
                        contentImages.length > 0 ?
                            (contentImages.map((imgItem, i) => {
                                return (
                                    <div key={i} className="mb-10">
                                        <img 
                                            className={`block h-full w-full object-contain ${imgItem.objectPosition}`}
                                            src={imgItem.img} 
                                            alt={imgItem.alt} 
                                        />
                                    </div>
                                )
                            })
                            ) : (
                                <h1>No images in contentImages</h1>
                            )
                    }



                    {/* Old */}
                    {/* <div className="mb-10">
                        <img 
                            className="block h-full w-full object-bottom max-h-[500px] object-cover"
                            src={contentImage1} 
                            alt="Molnart lamp dark" 
                        />
                    </div>
                    <div className="mb-10">
                        <img 
                            className="block h-full w-full max-h-[500px] object-cover" 
                            src={contentImage2} 
                            alt="Molnart lamp light straight" 
                        />
                    </div>
                    <div className="mb-5 ">
                        <img 
                            className="block h-full w-full max-h-[500px] object-cover" 
                            src={contentImage3} 
                            alt="Molnart lamp light skewed" 
                        />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Molnart