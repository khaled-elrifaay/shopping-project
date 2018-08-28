import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import {Catagories} from "../../services/Catagories";

/**
 * Generated class for the BasketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-basket',
  templateUrl: 'basket.html',
})
export class BasketPage {
	public prods;
	public balance;
	public show:boolean = false;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public cata:Catagories ,public navParams: NavParams) {
this.prods = this.cata.fav;
console.log("prods",this.prods)
this.balance = this.cata.getBalance();
if(this.balance == 0 || this.balance == null){
	console.log("no balance");
	this.presentAlert();
}else{
	this.show = true;
}
console.log("balance",this.balance)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasketPage');
  }
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'No Items',
    subTitle: 'Your Basket is empty',
    buttons: ['Dismiss']
  });
  alert.present();
}
}
