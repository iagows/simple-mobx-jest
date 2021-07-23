import React, { FunctionComponent } from "react";

import { useObserver } from "mobx-react-lite";

import Button from "../button/Button";
import useRootStore from "../../hook/useRootStore";

interface IBoxA {}

enum Bt {
  add,
  remove,
}

const BoxA: FunctionComponent<IBoxA> = ({
  ...props
}: React.PropsWithChildren<IBoxA>) => {
  const rootContext = useRootStore();

  const value = useObserver(() => rootContext.value);
  const add = useObserver(() => rootContext.add);
  const remove = useObserver(() => rootContext.remove);

  const _onClick = (type: Bt) => {
    if (type === Bt.add) add();
    else remove();
  };
  return (
    <>
      <p>Um componente</p>
      <Button value="+" onClick={() => _onClick(Bt.add)} />
      <p>{value}</p>
      <Button value="-" onClick={() => _onClick(Bt.remove)} />
    </>
  );
};

export default BoxA;
