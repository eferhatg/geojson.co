import {getSelectedTileDetails} from './utils'

describe("TileOptions", () => {
  test("is generating options correctly", () => {

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
        code: "hyd_full",
        group: "Hydda",
        name: "Full",
        url: "https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",
        maxZoom: 18,
        attribution:
          'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    ]
    expect(getSelectedTileDetails("hyd_full",testProviders)).toEqual({
        code: "hyd_full",
        group: "Hydda",
        name: "Full",
        url: "https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png",
        maxZoom: 18,
        attribution:
          'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      })
  });
});
