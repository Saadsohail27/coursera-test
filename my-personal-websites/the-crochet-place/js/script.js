/* ==========================================
   THE CROCHET PLACE
   Navbar
========================================== */

const header = document.querySelector(".site-header");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const shopButton = document.querySelector(".shop-btn");

/* ==========================================
   Sticky Header
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ==========================================
   Mobile Menu
========================================== */

hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");

});


/* ==========================================
   Close Menu When Clicking Link
========================================== */

const ballAnimations = new WeakMap();

navItems.forEach(link => {

    link.addEventListener("click", () => {

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");

    });

});


/* ==========================================
   Close When Clicking Outside
========================================== */

document.addEventListener("click", (e) => {

    if (
        !navLinks.contains(e.target) &&
        !hamburger.contains(e.target)
    ) {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    }

});


/* ==========================================
   ESC Closes Menu
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        navLinks.classList.remove("active");
        hamburger.classList.remove("active");

    }

});


/* ==========================================
   Replay Shop Stitch Animation
========================================== */

shopButton.addEventListener("mouseenter", () => {

    const path = shopButton.querySelector(".btn-thread path");

    path.style.animation = "none";

    path.offsetHeight;

    path.style.animation = "drawThread .55s ease forwards";

});


/* ==========================================
   Navigation Active State
========================================== */

navItems.forEach(item => {

    item.addEventListener("click", function () {

        navItems.forEach(link => {

            link.classList.remove("active");

        });

        this.classList.add("active");

    });

});

/* ==========================================
   Yarn Animation
========================================== */

document.querySelectorAll(".nav-link").forEach(link => {

    const svg = link.querySelector(".nav-thread");
    const path = svg.querySelector(".thread-path");
    const ball = svg.querySelector(".thread-ball");

    const length = path.getTotalLength();

    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    function animateThread() {

        const animation = ballAnimations.get(ball);

    if (animation) {

        cancelAnimationFrame(animation);
        ballAnimations.delete(ball);

    }

        path.style.transition = "none";
        path.style.strokeDashoffset = length;

        requestAnimationFrame(() => {

            path.style.transition = "stroke-dashoffset .45s ease";
            path.style.strokeDashoffset = "0";

        });

        animateBall(path, ball);

    }

    link.addEventListener("mouseenter", () => {

    animateThread();

});

link.addEventListener("mouseleave", () => {

    if (link.classList.contains("active")) return;

    const animation = ballAnimations.get(ball);

    if (animation) {

        cancelAnimationFrame(animation);
        ballAnimations.delete(ball);

    }

    path.style.strokeDashoffset = length;

    ball.style.opacity = "0";
    ball.style.transform = "scale(0)";

});

if(link.classList.contains("active")){

    path.style.strokeDashoffset = 0;
    animateBall(path, ball, true);

}

});

function animateBall(path, ball, instant = false) {

    // Stop any previous animation first
    const previousAnimation = ballAnimations.get(ball);

    if (previousAnimation) {

        cancelAnimationFrame(previousAnimation);

    }

    const totalLength = path.getTotalLength();
    const duration = instant ? 0 : 450;

    let startTime = null;

    function update(timestamp) {

        if (!startTime) startTime = timestamp;

        const progress = duration === 0
            ? 1
            : Math.min((timestamp - startTime) / duration, 1);

        const point = path.getPointAtLength(progress * totalLength);

        ball.setAttribute("cx", point.x);
        ball.setAttribute("cy", point.y);

        ball.style.opacity = "1";
        ball.style.transform = "scale(1)";

        if (progress < 1) {

            const id = requestAnimationFrame(update);
            ballAnimations.set(ball, id);

        } else {

            ballAnimations.delete(ball);

            if (!instant) {

                ball.style.opacity = "0";
                ball.style.transform = "scale(0)";

            }

        }

    }

    const id = requestAnimationFrame(update);
    ballAnimations.set(ball, id);

}

/* ==========================================
   Hero Yarn
========================================== */

const heroPath = document.querySelector(".hero-thread-path");
const heroBall = document.querySelector(".hero-thread-ball");

if(heroPath){

    const totalLength = heroPath.getTotalLength();

    heroPath.style.strokeDasharray = totalLength;
    heroPath.style.strokeDashoffset = totalLength;

    function playHeroThread(){

        heroPath.style.transition = "none";
        heroPath.style.strokeDashoffset = totalLength;

        requestAnimationFrame(()=>{

            heroPath.style.transition =
            "stroke-dashoffset .9s cubic-bezier(.22,.61,.36,1)";

            heroPath.style.strokeDashoffset = 0;

        });

        animateHeroBall();

    }

    function animateHeroBall(){

        let start = null;

        function frame(time){

            if(!start) start = time;

            const progress = Math.min((time-start)/900,1);

            const point =
            heroPath.getPointAtLength(progress*totalLength);

            heroBall.setAttribute("cx",point.x);
            heroBall.setAttribute("cy",point.y);

            heroBall.style.opacity = 1;

            if(progress<1){

                requestAnimationFrame(frame);

            }else{

                heroBall.style.opacity = 0;

            }

        }

        requestAnimationFrame(frame);

    }

    window.addEventListener("load",()=>{

        setTimeout(playHeroThread,700);

    });

}

/* ==========================================
   FAQ Accordion
========================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {

        const open = item.classList.contains("active");

        faqItems.forEach(faq => {

            faq.classList.remove("active");

        });

        if(!open){

            item.classList.add("active");

            const path = item.querySelector(".faq-thread-path");

            path.style.animation = "none";

            path.offsetHeight;

            path.style.animation = "faqThread .45s ease forwards";

        }

    });

});

/* ==========================================
   Scroll Reveal
========================================== */

const revealElements = document.querySelectorAll(

    ".reveal, .reveal-left, .reveal-right, .reveal-scale"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15,
    rootMargin:"0px 0px -80px 0px"
});

revealElements.forEach(element=>{

    observer.observe(element);

});