// Simple functionality to enhance interactivity (e.g., highlighting a row on hover)
const rows = document.querySelectorAll('.menu-table tr');

rows.forEach(row => {
    row.addEventListener('mouseover', () => {
        row.style.backgroundColor = "#ffebcd"; // Light color on hover
    });

    row.addEventListener('mouseout', () => {
        row.style.backgroundColor = "";
    });
});
function orderNow(dishName){
    alert("You have selected"+dishName+ ". Please proceed to Checkout!");
}