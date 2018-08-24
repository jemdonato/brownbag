import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DemoserviceProvider } from '../../providers/demoservice/demoservice';

/**
 * Generated class for the DemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html',
})
export class DemoPage {

  private userList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public demoService: DemoserviceProvider) {
    this.getUserList();
    console.log('this.userList', this.userList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DemoPage');
  }

  getUserList(){
    this.demoService.getUsers()
      .subscribe(data => {
        this.userList = data['data'];
      });
  }

}
