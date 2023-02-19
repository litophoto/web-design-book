import React, { useRef, forwardRef } from "react";

const CustomInput = (props, ref) => {
  return <input type="text" {...props} ref={ref} />;
};

const WrappedCustomInput = forwardRef(CustomInput);

export const App = () => {
  const ref = useRef();

  const onClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <WrappedCustomInput ref={ref} />
      <button type="button" onClick={onClick}>
        focus
      </button>
    </>
  );
};
