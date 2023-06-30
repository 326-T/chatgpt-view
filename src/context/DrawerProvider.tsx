import React, { createContext, useReducer } from "react";

type DrawerState = {
  active: boolean;
  width: number;
  content: React.ReactNode;
  open: () => void;
  close: () => void;
  setWidth: (width: number) => void;
  setContent: (content: React.ReactNode) => void;
};

const DrawerStateInit: DrawerState = {
  active: false,
  width: 300,
  content: null,
  open: () => {},
  close: () => {},
  setWidth: () => {},
  setContent: () => {},
};

const drawerReducer = (state: DrawerState, action: any) => {
  switch (action.type) {
    case "open":
      return { ...state, active: true };
    case "close":
      return { ...state, active: false, width: DrawerStateInit.width };
    case "set-width":
      return { ...state, width: action.payload };
    case "set-content":
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

const useDrawer = (): DrawerState => {
  const [state, dispatch] = useReducer(drawerReducer, DrawerStateInit);

  const open = () => {
    dispatch({ type: "open" });
  };

  const close = () => {
    dispatch({ type: "close" });
  };

  const setWidth = (width: number) => {
    dispatch({ type: "set-width", payload: width });
  };

  const setContent = (content: React.ReactNode) => {
    dispatch({ type: "set-content", payload: content });
  };

  return {
    ...state,
    open,
    close,
    setWidth,
    setContent,
  };
};

export const DrawerContext = createContext<DrawerState>(DrawerStateInit);

type ProviderProps = {
  children: React.ReactNode;
};

export const DrawerProvider: React.FC<ProviderProps> = ({ children }) => {
  const value = useDrawer();
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};
