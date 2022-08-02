import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroChildComponent } from './component-interaction/hero-child/hero-child.component';
import { HeroParentComponent } from './component-interaction/hero-parent/hero-parent/hero-parent.component';
import { NameChildComponent } from './component-interaction/name-child/name-child.component';
import { NameParentComponent } from './component-interaction/name-parent/name-parent.component';
import { VersionChildComponent } from './component-interaction/version-child/version-child.component';
import { VersionParentComponent } from './component-interaction/version-parent/version-parent.component';
import { VoterComponent } from './component-interaction/voter/voter.component';
import { VoteTakerComponent } from './component-interaction/vote-taker/vote-taker.component';
import { CountdownTimerComponent } from './component-interaction/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './component-interaction/countdown-parent/countdown-parent.component';
import { CountdownViewchildParentComponent } from './component-interaction/countdown-viewchild-parent/countdown-viewchild-parent.component';
import { MissioncontrolComponent } from './component-interaction/missioncontrol/missioncontrol.component';
import { AstronautComponent } from './component-interaction/astronaut/astronaut.component';
import { MissionService } from 'src/domain-component/mission.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    HeroParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VoteTakerComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    CountdownViewchildParentComponent,
    MissioncontrolComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MissionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
