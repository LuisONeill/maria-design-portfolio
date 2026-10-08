import { initCarousel } from "../js/carousel.js";
import { useEffect } from "react";

import '../css/Outros.css'

// Get all images for carousel component
const projectImages = Object.values(
  import.meta.glob("../assets/outros/*", {
    eager: true,
    query: "?url",
    import: "default",
  })
)

function Outros() {

    

    useEffect(() => {
        const carouselCleanup = initCarousel();
        return carouselCleanup
    }, [])

    return (
        <div className="flex flex-col justify-end h-[100svh]">
             {/* Main Title  */}
            <div className="outros-title title-left">
                <span>Other</span>
            </div>
            <div className="outros-title title-right">
                <span>Work</span>
            </div>

            {/* <!-- Caroussel --> */}
            <section className="carousel-container h-1/8">
                <div id="carousel" className="carousel h-8/10">
                    {
                        projectImages?.length > 0 ? (
                            projectImages.map((imgSrc, i) => {
                                return (
                                <div key={i} className="slide" data-real-index={i}>
                                    <img src={imgSrc} alt={`Carousel picture ${i}`} />
                                </div>
                                )
                            })
                        ) : (
                            <h1 className="p-10 text-center">Carousel images are missing</h1>
                        )
                    }
                </div>
                {/* <!-- TODO: The active bar must correspond to the index of the current slide --> */}
                <div className="h-2/10 flex flex-col justify-center">
                    <div id="slideTitle" className="carousel-description text-center text-gray-500">
                        <p>42 × 29.7 cm </p>
                        <p>Marker, ballpoint pen and gouache on paper </p>
                        <p>Inspired by the work of Nadir Afonso</p>
                    </div>
                    
                    <div id="carousel-progress-bars" className="flex gap-x-5 md:hidden" aria-label="Carousel progress bars">
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                        <span className="carousel-progress-bar w-3 h-3 rounded-full bg-gray-300"></span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Outros;