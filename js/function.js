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


