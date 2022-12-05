export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export function add(a: number, b: number): Promise<number> {
  return Promise.resolve(a + b);
}
export function substract(a: number, b: number): Promise<number> {
  return Promise.resolve(a - b);
}
export function devide(a: number, b: number): Promise<number> {
  var temp = Number((a / b).toFixed(2));
  return Promise.resolve(temp);
}
