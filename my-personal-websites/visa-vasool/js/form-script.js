const formSteps = document.querySelectorAll(".form-step");
const dots = document.querySelectorAll(".dot");
let currentStep = 0;

function updateFormSteps() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentStep);
  });
}

// Delegated Event Listeners for Next & Back Buttons
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("next-btn")) {
    event.preventDefault(); // Prevent default button behavior
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      updateFormSteps();
    }
  }

  if (event.target.classList.contains("back-btn")) {
    event.preventDefault(); // Prevent default button behavior
    if (currentStep > 0) {
      currentStep--;
      updateFormSteps();
    }
  }
});
