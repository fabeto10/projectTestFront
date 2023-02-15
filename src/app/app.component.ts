import { PlatosService } from './services/platos.service';
import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platos: PlatosService) {}
  platosVar: any;
  async onGet(){
    await this.platos.get().then(data => {
      console.log(data);
      this.platosVar = data;
    }).catch(err => {
      console.log(err);
    })
  }

  ngOnInit() {
    this.onGet();
  };
}
