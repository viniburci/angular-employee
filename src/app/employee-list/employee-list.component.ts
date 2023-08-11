import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  employees: Employee[] = [];

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    },error => console.log(error));
  }

  viewEmployee(id: number) {
    this.router.navigate(['view-employee',id])
  }

  updateEmployee(id: number) {
    this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeById(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    },error => console.log(error))
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
