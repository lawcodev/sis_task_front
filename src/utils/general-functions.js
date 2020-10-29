
export function fillWithZeros(value) {
  return value < 10 ? '0' + value: value;
}
export function getYear() {
  return new Date().getFullYear();
}
export function getMonth() {
  return new Date().getMonth();
}
export function getDay() {
  return new Date().getDay();
}
export function getValueMonth(value) {
  let monthValue = 0;
  switch (value) {
    case 'Enero':
      monthValue = '01';
      break;
    case 'Febrero':
      monthValue = '02';
      break;
    case 'Marzo':
      monthValue = '03';
      break;
    case 'Abril':
      monthValue = '04';
      break;
    case 'Mayor':
      monthValue = '05';
      break;
    case 'Junio':
      monthValue = '06';
      break;
    case 'Julio':
      monthValue = '07';
      break;
    case 'Agosto':
      monthValue = '08';
      break;
    case 'Septiembre':
      monthValue = '09';
      break;
    case 'Octubre':
      monthValue = '10';
      break;
    case 'Noviembre':
      monthValue = '11';
      break;
    case 'Diciembre':
      monthValue = 12;
      break;
    default:
      break;
  }
  return monthValue;
}