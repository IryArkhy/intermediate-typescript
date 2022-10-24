interface Fruit {
  name: string;
  mass: number;
  color: string;
}

const Fruit = {
  name: 'banana',
  color: 'yellow',
  mass: 183,
};

/**
 * When you hover over  you'll
 * see that both the interface and the const
 * get exported
 */
export { Fruit };
