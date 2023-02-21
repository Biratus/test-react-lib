import React, { useState } from "react";

/**
 * A generic button
 * @param props {@link ButtonProps}
 * @returns Element
 */
function Button(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <button
      className="btn btn-primary"
      onClick={() => setCount((cnt) => cnt + 1)}
    >
      Count {count}
    </button>
  );
}

export default Button;
