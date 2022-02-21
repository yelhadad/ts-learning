import { User } from './User'
import { Company } from './Company';

interface Mapeble {
    location: {
        lat: number,
        lng: number
    };
    markerContent(): string;
};

export class CustomMap {
   private googleMap: google.maps.Map;

    constructor() {
        this.googleMap = new google.maps.Map(document.getElementById('root'), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }
    
    addMarker(mapeble: Mapeble): void{
       const discription = mapeble.markerContent();  
       const marker = new google.maps.Marker({
           map: this.googleMap,
           position: {
               lat: mapeble.location.lat,
               lng: mapeble.location.lng
           }     
        })
        const infoWindow = new google.maps.InfoWindow({
            content: discription
        });
        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker)
        })
    }   

    }
