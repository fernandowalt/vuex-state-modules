export const increment = (state) => {
  state.count++;
  state.lastMutations = "increment";
};

export const incrementBy = (state, num) => {
  state.count += num;
  state.lastMutations = `incrementando en ${num}`;
  state.lastRandomInt = num;
};

export const setLoading = (state, bool) => {
  state.isLoading = bool;
};
