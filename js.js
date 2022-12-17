let map;  // 准备加载的地图对象
let wrsLayer;  // 准备加载的点标记图层
let selectLayer;  //准备室加载的文字注记图层
let dataview = false;
let database = false;

axios.get('database.csv').then(response=>{
    database = response;
    console.log(database);
})

let setMap = function () {  // 加载地图和（空白的）标记图层
    map = new TMap.Map('map', {
        center: new TMap.LatLng(39.9096, 116.3972), // 设置地图中心点坐标，为苏州
        zoom: 8,   // 设置地图缩放级别
        viewMode: '2D'  // 2D模式
    });
    // map.on("tilesloaded",function (){
    //     dfd.read_csv("database.csv").then(df=>{
    //         database = df;
    //         console.log('yes')
    //     })
    // })


    // markerLayer = new TMap.MultiMarker({  // 加载标记图层
    //     map: map,  // 指定地图容器，即刚刚创建的地图
    //     styles: {
    //         "others": new TMap.MarkerStyle({  // 创建一个styleId为"others"的样式，用于标记未选中的POI
    //             "width": 30,  // 点标记样式宽度（像素）
    //             "height": 30, // 点标记样式高度（像素）
    //             "src": "data:image;base64," + greenIco  // 标记图为greenIco
    //         }),
    //         "chosen": new TMap.MarkerStyle({  // 用于标记选中的POI
    //             "width": 60,
    //             "height": 60,
    //             "src": "data:image;base64," + redIco  // 标记图为redIco
    //         })
    //     },
    //     geometries: []  // 点标记数据数组，暂时未空，后续添加
    // });
};

