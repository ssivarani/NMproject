document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value;
    let department = document.getElementById("department").value;
    let complaint = document.getElementById("complaint").value;

    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];

    complaints.push({
        username,
        department,
        complaint,
        status: "Pending"
    });

    localStorage.setItem("complaints", JSON.stringify(complaints));

    displayComplaints();
    document.getElementById("complaintForm").reset();
});

function displayComplaints() {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    let complaintList = document.getElementById("complaintList");

    complaintList.innerHTML = "";

    complaints.forEach(c => {
        complaintList.innerHTML += `
            <div class="complaint-card">
                <b>${c.username}</b><br>
                ${c.department}<br>
                ${c.complaint}<br>
                Status: ${c.status}
            </div>
        `;
    });
}

displayComplaints();