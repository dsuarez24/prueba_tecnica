const database = {
    persons: [
        { id: 1, name: "Carlos Ramírez" },
        { id: 2, name: "María Fernández" },
        { id: 3, name: "Luis Gómez" },
        { id: 4, name: "Ana Torres" },
        { id: 5, name: "Pedro López" },
        { id: 6, name: "Laura Méndez" },
        { id: 7, name: "Jorge Ruiz" },
        { id: 8, name: "Sofía Herrera" },
        { id: 9, name: "Fernando Díaz" },
        { id: 10, name: "Isabel Navarro" }
    ],
    positions: [
        { id: 1, name: "Gerente General", bonus: 15000.00 },
        { id: 2, name: "Director de Finanzas", bonus: 12000.00 },
        { id: 3, name: "Director de Recursos Humanos", bonus: 10000.00 },
        { id: 4, name: "Supervisor de Ventas", bonus: 7000.00 },
        { id: 5, name: "Analista Financiero", bonus: 5000.00 },
        { id: 6, name: "Especialista en RRHH", bonus: 4000.00 },
        { id: 7, name: "Vendedor Senior", bonus: 3000.00 },
        { id: 8, name: "Vendedor Junior", bonus: 2000.00 },
        { id: 9, name: "Asistente Administrativo", bonus: 1000.00 },
        { id: 10, name: "Recepcionista", bonus: 500.00 }
    ],
    employees: [
        { id: 1, person_id: 1, position_id: 1, salary: 90000.00, hire_date: "2010-05-15" },
        { id: 2, person_id: 2, position_id: 2, salary: 75000.00, hire_date: "2012-08-10" },
        { id: 3, person_id: 3, position_id: 3, salary: 72000.00, hire_date: "2015-04-22" },
        { id: 4, person_id: 4, position_id: 4, salary: 60000.00, hire_date: "2016-09-30" },
        { id: 5, person_id: 5, position_id: 5, salary: 50000.00, hire_date: "2017-11-15" },
        { id: 6, person_id: 6, position_id: 6, salary: 45000.00, hire_date: "2018-07-05" },
        { id: 7, person_id: 7, position_id: 7, salary: 40000.00, hire_date: "2019-10-12" },
        { id: 8, person_id: 8, position_id: 8, salary: 35000.00, hire_date: "2020-03-18" },
        { id: 9, person_id: 9, position_id: 9, salary: 30000.00, hire_date: "2021-06-25" },
        { id: 10, person_id: 10, position_id: 10, salary: 28000.00, hire_date: "2022-01-14" }
    ],
    employee_supervision: [
        { supervisor_id: 1, employee_id: 2 },
        { supervisor_id: 1, employee_id: 3 },
        { supervisor_id: 2, employee_id: 4 },
        { supervisor_id: 2, employee_id: 5 },
        { supervisor_id: 3, employee_id: 6 },
        { supervisor_id: 4, employee_id: 7 },
        { supervisor_id: 4, employee_id: 8 },
        { supervisor_id: 5, employee_id: 9 },
        { supervisor_id: 6, employee_id: 10 }
    ]
};

module.exports = database;