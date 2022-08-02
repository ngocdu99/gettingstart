import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent  {
  @Input() public name = '';
  @Input() public didVote = false;
  @Input() public agreed = 0;
  @Input() public disagreed = 0;
  @Output() public voted = new EventEmitter<boolean>();

  public vote(agreed: boolean): void {
    this.voted.emit(agreed);
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
    if (this.agreed + this.disagreed === 3) {
      this.didVote = false;
    } else {
      this.didVote = true;
    }
  }

}
