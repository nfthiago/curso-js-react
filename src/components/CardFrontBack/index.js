import CardGame from "../CardGame";
import "./style.css";

function CardFrontBack() {
    return /*HTML*/`
        <article class="card-front-back">
           <div class="card -front"> 
            ${CardGame()} 
           </div>
           <div class="card -back"> 
            ${CardGame("javascript", "Logo do JS")} 
           </div>
        </article>

    `
}

export default CardFrontBack;