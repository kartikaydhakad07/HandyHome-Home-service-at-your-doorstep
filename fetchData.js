document.addEventListener("DOMContentLoaded", function () {
    
    fetch('http://localhost:4000/appointment/displayAppointment')  



      .then(response => response.json())
      .then(appointments => {
        const container = document.getElementById('product-container');  

        appointments.forEach(appointment => {
          const col = document.createElement('div');
          col.className = 'col-md-4 mb-4';

          const card = document.createElement('div');
          card.className = 'card h-100';

          card.innerHTML = `
            <div class="card-body">
              <h5 class="card-title">${appointment.name}</h5>
              <p class="card-text">Contact: ${appointment.contact || 'N/A'}</p>
              <p class="card-text">Address: ${appointment.address || 'N/A'}</p>
              <p class="card-text">Package: ${appointment.package || 'N/A'}</p>
              <button class="btn btn-danger" onclick="deleteAppointment(${appointment.id})">
                Delete
              </button>
            </div>
          `;

          col.appendChild(card);
          container.appendChild(col);
        });
      })
      .catch(error => console.error('Error fetching appointments:', error));
  });

  function deleteAppointment(appointmentId) {
    
    if (confirm('Are you sure you want to delete this appointment?')) {
      
      fetch(`http://localhost:4000/appointment/deleteAppointment/${appointmentId}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(data => {
          alert(data.message);
          location.reload();  
        })
        .catch(error => console.error('Error deleting appointment:', error));
    }
  }
