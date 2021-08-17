import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import PlayerVs from "../../components/PlayerVs";
import "./style.css";

function ScoreBoard() {
    return /*HTML*/ `
    ${ArrowDown()}
    <header class="score-board">
    ${PlayerName('Player1')}
    ${PlayerScore()}
    ${PlayerVs('vs')}
    ${PlayerScore()}
    ${PlayerName('Player2')}
    </header>
    `;
}

export default ScoreBoard;