import {Component} from "@angular/core";
import {NavController,ToastController, PopoverController} from "ionic-angular";
import {NotificationsPage} from "../notifications/notifications";
import {Catagories} from "../../services/Catagories";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  searchQuery: string = '';
  public fav: any = [];
  public show : boolean = false;
  public test;
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
  constructor(public toastCtrl:ToastController,public cata:Catagories , public nav: NavController, public popoverCtrl: PopoverController) {
    this.getProducts();
    this.initializeItems();
  }
  getCategory(category){
      console.log("category",category.id);
      if(category.id == 1){
        this.products=this.cata.getFruits();
        console.log(this.products);
        this.show =true;
      }else if(category.id == 2){
        this.products = this.cata.getVega();
         console.log(this.products);
         this.show =true;
      }else if(category.id == 3){
        this.products = this.cata.getSeeds();
            console.log(this.products);
            this.show =true;
      }else{
        this.products = this.cata.getDrinks();
            console.log(this.products);
            this.show =true;
      }
      
  }
  ionViewWillEnter() {

  }

  presentNotifications(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    });
  }
  public products;
  getProducts(){
    this.products = this.cata.getAll();
    console.log("prod",this.products);
    
  }
   initializeItems() {
     this.getProducts();
  }
  public x =[];
   details(id){
     id.cid =0;
     this.cata.add(id);
  }
remove(id){
  id.cid =1;
  this.cata.rm(id);
}
  getItems(ev: any) {
     this.initializeItems();
    // Reset items back to all of the items
    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.products = this.products.filter((product) => {
        return (product.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  presentProfileModal() {

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
