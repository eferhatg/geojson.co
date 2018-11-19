import {generateOptionsArray} from './utils'

describe('TileOptions',()=>{
    test('is generating options array correctly',()=>{

        let testProviders=[  {
            code: "osm",
            group: "OpenStreetMap",
            name: "Mapnik",
            url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          },
          {
            code: "osm",
            group: "OpenStreetMap",
            name: "BlackAndWhite",
            url: "http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png",
            maxZoom: 18,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          },
          {
            code: "hyd",
            group: "Hydda",
            name: "Full",
            url: "https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",
            maxZoom: 18,
            attribution:
              'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }
        ]

expect(generateOptionsArray(testProviders)).toEqual({ OpenStreetMap:
    [ { text: 'Mapnik', value: 'osm' },
      { text: 'BlackAndWhite', value: 'osm' } ],
   Hydda: [ { text: 'Full', value: 'hyd' } ] })

  
    })
})