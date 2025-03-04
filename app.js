const { getEmployee, getNetSalariesOfSupervisedEmployees } = require("./services/employeeService");

const supervisorId = 1;
const supervisor = getEmployee(supervisorId);

if (supervisor) {
    console.log(`Supervisor: ${supervisor.name} - Cargo: ${supervisor.position.name}`);
    console.log(`Salario base: ${supervisor.salary}`);
    console.log("Empleados supervisados con salario neto:");

    const salaries = getNetSalariesOfSupervisedEmployees(supervisorId);
    console.table(salaries);
} else {
    console.log("Supervisor no encontrado");
}