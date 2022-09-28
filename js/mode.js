const dayButton = document.getElementById('btn-day');
dayButton.addEventListener('click', dayMode);
function dayMode() {
    document.body.style.backgroundColor = 'white';
}
const darkButton = document.getElementById('btn-dark');
darkButton.addEventListener('click', darkMode);
function darkMode() {
    document.body.style.backgroundColor = 'gray';
}