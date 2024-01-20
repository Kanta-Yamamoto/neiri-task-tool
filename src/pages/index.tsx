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
        <div className="w-full">
          <textarea
            className="w-full h-40 p-2 rounded-md resize-none outline-0 text-4"
            placeholder="今どんな気持ち？"
          />
          <div className="w-full flex justify-end">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded max-w-max min-w-40 mt-2">
              ひとりごつする
            </button>
          </div>
          <div className="flex flex-col justify-center bg-white p-5 pt-0 rounded-md max-w-[450px] mt-4">
            <div className="w-full shadow-md max-h-[200px] bg-slate-100 hover:bg-slate-200 mt-4 p-4 whitespace-pre-wrap">
              これはテストの投稿です
            </div>
          </div>
        </div>
      )}
      {!session && <LoginComponent />}
    </main>
  );
}
