import { createContext } from "react";

const TheContext = createContext({});

const { Provider, Consumer } = TheContext;

export default TheContext;

export { Provider, Consumer };
