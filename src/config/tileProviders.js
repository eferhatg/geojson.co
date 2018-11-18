export const tileProviders = [
  {
    code: "osm_mapnick",
    group: "OpenStreetMap",
    name: "Mapnik",
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  },
  {
    code: "osm_bnw",
    group: "OpenStreetMap",
    name: "BlackAndWhite",
    url: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
    maxZoom: 18,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  {
    code: "esri_wsm",
    group: "Esri",
    name: "WorldStreetMap",
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    maxZoom: 18,
    attribution:
      'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
  }
];
