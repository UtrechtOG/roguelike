const game = document.getElementById("game");

let currentRoom = 0;
let map = rooms[currentRoom];

function drawMap(player, enemies) {
    game.innerHTML = "";

    map.forEach((row, y) => {
        row.forEach((cell, x) => {
            const tile = document.createElement("div");
            tile.classList.add("tile");

            if (cell === 1) tile.classList.add("wall");
            else tile.classList.add("floor");

            if (cell === 2) tile.classList.add("portal");

            if (player.x === x && player.y === y)
                tile.classList.add("player");

            enemies.forEach(e => {
                if (e.x === x && e.y === y)
                    tile.classList.add("enemy");
            });

            game.appendChild(tile);
        });
    });
}
