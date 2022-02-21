// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

import React, {
  ClassAttributes,
  ComponentClass,
  ComponentType,
  createContext,
  FunctionComponent,
  useContext,
  useEffect,
} from "react";
import HotkeyManager from "./manager";

interface IHotkeyProviderProps {
  manager: HotkeyManager;
}

const HotkeyManagerContext = createContext<HotkeyManager | undefined>(
  undefined
);

export const useHotkeyManager = () => {
  const manager = useContext(HotkeyManagerContext);
  if (!manager)
    throw new Error(
      "HotkeyManager Consumer needs to be child of at least one HotkeyManager Provider."
    );
  return manager;
};

export type HotkeyManagerComponentProps = {
  manager?: HotkeyManager;
};

type GetProps<C> = C extends ComponentType<infer P>
  ? C extends ComponentClass<P>
    ? ClassAttributes<InstanceType<C>> & P
    : P
  : never;

type WithHotkeyManagerComponent<T> = FunctionComponent<GetProps<T>>;

export function withHotkeyManager<T extends ComponentType<any>>(
  Component: T
): WithHotkeyManagerComponent<T> {
  const C = Component as ComponentType<
    GetProps<T> & HotkeyManagerComponentProps
  >;
  return (props) => {
    return (
      <HotkeyManagerContext.Consumer>
        {(manager) => <C {...props} manager={manager} />}
      </HotkeyManagerContext.Consumer>
    );
  };
}

const HotkeyProvider: FunctionComponent<IHotkeyProviderProps> = ({
  manager,
  children,
}) => {
  useEffect(() => {
    window.addEventListener("keyup", manager.processEvent);
    return () => {
      window.removeEventListener("keyup", manager.processEvent);
    };
  }, []);
  return (
    <HotkeyManagerContext.Provider value={manager}>
      {children}
    </HotkeyManagerContext.Provider>
  );
};

export default HotkeyProvider;
