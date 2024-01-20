import { ReactElement } from "react";
import { Header } from "./Header";
import { useSession } from "next-auth/react";
import { Tab } from "@headlessui/react";

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <div className="min-h-screen max-w-[450px] mx-auto px-4">{children}</div>
    <div className="fixed bottom-0 w-full">
      <div className=" h-20 flex items-center justify-between px-4 max-w-[450px] mx-auto">
        <span className="w-1/2 flex justify-center items-center">
          皆のひとりごつ
        </span>
        <span className="w-1/2 flex justify-center items-center">
          自分のひとりごつ
        </span>
      </div>
    </div>
  </>
);
