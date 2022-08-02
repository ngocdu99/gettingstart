import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MissionService } from 'src/domain-component/mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent implements OnDestroy {
  @Input() public astronaut = '';
  public mission = 'no mission announced';
  public confirmed : boolean = false;
  public announced: boolean = false;
  public subscription : Subscription =  new Subscription;
  constructor(private missionService: MissionService) {
    this.subscription = missionService.missionAnnouced$.subscribe(_ => {
      this.mission = _;
      this.announced = true;
      this.confirmed = false;
    }
     )
  }
  public confirm(): void {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
