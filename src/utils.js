import faker from "faker";

/*

Helper functions/data

*/

export const genRandomFiveTasks = () => {
  const results = [];

  for (let i = 0; i < 5; i++) {
    results.push({
      id: faker.random.uuid(),
      details: faker.random.words(),
      completed: false
    });
  }
  return results;
};
