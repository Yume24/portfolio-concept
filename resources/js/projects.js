const projectsListChildren = document.querySelectorAll(".projects h3");
projectsListChildren.forEach((element) => {
    element.addEventListener("click", (event) => {
        let target = event.target;
        if (event.target.tagName != 'H3') target = target.parentElement;
        const textElement = target.nextElementSibling;
        if (textElement.style.display === 'none' || !textElement.style.display) textElement.style.display = 'initial';
        else textElement.style.display = "none";
    })
})