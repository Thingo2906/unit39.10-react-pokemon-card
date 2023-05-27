import { useState } from "react";
const useFlip = () => {
  const [state, setState] = useState(true);
  const flipstate = () => {
    setState((flip) => !flip);
  };
  return [state, flipstate];
};
export default useFlip;
