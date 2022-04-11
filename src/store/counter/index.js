import state from "./state";
import { increment, incrementBy, setLoading } from "./mutations";
import { incrementRandomInt } from "./actions";
import { squareCount } from "./getters";

const counterStore = {
  namespaced: true,
  state: state,

  mutations: {
    increment,
    incrementBy,
    setLoading,
  },

  actions: {
    incrementRandomInt,
  },

  getters: {
    squareCount,
  },
};

export default counterStore;
