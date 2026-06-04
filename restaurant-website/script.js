// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    reveals.forEach((section) => {

        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 120;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealSections);
revealSections();


// ==========================
// ACTIVE NAVBAR LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active-link");
        }

    });

});


// ==========================
// ANIMATED STATS COUNTER
// ==========================

const counters = document.querySelectorAll(".stat-box h4");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const position = statsSection.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach((counter) => {

            const targetText = counter.innerText;

            const target = parseInt(
                targetText.replace(/\D/g, "")
            );

            let count = 0;

            const speed = target / 100;

            const updateCounter = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText =
                        Math.floor(count);

                    requestAnimationFrame(
                        updateCounter
                    );

                } else {

                    if (target === 5000) {
                        counter.innerText = "5000+";
                    }

                    else if (target === 50) {
                        counter.innerText = "50+";
                    }

                    else if (target === 10) {
                        counter.innerText = "10+";
                    }

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener(
    "scroll",
    startCounters
);

startCounters();


// ==========================
// MENU CARD PARALLAX EFFECT
// ==========================

const menuCards =
document.querySelectorAll(".menu-card");

menuCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (e) => {

            const rect =
            card.getBoundingClientRect();

            const x =
            e.clientX - rect.left;

            const y =
            e.clientY - rect.top;

            const rotateY =
            (x / rect.width - 0.5) * 10;

            const rotateX =
            (0.5 - y / rect.height) * 10;

            card.style.transform =
            `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.03)
            `;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
            "rotateX(0) rotateY(0)";
        }
    );

});


// ==========================
// CONTACT FORM DEMO
// ==========================

const form =
document.querySelector(".contact-form");

if (form) {

    form.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your table reservation request has been received."
            );

            form.reset();

        }
    );
}