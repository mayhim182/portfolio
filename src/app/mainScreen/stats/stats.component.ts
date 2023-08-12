import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css'],
  animations: [
    trigger('matrixAnimation', [
      state(
        'matrix',
        style({
          transform: 'rotateX(360deg) scale(1.2)',
        })
      ),
      transition('* <=> matrix', animate('1s ease')),
    ]),
  ],
})
export class StatsComponent  implements OnInit{

  @ViewChild('myCanvas', { static: true })
  myCanvas!: ElementRef;

  ngOnInit(){
    this.animationMatrix();
  }

  animationMatrix() {
    const canvas = HTMLCanvasElement = this.myCanvas.nativeElement;
    const ctx = canvas?.getContext('2d');
    console.log(canvas);
    if (!canvas) return;
    canvas.width = 650;
    canvas.height = 800;
    let letters =
      'ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ';
    letters.split('');
    let fontSize = 10;
    let columns = canvas.width / fontSize;
    let drops: any[] = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
    setInterval(()=>{
      this.draw(ctx,drops,canvas,letters,fontSize);
    },50);
  }

  draw(ctx: any, drops: any[], canvas: any, letters: any, fontSize: any) {
    ctx.fillStyle = 'rgba(0, 0, 0, .1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillStyle = '#0f0';
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }
}
