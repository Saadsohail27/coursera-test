/* ==========================================
   Portfolio Script
   Loaded on every page. Each feature only
   runs when its elements exist on the page.
========================================== */
 
 
/* ==========================================
   Helpers
========================================== */
 
const select = (selector, parent = document) => parent.querySelector(selector);
 
const selectAll = (selector, parent = document) => [...parent.querySelectorAll(selector)];
 
 
/* ==========================================
   Portfolio Application
========================================== */
 
const Portfolio = {
 
    /* ==========================================
       Cached Elements
    ========================================== */
 
    elements: {
 
        yearLabels: selectAll("#current-year"),
 
        marqueeTracks: selectAll(".tech-strip-track"),
 
        chartPanels: selectAll(".example-panel"),
 
        buildSection: select(".build-section"),
 
        mockSite: select("#mock-site"),
 
        buildSteps: selectAll(".build-step"),
 
        magneticButtons: selectAll(".magnetic"),
 
        menuButton: select(".menu-button"),
 
        menuList: select(".nav-menu"),
 
        navLinks: selectAll(".site-nav a"),
 
        chips: selectAll(".option-chip"),
 
        contactForm: select("#contact-form"),
 
        formStatus: select("#form-status")
 
    },
 
 
    /* ==========================================
       Settings
    ========================================== */
 
    settings: {
 
        totalStages: 5,
 
        stageClasses: ["stage-design", "stage-code", "stage-motion", "stage-launch"],
 
        magnetStrengthX: 0.25,
 
        magnetStrengthY: 0.35,
 
        formEndpoint: "process-form.php"
 
    },
 
 
    /* ==========================================
       Start Everything
    ========================================== */
 
    init(){
 
        this.showCurrentYear();
 
        this.initChartReveal();
 
        this.initMarquee();
 
        this.initBuildSequence();
 
        this.initMagneticButtons();
 
        this.initMobileMenu();
 
        this.initChips();
 
        this.initContactForm();
 
    },
 
 
    /* ==========================================
       Footer Year
    ========================================== */
 
    showCurrentYear(){
 
        this.elements.yearLabels.forEach(label => {
 
            label.textContent = new Date().getFullYear();
 
        });
 
    },
 
 
    /* ==========================================
       Chart Bars (grow when scrolled into view)
    ========================================== */
 
    initChartReveal(){
 
        const observer = new IntersectionObserver(entries => {
 
            entries.forEach(entry => {
 
                if(!entry.isIntersecting) return;
 
                entry.target.classList.add("is-visible");
 
                observer.unobserve(entry.target);
 
            });
 
        }, { threshold: 0.3 });
 
        this.elements.chartPanels.forEach(panel => observer.observe(panel));
 
    },
 
 
    /* ==========================================
       Tech Strip (duplicate content for a
       seamless loop)
    ========================================== */
 
    initMarquee(){
 
        this.elements.marqueeTracks.forEach(track => {
 
            track.innerHTML += track.innerHTML;
 
        });
 
    },
 
 
    /* ==========================================
       Scroll-Built Website
       Progress through the tall section decides
       which stage (Strategy to Launch) is active
    ========================================== */
 
    initBuildSequence(){
 
        const { buildSection, mockSite } = this.elements;
 
        if(!buildSection || !mockSite) return;
 
        const update = () => this.updateBuildStage();
 
        window.addEventListener("scroll", update, { passive: true });
 
        window.addEventListener("resize", update);
 
        update();
 
    },
 
    updateBuildStage(){
 
        const { buildSection, mockSite, buildSteps } = this.elements;
 
        const { totalStages, stageClasses } = this.settings;
 
        const bounds = buildSection.getBoundingClientRect();
 
        const scrollDistance = bounds.height - window.innerHeight;
 
        const progress = Math.min(1, Math.max(0, -bounds.top / scrollDistance));
 
        const stage = Math.min(totalStages - 1, Math.floor(progress * totalStages));
 
        buildSteps.forEach((step, index) => {
 
            step.classList.toggle("is-active", index === stage);
 
        });
 
        stageClasses.forEach((stageClass, index) => {
 
            mockSite.classList.toggle(stageClass, stage >= index + 1);
 
        });
 
    },
 
 
    /* ==========================================
       Magnetic Buttons
       Mouse only, skipped when reduced motion
       is switched on
    ========================================== */
 
    initMagneticButtons(){
 
        const canHover = window.matchMedia("(hover:hover)").matches;
 
        const reducedMotion = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
 
        if(!canHover || reducedMotion) return;
 
        const { magnetStrengthX, magnetStrengthY } = this.settings;
 
        this.elements.magneticButtons.forEach(button => {
 
            button.addEventListener("pointermove", event => {
 
                const box = button.getBoundingClientRect();
 
                const offsetX = (event.clientX - box.left - box.width / 2) * magnetStrengthX;
 
                const offsetY = (event.clientY - box.top - box.height / 2) * magnetStrengthY;
 
                button.style.setProperty("--magnet-x", offsetX + "px");
 
                button.style.setProperty("--magnet-y", offsetY + "px");
 
            });
 
            button.addEventListener("pointerleave", () => {
 
                button.style.setProperty("--magnet-x", "0px");
 
                button.style.setProperty("--magnet-y", "0px");
 
            });
 
        });
 
    },
 
 
    /* ==========================================
       Mobile Menu
    ========================================== */
 
    initMobileMenu(){
 
        const { menuButton, menuList, navLinks } = this.elements;
 
        if(!menuButton || !menuList) return;
 
        menuButton.addEventListener("click", () => {
 
            menuList.classList.toggle("is-open");
 
        });
 
        navLinks.forEach(link => {
 
            link.addEventListener("click", () => {
 
                menuList.classList.remove("is-open");
 
            });
 
        });
 
    },
 
 
    /* ==========================================
       Contact Form Chips (one pick per group)
    ========================================== */
 
    initChips(){
 
        this.elements.chips.forEach(chip => {
 
            chip.addEventListener("click", () => {
 
                selectAll(".option-chip", chip.parentNode).forEach(other => {
 
                    other.classList.remove("is-active");
 
                });
 
                chip.classList.add("is-active");
 
            });
 
        });
 
    },
 
    getChipSelections(form){
 
        return selectAll("fieldset", form)
 
            .map(group => {
 
                const selected = select(".is-active", group);
 
                return selected ? group.dataset.label + ": " + selected.textContent : "";
 
            })
 
            .filter(Boolean)
 
            .join("\n");
 
    },
 
    clearChips(){
 
        this.elements.chips.forEach(chip => chip.classList.remove("is-active"));
 
    },
 
 
    /* ==========================================
       Contact Form Submit
       Sends to process-form.php
    ========================================== */
 
    initContactForm(){
 
        const { contactForm } = this.elements;
 
        if(!contactForm) return;
 
        contactForm.addEventListener("submit", event => this.handleSubmit(event));
 
    },
 
    async handleSubmit(event){
 
        event.preventDefault();
 
        const form = event.target;
 
        const status = this.elements.formStatus;
 
        const data = new FormData(form);
 
        const picks = this.getChipSelections(form);
 
        data.set("message", (picks ? picks + "\n\n" : "") + data.get("message"));
 
        status.textContent = "Sending...";
 
        try{
 
            const response = await fetch(this.settings.formEndpoint, {
 
                method: "POST",
 
                body: data
 
            });
 
            const result = await response.json();
 
            status.textContent = result.message;
 
            if(result.status === "success"){
 
                form.reset();
 
                this.clearChips();
 
            }
 
        }
 
        catch(error){
 
            status.textContent = "Message not sent. Please email me directly.";
 
        }
 
    }
 
};
 
 
/* ==========================================
   Run
========================================== */
 
Portfolio.init();
 