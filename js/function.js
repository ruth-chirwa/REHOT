function showTab(id) {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => tab.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function logOutreach(event) {
    event.preventDefault();
    alert("Outreach activity logged successfully!");
    event.target.reset();
}

// Show dashboard by default
document.addEventListener("DOMContentLoaded", () => {
    showTab('dashboard');
});

function showPopup() {
    document.getElementById("logout").style.display = "flex";
}

function hidePopup() {
    document.getElementById("logout").style.display = "none";
}

function logout() {
    alert("Logging out...")
    hidePopup();
}

document.getElementById("logout").addEventListener("click", function(e){
    if (e.target === this) {
        hidePopup();
    }
});

// show patient details in a popup
fetch('http://127.0.0.1:8000/patients/')
  .then(res => res.json())
  .then(patients => {
    const tbody = document.querySelector('#patients tbody');
    tbody.innerHTML = '';

    patients.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${p.name}</td>
        <td>${p.age}</td>
        <td>${p.gender}</td>
        <td>${p.village}</td>
        <td><button class="view-more-btn" onclick='viewMore(${JSON.stringify(JSON.stringify(p))})'>View More</button></td>
      `;
      tbody.appendChild(tr);
    });
  });

function viewMore(patientStr) {
  const patient = JSON.parse(patientStr);
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <p><strong>Name:</strong> ${patient.name}</p>
    <p><strong>Age:</strong> ${patient.age}</p>
    <p><strong>Gender:</strong> ${patient.gender}</p>
    <p><strong>Village:</strong> ${patient.village}</p>
    <p><strong>Status:</strong> ${patient.status}</p>
    <p><strong>Contact:</strong> ${patient.contact}</p>
    <p><strong>Department:</strong> ${patient.department}</p>
    <p><strong>Region:</strong> ${patient.region}</p>
    <p><strong>Notes:</strong> ${patient.notes}</p>
  `;
  document.getElementById('patientModal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closeModal() {
  document.getElementById('patientModal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}


// form 
function logOutreach(event) {
  event.preventDefault();

  const form = event.target;
  const data = {
    name: form.name.value,
    gender: form.gender.value,
    village: form.village.value,
    age: Number(form.age.value),
    status: form.status.value,
    contact: form.contact.value,
    department: form.department.value,
    region: form.region.value,
    notes: form.notes.value
  };

  fetch('http://127.0.0.1:8000/patients/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(res => {
    if (!res.ok) throw new Error('Failed to log outreach');
    return res.json();
  })
  .then(response => {
    alert("Outreach logged successfully!");
    form.reset();
    // optionally reload patient table here
  })
  .catch(error => {
    console.error('Error:', error);
    alert("Something went wrong.");
  });
}


function show(value) {
  return (value !== undefined && value !== null && value !== "") ? value : "N/A";
}

function openModal() {
  document.getElementById('patientModal').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
  document.body.style.overflow = 'hidden';  // Prevent background scroll
}

function closeModal() {
  document.getElementById('patientModal').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  document.body.style.overflow = '';  // Restore scroll
}
