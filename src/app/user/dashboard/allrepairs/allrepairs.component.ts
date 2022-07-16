import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RepairSaveService } from 'src/app/services/repair-save.service';


export interface repairs {
  complaint: string,
  firstCtrl: string,
  id: any,
  model: string,
  telephone: string,
}

@Component({
  selector: 'app-allrepairs',
  templateUrl: './allrepairs.component.html',
  styleUrls: ['./allrepairs.component.scss']
})
export class AllrepairsComponent implements OnInit {
  displayedColumns: string[] = [ 'id', 'firstCtrl', 'model','telephone','complaint'];
  dataSource !:repairs[];
  constructor(private repairService:RepairSaveService) { }

  ngOnInit(): void {
    this.getAllRepairs();  
  }

  getAllRepairs(){
    this.repairService.getAllRepairs().subscribe(info=>{
      console.log(info);
      this.dataSource = info;
      
    },error=>{
      console.log(error);
    })
  }

}
