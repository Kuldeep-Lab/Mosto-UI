// navbar code
document.getElementById("menu-button").addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
});


// dynamic text code for section 2 
document.querySelectorAll("[data-tab]").forEach(button => {
    button.addEventListener("click", () => {
        // Hide all tab content
        document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));

        // Show the clicked tab content
        document.getElementById(button.dataset.tab).classList.remove("hidden");

        // Remove active styles from all buttons
        document.querySelectorAll("[data-tab]").forEach(btn => btn.classList.remove("text-blue-500", "border-blue-500", "text-blue-400", "underline"));

        // Add active styles to the clicked button
        button.classList.add("text-blue-500", "border-b-2", "border-blue-500", "text-blue-400");
    });
});


// this is dynamic counter code 
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");
    let scrollPosition = window.scrollY;

    const startCounting = () => {
        counters.forEach(counter => {
            counter.innerText = "0"; // Reset count on each scroll

            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText || 0;
                const increment = target / 100;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 200); // Adjust speed
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const onScroll = () => {
        const currentScroll = window.scrollY;
        if (currentScroll > scrollPosition) { // Only restart when scrolling down
            startCounting();
        }
        scrollPosition = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
});


// slider code 
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % 3;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + 3) % 3;
    updateCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
setInterval(nextSlide, 3000); // Auto-slide every 3 seconds


// FAQ code 
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}

// footer code 
document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("successMessage");
    if (emailInput.value.trim() !== "") {
        successMessage.classList.remove("hidden");
        emailInput.value = "";
    }
});
