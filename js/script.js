
// ==================== PROJECT DATA ====================
// Add new projects here easily

const featuredProjects = [
    {
        id: 1,
        title: "پروژه تجاری–اداری | ۱۱٫۴۰×۲۹ متر",
        info: "۵ طبقه زیرزمین + ۸ طبقه روی همکف",
        description: "چالش اصلی پروژه، سازماندهی ارتباطات عمودی در زمینی محدود و ایجاد تعادل میان عملکرد، ضوابط و کیفیت معماری بود.",
        folder: "img/projects/1",
        images: ["1.jpg", "2.jpg"],
    },
    {
        id: 2,
        title: "پروژه مسکونی لوکس | ۱۳×۴۰ متر",
        info: "۲ زیرزمین + ۶ طبقه روی همکف",
        description: "همکف مشاعات، ۲ طبقه مسکونی ۳۵۰ متری و دوبلکس‌های مجهز به استخر اختصاصی. تمرکز طراحی بر خلق تجربه‌ای لوکس با تأکید بر کیفیت فضایی، حریم خصوصی و هماهنگی میان عملکرد و زیبایی‌شناسی بوده است.",
        folder: "img/projects/2",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"],
    },
    {
        id: 3,
        title: "پروژه مسکونی | طراحی در سایت نامنظم",
        info: "۱ زیرزمین + ۷ طبقه روی همکف",
        description: "بهینه‌سازی پلان، تأمین نور طبیعی و بهره‌گیری حداکثری از ظرفیت زمین ذوزنقه‌ای.",
        folder: "img/projects/3",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"],
    },
    {
        id: 4,
        title: "کاربری: مسکونی",
        info: "۲ طبقه زیرزمین + همکف + ۷ طبقه مسکونی",
        description: "تیپ واحدها: دو واحدی",
        folder: "img/projects/4",
        images: ["1.jpg"],
    },
    {
        id: 5,
        title: "ویلای دوبلکس ۳۴۰ مترمربع",
        info: "",
        description: "رویکرد طراحی بر پایه‌ی تلفیق عملکرد، کیفیت فضایی و خلق محیطی متناسب با نیازهای ساکنان شکل گرفته است.",
        folder: "img/projects/5",
        images: ["1.jpg"],
    }
];

const otherProjects = [
    {
        id: "a",
        title: "هاشمیه",
        folder: "img/projects/6/1. Hasemieh",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
    },
    {
        id: "b",
        title: "آموزگار",
        folder: "img/projects/6/2. Amoozegar",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
    },
    {
        id: "c",
        title: "فاطمیه",
        folder: "img/projects/6/3. Fatemieh",
        images: ["1.jpg"]
    },
    {
        id: "d",
        title: "مسکونی",
        folder: "img/projects/6/4. Residential",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
    },
    {
        id: "e",
        title: "ویلا",
        folder: "img/projects/6/5. Villa",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.png", "7.jpg", "8.jpg", "9.jpg"]
    },
    {
        id: "f",
        title: "6",
        folder: "img/projects/6/6",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
    },
    {
        id: "g",
        title: "7",
        folder: "img/projects/6/7",
        images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"]
    }
];

// ==================== FEATURED PROJECTS (with small gallery) ====================
function renderFeatured() {
    const container = document.getElementById("featured-projects");
    if (!container) return;

    container.innerHTML = featuredProjects.map(proj => `
        <div class="project-card">
            <div class="featured-gallery" id="featured-gallery-${proj.id}">
                <img
                    id="featured-img-${proj.id}"
                    class="main-featured-img"
                    src="${proj.folder}/${proj.images[0]}"
                    alt="${proj.title}"
                >

                ${proj.images.length > 1
            ? `<div class="image-count" id="featured-count-${proj.id}">
                        1 / ${proj.images.length}
                       </div>`
            : ""}
            </div>

            <div class="project-info">
                <h3>${proj.title}</h3>

                ${proj.info
            ? `<p class="project-meta">${proj.info}</p>`
            : ""}

                <p class="project-desc">${proj.description}</p>
            </div>
        </div>
    `).join("");

    featuredProjects.forEach(initFeaturedCarousel);
}

function initFeaturedCarousel(proj) {

    if (proj.images.length === 0) return;

    const img = document.getElementById(`featured-img-${proj.id}`);
    const gallery = document.getElementById(`featured-gallery-${proj.id}`);
    const counter = document.getElementById(`featured-count-${proj.id}`);

    let current = 0;

    function show() {
        img.src = `${proj.folder}/${proj.images[current]}`;

        if (counter) {
            counter.textContent = `${current + 1} / ${proj.images.length}`;
        }
    }

    show();

    gallery.addEventListener("click", () => {
        openLightbox(proj.folder, proj.images, current);
    });

    if (proj.images.length > 1) {
        setInterval(() => {
            current = (current + 1) % proj.images.length;
            show();
        }, 4000);
    }
}


// ==================== OTHER PROJECTS ====================

function renderOther() {

    const container = document.getElementById("other-projects");
    if (!container) return;

    container.innerHTML = otherProjects.map(proj => `
        <div class="other-project">

            <div class="auto-carousel" id="auto-carousel-${proj.id}">

                <div
                    class="slides-container"
                    id="slides-${proj.id}">
                </div>

                <button class="carousel-btn prev">‹</button>
                <button class="carousel-btn next">›</button>

            </div>

        </div>
    `).join("");

    otherProjects.forEach(initAutoCarousel);
}

function initAutoCarousel(proj) {

    const container = document.getElementById(`slides-${proj.id}`);
    if (!container) return;

    proj.images.forEach((image, index) => {

        const slide = document.createElement("div");
        slide.className = "slide";

        slide.innerHTML = `
            <img
                src="${proj.folder}/${image}"
                alt="${proj.title}">
        `;

        slide.addEventListener("click", () => {
            openLightbox(proj.folder, proj.images, index);
        });

        container.appendChild(slide);

    });

    const slides = container.children;
    const total = slides.length;

    let current = 0;

    function show() {

        Array.from(slides).forEach((slide, i) => {
            slide.style.display = i === current ? "block" : "none";
        });

    }

    show();

    function next() {
        current = (current + 1) % total;
        show();
    }

    let interval = setInterval(next, 4000);

    const wrapper = document.getElementById(`auto-carousel-${proj.id}`);

    wrapper.querySelector(".next").addEventListener("click", () => {
        clearInterval(interval);
        next();
        interval = setInterval(next, 4000);
    });

    wrapper.querySelector(".prev").addEventListener("click", () => {
        clearInterval(interval);
        current = (current - 1 + total) % total;
        show();
        interval = setInterval(next, 4000);
    });

}


// ==================== LIGHTBOX ====================

let currentImages = [];
let currentIndex = 0;

window.openLightbox = function (folder, images, startIndex = 0) {

    currentImages = images.map(img => `${folder}/${img}`);
    currentIndex = startIndex;

    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-image");

    function show() {
        image.src = currentImages[currentIndex];
    }

    document.getElementById("lightbox-next").onclick = () => {
        currentIndex = (currentIndex + 1) % currentImages.length;
        show();
    };

    document.getElementById("lightbox-prev").onclick = () => {
        currentIndex =
            (currentIndex - 1 + currentImages.length) % currentImages.length;
        show();
    };

    document.getElementById("lightbox-close").onclick = () => {
        lightbox.style.display = "none";
    };

    show();
    lightbox.style.display = "flex";
};


// ==================== INIT ====================

document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
    renderOther();
});
