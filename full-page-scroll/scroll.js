window.onload = () => {
    const paginations = document.querySelectorAll(".pagination a");
    paginations.forEach(pagination => {
        pagination.addEventListener("click", e => {
            e.preventDefault();
            const target = document.querySelector(e.target.hash);
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
    
    const options = {
        root: document.querySelector(".full-page-scroll"),
        rootMargin: "-50% 0px",
        threshold: 0
    };
    const observer = new IntersectionObserver(doWhenIntersect, options);
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        observer.observe(section);
    });
};

function doWhenIntersect(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            activatePagination(entry.target);
        }
    });
}

function activatePagination(element) {
    const currentActiveIndex = document.querySelector("#pagination .active");
    if(currentActiveIndex !== null) {
        currentActiveIndex.classList.remove("active");
    }
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    if(newActiveIndex !== null) {
        newActiveIndex.classList.add("active");
    }
}
