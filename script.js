document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.getElementById('slideshow-container');
    const backgroundMusic = document.getElementById('background-music');

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
        "https://btshaf.github.io/LisaAnn50/IMG_1732.heic",
        "https://btshaf.github.io/LisaAnn50/IMG_7262.jpeg",
        "https://btshaf.github.io/LisaAnn50/IMG_8390.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_8429.JPG",
        "https://btshaf.github.io/LisaAnn50/IMG_8583.HEIC",
        "https://btshaf.github.io/LisaAnn50/IMG_8609.HEIC",
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

    const reasons = [
        { text: "I love how even though we live across the country, she checks in when I'm going through something whether it's being sick, dealing with career stuff, or personal challenges.", contributor: "Brad" },
        { text: "I love how she was my friend and gave me a social circle during that year I left IU. She didn't have to do that, but I'll always be grateful for it.", contributor: "Brad" },
        { text: "I love that she has a heart of gold. Obviously.", contributor: "Brad" },
        { text: "I love how she shows up for her friends, her family, and her clients. She's reliable, present, and generous with her time and energy.", contributor: "Brad" },
        { text: "I love how she's raising her kids and guiding them to become amazing humans.", contributor: "Stacey" },
        { text: "I love the relationship she's developed with Boston and the effort she makes to stay connected with him.", contributor: "Stacey" },
        { text: "I love how strong she has proven to be for herself and her kids.", contributor: "Brad" },
        { text: "I love that she makes her kids eat everything and that there are 'consequences to their bullfuckery' if they don't.", contributor: "Stacey" },
        { text: "I love how she helps strangers whether it's someone in trouble or someone unhoused, she doesn't look away. She steps up.", contributor: "Stacey" },
        { text: "I love that she was such a fucking boss in 8th grade with her vodka hair spray.", contributor: "Brad" },
        { text: "Considerate", contributor: "Scott Spooner" },
        { text: "Honest", contributor: "Scott Spooner" },
        { text: "Great fun at parties", contributor: "Scott Spooner" },
        { text: "Caring mother", contributor: "Scott Spooner" },
        { text: "No nonsense at work", contributor: "Scott Spooner" },
        { text: "Friendly", contributor: "Scott Spooner" },
        { text: "Follower of the Golden Rule", contributor: "Scott Spooner" },
        { text: "A great example of how a mom should love her kids", contributor: "Dan & Pat Shaffer" },
        { text: "Makes holidays special for her children", contributor: "Dan & Pat Shaffer" },
        { text: "Encourages her kids to do their best", contributor: "Dan & Pat Shaffer" },
        { text: "Loves on other children, too — especially troubled kids", contributor: "Dan & Pat Shaffer" },
        { text: "Sees potential in kids others overlook", contributor: "Dan & Pat Shaffer" },
        { text: "Cherishes her grandmother’s memory", contributor: "Dan & Pat Shaffer" },
        { text: "Tough love balanced with deep affection", contributor: "Uncle Dave & Aunt Carolyn" },
        { text: "Encourages her kids’ interests", contributor: "Uncle Dave & Aunt Carolyn" },
        { text: "Lovely, loving, lively, likeable, lean, lone daughter", contributor: "Uncle Dave & Aunt Carolyn" },
        { text: "Embodies the larkspur flower: love, positivity, open-mindedness", contributor: "Uncle Dave & Aunt Carolyn" },
        { text: "Always makes time for family", contributor: "Sarah" },
        { text: "Reaches out when in town", contributor: "Sarah" },
        { text: "Keeps connections strong", contributor: "Sarah" },
        { text: "Has great style and energy", contributor: "Sarah" },
        { text: "Makes 50 look fun", contributor: "Sarah" },
        { text: "Always down for anything fun", contributor: "Amy (Cousin)" },
        { text: "Kind and compassionate", contributor: "Amy (Cousin)" },
        { text: "Amazing momma", contributor: "Amy (Cousin)" },
        { text: "Resilient", contributor: "Amy (Cousin)" },
        { text: "Straightforward", contributor: "Amy (Cousin)" },
        { text: "Values family", contributor: "Amy (Cousin)" },
        { text: "Gives zero fucks (in the best way)", contributor: "Amy (Cousin)" },
        { text: "“Bestest” niece and Goddaughter ever", contributor: "Mic & Larry (Aunt & Uncle)" },
        { text: "Chose a career helping others early in life", contributor: "Mic & Larry (Aunt & Uncle)" },
        { text: "Rose to personal challenges with strength", contributor: "Mic & Larry (Aunt & Uncle)" },
        { text: "Adopted and raised 3 kids with love and stability", contributor: "Mic & Larry (Aunt & Uncle)" },
        { text: "Gave them a forever family", contributor: "Mic & Larry (Aunt & Uncle)" },
        { text: "A source of pride and deep love", contributor: "Mic & Larry (Aunt & Uncle)" },
        { text: "Always sees the good in people", contributor: "Troy & Kelly" },
        { text: "Helped countless kids have better lives", contributor: "Troy & Kelly" },
        { text: "Provides fun, new experiences for her kids", contributor: "Troy & Kelly" },
        { text: "Bought her brother beer before he was legal", contributor: "Troy & Kelly" },
        { text: "Sat with him during a bad mushroom trip", contributor: "Troy & Kelly" },
        { text: "Made her mom a mother", contributor: "Lisa’s Mom & Dad" },
        { text: "Has a zest for life", contributor: "Lisa’s Mom & Dad" },
        { text: "Loves country music", contributor: "Lisa’s Mom & Dad" },
        { text: "Has a beautiful smile", contributor: "Lisa’s Mom & Dad" },
        { text: "Desires to please everyone", contributor: "Lisa’s Mom & Dad" },
        { text: "Determined to be the best mom", contributor: "Lisa’s Mom & Dad" },
        { text: "Willing to help when needed", contributor: "Lisa’s Mom & Dad" },
        { text: "Has a positive attitude", contributor: "Lisa’s Mom & Dad" },
        { text: "Generous", contributor: "Lisa’s Mom & Dad" },
        { text: "Has a great laugh", contributor: "Lisa’s Mom & Dad" },
        { text: "Loves espresso martinis", contributor: "Lisa’s Mom & Dad" },
        { text: "Passionate about golf", contributor: "Lisa’s Mom & Dad" },
        { text: "Loves me", contributor: "Stella (Daughter)" },
        { text: "Takes care of me", contributor: "Stella (Daughter)" },
        { text: "Wants me to be a better person", contributor: "Stella (Daughter)" },
        { text: "Helps me be a better person", contributor: "Stella (Daughter)" },
        { text: "Is absolutely amazing", contributor: "Stella (Daughter)" },
        { text: "We love how she loves", contributor: "Nichole & Tam (Best Friends)" },
        { text: "We love when we recap the night before and laugh hysterically", contributor: "Nichole & Tam (Best Friends)" },
        { text: "Love her authentic laugh when something is super funny", contributor: "Nichole & Tam (Best Friends)" },
        { text: "Love her outfits", contributor: "Nichole & Tam (Best Friends)" },
        { text: "She is fearless", contributor: "Nichole & Tam (Best Friends)" },
        { text: "Admire how she is unapologetically her genuine self", contributor: "Nichole & Tam (Best Friends)" }
    ];

    // Combine images and reasons, interleaving them
    const allSlidesContent = [];
    let imageIndex = 0;
    let reasonIndex = 0;

    // Distribute them relatively evenly
    while (imageIndex < imageURLs.length || reasonIndex < reasons.length) {
        if (imageIndex < imageURLs.length) {
            allSlidesContent.push({ type: 'image', url: imageURLs[imageIndex] });
            imageIndex++;
        }
        if (reasonIndex < reasons.length) {
            allSlidesContent.push({ type: 'text', text: reasons[reasonIndex].text, contributor: reasons[reasonIndex].contributor });
            reasonIndex++;
        }
    }

    // Calculate duration per slide based on total music length (3 min 48 sec = 228 seconds)
    const totalMusicDurationSeconds = 228;
    const numberOfSlides = allSlidesContent.length;
    const durationPerSlide = totalMusicDurationSeconds / numberOfSlides * 1000; // in milliseconds

    let currentSlideIndex = 0;

    function createSlideElement(content) {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slide');

        if (content.type === 'image') {
            const img = document.createElement('img');
            img.src = content.url;
            slideDiv.appendChild(img);
        } else if (content.type === 'text') {
            const reasonText = document.createElement('p');
            reasonText.classList.add('reason-text');
            reasonText.textContent = content.text;
            slideDiv.appendChild(reasonText);

            const contributorText = document.createElement('p');
            contributorText.classList.add('contributor');
            contributorText.textContent = `- ${content.contributor}`;
            slideDiv.appendChild(contributorText);
        }
        return slideDiv;
    }

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function initializeSlideshow() {
        allSlidesContent.forEach(content => {
            const slideElement = createSlideElement(content);
            slideshowContainer.appendChild(slideElement);
        });
        showSlide(currentSlideIndex);
    }

    function nextSlide() {
        currentSlideIndex++;
        if (currentSlideIndex < numberOfSlides) {
            showSlide(currentSlideIndex);
        } else {
            // End of slideshow, or loop if desired
            clearInterval(slideshowInterval);
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0; // Reset music
            // Optionally, show a final "Happy Birthday" slide or just keep the last slide
            console.log("Slideshow finished!");
        }
    }

    let slideshowInterval;

    // Start slideshow on user interaction (e.g., a click) to allow music to play
    // Browsers often block autoplaying audio without user interaction
    document.body.addEventListener('click', function startShow() {
        backgroundMusic.play().catch(e => console.error("Music autoplay failed:", e));
        initializeSlideshow();
        slideshowInterval = setInterval(nextSlide, durationPerSlide);
        document.body.removeEventListener('click', startShow); // Remove listener after first click
    });

    console.log(`Total slides: ${numberOfSlides}`);
    console.log(`Duration per slide: ${durationPerSlide / 1000} seconds`);
});
