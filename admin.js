function loadComplaints() {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    let adminComplaints = document.getElementById("adminComplaints");

    adminComplaints.innerHTML = "";

    complaints.forEach((c, index) => {
        adminComplaints.innerHTML += `
            <div class="complaint-card">
                <b>${c.username}</b><br>
                ${c.department}<br>
                ${c.complaint}<br>
                Status: ${c.status}<br>
                <button onclick="resolveComplaint(${index})">Resolve</button>
            </div>
        `;
    });
}

function resolveComplaint(index) {
    let complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    complaints[index].status = "Resolved";
    localStorage.setItem("complaints", JSON.stringify(complaints));
    loadComplaints();
}

loadComplaints();