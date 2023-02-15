import { Component, OnInit } from '@angular/core';

@Component({
  //standalone:true,
  selector: 'app-root',
  template:`
  <h2>Grocery</h2>

<!-- <grocery-list [grocery]="itemGrocery"></grocery-list> -->
<grocery-list [grocery]="itemGrocery" />

<h2>Dmart Grocery</h2>
<!-- <grocery-list [grocery]="dmartGrocery"></grocery-list> -->
<grocery-list [grocery]="dmartGrocery" />

<hr>


  `
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dmartGrocery!: any;
  itemGrocery!:any;
  ngOnInit(): void {
    this.dmartGrocery = [
      {
        name: 'Moong Dal',
        price: 150,
        weight: '1 kg'
      },
      {
        name: 'Chana Dal',
        price: 80,
        weight: '1 kg'
      }
    ]
  
  
    this.itemGrocery =  [
      {
          name: 'Almonds',
          price: 300,
          weight: '500 gms'
      },
      {
          name: 'Sugar',
          price: 40,
          weight: '1 kg'
      }
    ];
  }
  
  title = 'D-Mart';

  


}
