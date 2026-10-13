// Components
import HeroSection from '../components/HeroSection'
import ProjectContentInfo from '../components/ProjectContentInfo'

import { useEffect, useRef } from 'react'


// Hero image
import heroImage from '../assets/quotidiano/1-1440.webp'
// Load image for the image layout small
import imageLayout1Sm from '../assets/quotidiano/278698382ca2ac165e5f7eafde405166574dde0b-540.webp'
import imageLayout2Sm from '../assets/quotidiano/42ad145535bd7cf0bda09d27b61f9c8d08eb1d96-540.webp'
import imageLayout3Sm from '../assets/quotidiano/78bee2c155bbd465147953afc0808538383aab68-540.webp'
import imageLayout4Sm from '../assets/quotidiano/9057e2c83beaacdfd0270c8e32d2b82680d4456e-540.webp'
import imageLayout5Sm from '../assets/quotidiano/e97b325addc1eee2ba378eb46850c0c6b7357d22-540.webp'
import imageLayout6Sm from '../assets/quotidiano/ccbbf00fa5d42aea5bcd1b1ebca08cf753b0f29a-540.webp'
import imageLayout7Sm from '../assets/quotidiano/b20469da21fd42b81a2504375d53688719179c8c-540.webp'
import imageLayout8Sm from '../assets/quotidiano/c24ab69e1648ca6580d68ccbb9b1054d089f2ede-540.webp'
// Load image for the image layout medium
import imageLayout1Md from '../assets/quotidiano/278698382ca2ac165e5f7eafde405166574dde0b-960.webp'
import imageLayout2Md from '../assets/quotidiano/42ad145535bd7cf0bda09d27b61f9c8d08eb1d96-960.webp'
import imageLayout3Md from '../assets/quotidiano/78bee2c155bbd465147953afc0808538383aab68-960.webp'
import imageLayout4Md from '../assets/quotidiano/9057e2c83beaacdfd0270c8e32d2b82680d4456e-960.webp'
import imageLayout5Md from '../assets/quotidiano/e97b325addc1eee2ba378eb46850c0c6b7357d22-960.webp'
import imageLayout6Md from '../assets/quotidiano/ccbbf00fa5d42aea5bcd1b1ebca08cf753b0f29a-960.webp'
import imageLayout7Md from '../assets/quotidiano/b20469da21fd42b81a2504375d53688719179c8c-960.webp'
import imageLayout8Md from '../assets/quotidiano/c24ab69e1648ca6580d68ccbb9b1054d089f2ede-960.webp'
// Load image for the image layout large
import imageLayout1Lg from '../assets/quotidiano/278698382ca2ac165e5f7eafde405166574dde0b-1440.webp'
import imageLayout2Lg from '../assets/quotidiano/42ad145535bd7cf0bda09d27b61f9c8d08eb1d96-1440.webp'
import imageLayout3Lg from '../assets/quotidiano/78bee2c155bbd465147953afc0808538383aab68-1440.webp'
import imageLayout4Lg from '../assets/quotidiano/9057e2c83beaacdfd0270c8e32d2b82680d4456e-1440.webp'
import imageLayout5Lg from '../assets/quotidiano/e97b325addc1eee2ba378eb46850c0c6b7357d22-1440.webp'
import imageLayout6Lg from '../assets/quotidiano/ccbbf00fa5d42aea5bcd1b1ebca08cf753b0f29a-1440.webp'
import imageLayout7Lg from '../assets/quotidiano/b20469da21fd42b81a2504375d53688719179c8c-1440.webp'
import imageLayout8Lg from '../assets/quotidiano/c24ab69e1648ca6580d68ccbb9b1054d089f2ede-1440.webp'


// Load image for the image layout
import slideImage1 from '../assets/quotidiano/3d220ae96bb436f5cf513ffd0b405a1855de1872-540.webp'
import slideImage2 from '../assets/quotidiano/0097c15fad878026ed04ab30d86cc53cb14e0036-540.webp'
import slideImage3 from '../assets/quotidiano/6aac14d8a65c52245dc0b44ce7fee274c04a9edb-540.webp'
import slideImage4 from '../assets/quotidiano/d5b6a50e6f3deab289d829bad4ccf71644c58b35-540.webp'
import slideImage5 from '../assets/quotidiano/5afcaa5c2469be0e73a2cbbd9b5f39c0f944b774-540.webp'
import slideImage6 from '../assets/quotidiano/d154a76a2a658c1eeb9085d6de2c7a7220e287f3-540.webp'
import slideImage7 from '../assets/quotidiano/4c61e2aed9597fccd4b8e44d3903f020545c827d-540.webp'
import slideImage8 from '../assets/quotidiano/b0c43ee55ef03b16c918ca43858e099b506d6153-540.webp'
import slideImage9 from '../assets/quotidiano/7407e0dc64b6e74b09ab1ea48e19aaf5a6a7caec-540.webp'
import slideImage10 from '../assets/quotidiano/686a741587d375d29b86e3616660b4ecd6eca09e-540.webp'

// Load image for the image layout
import slideImage1Md from '../assets/quotidiano/3d220ae96bb436f5cf513ffd0b405a1855de1872-960.webp'
import slideImage2Md from '../assets/quotidiano/0097c15fad878026ed04ab30d86cc53cb14e0036-960.webp'
import slideImage3Md from '../assets/quotidiano/6aac14d8a65c52245dc0b44ce7fee274c04a9edb-960.webp'
import slideImage4Md from '../assets/quotidiano/d5b6a50e6f3deab289d829bad4ccf71644c58b35-960.webp'
import slideImage5Md from '../assets/quotidiano/5afcaa5c2469be0e73a2cbbd9b5f39c0f944b774-960.webp'
import slideImage6Md from '../assets/quotidiano/d154a76a2a658c1eeb9085d6de2c7a7220e287f3-960.webp'
import slideImage7Md from '../assets/quotidiano/4c61e2aed9597fccd4b8e44d3903f020545c827d-960.webp'
import slideImage8Md from '../assets/quotidiano/b0c43ee55ef03b16c918ca43858e099b506d6153-960.webp'
import slideImage9Md from '../assets/quotidiano/7407e0dc64b6e74b09ab1ea48e19aaf5a6a7caec-960.webp'
import slideImage10Md from '../assets/quotidiano/686a741587d375d29b86e3616660b4ecd6eca09e-960.webp'

// CSS
import '../css/Quotidiano.css'


// ============= Slideshow scroll handler on small screens =============
function handleWheel(event) {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return
    }

    const scroller = event.currentTarget

    const isAtStart = scroller.scrollLeft <= 0
    const isAtEnd =
        scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 1

    const scrollingRight = event.deltaY > 0

    const canScrollHorizontally =
        (scrollingRight && !isAtEnd) || (!scrollingRight && !isAtStart)
    if (!canScrollHorizontally) {
        return // Let the page scroll at either end.
    }

    event.preventDefault()
    scroller.scrollLeft += event.deltaY
}

// ============= Slideshow presentation on small screens =============
function initSlideshow(animationTimerSec = 2) {
    const slideshow = document.querySelector('.slideshow')
    if (!slideshow) {
        return
    }
    const slides = slideshow?.querySelectorAll('.slideshow .slide')
    const bars = slideshow?.querySelectorAll('.bar')
    let currentIndex = 0

    // Medium screen query for slideshow
    const slideShowQuery = window.matchMedia('(max-width: 768px)')
    let slideShowTimer

    function activateSlide(index) {
        bars.forEach((bar, barIndex) => {
            bar.classList.toggle('active', barIndex === index)
        })

        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle('active', slideIndex === index)
        })
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % bars.length
        activateSlide(currentIndex)
    }

    function startSlideShow() {
        activateSlide(currentIndex)
        slideShowTimer = setInterval(nextSlide, animationTimerSec * 1000)
    }

    function stopSlideShow() {
        clearInterval(slideShowTimer)
        slideShowTimer = null
    }

    function updateSlideShowForMediumScreen() {
        if (slideShowQuery.matches) {
            startSlideShow()
        } else {
            stopSlideShow()
        }
    }

    slideShowQuery.addEventListener('change', updateSlideShowForMediumScreen)
    updateSlideShowForMediumScreen(slideShowQuery)
}

function Quotidiano() {
    const slideRef = useRef(null)

    // Initialize event listner after page has loaded
    useEffect(() => {
        const scroller = slideRef.current
        if (!scroller) return null

        scroller.addEventListener('wheel', handleWheel, { passive: false })
        return () => scroller.removeEventListener('wheel', handleWheel)
    }, [])

    useEffect(() => {
        // Timer must match css bars animation
        initSlideshow(2)
    }, [])

    const slideImages = [
        {'sm': slideImage1, 'md': slideImage1Md},
        {'sm': slideImage2, 'md': slideImage2Md},
        {'sm': slideImage3, 'md': slideImage3Md},
        {'sm': slideImage4, 'md': slideImage4Md},
        {'sm': slideImage5, 'md': slideImage5Md},
        {'sm': slideImage6, 'md': slideImage6Md},
        {'sm': slideImage7, 'md': slideImage7Md},
        {'sm': slideImage8, 'md': slideImage8Md},
        {'sm': slideImage9, 'md': slideImage9Md},
        {'sm': slideImage10, 'md': slideImage10Md}
    ]

    // Paragraphs for ProjectContentInfo component
    const pageParagraphs = [
        'This project emerged from exploratory exercises, focusing on wandering through the city and observing what is found \
                    along the way. It reflects on the growing presence of pollution in public spaces, a collective and everyday reality.',

        ' By collecting discarded materials such as plastic bottles, cups, cans, lighters, (…), the project transforms waste into \
                    a creative resource. Through textile and fashion design, it aims to communicate a message about environmental awareness, \
                    highlighting how clothing can function not only as a daily necessity but also as a medium of expression.',

        "Using the shapes and transparencies of these found objects, cyanotype techniques are applied to create unique patterns \
                    on fabric. The final outcome consists of two contemporary, wearable garments designed for everyday use. After the \
                    process, all collected materials are properly recycled, reinforcing the project's sustainable approach.",
    ]

    return (
        <main className="quotidiano-page">
            <HeroSection
                imageSrc={heroImage}
                imageAlt={'Quotidiano Hero Image'}
                className={'quotidiano-hero'}
            />
            <div className="site-container">
                <ProjectContentInfo
                    title={'Quotidiano'}
                    paragraphs={pageParagraphs}
                    activeTag={'2026'}
                    activeDesignSubject={'Fashion Design'}
                />

                {/* <!-- Images Grid layout --> */}
                <div className="grid grid-cols-12 py-3 gap-5">
                    <div className="col-span-6 md:col-span-12">
                        <img
                            src={imageLayout1Md}
                            srcSet={`${imageLayout1Sm} 540w, ${imageLayout1Md} 960w, ${imageLayout1Lg} 1140w`}
                            sizes="(max-width: 760px) 50vw, 100vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                        <img
                            src={imageLayout2Md}
                            srcSet={`${imageLayout2Sm} 540w, ${imageLayout2Md} 960w, ${imageLayout2Lg} 1140w`}
                            sizes="(max-width: 760px) 50vw, 30vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                        <img
                            src={imageLayout3Md}
                            srcSet={`${imageLayout3Sm} 540w, ${imageLayout3Md} 960w, ${imageLayout3Lg} 1140w`}
                            sizes="(max-width: 760px) 50vw, 30vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="col-span-6 md:col-span-4">
                        <img
                            src={imageLayout4Md}
                            srcSet={`${imageLayout4Sm} 540w, ${imageLayout4Md} 960w, ${imageLayout4Lg} 1140w`}
                            sizes="(max-width: 760px) 50vw, 30vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="col-span-12">
                        <img
                            src={imageLayout5Md}
                            srcSet={`${imageLayout5Sm} 540w, ${imageLayout5Md} 960w, ${imageLayout5Lg} 1140w`}
                            sizes="100vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                </div>
                <div className="py-3 grid grid-cols-12 grid-rows-12 gap-5">
                    <div className="col-span-6 row-span-6">
                        <img
                            src={imageLayout6Md}
                            srcSet={`${imageLayout6Sm} 540w, ${imageLayout6Md} 960w, ${imageLayout6Lg} 1140w`}
                            sizes="50vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="col-span-6 row-span-12">
                        <img
                            src={imageLayout7Md}
                            srcSet={`${imageLayout7Sm} 540w, ${imageLayout7Md} 960w, ${imageLayout7Lg} 1140w`}
                            sizes="(max-width: 760px) 50vw, 100vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                    <div className="col-span-6 row-span-6">
                        <img
                            src={imageLayout8Md}
                            srcSet={`${imageLayout8Sm} 540w, ${imageLayout8Md} 960w, ${imageLayout8Lg} 1140w`}
                            sizes="50vw"
                            width="1440"
                            height="960"
                            alt=""
                            className="w-[100%] h-[100%] object-cover"
                        />
                    </div>
                </div>
                {/* End of Images Layout */}

                {/* <!-- Slideshow --> */}
                <section className="slideshow flex flex-col w-full h-[100vh] py-10 md:h-auto gap-3 my-5 md:py-2 my-auto">
                    <div
                        ref={slideRef}
                        className="slideshow-slides h-full w-full md:relative md:flex md:flex-row md:w-full md:h-[500px] gap-4 md:overflow-x-auto md:overflow-y-hidden md:scrollbar-none"
                    >
                        {
                            slideImages.map((imgSrc, i) => {
                                return (
                                    <img
                                        key={i}
                                        className="slide w-full max-h-full hidden object-cover md:static md:block md:grow-0 md:w-auto md:shrink-0 md:basis-[300px] object-cover"
                                        src={imgSrc.sm}
                                        srcSet={`${imgSrc.sm} 590w, ${imgSrc.sm} 960w`}
                                        sizes='(max-width: 760px) 100vw, 60vw'
                                        alt={`Slide image ${i}`}
                                    />
                                )
                            }) 
                        }
                        
                    </div>

                    <div
                        className="bars flex gap-x-3 align-center justify-around md:hidden"
                        aria-label="Slideshow progress"
                    >
                        <span className="bar relative w-full h-1 bg-stone-300 active"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                        <span className="bar relative w-full h-1 bg-stone-300"></span>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Quotidiano
