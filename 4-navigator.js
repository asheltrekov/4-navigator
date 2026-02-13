const addressLat = 10;
const addressLong = 20;
const positionLat = 15;
const positionLong = 25;
const distance = Math.sqrt((addressLat - positionLat) ** 2 + (addressLong - positionLong) ** 2);
console.log(`Дистанция от объекта: ${distance}`);
