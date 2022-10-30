import "./styles.css";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

class AnewMap {
  constructor() {
    this.domId = "map";
  }

  initMap() {
    console.log("here is L: ", L);
    this.map = L.map(this.domId, {
      center: [51.505, -0.09],
      zoom: 13
    });

    L.tileLayer(
      "https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}.png" +
        (L.Browser.retina ? "@2x.png" : ".png"),
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    ).addTo(this.map);
  }
}

const anewMap = new AnewMap();
anewMap.initMap();
