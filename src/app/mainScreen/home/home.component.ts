import { Component, HostListener, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state(
        'show',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
          transform: 'translateY(100vh)',
        })
      ),
      transition('hide=>show', animate('1s ease-in')),
    ]),
  ],
})
export class HomeComponent implements OnInit{
  constructor(private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.generateGitHubRepoUrl();
  }
  

  listItems:any=['project1','project2','project3','project4','project5'];

  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  };


  currentState='hide';

  @HostListener('window:scroll',[])
  onWindowScroll(){
    if(window.pageYOffset>100){
      this.currentState='show';
    }
  }

  navigateToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  // For github repo to iframe
githubRepoUrl: SafeResourceUrl = '';
generateGitHubRepoUrl() {
  const repoUrl = 'https://github.com/your-username/your-repo';
  this.githubRepoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(repoUrl);
}

}
