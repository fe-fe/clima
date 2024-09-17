import { ReactNode } from "react";

interface Props {
  pageWidth: string;
  children: ReactNode;
}

function Page({ pageWidth, children }: Props) {
  return (
    <div className="page">
      <div className="content" style={{ width: pageWidth }}>
        {children}
      </div>
    </div>
  );
}

export default Page;
