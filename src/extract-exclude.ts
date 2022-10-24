// Util types
// a set of four specific things
type FavoriteColors =
  | 'dark sienna'
  | 'van dyke brown'
  | 'yellow ochre'
  | 'sap green'
  | 'titanium white'
  | 'phthalo green'
  | 'prussian blue'
  | 'cadium yellow'
  | [number, number, number]
  | { red: number; green: number; blue: number }
  | { red: number; g: number; b: number };

// Grab a subset
type StringColors = Extract<FavoriteColors, string>;

type ObjectColors = Extract<
  FavoriteColors,
  { red: number }
>;

type TupleCol = Extract<
  FavoriteColors,
  [number, number, number]
>;

// Exclude
type NonStringColors = Exclude<FavoriteColors, string>;

/**
 * Exclude from T those types that are assignable to U
 */
type MyExclude<T, U> = T extends U ? never : T;
/**
 * Extract from T those types that are assignable to U
 */
type MyExtract<T, U> = T extends U ? T : never;

// INFERENCE

// `infer` can only be used in conditional types
class FruitStand {
  constructor(fruitName: string[]) {}
}

// DON"T overuse it too much in your code because
// it's heavy thing for the compiler to evaluate
type ConstructorArg<Class> = Class extends {
  // this represents everything that is newable in JS
  // ne want to "collect" the first constructor argument
  // and this is where `infer` keyword comes into play
  // and we don't care about other arguments
  new (arg: infer A, ...args: any[]): any;
}
  ? A
  : never;

let fruits: ConstructorArg<typeof FruitStand>; // it gives you the type of the argument
