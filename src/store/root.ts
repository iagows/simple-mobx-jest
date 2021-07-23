import { observable } from "mobx";

const output = () => {
  const store = observable(
    // #https://mobx.js.org/observable-state.html#observable
    //source
    {
      value: 1,
      add: () => {
        store.value += 1;
      },
      remove: () => {
        store.value -= 1;
      },
    },
    //overrides #https://mobx.js.org/observable-state.html#observable
    {},
    //options #https://mobx.js.org/observable-state.html#options-
    {}
  );
  return store;
};

export default output;
