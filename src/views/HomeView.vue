<template>
  <div class="home w-screen h-screen relative overflow-hidden">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <div id="mapDiv" class="w-full h-full"></div>
  </div>
</template>

<script>
// import echarts from 'echarts/lib/echarts';
// import 'echarts/lib/chart/scatter';
// import 'echarts/lib/chart/effectScatter';

// import 'echarts-leaflet';
import yunnan from '@/assets/json/YunNanGeo.json'
export default {
  name: 'HomeView',
  data() {
    return {
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // const myChart = echarts.init(document.getElementById("mapDiv"));
      // const option = {
      //   leaflet: {
      //       center: [120.13066322374, 30.240018034923],
      //       zoom: 10,
      //       roam: true,
      //       maxZoom: 10,
      //       minZoom: 1,
      //       // zoomControl: true,
      //       // dragging: true,
      //       tiles: [{
      //         label: '天地图',
      //         urlTemplate: 'http://t{s}.tianditu.gov.cn/vec_c/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=c&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=fe52ea74a378897159b14fd78bceb5eb',
      //         options: {
      //           subdomains:[1,2,3,4,5,6,7],
      //           // attribution: 'tianditu.com'
      //         }
      //       }]
        // },
        // series: [{
        //   type: 'specified',
        //   coordinateSystem: 'leaflet',
        // }]
      // }
      //  myChart.setOption(option)
      
      var map;
      var zoom = 12;
      function onLoad() {
        map = new T.Map("mapDiv");
        map.centerAndZoom(new T.LngLat(102.712251, 25.040609), zoom);
        var customLayer = new T.TileLayer('http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=fe52ea74a378897159b14fd78bceb5eb')
        map.addLayer(customLayer)
        var customLayer2 = new T.TileLayer('http://t0.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=fe52ea74a378897159b14fd78bceb5eb')
        map.addLayer(customLayer2)
        var geoJsonLayer = new T.GeoJSON()
        geoJsonLayer.addData(yunnan)
        console.log(geoJsonLayer)
        map.addLayer(geoJsonLayer)
        // 标记点
         var geojson = {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [116.3975, 39.9087]
                    },
                    "properties": {
                        "name": "天安门"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [116.4038, 39.9151]
                    },
                    "properties": {
                        "name": "故宫"
                    }
                }
            ]
        };
        var geoJsonLayer2 = new T.GeoJSON()
        geoJsonLayer2.addData(geojson)
        map.addLayer(geoJsonLayer2)
        // 设置标注点的样式
        geoJsonLayer2.eachLayer(function(layer) {
            if (layer instanceof T.Marker) {
                var popup = new T.InfoWindow(layer.feature.properties.name);
                layer.bindPopup(popup);
            }
        });
        // new T.MapType(new T.TileLayer('http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=fe52ea74a378897159b14fd78bceb5eb') ,'TMAP_HYBRID_MAP')
      }
      onLoad();
    //   var geoJsonLayer = new T.DataLayer(yunnan, {
    //     draw: function (geoJson, layer) {
    //         // 这个函数可以根据geoJson数据绘制图形
    //         // geoJson是GeoJSON数据，layer是数据图层
    //         var symbol = {
    //             lineColor: "#FF0000",
    //             lineWidth: 2,
    //             // 其他样式设置
    //         };
    //         layer.setStyle(symbol); // 设置样式
    //         layer.addTo(map); // 将图层添加到地图上
    //     }
    // });
    },
  },
}
</script>
