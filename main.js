document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-card");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.2)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-card");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.2)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });

    // Image slider functionality
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll('.mySlides');
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
});
