import {Injectable} from "@angular/core";
import {TRIPS} from "./mock-trips";
import {Fruits} from "./mock-trips";
import {Vegatables} from "./mock-trips";
import {Seeds} from "./mock-trips";
import {Drinks} from "./mock-trips";
import {ToastController} from "ionic-angular";

@Injectable()
export class Catagories {
  private trips: any;
  private fruits: any;
  private vegatables: any;
  private seeds: any;
  private drinks: any;
  private cata: any;
  public fav=[]
  public products: Array<any> = [
  ]
  constructor(public toastCtrl:ToastController) {
    this.trips = TRIPS;
    this.fruits = Fruits;
    this.vegatables = Vegatables;
    this.seeds = Seeds;
    this.drinks = Drinks;
  }

  getAll() {
    return this.trips;
  }
  getFruits(){
  	return this.fruits;
  }
  getVega(){
    return this.vegatables;
  }
  getDrinks(){
    return this.drinks;
  }
  getSeeds(){
    return this.seeds;
  }
  getItem(id) {
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].id === parseInt(id)) {
        return this.trips[i];
        
      }
    }
    return null;
  }
  public x;
  getProd(cid){
  	console.log("xx")
    for (var i = 0; i < this.trips.length; i++) {
      if (this.trips[i].cid == parseInt(cid)) {
                console.log(this.cata.push(this.trips[i]));
          continue;
      }

    }
    return null;
     }

  remove(item) {
    this.trips.splice(this.trips.indexOf(item), 1);
  }

  add(id){
         if(this.fav.length== 0){
           id.cid= 0;
      this.fav.push(id);
      this.presentToast("this item added to your basket")
      console.log("firstfav",this.fav)
    }else{
    console.log("inFav",this.fav)

      for (var i = 0; i < this.fav.length ; ++i) {
      if(this.fav[i].id == id.id){
        console.log("id=id",id.id)
          let index = this.fav.indexOf(id);
          console.log("index",index)
          this.fav.splice(index,1);
        console.log("SPLICE",this.fav)
        this.presentToast("this item removed from your basket");
        break;
      }else{
        console.log("yeah")
        this.fav.push(id);
        this.fav[i].cid= 0;
        this.presentToast("this item added to your basket")
        console.log("inFavPUSH",this.fav)
      break;
      }
    }
    }
  }
  rm(id){
      for (var i = 0; i < this.fav.length ; ++i) {
      if(this.fav[i].id == id.id){
        console.log("id=id",id.id)
          let index = this.fav.indexOf(id);
          console.log("index",index)
          this.fav.splice(index,1);
        console.log("SPLICE",this.fav)
        this.test = 0;
        this.presentToast("this item removed from your basket");
        break;
      }else{
        console.log("yeah")
      }
    }
  }
  public test:any = 0;
  getBalance(){
    console.log("lenght",this.fav)
    for(let i=0 ; i < this.fav.length; ++i){
    console.log("PRICE",this.fav[i].price)
    
    this.test +=  this.fav[i].price  ;
    console.log("test",this.test);
    
}
return this.test;
//return this.test;
  }


   presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}
}
