import { HttpClient } from "@angular/common/http";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnChanges {
  emp: any;
  empList: any;
  previousValue: any = -1;
  currentValue: any = -1;

  @Input() empId: any;
  constructor(private http: HttpClient) {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe(data => {
        this.empList = data;
        console.log(data);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (this.empList != undefined) {
      this.currentValue = this.empList.find(
        x => x.id == changes.empId.currentValue
      );
      this.previousValue = this.empList.find(
        x => x.id == changes.empId.previousValue
      );
      this.emp = this.empList.find(x => x.id == this.empId);
    }
  }
}
