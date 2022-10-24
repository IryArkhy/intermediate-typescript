interface Car {
  make: string;
  model: string;
  year: number;
  color: {
    red: string;
    green: string;
    blue: string;
  };
}

let carColor: Car['color'];
let greenColor: Car['color']['green'];
let colorOrYear: Car['color' | 'year'];
