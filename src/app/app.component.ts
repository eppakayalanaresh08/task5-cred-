import { Component } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'credoprationTask4';

  //  constructor(private ms:MobileService)

  mobiles=[{
    id:1,
    name:"xyz",
    // price:2000,
    ram:6,
    storage:64
  },{
    id:2,
    name:"abc",
    // price:2000,
    ram:6, 
    storage:64
  }]
 
  // ngOnInit(){
  //   this.mobiles.fetchMobile().subscribe(
  //     (date)=>{
  //       this.mobiles=date
  //     }
  //   )
  // }



}
