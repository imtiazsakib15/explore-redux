const logger = (store) => (next) => (action) => {
  console.log("Prev state => ", store.getState());
  console.log("action => ", action);
  next(action);
  console.log("Next state => ", store.getState());
};

export default logger;
