import axios from "axios";

export async function StockFish(FEN : string, depth: number) : Promise<any>{
    
    try {
        const res = await axios.post("http://13.234.105.222:5000/get_moves", {
            position: FEN,
            depth: depth
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export function CustomEngine(boardArray : any, currentMove : string, fen: string, castle: number[]) : Promise<any>{
    return axios.post("http://13.234.105.222:5000/predictMove/", {
        gameState: boardArray,
        player : currentMove,
        fenPos: fen,
        castleRights: castle
    }).then((res: any) => {
        return res.data;
    }).catch(err => {
        console.log(err);
    })
}