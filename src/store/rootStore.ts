import { createContext } from "react";

import createRootStore from "./root";

export const rootStore = createRootStore();

export default createContext(rootStore);
