import { useEffect } from "react"

// Components
import HeroSection from "../components/HeroSection"
import ProjectContentInfo from "../components/ProjectContentInfo"

// Images
import heroImage from "../assets/molnart/hero-image-1440.webp"
// small
import contentImage1Sm from '../assets/molnart/candeeiro-escuro-540.webp'
import contentImage2Sm from '../assets/molnart/candeeiro-claro-1-540.webp'
import contentImage3Sm from '../assets/molnart/candeeiro-claro-2-540.webp'
// medium
import contentImage1Md from '../assets/molnart/candeeiro-escuro-960.webp'
import contentImage2Md from '../assets/molnart/candeeiro-claro-1-960.webp'
import contentImage3Md from '../assets/molnart/candeeiro-claro-2-960.webp'
// large
import contentImage1Lg from '../assets/molnart/candeeiro-escuro-1440.webp'
import contentImage2Lg from '../assets/molnart/candeeiro-claro-1-1440.webp'
import contentImage3Lg from '../assets/molnart/candeeiro-claro-2-1440.webp'


function Molnart() {
    
    const contentImages = [
        {
            imgs: {
                'sm': contentImage1Sm,
                'md': contentImage1Md,
                'lg': contentImage1Lg,
            },
            alt: 'Molnart lamp in the dark',
            objectPosition: 'object-bottom'
            
        },
        {
            imgs: {
                'sm': contentImage2Sm,
                'md': contentImage2Md,
                'lg': contentImage2Lg,
            },
            alt: 'Molnart lamp in the light - paralel',
            objectPosition: ''
        },
        {
            imgs: {
                'sm': contentImage3Sm,
                'md': contentImage3Md,
                'lg': contentImage3Lg,
            },
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
                                            src={imgItem.imgs.md}
                                            srcSet={`${imgItem.imgs.sm} 540w, ${imgItem.imgs.md} 960w, ${imgItem.imgs.lg} 1440w,`} 
                                            width="1440"
                                            height="960"
                                            alt={imgItem.alt} 
                                        />
                                    </div>
                                )
                            })
                            ) : (
                                <h1>No images in contentImages</h1>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Molnart