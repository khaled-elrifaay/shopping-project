import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Catagories } from '../../services/Catagories';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  show: any;
  public prod;
  public fruits;
  public vegatables;
  public seeds;
  public drinks;
  category: {
    id: string,
    name: string
  }

  public categories: Array<any> = [
    {name: 'Fruits', id: '1'},
    {name: 'Vegatables', id: '2'},
    {name: 'Drinks', id: '4'},
    {name: 'Seeds', id: '3'}
  ]
  constructor(public navCtrl: NavController,public cata:Catagories, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }
  getCategory(category){
  		console.log("category",category.id);
  		if(category.id == 1){
  			this.prod=this.cata.getFruits();
  			console.log(this.prod);
  			this.show =true;
  		}else if(category.id == 2){
  			this.prod = this.cata.getVega();
  			 console.log(this.prod);
  			 this.show =true;
  		}else if(category.id == 3){
  			this.prod = this.cata.getSeeds();
  	  			console.log(this.prod);
  	  			this.show =true;
  		}else{
  			this.prod = this.cata.getDrinks();
  	  			console.log(this.prod);
  	  			this.show =true;
  		}
  		
  }
     details(id){
     this.cata.add(id);
  }
}
