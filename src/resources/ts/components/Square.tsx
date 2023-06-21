
export default function Square({value, onSquareClick}){
    return (
        <button className="square" onClick={onSquareClick}>
            {value !== null ? value : "　"}
        </button>
    )
}
