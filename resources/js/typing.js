window.addEventListener("load", () => {
    const textToType = "Hi, I'm a fullstack developer";
    const speed = 200;
    const delay = 1000;
    const title = document.getElementById('title');
    let index = 0;

    function type() {
        if (index < textToType.length) {
            title.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    setTimeout(type, delay);
})