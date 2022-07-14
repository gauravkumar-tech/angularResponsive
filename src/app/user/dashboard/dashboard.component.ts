import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title="Phone Repairs"
  isShow=true;

  constructor(private router:Router,private route: ActivatedRoute) { }
  showFiller = false;

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl("")
  }

}
