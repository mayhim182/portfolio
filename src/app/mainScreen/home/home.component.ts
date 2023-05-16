import { Component } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('moveImages', [
      state('left', style({
        left: '0'
      })),
      state('right', style({
        left: 'calc(100% - 150px)'
      })),
      transition('left <=> right', [
        animate('1s')
      ])
    ])
  ]
})
export class HomeComponent{

  
  ngOnInit() {
    setInterval(() => this.moveImages(), 2000);
  }

  animationState = 'left';

  moveImages() {
    this.animationState = this.animationState === 'left' ? 'right' : 'left';
  }

}
