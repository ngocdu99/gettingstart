import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnDestroy {
  public intervalId = 0;
  public message = '';
  public seconds = 11;
  constructor() { }

  ngOnDestroy(): void {
    this.clearTimer();
  }
  public clearTimer(): void {
    clearInterval(this.intervalId);
  }
  public start(): void {
    this.countDown();
  }
  public stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }
  public countDown(): void {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; }
        this.message = `T-${this.seconds} seconds and couting`;
      }
    }, 1000);
  }
}
