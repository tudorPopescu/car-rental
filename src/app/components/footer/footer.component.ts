import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  iconMapMarker = faMapMarkerAlt;
  iconPhone = faPhoneAlt;
  iconEmail = faEnvelope;
  iconClock = faClock;
  iconFacebook = faFacebook;
  iconTwitter = faTwitter;
  iconInstagram = faInstagram;
  iconGoogle = faGoogle;
  footerDate = new Date();

  // Google Maps coordonates
  lat: number;
  lng: number;
  zoom: number;

  constructor() { }

  ngOnInit(): void {
    this.lat = -23.8779431;
    this.lng = -49.8046873;
    this.zoom = 15;
  }

}
