let enemies = [{ x: 9, y: 18 }];

function moveEnemies() {
    enemies.forEach(enemy => {
        const dx = Math.sign(player.x - enemy.x);
        const dy = Math.sign(player.y - enemy.y);

        if (map[enemy.y + dy][enemy.x] === 0) enemy.y += dy;
        else if (map[enemy.y][enemy.x + dx] === 0) enemy.x += dx;

        if (enemy.x === player.x && enemy.y === player.y) {
            alert("You were caught!");
            resetGame();
        }
    });
}
