import { ReactElement } from "react";
import { Header } from "./Header";
import { useSession } from "next-auth/react";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <div className="min-h-screen max-w-[450px] mx-auto">{children}</div>
  </>
);
