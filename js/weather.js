// 날씨

function onGeoOk(position){ 
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat,lng);
    
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

/**
 * getCurrentPosition 특징
 * 인자로 2개의 함수를 받는다. (위치를 성공적으로 가져왔을 때 실행될 함수, 위치를 가져오지 못했을 때 실행될 함수)
 * 성공 시 위도(latitude) 와 경도(longitude) 값을 제공한다.
 */
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)