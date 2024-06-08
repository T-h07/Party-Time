document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-col form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const inputs = form.querySelectorAll('input[type=text], textarea');
        let allFilled = true;
        let invalidDate = false;
        const dateInput = form.querySelector('input[placeholder="Enter Event Date (DD/MM/YYYY)"]');

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                allFilled = false;
            }
        });


        if (dateInput && !dateInput.value.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
            invalidDate = true;
            dateInput.value = ''; 
        }

        if (!allFilled) {
            alert('Please fill in all fields.');
            return;
        }

        if (invalidDate) {
            alert('Please enter the event date in DD/MM/YYYY format.');
            return;
        }

        alert('Your information was sent successfully!');

        inputs.forEach(input => {
            input.value = '';
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('newsletter-form');
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); 
            var email = document.getElementById('newsletter-email').value;
            if(email) {
                alert('Thank you for subscribing to the Party Time newsletter! You will receive updates to ' + email);
                document.getElementById('newsletter-email').value = ''; 
            }
        });
    }
});






document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav_links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});













