type Shape = {
    kind: "circle" | "rectangle";
    radius: number | null
    height: number | null
    width: number | null
}

let circle: Shape = {
    kind: "circle",
    radius: 5,
    height: null,
    width:null
}
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20,
    radius: null
  };
  console.log(circle),
  console.log(rectangle)