function resetGame() {
    currentRoom = 0;
    map = rooms[currentRoom];
    player.x = 1;
    player.y = 1;
    enemies = [{ x: 7, y: 8 }];
    drawMap(player, enemies);
}

function nextRoom() {
    alert("You escaped the room!");
    resetGame();
}

document.addEventListener("keydown", e => {
    if (e.key === "w") movePlayer(0, -1);
    if (e.key === "s") movePlayer(0, 1);
    if (e.key === "a") movePlayer(-1, 0);
    if (e.key === "d") movePlayer(1, 0);

    moveEnemies();
    drawMap(player, enemies);
});

document.querySelectorAll(".controls button").forEach(btn => {
    btn.addEventListener("click", () => {
        const d = btn.dataset.dir;
        if (d === "up") movePlayer(0,-1);
        if (d === "down") movePlayer(0,1);
        if (d === "left") movePlayer(-1,0);
        if (d === "right") movePlayer(1,0);

        moveEnemies();
        drawMap(player, enemies);
    });
});

drawMap(player, enemies);
