// include-header.js
document.addEventListener('DOMContentLoaded', function () {
    // Fetch and include the header HTML
    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            document.body.insertAdjacentHTML('afterbegin', html);
        });
});


const popupButtons = document.querySelectorAll('.popup-button');
const popupWindow = document.getElementById('popupWindow');

popupButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        popupWindow.style.display = 'block';

        // Calculate the position of the button relative to the viewport
        const buttonRect = button.getBoundingClientRect();

        // Position the popup window next to the button
        popupWindow.style.left = `${buttonRect.right + buttonRect.width + 1}px`;
        popupWindow.style.top = `${buttonRect.top}px`;
    });

    button.addEventListener('mouseout', () => {
        popupWindow.style.display = 'none';
    });
});