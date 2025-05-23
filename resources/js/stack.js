const technologies = [...document.getElementById("stack").children];

const scaleFactor = 1.5;
const siblingScaleFactor = 1.2;
const normalScale = 1;

technologies.forEach((element) => {
    element.style.transition = "scale 0.2s ease-out";
    element.addEventListener("mouseover", (event) => {
        const nextSibling = event.target.nextElementSibling
        const previousSibling = event.target.previousElementSibling;
        if (nextSibling !== null) nextSibling.style.scale = siblingScaleFactor;
        if (previousSibling !== null) previousSibling.style.scale = siblingScaleFactor;
        event.target.style.scale = scaleFactor;
    });
    element.addEventListener("mouseout", (event) => {
        const nextSibling = event.target.nextElementSibling
        const previousSibling = event.target.previousElementSibling;
        if (nextSibling !== null) nextSibling.style.scale = normalScale;
        if (previousSibling !== null) previousSibling.style.scale = normalScale;
        event.target.style.scale = normalScale;
    })
})