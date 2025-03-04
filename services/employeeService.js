const database = require("../db");
const Employee = require("../models/employee");
const Position = require("../models/position");

// Obtener un empleado con su cargo y datos completos
function getEmployee(employeeId) {
    const empData = database.employees.find(emp => emp.id === employeeId);
    if (!empData) return null;

    const personData = database.persons.find(p => p.id === empData.person_id);
    const positionData = database.positions.find(pos => pos.id === empData.position_id);

    if (!personData || !positionData) return null;

    return new Employee(
        empData.id,
        personData.name,
        new Position(positionData.id, positionData.name, positionData.bonus),
        empData.salary,
        empData.hire_date
    );
}

// Obtener los empleados que son supervisados por un ID de supervisor
function getSupervisedEmployees(supervisorId) {
    return database.employee_supervision
        .filter(sup => sup.supervisor_id === supervisorId) 
        .map(sup => getEmployee(sup.employee_id)) 
        .filter(emp => emp !== null); /
}

//Calcular el salario neto de los empleados supervisados
function getNetSalariesOfSupervisedEmployees(supervisorId) {
    const supervisor = getEmployee(supervisorId);
    if (!supervisor) return { error: "Supervisor not found" };

//Obtener empleados a su cargo
    supervisor.supervisedEmployees = getSupervisedEmployees(supervisorId);

// Retornar lista con su nombre y salario neto
    return supervisor.supervisedEmployees.map(emp => ({
        name: emp.name,
        net_salary: emp.salary + emp.position.bonus
    }));
}

module.exports = { getEmployee, getSupervisedEmployees, getNetSalariesOfSupervisedEmployees };