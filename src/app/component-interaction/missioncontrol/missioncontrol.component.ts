import { Component, OnInit } from '@angular/core';
import { MissionService } from 'src/domain-component/mission.service';

@Component({
  selector: 'app-missioncontrol',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.scss'],
})
export class MissioncontrolComponent implements OnInit {
  public astronauts = ['Lovell', 'Swigert', 'Haise'];
  public history: string[] = [];
  public missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to Vegas!'];
  public nextMission = 0;
  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(_ =>
      this.history.push(`${_} confirmed the mission` ));
  }
  public announce(): void {
    const mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) {
      this.nextMission = 0;
    }
  }
  ngOnInit(): void {}
}
