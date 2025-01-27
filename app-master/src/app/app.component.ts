import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private storage: Storage) {}

  async ngOnInit() {
    // Inicializa el almacenamiento de Ionic cuando el componente se inicializa
    await this.storage.create();
  }
}
