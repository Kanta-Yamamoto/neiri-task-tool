import Image from "next/image";
import { Inter } from "next/font/google";
import { signOut, useSession } from "next-auth/react";
import { LoginComponent } from "@/components/Login";

export default function Home() {
  // const { data: session } = useSession({ required: true });
  const { data: session } = useSession();
  return (
    <main className="flex justify-center">
      {session && (
        <div>
          <div className="">
            <textarea className="w-full h-40 p-2 rounded-md resize-none" />
            <div className="w-full flex justify-end">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded max-w-max min-w-40 mt-2 focus:outline-none">
                ひとりごつする
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white p-5 rounded-md w-[450px] mt-4">
            <div className="w-full shadow-md h-[200px] bg-slate-100 hover:bg-slate-200 mb-4 p-4">
              焼けたパンにバタコさんを塗ったよ
            </div>
            <div className="w-full shadow-md h-[200px] bg-slate-100 hover:bg-slate-200 mb-4"></div>
            <div className="w-full shadow-md h-[200px] bg-slate-100 hover:bg-slate-200 mb-4"></div>
            <div className="w-full shadow-md h-[200px] bg-slate-100 hover:bg-slate-200 mb-4"></div>
            <div className="w-full shadow-md h-[200px] bg-slate-100 hover:bg-slate-200 mb-4"></div>
            <div className="w-full shadow-md h-[200px] bg-slate-100 hover:bg-slate-200 mb-4"></div>
          </div>
        </div>
      )}
      {!session && <LoginComponent />}
    </main>
  );
}
