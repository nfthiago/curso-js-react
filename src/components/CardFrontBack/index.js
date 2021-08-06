import CardGame from "../CardGame";

function CardFrontBack() {
    return /*HTML*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript", "Logo do JS")}
        </article>

    `
}

export default CardFrontBack;