document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const resetBtn = document.getElementById('resetBtn');
    const gridSize = 16;

    // Function to create the grid
    function createGrid(size) {
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
    }

    // Function to reset the grid
    function resetGrid() {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(gridSize);
    }

    // Function to change color and darken on hover
    function changeColor(e) {
        if (e.target.classList.contains('square')) {
            let opacity = parseFloat(e.target.style.opacity) || 0;
    
            if (opacity < 1) {
                const randomColor = getRandomColor();
                e.target.style.backgroundColor = randomColor;
                e.target.style.opacity = opacity + 0.1;
            }
        }
    }
    
    function getRandomColor() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    }
    

    // Event listener for grid squares
    container.addEventListener('mouseover', changeColor);

    // Event listener for reset button
    resetBtn.addEventListener('click', resetGrid);

    // Create initial grid
    createGrid(gridSize);
});
