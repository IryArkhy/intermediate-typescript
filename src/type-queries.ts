// keyof and typeof

const id = Symbol('id');
type Obj = {
  key1: 'k';
  key2: 'b';
  key3: 'c';
  24: 'number';
  [id]: 'hello world';
};

type Keys = keyof Obj;
type DatePropertyNames = keyof Date;

// Get keys that are only strings (because keys could be strings, numbers and symbols)
// Use intersection type operator

type StringKeys = DatePropertyNames & string;
type StringKeys2 = Keys & string;

type SymbolKeys = DatePropertyNames & symbol;
type SymbolKeys2 = Keys & symbol;

// typeof
async function main() {
  const apiResponse = await Promise.all([
    fetch('https://example.com'),
    Promise.resolve('Titanium White'),
  ]);

  // create a type allies
  type ApiResponseType = typeof apiResponse;
}
