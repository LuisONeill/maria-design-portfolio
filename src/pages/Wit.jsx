import { useEffect, useRef } from 'react'
import { PageFlip } from '../js/turn.js'

// Components
import HeroSection from '../components/HeroSection'
import ProjectContentInfo from '../components/ProjectContentInfo'

// Import magazine's front and back pages
import MagazineCoverFront from '../assets/wit/capa.jpg'
import magazineCoverBack from '../assets/wit/capa-back.jpg'
// Import all magazine inner page images and sort them out
const magazinePageImages = Object.entries(
    import.meta.glob('../assets/wit/pag*.{png,jpg,jpeg}', {
        eager: true,
        query: '?url',
        import: 'default',
    })
)
    .sort(([pathA], [pathB]) =>
        pathA.localeCompare(pathB, undefined, { numeric: true })
    )
    .map(([, src]) => src)
// Import Hero image
import HeroImage from '../assets/wit/hero-image.png'


function Wit() {
    const magazineRef = useRef(null)

    // Initialize magazine component
    useEffect(() => {
        if (!magazineRef?.current) return

        const magazine = document.getElementById('book');
        const pageFlip = new PageFlip(magazine, {
            width: 500,
            height: 700,
            size: 'stretch',
            showCover: true,
            // usePortrait: true
        });

        pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));

        // return () => {
        // }
    }, [])

    // Paragraphs for ProjectContentInfo.jsx
    const pageParagraphs = [
        "WIT is an editorial project, a fashion magazine with a contemporary and refreshed identity, conceived and developed           \
        by young creatives for a young audience. Its content reflects a current approach to trends, offering a fresh and creative      \
        perspective on the world of fashion. In this edition, the focus is on footwear. The development of the magazine involved       \
        defining a clear graphic identity, as well as designing structured and engaging layouts for each section. Particular attention \
         was given to information hierarchy, readability, and visual rhythm, ensuring a cohesive and dynamic reading experience.       \
        The cover and back cover were designed to convey a sense of segmentation while visually representing the central theme in      \
        a clean and compelling way. This approach reinforces the magazine's identity from the first point of contact with the reader.",
    ]

    return (
        <main className="">
            <HeroSection
                className={'wit-hero'}
                imageSrc={HeroImage}
                imageAlt={'Wit hero image'}
            />
            <div className="site-container ">
                <ProjectContentInfo
                    title={'wit'}
                    paragraphs={pageParagraphs}
                    activeTag={'2024'}
                    activeDesignSubject={'Graphic Design'}
                />

                {/* <!-- Magazine --> */}
                <div className="overflow-hidden">
                    <p className="text-center text-lead text-muted mb-5">
                        --Click on the pages to flip through the magazine
                        pages--
                    </p>
                    <div id='magazine-control' className="pb-10 md:w-6/10 lg:4/10 mx-auto">
                        <div id="book" ref={magazineRef} className="">
                            {/* <!-- Cover (front) --> */}
                            <div className="my-page" data-density="hard">
                                <img
                                    className=""
                                    src={MagazineCoverFront}
                                    alt=""
                                    srcSet=""
                                />
                            </div>
                            {/* Magazine pages */}
                            {magazinePageImages.map((imgSrc, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="my-page"
                                    >
                                        <img
                                            className=""
                                            src={imgSrc}
                                            alt={`Magazine page ${index}`}
                                            srcSet=""
                                        />
                                    </div>
                                )
                            })}
                            {/* <!-- Cover (back) --> */}
                            <div className="my-page" data-density="hard">
                                <img
                                    className=""
                                    src={magazineCoverBack}
                                    alt="Magazine back cover"
                                    srcSet=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Wit
