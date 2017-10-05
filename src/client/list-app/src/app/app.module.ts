import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar.component';
import { ListContainerComponent } from './lists-container/list-container.component';
import { ListItemComponent  } from './lists-container/list-items/list-item.component';

import { ListsService } from './lists-container/shared/lists.service'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListContainerComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ListsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
