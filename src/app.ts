class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Jomer']);
it.addEmployee('Jomer');
it.addEmployee('James');
console.log(it);

const accounting = new AccountingDepartment('d2', []);
accounting.addReport('Accounting Report...');
accounting.printReports();

// accounting.employees[2] = 'Anna'; // Will produce and error: Property 'employees' is private and only accessible within class 'Department'.