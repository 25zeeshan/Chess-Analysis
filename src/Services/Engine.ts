import axios from "axios";

export async function StockFish(FEN : string, depth: number) : Promise<any>{
    
    try {
        const res = await axios.post("/get_moves", {
            position: FEN,
            depth: depth
        });
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export function CustomEngine(boardArray : any, currentMove : string, fen: string, castle: number[]) : Promise<any>{
    return axios.post("/predictMove/", {
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