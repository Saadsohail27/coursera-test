document.querySelectorAll('.accordian-button').forEach(button => {
button.addEventListener('click', () => {
			// const accordianContent = button.nextElementSibling;

			button.classList.toggle('accordian-button-active');

			// if (button.classList.contains('accordian-button-active')) {
			// 	accordianContent.style.maxHeight = accordianContent.scrollHeight + 'px';
			// } else {
			// 	accordianContent.style.maxHeight = 0;
			// }
		});
});

const divContainer = document.querySelector("#elementToWorkOn")
let isClicked = true;

let showOrHide = function() {
	if(isClicked) {
		divContainer.style.display = "none"
		document.querySelector(".accordian-button").innerHTML = "Collapse View" + '<i class="fa-solid fa-arrow-up"></i>';
		document.querySelector(".accordian-button").style.position = "sticky";
		document.querySelector(".accordian-button").style.top = "100px";
		document.querySelector(".accordian-button").style.left = "70px";
		document.querySelector(".accordian-button").style.transform = "translate(0%, 0%);"
		document.querySelector(".accordian-button").style.background = "#162935"
		document.querySelector(".accordian-button").style.color = "white"
		isClicked = false;
	} else {
		divContainer.style.display = "block"
		document.querySelector(".accordian-button").innerHTML = "Expand View" + '<i class="fa-solid fa-arrow-down"></i>';
		document.querySelector(".accordian-button").style.marginRight = "Auto";
		document.querySelector(".accordian-button").style.marginLeft = "Auto";
		document.querySelector(".accordian-button").style.position = "relative";
		document.querySelector(".accordian-button").style.top = "50%";
		document.querySelector(".accordian-button").style.left = "50%";
		document.querySelector(".accordian-button").style.transform = "translate(-50%, -50%);"
		document.querySelector(".accordian-button").style.background = "lightblue"
		document.querySelector(".accordian-button").style.color = "black"
		isClicked = true;
		window.scrollTo({
		  top: document.querySelector(".our-clients").offsetTop,
		  behavior: "instant",
		});
	}
}


 // Intersection Observer to start/stop marquee
        const marquee = document.querySelector('marquee');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    marquee.start();
                } else {
                    marquee.stop();
                }
            });
        }, {
            threshold: 0.1
        });

        observer.observe(marquee);