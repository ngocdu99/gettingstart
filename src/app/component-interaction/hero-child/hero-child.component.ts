import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/domain-component/hero';

@Component({
  selector: 'app-hero-child',
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent implements OnInit {
  @Input() public hero!: Hero;
  @Input('master') masterName = '';
  constructor() {
  }
  ngOnInit(): void {
  }

}
