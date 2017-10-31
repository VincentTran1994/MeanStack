import { HttpModule, Http } from '@angular/http';
import { TasksService } from './tasks.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
