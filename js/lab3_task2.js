function sortTableNumbers() {
    const cells = document.querySelectorAll("#numbersTable td");
    let numbers = [];

    cells.forEach(cell => {
        const num = parseInt(cell.textContent);
        if (!isNaN(num)) numbers.push(num);
    });

    numbers.sort((a, b) => a - b);
    document.getElementById("sortedNumbers").textContent = numbers.join(", ");
}

function initSortButton() {
    document.getElementById("sortBtn")
            .addEventListener("click", sortTableNumbers);
}

document.addEventListener("DOMContentLoaded", initSortButton)