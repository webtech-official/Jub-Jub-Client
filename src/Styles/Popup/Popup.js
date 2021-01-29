import React, { useState } from "react";

const Popup = ({ children }) => {
  const [is_open] = useState(false);
  const PopupOpen = is_open && <div>{children}</div>;
  return <>{PopupOpen}</>;
};

export default Popup;
