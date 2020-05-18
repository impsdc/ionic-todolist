import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, public loadCon: LoadingController, public Geo: Geolocation  ) { }

  lat: string =""; 
  long: string =""; 

  ngOnInit() {
    this.router.navigateByUrl('')
  }

  toTodo(){
    this.router.navigateByUrl('todo')
  }

  async geo(){
    const loading = await this.loadCon.create({
      message: "please wait"
    })
    await loading.present()

    this.Geo.getCurrentPosition()
      .then((resp: Geoposition) => {
        console.log(resp)
        // lat = resp.coords.latitude
        // long = resp.coords.longitude
     })
     .catch((error) => {
       console.log('Error getting location', error);
     })
     .then(()=>{
       loading.dismiss()
     })


  };

  
  
}
