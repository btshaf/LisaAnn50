document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshow-container');
    const initialSlide = document.getElementById('initial-slide');
    const backgroundMusic1 = document.getElementById('background-music-1');
    const backgroundMusic2 = document.getElementById('background-music-2');

    const imageURLs = [
        "https://btshaf.github.io/LisaAnn50/IMG_0002.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_0186.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_0190.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1249.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1254.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1275.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1681.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1682.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1683.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1684.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1685.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1686.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1687.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1688.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1689.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1690.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1691.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_1692.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_1732.heic", // Remember HEIC compatibility note
        "https://btshaf.github.io/LisaAnn50/IMG_7262.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8390.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_8429.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_8583.HEIC", // Remember HEIC compatibility note
        "https://btshaf.github.io/LisaAnn50/IMG_8609.HEIC", // Remember HEIC compatibility note
        "https://btshaf.github.io/LisaAnn50/IMG_8624.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8625.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8626.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8627.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8629.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8630.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8631.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8666.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8671.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_8752.jpeg"
    ];

    // Grouped reasons by contributor for randomization
    const reasonsByContributor = {
        "Brad": [
            { text: "I love how even though we live across the country, she checks in when I'm going through something whether it's being sick, dealing with career stuff, or personal challenges. 💖", contributor: "Brad" },
            { text: "I love how she was my friend and gave me a social circle during that year I left IU. She didn't have to do that, but I'll always be grateful for it. 🙏", contributor: "Brad" },
            { text: "I love that she has a heart of gold. Obviously. ✨", contributor: "Brad" },
            { text: "I love how she shows up for her friends, her family, and her clients. She's reliable, present, and generous with her time and energy. 🌟", contributor: "Brad" },
            { text: "I love how strong she has proven to be for herself and her kids. 💪", contributor: "Brad" },
            { text: "I love that she was such a fucking boss in 8th grade with her vodka hair spray. 🍾💅", contributor: "Brad" }
        ],
        "Stacey": [
            { text: "I love how she's raising her kids and guiding them to become amazing humans. 👨‍👩‍👧‍👦", contributor: "Stacey" },
            { text: "I love the relationship she's developed with Boston and the effort she makes to stay connected with him. ❤️‍🩹", contributor: "Stacey" },
            { text: "I love that she makes her kids eat everything and that there are 'consequences to their bullfuckery' if they don't. 😂🍽️", contributor: "Stacey" },
            { text: "I love how she helps strangers whether it's someone in trouble or someone unhoused, she doesn't look away. She steps up. 🤝", contributor: "Stacey" }
        ],
        "Scott Spooner": [
            { text: "Considerate 😊", contributor: "Scott Spooner" },
            { text: "Honest 💯", contributor: "Scott Spooner" },
            { text: "Great fun at parties 🎉", contributor: "Scott Spooner" },
            { text: "Caring mother 👩‍👧‍👦", contributor: "Scott Spooner" },
            { text: "No nonsense at work 💼", contributor: "Scott Spooner" },
            { text: "Friendly 👋", contributor: "Scott Spooner" },
            { text: "Follower of the Golden Rule ✨", contributor: "Scott Spooner" }
        ],
        "Dan & Pat Shaffer": [
            { text: "A great example of how a mom should love her kids 💖", contributor: "Dan & Pat Shaffer" },
            { text: "Makes holidays special for her children 🎄🎁", contributor: "Dan & Pat Shaffer" },
            { text: "Encourages her kids to do their best 👍", contributor: "Dan & Pat Shaffer" },
            { text: "Loves on other children, too — especially troubled kids 🫂", contributor: "Dan & Pat Shaffer" },
            { text: "Sees potential in kids others overlook 🌱", contributor: "Dan & Pat Shaffer" },
            { text: "Cherishes her grandmother’s memory 👵🤍", contributor: "Dan & Pat Shaffer" }
        ],
        "Uncle Dave & Aunt Carolyn": [
            { text: "Tough love balanced with deep affection 🤗", contributor: "Uncle Dave & Aunt Carolyn" },
            { text: "Encourages her kids’ interests 🎨⚽", contributor: "Uncle Dave & Aunt Carolyn" },
            { text: "Lovely, loving, lively, likeable, lean, lone daughter 🥰", contributor: "Uncle Dave & Aunt Carolyn" },
            { text: "Embodys the larkspur flower: love, positivity, open-mindedness 🌸", contributor: "Uncle Dave & Aunt Carolyn" }
        ],
        "Sarah": [
            { text: "Always makes time for family 👨‍👩‍👧‍👦⏰", contributor: "Sarah" },
            { text: "Reaches out when in town 👋", contributor: "Sarah" },
            { text: "Keeps connections strong 💪", contributor: "Sarah" },
            { text: "Has great style and energy 💃✨", contributor: "Sarah" },
            { text: "Makes 50 look fun 🥳", contributor: "Sarah" }
        ],
        "Amy (Cousin)": [
            { text: "Always down for anything fun 🎉", contributor: "Amy (Cousin)" },
            { text: "Kind and compassionate ❤️", contributor: "Amy (Cousin)" },
            { text: "Amazing momma 👑👩‍👧‍👦", contributor: "Amy (Cousin)" },
            { text: "Resilient 🌱", contributor: "Amy (Cousin)" },
            { text: "Straightforward 🗣️", contributor: "Amy (Cousin)" },
            { text: "Values family 👨‍👩‍👧‍👦", contributor: "Amy (Cousin)" },
            { text: "Gives zero fucks (in the best way) 😎", contributor: "Amy (Cousin)" }
        ],
        "Mic & Larry (Aunt & Uncle)": [
            { text: "“Bestest” niece and Goddaughter ever! 🥰", contributor: "Mic & Larry (Aunt & Uncle)" },
            { text: "Chose a career helping others early in life 🩺", contributor: "Mic & Larry (Aunt & Uncle)" },
            { text: "Rose to personal challenges with strength 🚀", contributor: "Mic & Larry (Aunt & Uncle)" },
            { text: "Adopted and raised 3 kids with love and stability 👨‍👩‍👧‍👦❤️", contributor: "Mic & Larry (Aunt & Uncle)" },
            { text: "Gave them a forever family 🏠", contributor: "Mic & Larry (Aunt & Uncle)" },
            { text: "A source of pride and deep love 🙏", contributor: "Mic & Larry (Aunt & Uncle)" }
        ],
        "Troy & Kelly": [
            { text: "Always sees the good in people 😇", contributor: "Troy & Kelly" },
            { text: "Helped countless kids have better lives 🌟", contributor: "Troy & Kelly" },
            { text: "Provides fun, new experiences for her kids 🤩", contributor: "Troy & Kelly" },
            { text: "Bought her brother beer before he was legal 🍻🤫", contributor: "Troy & Kelly" },
            { text: "Sat with him during a bad mushroom trip 🍄‍🟫😅", contributor: "Troy & Kelly" }
        ],
        "Lisa’s Mom & Dad": [
            { text: "Made her mom a mother 🤱", contributor: "Lisa’s Mom & Dad" },
            { text: "Has a zest for life 🥳", contributor: "Lisa’s Mom & Dad" },
            { text: "Loves country music 🤠🎶", contributor: "Lisa’s Mom & Dad" },
            { text: "Has a beautiful smile 😁", contributor: "Lisa’s Mom & Dad" },
            { text: "Desires to please everyone 🤗", contributor: "Lisa’s Mom & Dad" },
            { text: "Determined to be the best mom 🥇", contributor: "Lisa’s Mom & Dad" },
            { text: "Willing to help when needed 🤝", contributor: "Lisa’s Mom & Dad" },
            { text: "Has a positive attitude ✨", contributor: "Lisa’s Mom & Dad" },
            { text: "Generous 💝", contributor: "Lisa’s Mom & Dad" },
            { text: "Has a great laugh 😂", contributor: "Lisa’s Mom & Dad" },
            { text: "Loves espresso martinis 🍸", contributor: "Lisa’s Mom & Dad" },
            { text: "Passionate about golf ⛳", contributor: "Lisa’s Mom & Dad" }
        ],
        "Stella (Daughter)": [
            { text: "Loves me ❤️", contributor: "Stella (Daughter)" },
            { text: "Takes care of me 🤗", contributor: "Stella (Daughter)" },
            { text: "Wants me to be a better person 🌱", contributor: "Stella (Daughter)" },
            { text: "Helps me be a better person 🌟", contributor: "Stella (Daughter)" },
            { text: "Is absolutely amazing 🤩", contributor: "Stella (Daughter)" }
        ],
        "Nichole & Tam (Best Friends)": [
            { text: "We love how she loves 🥰", contributor: "Nichole & Tam (Best Friends)" },
            { text: "We love when we recap the night before and laugh hysterically 😂", contributor: "Nichole & Tam (Best Friends)" },
            { text: "Love her authentic laugh when something is super funny 🤣", contributor: "Nichole & Tam (Best Friends)" },
            { text: "Love her outfits 👗👠", contributor: "Nichole & Tam (Best Friends)" },
            { text: "She is fearless 🦁", contributor: "Nichole & Tam (Best Friends)" },
            { text: "Admire how she is unapologetically her genuine self 👑", contributor: "Nichole & Tam (Best Friends)" }
        ]
    };

    // Prepare reason blocks for randomization
    const reasonGroups = Object.keys(reasonsByContributor).map(contributor => reasonsByContributor[contributor]);

    // Shuffle the reason groups
    for (let i = reasonGroups.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [reasonGroups[i], reasonGroups[j]] = [reasonGroups[j], reasonGroups[i]]; // Swap
    }

    // Flatten the randomized groups into a single list of reason slides, breaking long ones
    const reasonSlides = [];
    reasonGroups.forEach(group => {
        let currentSlideReasons = [];
        group.forEach(reason => {
            currentSlideReasons.push(reason);
            // Limit 2-3 reasons per text slide to keep it readable
            if (currentSlideReasons.length >= 2 && currentSlideReasons.length <= 3) {
                reasonSlides.push({
                    type: 'text-group',
                    reasons: [...currentSlideReasons], // Push a copy
                    contributor: currentSlideReasons[0].contributor // Use first reason's contributor for display
                });
                currentSlideReasons = []; // Reset for next slide
            }
        });
        // Add any remaining reasons in the current group as a slide
        if (currentSlideReasons.length > 0) {
            reasonSlides.push({
                type: 'text-group',
                reasons: currentSlideReasons,
                contributor: currentSlideReasons[0].contributor
            });
        }
    });


    const allSlidesContent = []; // Initial slide is now in HTML, so this array only holds content slides
    let imageIndex = 0;
    let reasonSlideIndex = 0;

    // Interleave images and reason blocks
    while (imageIndex < imageURLs.length || reasonSlideIndex < reasonSlides.length) {
        if (imageIndex < imageURLs.length) {
            allSlidesContent.push({ type: 'image', url: imageURLs[imageIndex] });
            imageIndex++;
        }
        if (reasonSlideIndex < reasonSlides.length) {
            allSlidesContent.push(reasonSlides[reasonSlideIndex]);
            reasonSlideIndex++;
        }
    }


    // Calculate duration per slide based on total music length
    // Song 1: 3 minutes 48 seconds = 228 seconds
    // Song 2: 4 minutes 18 seconds = 258 seconds
    const totalMusicDurationSeconds = 228 + 258; // Total 486 seconds
    const numberOfSlides = allSlidesContent.length; // This is the count of image + reason slides
    const durationPerSlide = totalMusicDurationSeconds / numberOfSlides * 1000; // in milliseconds

    let slideshowInterval;
    let paused = false; // New state variable for pause/play
    let currentSlideIndex = 0; // Start at 0 for the first content slide (after initial)

    function createContentSlideElement(content) {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        if (content.type === 'image') {
            const img = document.createElement('img');
            img.src = content.url;
            slideDiv.appendChild(img);
        } else if (content.type === 'text-group') {
            content.reasons.forEach(reason => {
                const reasonText = document.createElement('p');
                reasonText.classList.add('reason-text');
                reasonText.textContent = reason.text;
                slideDiv.appendChild(reasonText);
            });

            const contributorText = document.createElement('p');
            contributorText.classList.add('contributor');
            contributorText.textContent = `- ${content.contributor}`;
            slideDiv.appendChild(contributorText);
        }
        return slideDiv;
    }

    function showContentSlide(index) {
        // First, hide ALL currently active slides to ensure clean transition
        const allActiveSlides = document.querySelectorAll('.slide.active');
        allActiveSlides.forEach(slide => slide.classList.remove('active'));

        // If the index is valid for a content slide, activate it
        if (index >= 0 && index < slideshowContainer.children.length) {
            slideshowContainer.children[index].classList.add('active');
        }
    }

    function initializeContentSlides() {
        allSlidesContent.forEach(content => {
            const slideElement = createContentSlideElement(content);
            slideshowContainer.appendChild(slideElement);
        });
        // Content slides are initialized but not shown yet
    }

    function nextContentSlide() {
        currentSlideIndex++;
        if (currentSlideIndex < numberOfSlides) {
            showContentSlide(currentSlideIndex);
        } else {
            // End of slideshow
            clearInterval(slideshowInterval);
            backgroundMusic1.pause();
            backgroundMusic2.pause();
            backgroundMusic1.currentTime = 0;
            backgroundMusic2.currentTime = 0;
            console.log("Slideshow finished!");
        }
    }

    // New function to toggle pause/play
    function togglePausePlay() {
        console.log("togglePausePlay called. Current paused state:", paused); // Debugging log

        if (paused) {
            // Resume
            console.log("Resuming slideshow and music.");
            if (!backgroundMusic1.ended && backgroundMusic1.paused) {
                console.log("Resuming Music 1.");
                backgroundMusic1.play();
            } else if (!backgroundMusic2.ended && backgroundMusic2.paused) {
                console.log("Resuming Music 2.");
                backgroundMusic2.play();
            } else if (backgroundMusic1.ended && backgroundMusic2.paused) { // If song 1 ended while paused, start song 2
                console.log("Music 1 ended, starting Music 2.");
                backgroundMusic2.play();
            }

            slideshowInterval = setInterval(nextContentSlide, durationPerSlide);
            console.log("Slideshow interval resumed.");
            paused = false;
        } else {
            // Pause
            console.log("Pausing slideshow and music.");
            backgroundMusic1.pause();
            backgroundMusic2.pause();
            clearInterval(slideshowInterval);
            console.log("Slideshow interval cleared.");
            paused = true;
        }
    }

    // Music playback logic
    backgroundMusic1.addEventListener('ended', () => {
        console.log("Music 1 ended, starting Music 2."); // Debugging log
        backgroundMusic2.play().catch(e => console.error("Music 2 autoplay failed:", e));
    });

    // Initialize the content slides (hidden) when DOM is ready
    initializeContentSlides();

    // Start slideshow and music only when the initial slide is clicked
    initialSlide.addEventListener('click', function startShow() {
        console.log("Initial slide clicked! Starting show."); // Debugging log

        // Attempt to play music
        backgroundMusic1.play().catch(e => {
            console.error("Music 1 autoplay failed:", e);
            // Fallback: If first music fails, try playing the second, or just start slideshow without music
            backgroundMusic2.play().catch(e2 => console.error("Music 2 autoplay failed (fallback):", e2));
        });

        // Hide the initial slide and show the first actual content slide
        initialSlide.classList.remove('active');
        showContentSlide(currentSlideIndex); // Show the very first content slide (index 0 of allSlidesContent)

        // Start the automated slide transitions
        slideshowInterval = setInterval(nextContentSlide, durationPerSlide);
        console.log("Initial slideshow interval started."); // Debugging log

        // Remove the event listener to prevent multiple starts on the initial slide
        initialSlide.removeEventListener('click', startShow);

        // Add the new click listener for pause/play to the main slideshow area
        slideshowContainer.addEventListener('click', togglePausePlay);
        console.log("Pause/Play click listener added to slideshow container."); // Debugging log
    }, { once: true }); // Ensure listener is only triggered once


    console.log(`Total content slides (after initial): ${numberOfSlides}`);
    console.log(`Duration per content slide: ${durationPerSlide / 1000} seconds`);
});
