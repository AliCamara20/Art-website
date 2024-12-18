const toggleBtn = document.querySelector("#button");
const grid = document.querySelectorAll(".grid-img");

toggleBtn.addEventListener("click", function(){
    for (let index = 0; index < grid.length; index++) {
        const element = grid[index];
        element.classList.toggle('pad')        
    }
})

console.log(grid)
