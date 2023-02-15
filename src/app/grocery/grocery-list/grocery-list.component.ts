import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'grocery-list',
  imports: [CommonModule],
  //templateUrl: './grocery-list.component.html',
  template: `
  <div *ngFor="let item of grocery; let i = index" class="container">
    {{ i + 1 }} - {{ item.name }}

    <div>
      {{ item.price }}
  </div>
  
  <div>
      {{ item.weight }}
  </div>

</div>


  `,
  styles:[``]
  //styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  @Input() grocery!: any[];


  ngOnInit(): void {

  }

}
