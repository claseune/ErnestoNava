import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  notifications: any[] = [];
  notificationsp: any[] = [];
notifications1: any[] = [];
notifications2: any[] = [];
notifications3: any[] = [];
numnot: number;
  constructor(public alertCtrl: AlertController, public platform: Platform, public navCtrl: NavController, public navParams: NavParams,private locNotif: LocalNotifications) {
  this.numnot=100;
  }

  Notificacion1()
  {
    let currentDate = new Date();
    let date1 = new Date();
    //date1.setDay(currentDate.getDay());
    date1.setHours(14);
    date1.setMinutes(44);
    let date2 = new Date();
    date2.setHours(19);
    date2.setMinutes(30);
    let date3 = new Date();
    date3.setHours(20);
    date3.setMinutes(30);
  let notifica = [{
   id: 1,
    title: "Tarea Profe Prueba",
    text: "Probando, probando 123",
    at: date1 // firstAt and at properties must be an IETF-compliant RFC 2822 timestamp
     //sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
    //sound: "file://sounds/reminder.mp3",
  
  },{
   id: 2,
   title: 'Tarea Profe Part 1',
   text: 'Probando, probando 123',
   at: date2
   //icon: 'http://example.com/icon.png'
},{
   id: 3,
   title: 'Tarea Profe Part 2',
   text: 'Probando, probando 456',
   at: date3
   //icon: 'http://example.com/icon.png'
}];
  this.notifications1.push(notifica);
  console.log("Notifications to be scheduled: ", this.notifications1);
  this.locNotif.schedule(this.notifications1);
  this.notifications1 = [];
  let alert = this.alertCtrl.create({
    title: 'Notifications set',
    buttons: ['Ok']
  });
  alert.present();
}

  addNotifications(){
      let currentDate = new Date();
      let currentDay = currentDate.getDay(); // Sunday = 0, Monday = 1, etc.
      let firstNotificationTime = new Date();
      let firstNotificationTimep = new Date();    
      let firstNotificationTime1 = new Date();  
      let firstNotificationTime2 = new Date();
      let firstNotificationTime3 = new Date();
          //firstNotificationTime.setHours(firstNotificationTime.getHours() + (24 * (dayDifference)));
          
      firstNotificationTime.setHours(16);
      firstNotificationTime.setMinutes(7);
      firstNotificationTime.setSeconds(0);
      firstNotificationTimep.setHours(16);
      firstNotificationTimep.setMinutes(8);
      firstNotificationTimep.setSeconds(0);
          let notification = {
            id: 99,
            title: 'Prueba1!!',
            text: 'Notificacion de Prueba1',
            at: firstNotificationTime
            //every: 'week'
          };
          let notificationp = {
            id: 98,
            title: 'Prueba12!!',
            text: 'Notificacion de Prueba12',
            at: firstNotificationTimep
          };
          this.numnot=this.numnot+1;
          this.notifications.push(notification);
          this.notificationsp.push(notificationp);    


      firstNotificationTime1.setHours(17);
      firstNotificationTime1.setMinutes(30);
      firstNotificationTime1.setSeconds(0);
          let notification1 = {
            id: 100,
            title: 'Prueba!!',
            text: 'Notificacion de Prueba',
            at: firstNotificationTime1
            //every: 'week'
          };
          this.numnot=this.numnot+1;
          this.notifications1.push(notification1);
            
       
          
          firstNotificationTime2.setHours(19);
          firstNotificationTime2.setMinutes(30);
          firstNotificationTime2.setSeconds(0);
          let notification2 = {
            id: 101,
            title: 'Tarea Part 1',
            text: 'Si funciona parte 1',
            at: firstNotificationTime2
            //every: 'week'
          };
          this.numnot=this.numnot+1;
          this.notifications2.push(notification2);
          
        
            firstNotificationTime3.setHours(20);
          firstNotificationTime3.setMinutes(30);
          firstNotificationTime3.setSeconds(0);
          let notification3 = {
            id: 102,
            title: 'Tarea Part 2',
            text: 'Si funciona parte 2',
            at: firstNotificationTime3
            //every: 'week'
          };
          this.numnot=this.numnot+1;
          this.notifications3.push(notification3);
          
        
          
        
      
      console.log("Notifications to be scheduled: ", this.notifications1);
      console.log("Notifications to be scheduled: ", this.notifications2);
      console.log("Notifications to be scheduled: ", this.notifications3);
      console.log("Notifications to be scheduled: ", this.notifications);
      console.log("Notifications to be scheduled: ", this.notificationsp);
      if(this.platform.is('cordova')){
        // Cancel any existing notifications
        this.locNotif.cancelAll().then(() => {
            // Schedule the new notifications
        this.locNotif.schedule(this.notifications1);
        this.locNotif.schedule(this.notifications2);
        this.locNotif.schedule(this.notifications3);
        this.locNotif.schedule(this.notifications);
        this.locNotif.schedule(this.notificationsp);
        this.notifications1 = [];
        this.notifications = [];
        this.notifications2 = [];
        this.notifications3 = [];
        this.notificationsp = [];
        let alert = this.alertCtrl.create({
          title: 'Notifications set: maybe 22',
          buttons: ['Ok']
        });
        alert.present();
      });
    }
  }





  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationPage');
  }

}
