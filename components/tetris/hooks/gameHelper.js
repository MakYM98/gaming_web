export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => {
    return Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([0, 'clear']))
}

export const checkCollision = (player, stage, {x: moveX, y: moveY}) => {
    for (let y = 0; y< player.tetromino.length; y += 1){
        for(let x = 0; x< player.tetromino[0].length; x+=1){
            // 1. Check that we are on an actual Tetromino cell
            if(player.tetromino[y][x] !== 0){
                // Check that our move is inside the game area's height || Check that our move is within the game area's width || Check that the cell we are moving to isnt set to clean
                if(
                    !stage[y + player.pos.y + moveY] || 
                    !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] || 
                    stage[y + player.pos.y +moveY][x+player.pos.x + moveX][1] !== 'clear'
                ){
                    return true
                }
            }
        }
    }
}