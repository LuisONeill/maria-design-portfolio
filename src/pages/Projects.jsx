import "../css/Projects.css"

// Get all images for image-marquee
const projectImages = Object.values(
  import.meta.glob("../assets/projects/*.{png,jpg,jpeg}", {
    eager: true,
    query: "?url",
    import: "default",
  })
)

// Images to display when project links are hovered.
import quotidianoPopImage from "../assets/quotidiano/42ad145535bd7cf0bda09d27b61f9c8d08eb1d96.png" 
import witPopImage        from "../assets/projects/5993ac554b4113849508e46bb004b23daee95f69.png" 
import molnartPopImage    from "../assets/molnart/hero-image.png"
import outrosPopImage     from "../assets/projects/5d5bbc0e74cf6426bf08dc325dd0850aef51fc6d.png"
import { Link } from "react-router-dom"


function Projects() {

    const projectLinks = [
        {slug: 'quotidiano', label: 'Quotidiano,'},
        {slug: 'wit', label: 'Wit,'},
        {slug: 'molnart', label: 'Molnart,'},
        {slug: 'outros', label: 'Outros'},
    ]

    return (
        <main
            id="projects-page"
            className="overflow-hidden site-container h-dvh"
        >
            {/* <!-- ================ Projects Navigation ============= --> */}
            <div
                id="menu-links-container"
                className="content-center h-8/10 flex items-start p-2 pt-[5rem] mt-8 z-3"
            >
                <h1 className="menu-links leading-[clamp(1rem,10vw,4rem)] p-3">
                    {/* Generate each project link to avoid reapeating tailwind utilities*/}
                    {
                    projectLinks.map(
                        ( { slug, label } ) => {
                            return (
                                <span key={slug} className="menu-link" data-target={slug}>
                                    <Link
                                        className="font-[Arial,Helvetica,sans-serif] text-[clamp(5rem,9vw,6.5rem)] no-underline transition-all duration-300 ease inline-block"
                                        to={`/${slug}`}
                                    >
                                        {label}
                                    </Link>
                                </span>
                            )
                        }
                    )
                    }
                </h1>
            </div>
            {/* <!-- Pop-up hover metadata / Don't display at all until medium screens --> */}
            <div id="link-hover-metadata" className="h-2/10 flex justify-between items-center text-gray-500">
                {/* <!-- Bottom Left --> */}
                <div className="">
                    <span className="pop metadata" data-target="quotidiano">
                        2026
                    </span>
                    <span className="pop metadata" data-target="wit">
                        2024
                    </span>
                    <span className="pop metadata" data-target="molnart">
                        2025
                    </span>
                    <span className="pop metadata" data-target="outros">
                        2020-2022
                    </span>
                </div>
                {/* <!-- Bottom Right --> */}
                <div className="">
                    <span className="pop metadata" data-target="quotidiano">
                        FASHION DESIGN
                    </span>
                    <span className="pop metadata" data-target="wit">
                        EDITORIAL DESIGN
                    </span>
                    <span className="pop metadata" data-target="molnart">
                        PRODUCT DESIGN
                    </span>
                    <span className="pop metadata" data-target="outros">
                        MIXED WORKS
                    </span>
                </div>
            </div>

            {/* <!-- Side scrolling images / Hide at medium screens --> */}
            <div className="image-marquee">
                <div className="image-marquee__track">
                    <div className="image-marquee__set">
                        {projectImages.map((src, index) => (
                            <img
                                key={src}
                                src={src}
                                alt={`marquee-image-${index}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {/* <!-- Background images to display when the links are hovered --> */}
            <img
                src={quotidianoPopImage}
                data-target="quotidiano"
                className="pop absolute top-1/2 left-1/2 translate-middle -translate-x-1/2 -translate-y-1/2 -z-1 object-cover h-full"
                alt=""
            />
            <img
                src={witPopImage}
                data-target="wit"
                className="pop absolute top-1/2 left-1/2 translate-middle -translate-x-1/2 -translate-y-1/2 -z-1 object-cover max-h-full max-w-full object-contain"
                alt=""
            />
            <img
                src={molnartPopImage}
                data-target="molnart"
                className="pop absolute top-1/2 left-1/2 translate-middle -translate-x-1/2 -translate-y-1/2 -z-1 object-cover max-w-[40%]"
                alt=""
            />
            <img
                src={outrosPopImage}
                data-target="outros"
                className="pop absolute top-1/2 left-1/2 translate-middle -translate-x-1/2 -translate-y-1/2 -z-1 object-cover max-w-[40%]"
                alt=""
            />
        </main>
    )
}

export default Projects;