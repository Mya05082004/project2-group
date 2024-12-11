const $ = (selector) => document.querySelector(selector);
// handle slideshow


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values from the form
    const movie = document.getElementById('movie').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const seats = document.getElementById('seats').value;

    // Update the modal with the booking details
    document.getElementById('modal-movie').textContent = movie;
    document.getElementById('modal-date').textContent = date;
    document.getElementById('modal-time').textContent = time;
    document.getElementById('modal-seats').textContent = seats;

    // Display the modal
    const modal = document.getElementById('modal');
    modal.style.display = "block";

    // Close the modal when the close button is clicked
    const closeButton = document.querySelector('.close-button');
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking outside of the modal content
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});








