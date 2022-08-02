import { Component, OnInit } from '@angular/core';
import { HEROES } from 'src/domain-component/hero';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent implements OnInit {
  public heros = HEROES;
  master = 'Master';
  constructor() { }

  ngOnInit(): void {
  }

}
