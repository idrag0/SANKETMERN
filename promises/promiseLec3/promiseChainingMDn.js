
Promise.resolve("foo")
  .then((string) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        string += "bar";
        resolve(string);
      }, 10000);
    });
  })

  .then((string) => {
    setTimeout(() => {
      string += "baz";
      console.log(string); // foobarbaz
    }, 1);
    return string;
  })

  .then((string) => {
    console.log(string); // foobar
  });