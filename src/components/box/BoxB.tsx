import React, { FunctionComponent } from "react";

import { useObserver } from "mobx-react-lite";

import useRootStore from "../../hook/useRootStore";

interface IBox {}

const BoxB: FunctionComponent<IBox> = ({
  ...props
}: React.PropsWithChildren<IBox>) => {
  const rootContext = useRootStore();
  const value = useObserver(() => rootContext.value);

  return (
    <div>
      <p>Outro componente: {value}</p>
    </div>
  );
};

export default BoxB;
