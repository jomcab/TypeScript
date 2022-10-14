const names: Array<string> = [];

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then(data => {
  // data.split(' '); // will produce an error: Property 'split' does not exist on type 'number'.
})