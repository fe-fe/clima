import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function MiniTitle({ children }: Props) {
  return (
    <div className="minititle">
      <span style={{ color: "white", margin: "0px", fontSize: "medium" }}>
        {children}
      </span>
    </div>
  );
}

export default MiniTitle;
