class Department {
  private employees: string[] = [];

  constructor(public name: string) {
    
  }

  describe() {
    console.log('Department: ' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('Accounting');
accounting.addEmployee('Jomer');
accounting.addEmployee('James');

// accounting.employees[2] = 'Anna'; // Will produce and error: Property 'employees' is private and only accessible within class 'Department'.

accounting.describe();