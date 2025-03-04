const Person = require("./person");

class Employee extends Person {
    constructor(id, name, position, salary, hire_date) {
        super(id, name);
        this.position = position;
        this.salary = salary;
        this.hire_date = hire_date;
        this.supervisedEmployees = []; 
    }

    calculateNetSalary() {
        return this.supervisedEmployees.map(emp => ({
            name: emp.name,
            net_salary: emp.salary + emp.position.bonus
        }));
    }
}