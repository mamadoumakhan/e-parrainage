import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { RegionService } from '../services/region.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ApiService,
    RegionService,
    ReactiveFormsModule
  ],
  // bootstrap: [AppComponent]
})
export class AppModule { }

