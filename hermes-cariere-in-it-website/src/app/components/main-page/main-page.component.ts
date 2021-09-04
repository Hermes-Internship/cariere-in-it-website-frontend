import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(
    private router:Router,
    //public visibleList: boolean = false
  ) { }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  navigateToAboutPage(): void{
    this.router.navigateByUrl("/about");
  }
  
  makeResponsiveMenu(): void{
    /*if(this.visibleList === false)
    {
      this.visibleList = true;
    }
    else{
      this.visibleList = false;
    }*/
  }
}
