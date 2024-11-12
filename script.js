document.addEventListener('DOMContentLoaded', function () {
    const bookingButton = document.querySelector('.btn-primary'); 
    const nameInput = document.getElementById('nameInput');
    const contactInput = document.getElementById('contactInput');
    const addressInput = document.getElementById('addressInput');
    const packageSelect = document.getElementById('packageSelect');

    
    bookingButton.addEventListener('click', function () {
        const name = nameInput.value;
        const contact = contactInput.value;
        const address = addressInput.value;
        const package = packageSelect.value;

        
        if (!name || !contact || !address || !package) {
            alert('Please fill out all fields.');
            return;
        }

      
        const bookingData = {
            name,
            contact,
            address,
            package
        };

       
        fetch('http://localhost:3000/book', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === 'Booking successful') {
                alert('Your booking has been successfully submitted!');
                
                const modal = bootstrap.Modal.getInstance(document.getElementById('bookingModal'));
                modal.hide();
            } else {
                alert('There was an error submitting your booking.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting your booking.');
        });
    });
});
