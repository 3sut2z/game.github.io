const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Thêm sự kiện click để nhảy
canvas.addEventListener("click", () => {
    bird.jump();
});

// Định nghĩa class Bird
class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.velocity = 0;
        this.gravity = 0.5;
    }

    draw() {
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.x, this.y, 20, 20);
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
    }

    jump() {
        this.velocity = -10;
    }
}

// Khởi tạo chim
const bird = new Bird();

// Vòng lặp game
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    bird.draw();
    bird.update();

    requestAnimationFrame(gameLoop);
}

gameLoop();
