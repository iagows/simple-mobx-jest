import React, { FunctionComponent } from "react";

interface IButton {
  onClick: () => void;
  value: string;
}

const Button: FunctionComponent<IButton> = ({
  onClick,
  value,
}: React.PropsWithChildren<IButton>) => {
  return (
    <button className="bt" onClick={() => onClick()}>
      {value}
    </button>
  );
};

export default Button;
