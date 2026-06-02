const year = document.querySelector("#year");
const quoteForm = document.querySelector("#quote-form");
const formNote = document.querySelector("#form-note");
const comparisonAfter = document.querySelector("[data-comparison-after]");
const comparisonRange = document.querySelector("[data-comparison-range]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (comparisonAfter && comparisonRange) {
  const setComparisonWidth = (value) => {
    const percentage = Math.min(Math.max(Number(value), 5), 95);

    comparisonAfter.style.width = `${percentage}%`;
    const image = comparisonAfter.querySelector("img");

    if (image) {
      image.style.width = `${10000 / percentage}%`;
    }
  };

  setComparisonWidth(comparisonRange.value);

  comparisonRange.addEventListener("input", (event) => {
    setComparisonWidth(event.target.value);
  });
}

if (quoteForm && formNote) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(quoteForm);
    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone || !message) {
      formNote.textContent = "Please fill out your name, phone, and project message.";
      return;
    }

    const subject = encodeURIComponent(`Quote request from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\n\nProject details:\n${message}`
    );

    formNote.textContent =
      "Opening your email app. For the fastest response, call (707) 768-3190.";
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}
