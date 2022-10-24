interface Fruit {
  name: string;
  mass: number;
  color: string;
}

class Fruit {
  static createBanana(): Fruit {
    return { name: 'banana', color: 'yellow', mass: 183 };
  }
}

// the namespace
namespace Fruit {
  function createFruit(): Fruit {
    // the type
    return Fruit.createBanana(); // the class
  }
}

/**
 * When you hover over  you'll
 * see that both the interface, class, and the namespace
 * get exported
 */
export { Fruit };
