//计算高程export function reckon(e) {    let ll = new Cesium.Cartographic.fromDegrees(Number(e.x), Number(e.y));    return earth.scene.globe.getHeight(ll);}