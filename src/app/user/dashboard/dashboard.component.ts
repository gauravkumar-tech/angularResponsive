import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title="Phone Repairs"
  isShow=true;

  constructor(private router:Router) { }
  showFiller = false;

  ngOnInit(): void {
   this.router.navigateByUrl("user/(userm:post)")
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("")
  }

}
