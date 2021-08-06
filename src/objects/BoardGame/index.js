import "./style.css"
import CardFrontBack from "../../components/CardFrontBack";

function BoardGames(amountCards) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return /*HTML*/`
    <section class="board-game">
        ${$htmlContent}
    </section>

    `

}

export default BoardGames;