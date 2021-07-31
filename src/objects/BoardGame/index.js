import CardGame from "../../components/CardGame";

function BoardGames(amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    return $htmlBoardGame
}

export default BoardGames;