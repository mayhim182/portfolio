import { Component, HostBinding, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

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
