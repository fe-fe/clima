import { ReactNode } from "react";

interface Link {
  nome: string;
  url: string;
  icon: ReactNode | null;
  target: string;
}

export default Link;
