import { PlatosService } from './services/platos.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platos: PlatosService) {}
  platosVar: any;
  async onGet(){
    await (await this.platos.get()).subscribe((data) => {
      console.log(data);
    })
  }

  ngOnInit() {
    this.onGet();
  };
}
