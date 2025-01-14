 const clickCountDisplay = document.getElementById('click-count');
        const header = document.getElementById('header');
        const button = document.getElementById('click-button');
       
//1 Let clickcount updates the clicks for the system
        let clickCount = localStorage.getItem('clickCount') ? parseInt(localStorage.getItem('clickCount')) : 0;

        // Update display on load
        clickCountDisplay.textContent = clickCount;
        updateUI();

//2.The EventListener interface is the primary method for handling events
        // Add event listener to button
        button.addEventListener('click', () => {
            clickCount++;
            localStorage.setItem('clickCount', clickCount);
            clickCountDisplay.textContent = clickCount;
            updateUI();
        });

//3.This changes the color of the background and the text to one of the given 
        function updateUI() {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F5A623', '#E91E63'];
            const texts = [
                'Keep going!',
                'Great job!',
                'You are amazing!',
                'Fantastic!',
                'Click click hooray!'
            ];

            const randomIndex = Math.floor(Math.random() * colors.length);
            document.body.style.backgroundColor = colors[randomIndex];
            header.textContent = texts[randomIndex];
        }
