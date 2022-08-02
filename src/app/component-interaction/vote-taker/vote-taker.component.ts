import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.scss']
})
export class VoteTakerComponent  {
  public agreed = 0;
  public disagreed = 0;
  public voters = ['Dr IQ', 'Celeritas', 'Bombasto'];
  public didVote : boolean = false;
  public onVoted(agreed: boolean): void {
    if (agreed) {
      this.agreed++;
    } else {
      this.disagreed++;
    }
  }
}
