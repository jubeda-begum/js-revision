async function runSequential(tasks, delay) {
  let results = [];

  for (let task of tasks) {
    try {
      const result = await task();
      results.push(result);

      await new Promise(resolve => setTimeout(resolve, delay));

    } catch (error) {
      console.log("Task failed. Stopping execution.");
      break;
    }
  }

  return results;
}

function task1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 1 done");
      resolve("Result 1");
    }, 500);
  });
}

function task2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 2 done");
      resolve("Result 2");
    }, 500);
  });
}

function task3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Task 3 done");
      resolve("Result 3");
    }, 500);
  });
}

runSequential([task1, task2, task3], 1000)
  .then(results => {
    console.log("Final Results:", results);
  });