import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-parent',
  templateUrl: './version-parent.component.html',
  styleUrls: ['./version-parent.component.scss']
})
export class VersionParentComponent {
  public major = 1;
  public minor = 23;

  public newMinor() : void {
    this.major++;
  }
  public newMajor(): void {
    this.major++;
    this.minor = 0;
  }

}
