const carouselImageSubTitles = [
        [
            '42 × 29.7 cm ', 
            'Marker, ballpoint pen and gouache on paper ', 
            'Inspired by the work of Nadir Afonso'
        ],
        [
            '134 × 105 cm ', 
            'Mixed media textile: embroidery and pen on fabric'
        ],
        [
            'Series of 5 photographs ', 
            'Captured in Madeira'
        ],
        [
            'Acrylic installation composed of 16 pieces'

        ],
        [
            'Reflection on Portugal\'s youth and their future ', 
            'Embroidery and hand painted textile illustrations'
        ],
        [
            '42 × 29.7 cm ', 
            'Marker, ballpoint pen and gouache on paper ',
            'Inspired by the work of Nadir Afonso'
        ],
        [
            'Reflection on Portugal\'s youth and their future ',
            'Embroidery and hand painted textile illustrations'
        ],
        [
            'Reflection on Portugal\'s youth and their future ',
            'Embroidery and hand painted textile illustrations'
        ],
        [
            'Reflection on Portugal\'s youth and their future ', 
            'bEmbroidery and hand painted textile illustrations'
        ],
        [
            '42 × 29.7 cm ', 
            'Marker and oil pastel on paper ', 
            'Inspired by the work of Artur do Cruzeiro Seixas'
        ],
    ]



function createCircularIndex(length) {
    return {
        normalize(value) {
            // Constraint index to a valid index
            return ((value % length) + length) % length;
        },
        // Calculate offset (-x through x)
        shortestOffset(value) {
            const half = Math.floor(length / 2);
            return this.normalize(value + half) - half;
        },
    };
}

function updateSlideSubtitle(container, titles) {

    if (!container) return

    // Clear the current slide title
    container.innerHTML = ''

    titles.forEach((title) => {
        const newLine = document.createElement('p');
        newLine.innerText = title
        container.append(newLine);
    })


}


export function initCarousel() {
    const carousel = document.getElementById('carousel');
    if (!carousel) {
        return;
    }

    // Get all slide elements as a list
	const slides = [...carousel.querySelectorAll('.slide')];
    // Get the container of the slide title
    const slideTitleContainer = document.getElementById('slideTitle');

    const progressBars = [...document.querySelectorAll('#carousel-progress-bars>span')]

	const ring = createCircularIndex(slides.length);

	let currentIndex = 0;
    let lastActiveIndex = 0;
    let trackWheelMove = 0;

	function updateCarousel() {
        // Remove previous active bar
        progressBars[lastActiveIndex]?.classList.remove('active');
		
        // Update the last active index
        lastActiveIndex = currentIndex;

        // Change the offset for each carousel slide
		slides.forEach((slide) => {
			// Update each slide as needed
            const realIndex = Number(slide.dataset.realIndex)
			const offset = ring.shortestOffset(realIndex - currentIndex)
            
            // Make the current progress bar active
            progressBars[currentIndex].classList.add('active');

            // Set offset for the slide
            slide.dataset.offset = offset;
		});

        updateSlideSubtitle(slideTitleContainer, carouselImageSubTitles[currentIndex]);

        
	}

    // Initial update of the carousel to set the correct offsets.
    // The data-offset attributes are undefined in html from the start
    // updateCarousel();

    function nextSlide() {
        currentIndex = ring.normalize(currentIndex + 1);
        updateCarousel();
    }

    function prevSlide() {
        currentIndex = ring.normalize(currentIndex - 1);
        updateCarousel();
    }

    function handleWheelEvent(event) {
		event.preventDefault();
		if (event.deltaY > 0 || event.deltaX > 0) {
			trackWheelMove += 0.1;
		} else if (event.deltaY < 0 || event.deltaX < 0) {
			trackWheelMove -= 0.1;
		}

		if (trackWheelMove >= 1) {
			nextSlide();
			trackWheelMove = 0;
		} else if (trackWheelMove <= -1) {
			prevSlide();
			trackWheelMove = 0;
		}
	}

    function handleClickEvent(event) {
        const clickedSlide = event.currentTarget;
        const clickedSlideIndex = slides.indexOf(clickedSlide);
        currentIndex = ring.normalize(clickedSlideIndex);
        updateCarousel();
    }

    // Attach event listeners to the slides
    slides.forEach(slide => {
        slide.addEventListener('click', handleClickEvent);
    });
    carousel.addEventListener('wheel', handleWheelEvent, { passive: false });

    updateCarousel();

     return () => {
        slides.forEach((s) => s.removeEventListener('click', handleClickEvent));
        carousel.removeEventListener('wheel', handleWheelEvent);
    }
}