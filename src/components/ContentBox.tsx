import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ContentBox({ children }: Props) {
  return <div className="contentbox border">{children}</div>;
}

export default ContentBox;
