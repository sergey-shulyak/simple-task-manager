global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

global.fetch = jest.fn(url => new Promise((resolve, reject) => {
  if (!url) reject();
  resolve({ json: () => { } });
}));
