import { ArrowRight, ArrowDown } from 'lucide-react'
import { useState } from 'react';

function ProjectContentInfo({ title, paragraphs, activeTag, activeDesignSubject }) {

    const [ isTextVisible, setIsTextVisible ] = useState(false);

    // Display text and change arrow direction on small screens
    const handleReadMoreBtn = (e) => {
        const paragraphContainer = document.querySelector('#project-text-container');
        // Set read more arrow do the correct direction
        setIsTextVisible(paragraphContainer?.classList.contains('hidden'));
        paragraphContainer.classList.toggle('hidden');
    };

    // Get the tag index to make date 'active'
    const tagIndex = {
        '2023': 0,
        '2024': 1,
        '2025': 2,
        '2026': 3,
    }[activeTag?.trim()]

    // Get the subject index to make the design subject 'active'
    const designSubjectIndex = {
        'graphic design': 0,
             'fine arts': 1,
        'fashion design': 2,
        'product design': 3,
    }[activeDesignSubject?.toLowerCase().trim()]    

    return (
        <div
            id="project-content"
            className="grid grid-cols-2 md:justify-content-between gap-5 pt-[6rem] md:pt-[2rem] mb-8"
        >
            <div
                id="page-content-metadata"
                className="col-span-2 md:col-span-1"
            >
                <h1 className="mb-10 text-[4rem]">{title.toUpperCase()}</h1>
                <div className="flex flex-wrap gap-[1rem] mb-[1rem]">
                    <span
                        className={`tag text-nowrap ${tagIndex === 0 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        2023
                    </span>
                    <span
                        className={`tag text-nowrap ${tagIndex === 1 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        2024
                    </span>
                    <span
                        className={`tag text-nowrap ${tagIndex === 2 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        2025
                    </span>
                    <span
                        className={`tag text-nowrap ${tagIndex === 3 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        2026
                    </span>
                </div>
                <div className="flex flex-wrap gap-x-[1rem]">
                    <span
                        className={`tag text-nowrap ${designSubjectIndex === 0 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        Graphic Design,
                    </span>
                    <span
                        className={`tag text-nowrap ${designSubjectIndex === 1 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        Fine Arts,
                    </span>
                    <span
                        className={`tag text-nowrap ${designSubjectIndex === 2 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        Fashion Design,
                    </span>
                    <span
                        className={`tag text-nowrap ${designSubjectIndex === 3 ? 'text-stone-900' : 'text-stone-400'}`}
                    >
                        Product Design
                    </span>
                </div>
            </div>
            {/* //<!-- Button to display page text in small screens --> */}
            <button 
                id="text-display-btn" 
                className="md:hidden text-left flex " 
                onClick={handleReadMoreBtn}
            >
                <span className='me-2 place-content-center'>
                    {
                        isTextVisible ? (
                            <ArrowDown size={15} className='' aria-hidden="true"/>
                        ) : (
                            <ArrowRight size={15} className='' aria-hidden="true"/>    
                        )
                    }
                </span>
                <p className="">ABOUT THE PROJECT</p>
            </button>
            {/* <!-- Text hidden at small screens --> */}
            <div
                id="project-text-container"
                className="hidden md:block col-span-2 md:col-span-1"
            >
                {paragraphs.map((value) => {
                    return <p className='mb-[1rem] text-start text-base/7' key={value}> {value} </p>
                })}
            </div>
        </div>
    )
}

export default ProjectContentInfo
