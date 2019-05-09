import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

var Speed=Speed.value;
var Dist=Distance.value;
var Time=Time.value;


constructor(public alertController: AlertController) {}

  async calculate() {

	Time=(Distance/Speed);
    const alert = await this.alertController.create({
      header: 'Time to Destination',
      message: 'It will take' Time,
      buttons: ['OK']
    });

    await alert.present();
  }
  }
