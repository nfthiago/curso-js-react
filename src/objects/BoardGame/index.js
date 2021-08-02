import CardGame from "../../components/CardGame";
import "./style.css"

function BoardGames(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return /*HTML*/`
    <section class="board-game">
        ${$htmlContent}
    </section>

    `

}

export default BoardGames;