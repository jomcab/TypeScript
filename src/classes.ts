class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {

  }

  describe() {
    console.log(`Department: (${this.id}) ${this.name}`);
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
  private lastReport = '';
  private static instance: AccountingDepartment;

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('d1', ['Jomer']);
it.addEmployee('Jomer');
it.addEmployee('James');
console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();

accounting.mostRecentReport = 'Year End Report'
accounting.addReport('Accounting Report...');
console.log(accounting.mostRecentReport);
accounting.printReports;

// accounting.employees[2] = 'Anna'; // Will produce and error: Property 'employees' is private and only accessible within class 'Department'.