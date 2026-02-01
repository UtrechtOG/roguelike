const player = { x: 1, y: 18 };

function movePlayer(dx, dy) {
    const nx = player.x + dx;
    const ny = player.y + dy;

    if (map[ny][nx] !== 1) {
        player.x = nx;
        player.y = ny;
    }

    if (map[ny][nx] === 2) nextRoom();
}
