import "./style.css"


function ArrowDown(icon = "arrow", alt = "Arrow Down") {
    return /*HTML*/`
    <p class="arrow-zone">
    <img src="images/${icon}.png" alt="${alt}" class="arrow-down">
    </p>
    `
}

export default ArrowDown;
