
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