import CardGame from "../CardGame";

function CardFrontBack() {
    return /*HTML*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame()}
        </article>

    `
}

export default CardFrontBack;