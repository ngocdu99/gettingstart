import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-countdown-viewchild-parent',
  templateUrl: './countdown-viewchild-parent.component.html',
  styleUrls: ['./countdown-viewchild-parent.component.scss']
})
export class CountdownViewchildParentComponent implements AfterViewInit {

  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;
  public seconds() {
    return 0;
  }
  constructor() { }

  ngAfterViewInit(): void {
      setTimeout(() => this.seconds =()=> this.timerComponent.seconds, 0)
  }
  public start() {
    this.timerComponent.start();
  }
  public stop() {
    this.timerComponent.stop();
  }
}
