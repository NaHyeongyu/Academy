const f1 = (callback) => {
  setTimeout(() => {
    console.log("Order1 success");
    callback();
  }, 1000);
};

const f2 = (callback) => {
  setTimeout(() => {
    console.log("Order2 success");
    callback();
  }, 3000);
};

const f3 = (callback) => {
  setTimeout(() => {
    console.log("Order3 success");
    callback();
  }, 2000);
};

console.log("start");
f1(() => {
  f2(() => {
    f3(() => {
      console.log("finish");
    });
  });
});
