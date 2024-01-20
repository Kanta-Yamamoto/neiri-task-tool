import { Popover, Tab } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import { Fragment } from "react";
import Image from "next/image";

export const Header = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && (
        <>
          <header className="w-full h-full mb-4">
            <div className="max-w-[450px] m-auto flex items-center justify-between px-4 h-16">
              <span className="text-2xl">ひとりごつ</span>
              <Popover className="relative">
                {session.user?.image && (
                  <Popover.Button>
                    <Image
                      src={session.user?.image}
                      alt=""
                      width={35}
                      height={35}
                      className="rounded-full"
                    />
                  </Popover.Button>
                )}

                <Popover.Panel className="right-2 absolute z-10 bg-white rounded-sm shadow-md w-60">
                  {session.user?.email && (
                    <div className="w-full p-2 flex justify-start">
                      <span className="truncate">{session.user?.email}</span>
                    </div>
                  )}
                  <button
                    className="w-full hover:bg-slate-200 p-2 flex justify-start"
                    onClick={() => signOut()}
                  >
                    ログアウト
                  </button>
                </Popover.Panel>
              </Popover>
            </div>
          </header>
        </>
      )}
    </>
  );
};
