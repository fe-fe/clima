import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ContentBox({ children }: Props) {
  return <div className="contentbox">{children}</div>;
}

export default ContentBox;
