document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshow-container');
    const mainIntroSlide = document.getElementById('main-intro-slide');
    const autoplayTrigger = document.getElementById('autoplay-trigger'); // Reference to the new trigger button
    const backgroundMusic = document.getElementById('background-music');

    let currentSlideIndex = -1; // Start before the first slide to show it immediately after intro
    // Duration for the "We <3 Lisa" slide (after click, before first content slide)
    const introSlideDisplayDuration = 5000; // 5 seconds
    // Total duration for main content: 3 minutes 48 seconds = 228 seconds
    // Number of main content slides: 52 quotes + 20 images = 72 slides
    // Duration per main content slide: 228 seconds / 72 slides = 3.166... seconds
    const mainSlideDuration = 3167; // Approximately 3.167 seconds per main content slide


    // List of reasons and contributors with graphic hints
    const quoteReasons = [
        { type: 'quote', text: "Considerate", contributor: "Scott Spooner", graphicHint: "thoughtful" },
        { type: 'quote', text: "Honest", contributor: "Scott Spooner", graphicHint: "truth" },
        { type: 'quote', text: "Great fun at parties", contributor: "Scott Spooner", graphicHint: "party" },
        { type: 'quote', text: "Caring mother", contributor: "Scott Spooner", graphicHint: "mother" },
        { type: 'quote', text: "No nonsense at work", contributor: "Scott Spooner", graphicHint: "work" },
        { type: 'quote', text: "Friendly", contributor: "Scott Spooner", graphicHint: "friendly" },
        { type: 'quote', text: "Follower of the Golden Rule", contributor: "Scott Spooner", graphicHint: "rule" },

        { type: 'quote', text: "A great example of how a mom should love her kids", contributor: "Dan & Pat Shaffer", graphicHint: "mother" },
        { type: 'quote', text: "Makes holidays special for her children", contributor: "Dan & Pat Shaffer", graphicHint: "holiday" },
        { type: 'quote', text: "Encourages her kids to do their best", contributor: "Dan & Pat Shaffer", graphicHint: "encourage" },
        { type: 'quote', text: "Loves on other children, too — especially troubled kids", contributor: "Dan & Pat Shaffer", graphicHint: "care" },
        { type: 'quote', text: "Sees potential in kids others overlook", contributor: "Dan & Pat Shaffer", graphicHint: "potential" },
        { type: 'quote', text: "Cherishes her grandmother’s memory", contributor: "Dan & Pat Shaffer", graphicHint: "memory" },

        { type: 'quote', text: "Tough love balanced with deep affection", contributor: "Uncle Dave & Aunt Carolyn", graphicHint: "love" },
        { type: 'quote', text: "Encourages her kids’ interests", contributor: "Uncle Dave & Aunt Carolyn", graphicHint: "interest" },
        { type: 'quote', text: "Lovely, loving, lively, likeable, lean, lone daughter", contributor: "Uncle Dave & Aunt Carolyn", graphicHint: "words" },
        { type: 'quote', text: "Embodies the larkspur flower: love, positivity, open-mindedness", contributor: "Uncle Dave & Aunt Carolyn", graphicHint: "flower" },

        { type: 'quote', text: "Always makes time for family", contributor: "Sarah", graphicHint: "family" },
        { type: 'quote', text: "Reaches out when in town", contributor: "Sarah", graphicHint: "connect" },
        { type: 'quote', text: "Keeps connections strong", contributor: "Sarah", graphicHint: "strong" },
        { type: 'quote', text: "Has great style and energy", contributor: "Sarah", graphicHint: "style" },
        { type: 'quote', text: "Makes 50 look fun", contributor: "Sarah", graphicHint: "fun" },

        { type: 'quote', text: "Always down for anything fun", contributor: "Amy (Cousin)", graphicHint: "fun" },
        { type: 'quote', text: "Kind and compassionate", contributor: "Amy (Cousin)", graphicHint: "kind" },
        { type: 'quote', text: "Amazing momma", contributor: "Amy (Cousin)", graphicHint: "mother" },
        { type: 'quote', text: "Resilient", contributor: "Amy (Cousin)", graphicHint: "resilient" },
        { type: 'quote', text: "Straightforward", contributor: "Amy (Cousin)", graphicHint: "straight" },
        { type: 'quote', text: "Values family", contributor: "Amy (Cousin)", graphicHint: "family" },
        { type: 'quote', text: "Gives zero fucks (in the best way)", contributor: "Amy (Cousin)", graphicHint: "bold" },

        { type: 'quote', text: "“Bestest” niece and Goddaughter ever", contributor: "Mic & Larry (Aunt & Uncle)", graphicHint: "best" },
        { type: 'quote', text: "Chose a career helping others early in life", contributor: "Mic & Larry (Aunt & Uncle)", graphicHint: "help" },
        { type: 'quote', text: "Rose to personal challenges with strength", contributor: "Mic & Larry (Aunt & Uncle)", graphicHint: "strength" },
        { type: 'quote', text: "Adopted and raised 3 kids with love and stability", contributor: "Mic & Larry (Aunt & Uncle)", graphicHint: "adopt" },
        { type: 'quote', text: "Gave them a forever family", contributor: "Mic & Larry (Aunt & Uncle)", graphicHint: "family" },
        { type: 'quote', text: "A source of pride and deep love", contributor: "Mic & Larry (Aunt & Uncle)", graphicHint: "pride" },

        { type: 'quote', text: "Always sees the good in people", contributor: "Troy & Kelly", graphicHint: "good" },
        { type: 'quote', text: "Helped countless kids have better lives", contributor: "Troy & Kelly", graphicHint: "help" },
        { type: 'quote', text: "Provides fun, new experiences for her kids", contributor: "Troy & Kelly", graphicHint: "experience" },
        { type: 'quote', text: "Bought her brother beer before he was legal", contributor: "Troy & Kelly", graphicHint: "rebel" },
        { type: 'quote', text: "Sat with him during a bad mushroom trip", contributor: "Troy & Kelly", graphicHint: "support" },

        { type: 'quote', text: "Made her mom a mother", contributor: "Lisa’s Mom & Dad", graphicHint: "mother" },
        { type: 'quote', text: "Has a zest for life", contributor: "Lisa’s Mom & Dad", graphicHint: "zest" },
        { type: 'quote', text: "Loves country music", contributor: "Lisa’s Mom & Dad", graphicHint: "music" },
        { type: 'quote', text: "Has a beautiful smile", contributor: "Lisa’s Mom & Dad", graphicHint: "smile" },
        { type: 'quote', text: "Desires to please everyone", contributor: "Lisa’s Mom & Dad", graphicHint: "please" },
        { type: 'quote', text: "Determined to be the best mom", contributor: "Lisa’s Mom & Dad", graphicHint: "mother" },
        { type: 'quote', text: "Willing to help when needed", contributor: "Lisa’s Mom & Dad", graphicHint: "help" },
        { type: 'quote', text: "Has a positive attitude", contributor: "Lisa’s Mom & Dad", graphicHint: "positive" },
        { type: 'quote', text: "Generous", contributor: "Lisa’s Mom & Dad", graphicHint: "generous" },
        { type: 'quote', text: "Has a great laugh", contributor: "Lisa’s Mom & Dad", graphicHint: "laugh" },
        { type: 'quote', text: "Loves espresso martinis", contributor: "Lisa’s Mom & Dad", graphicHint: "drink" },
        { type: 'quote', text: "Passionate about golf", contributor: "Lisa’s Mom & Dad", graphicHint: "golf" },

        { type: 'quote', text: "Loves me", contributor: "Stella (Daughter)", graphicHint: "love" },
        { type: 'quote', text: "Takes care of me", contributor: "Stella (Daughter)", graphicHint: "care" },
        { type: 'quote', text: "Wants me to be a better person", contributor: "Stella (Daughter)", graphicHint: "growth" },
        { type: 'quote', text: "Helps me be a better person", contributor: "Stella (Daughter)", graphicHint: "help" },
        { type: 'quote', text: "Is absolutely amazing", contributor: "Stella (Daughter)", graphicHint: "amazing" },

        { type: 'quote', text: "We love how she loves", contributor: "Nichole & Tam (Best Friends)", graphicHint: "love" },
        { type: 'quote', text: "We love when we recap the night before and laugh hysterically", contributor: "Nichole & Tam (Best Friends)", graphicHint: "laugh" },
        { type: 'quote', text: "Love her authentic laugh when something is super funny", contributor: "Nichole & Tam (Best Friends)", graphicHint: "laugh" },
        { type: 'quote', text: "Love her outfits", contributor: "Nichole & Tam (Best Friends)", graphicHint: "fashion" },
        { type: 'quote', text: "She is fearless", contributor: "Nichole & Tam (Best Friends)", graphicHint: "fearless" },
        { type: 'quote', text: "Admire how she is unapologetically her genuine self", contributor: "Nichole & Tam (Best Friends)", graphicHint: "authentic" },

        { type: 'quote', text: "Because she adopted me because she loves me", contributor: "Benjamin", graphicHint: "love" },

        // --- NEW QUOTES ADDED BELOW ---
        { type: 'quote', text: "I love how even though we live across the country, she checks in when I'm going through something — whether it's being sick, dealing with career stuff, or personal challenges.", contributor: "Brad", graphicHint: "support" },
        { type: 'quote', text: "I love how she was my friend and gave me a social circle during that year I left IU. She didn’t have to do that, but I’ll always be grateful for it.", contributor: "Brad", graphicHint: "friendship" },
        { type: 'quote', text: "I love that she has a heart of gold. Obviously.", contributor: "Brad", graphicHint: "heart" },
        { type: 'quote', text: "I love how she shows up — for her friends, her family, and her clients. She’s reliable, present, and generous with her time and energy.", contributor: "Brad", graphicHint: "reliable" },
        { type: 'quote', text: "I love how she’s raising her kids and guiding them to become amazing humans.", contributor: "Stacey", graphicHint: "mother" },
        { type: 'quote', text: "I love the relationship she’s developed with Boston — and the effort she makes to stay connected with him.", contributor: "Stacey", graphicHint: "connect" },
        { type: 'quote', text: "I love how strong she has proven to be — for herself and her kids.", contributor: "Brad", graphicHint: "strength" },
        { type: 'quote', text: "I love that she makes her kids eat everything — and that there are “consequences to their bullfuckery” if they don’t.", contributor: "Stacey", graphicHint: "funny_rules" },
        { type: 'quote', text: "I love how she helps strangers — whether it's someone in trouble or someone unhoused, she doesn't look away. She steps up.", contributor: "Stacey", graphicHint: "help" },
        { type: 'quote', text: "I love that she was such a fucking boss in 8th grade with her vodka hair spray.", contributor: "Brad", graphicHint: "rebel_boss" }
        // --- NEW QUOTES ADDED ABOVE ---
    ];

    // List of image files (including lisaann.jpg as a general image slide now)
    const imageFiles = [
        { type: 'image', src: 'lisaann.jpg' }, // The intro image now part of the main randomized set
        { type: 'image', src: 'arubanladies.jpeg' },
        { type: 'image', src: 'flamingobitches.jpeg' },
        { type: 'image', src: 'IMG_1249.JPG' },
        { type: 'image', src: 'IMG_1254.JPG' },
        { type: 'image', src: 'IMG_1275.JPG' },
        { type: 'image', src: 'IMG_1681.JPG' },
        { type: 'image', src: 'IMG_1682.jpeg' },
        { type: 'image', src: 'IMG_1683.jpg' },
        { type: 'image', src: 'IMG_1684.jpeg' },
        { type: 'image', src: 'IMG_1685.JPG' },
        { type: 'image', src: 'IMG_1686.jpeg' },
        { type: 'image', src: 'IMG_1687.JPG' },
        { type: 'image', src: 'IMG_1688.jpeg' },
        { type: 'image', src: 'IMG_1689.jpeg' },
        { type: 'image', src: 'IMG_1690.jpeg' },
        { type: 'image', src: 'IMG_1691.jpeg' },
        { type: 'image', src: 'IMG_1692.JPG' },
        { type: 'image', src: 'IMG_1732.jpeg' }, // Assuming conversion as confirmed
        { type: 'image', src: 'IMG_8390.JPG' },
        { type: 'image', src: 'IMG_8429.JPG' }
    ];

    // Combine and interleave quotes and images for equal distribution, then shuffle
    let allSlides = [];
    let quoteIndex = 0;
    let imageIndex = 0;
    const maxItems = Math.max(quoteReasons.length, imageFiles.length);
    for (let i = 0; i < maxItems; i++) {
        if (quoteIndex < quoteReasons.length) {
            allSlides.push(quoteReasons[quoteIndex++]);
        }
        if (imageIndex < imageFiles.length) {
            allSlides.push(imageFiles[imageIndex++]);
        }
    }

    // Fisher-Yates (Knuth) Shuffle algorithm to randomize the interleaved order
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
    }

    // Shuffle the combined array once to ensure overall randomness
    shuffleArray(allSlides);

    // Emojis for "funny and aesthetically pleasing neutrals"
    const graphicMap = {
        thoughtful: '🤔', truth: '⚖️', party: '🥳', mother: '💖', work: '💼', friendly: '😊', rule: '📏',
        holiday: '🎄', encourage: '🌟', care: '🤗', potential: '💡', memory: '💭', love: '❤️',
        interest: '🔍', words: '🗣️', flower: '🌸', family: '👨‍👩‍👧‍👦', connect: '🔗', strong: '💪',
        style: '💅', fun: '😂', kind: '😇', resilient: '💪', straight: '🎯', bold: '🤘',
        best: '🏆', help: '🤝', strength: '🏋️', adopt: '🏡', pride: '🤩', good: '👍',
        experience: '🗺️', rebel: '🍻', // For beer before legal
        support: '🫂', zest: '🍋', music: '🎶', smile: '😁', please: '🙏', positive: '☀️',
        generous: '🎁', laugh: '🤣', drink: '🍸', // For espresso martinis
        golf: '⛳', growth: '🌱', amazing: '✨', fashion: '👗', fearless: '🦁', authentic: '💯',
        // --- NEW GRAPHIC HINTS ---
        friendship: '🤝', heart: '💛', reliable: '✔️', funny_rules: '😈', rebel_boss: '👑'
    };

    const transitions = [
        'fade', 'slide-left', 'slide-right', 'zoom', 'spin'
    ];

    function createSlideElement(slideData) {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        if (slideData.type === 'quote') {
            const graphicSpan = document.createElement('span');
            graphicSpan.classList.add('graphic-icon');
            const emoji = graphicMap[slideData.graphicHint] || '✨';
            graphicSpan.textContent = emoji.replace(/[^p{Emoji_Presentation}\p{Emoji}\u200d\u20e3\ufe0f]/gu, '');
            slideDiv.appendChild(graphicSpan);

            const reasonP = document.createElement('p');
            reasonP.classList.add('reason-text');
            reasonP.textContent = slideData.text;
            slideDiv.appendChild(reasonP);

            const contributorSpan = document.createElement('span');
            contributorSpan.classList.add('contributor-text');
            contributorSpan.textContent = `- ${slideData.contributor}`;
            slideDiv.appendChild(contributorSpan);
        } else if (slideData.type === 'image') {
            const imgElement = document.createElement('img');
            imgElement.classList.add('slide-image');
            imgElement.src = slideData.src;
            imgElement.alt = "A cherished memory of Lisa";
            slideDiv.appendChild(imgElement);
        }

        slideshowContainer.appendChild(slideDiv);
        return slideDiv;
    }

    // Pre-create all main content slides so they exist in the DOM after shuffling
    const slideElements = allSlides.map(createSlideElement);

    function showNextSlide() {
        // Hide current slide (if any)
        if (currentSlideIndex >= 0) {
            const currentSlide = slideElements[currentSlideIndex];
            const prevTransitionClass = currentSlide.dataset.transition;
            if (prevTransitionClass) {
                currentSlide.classList.remove(`${prevTransitionClass}-in`);
                currentSlide.classList.add(`${prevTransitionClass}-out`);
            } else {
                currentSlide.classList.remove('active');
            }
        }

        currentSlideIndex = (currentSlideIndex + 1) % allSlides.length;
        const nextSlide = slideElements[currentSlideIndex];

        // Apply random transition
        const randomTransition = transitions[Math.floor(Math.random() * transitions.length)];
        nextSlide.dataset.transition = randomTransition; // Store for removal
        nextSlide.classList.add('active', `${randomTransition}-in`); // Add both active and specific transition in class

        // Clean up "out" class from previous slide after its transition
        if (currentSlideIndex > 0) {
             setTimeout(() => {
                const prevSlideIndex = (currentSlideIndex - 1 + allSlides.length) % allSlides.length;
                const prevSlide = slideElements[prevSlideIndex];
                if(prevSlide.dataset.transition) {
                    prevSlide.classList.remove(`${prevSlide.dataset.transition}-out`);
                }
                prevSlide.classList.remove('active');
             }, 1000); // After 1 second, the "out" transition should be mostly complete
        }
    }

    // This function will be called AFTER the user clicks the invisible button
    function startSlideshowAfterInteraction() {
        // Hide the main intro slide
        mainIntroSlide.classList.remove('active');
        setTimeout(() => {
            mainIntroSlide.style.display = 'none'; // Completely hide after transition
        }, 1000); // Matches transition duration

        // Start music playback
        // This 'play()' call should now work because it's triggered by a user interaction (the click)
        backgroundMusic.play().catch(e => console.log("Autoplay prevented:", e));

        // Show the first content slide immediately
        showNextSlide();
        // Start the interval for subsequent content slides
        setInterval(showNextSlide, mainSlideDuration);

        // Remove the event listener from the trigger button after it's used once
        autoplayTrigger.removeEventListener('click', startSlideshowAfterInteraction);
    }

    // Attach the event listener to the invisible trigger button
    autoplayTrigger.addEventListener('click', startSlideshowAfterInteraction);

    // Initial state: the main intro slide is active and waiting for a click
    // The main slideshow content will begin only after this click.
});