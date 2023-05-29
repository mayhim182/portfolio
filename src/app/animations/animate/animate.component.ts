import { Component, HostBinding, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.css'],
  animations:[
    trigger('scrollAnimation',[
      state('show',style({
        opacity:1,
        transform:'translateY(0)'
      })),
      state(
        'hide',style({
          opacity:0,
          transform:'translateY(100vh)'
        })
      ),
      transition('hide=>show',animate('1s ease-in')),
    ])
  ]
})
export class AnimateComponent {

  currentState='hide';

  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(window.pageYOffset>100){
      this.currentState='show';
    }
  }

}
