export default {
  getFive() {
    return new Promise<number>((resolve) => {
      setTimeout(() => resolve(5), 50);
    });
  },
};
