document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;
    const employeeId = document.getElementById('employeeId').value;
    const profilePicture = document.getElementById('profilePicture').value;

    // Add employee to list
    const employeeList = document.getElementById('employeeList');
    const listItem = document.createElement('li');
    listItem.innerHTML = `<a href="#" onclick="showEmployeeDetails('${fullName}', '${employeeId}', '${department}', '${profilePicture}')">${fullName} - ${email}</a>`;
    employeeList.appendChild(listItem);

    // Clear form fields
    this.reset();
});

function showEmployeeDetails(name, id, department, picture) {
    const employeeDetailsBody = document.getElementById('employeeDetailsBody');
    employeeDetailsBody.innerHTML = `
        <tr>
            <td>${name}</td>
            <td>${id}</td>
            <td>${department}</td>
            <td><img src="${picture}" alt="${name}'s Profile" style="width: 50px; height: auto;"></td>
        </tr>
    `;
}
