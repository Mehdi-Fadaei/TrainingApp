import { useState } from "react";

const useToogle = (initiValue = false) => {
  const [value, setValue] = useState(initiValue);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};

export default useToogle;