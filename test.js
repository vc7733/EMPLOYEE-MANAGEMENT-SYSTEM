document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const department = document.getElementById('department').value;

        addEmployee(name, position, department);

        employeeForm.reset();
    });

    function addEmployee(name, position, department) {
        const row = employeeTable.insertRow();

        const nameCell = row.insertCell(0);
        const positionCell = row.insertCell(1);
        const departmentCell = row.insertCell(2);
        const actionsCell = row.insertCell(3);

        nameCell.textContent = name;
        positionCell.textContent = position;
        departmentCell.textContent = department;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', () => {
            employeeTable.deleteRow(row.rowIndex - 1);
        });

        actionsCell.appendChild(deleteButton);
    }
});
