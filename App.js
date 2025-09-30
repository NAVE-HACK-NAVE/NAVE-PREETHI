<!DOCTYPE html>
<html>
<head>
    <title>My Love Proposal</title>
    <style>
        body {
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e, #ffaaaa);
            font-family: 'Arial', sans-serif;
            text-align: center;
            padding: 50px;
            color: white;
        }
        .heart {
            font-size: 100px;
            animation: heartbeat 1.5s infinite;
            margin: 20px;
        }
        @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
        }
        .message {
            font-size: 24px;
            margin: 30px;
            line-height: 1.6;
        }
        button {
            background: white;
            color: #ff6b6b;
            border: none;
            padding: 15px 30px;
            font-size: 20px;
            border-radius: 25px;
            cursor: pointer;
            margin: 10px;
            transition: transform 0.3s;
        }
        button:hover {
            transform: scale(1.1);
        }
    </style>
</head>
<body>
    <div class="heart">💖</div>
    <h1>My Dearest [Lover's Name],</h1>
    
    <div class="message" id="message">
        <p>You are the CSS to my HTML,</p>
        <p>The JavaScript to my webpage,</p>
        <p>The perfect match to my heart's algorithm.</p>
        <p>Every moment with you feels like a beautiful function</p>
        <p>That always returns happiness.</p>
    </div>

    <div class="heart">💕</div>
    
    <div>
        <button onclick="propose()">Will You Marry Me?</button>
        <button onclick="surprise()">Click for Surprise!</button>
    </div>

    <script>
        function propose() {
            const message = document.getElementById('message');
            message.innerHTML = `
                <h2>YES! I LOVE YOU! 💍</h2>
                <p>Our love story is the most beautiful program ever written!</p>
                <p>Let's debug life together forever! 💑</p>
            `;
            
            // Create falling hearts
            for(let i = 0; i < 50; i++) {
                createHeart();
            }
        }
        
        function surprise() {
            alert("I love you more than all the bytes in the world! 💖");
        }
        
        function createHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.top = '-50px';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
        
        // Add falling hearts animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    </script>
</body>
</html>
