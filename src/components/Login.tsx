import { signIn } from "next-auth/react";

export const LoginComponent = () => {
  return (
    <>
      <div className="flex flex-col justify-center bg-white mt-20 p-10 rounded-md w-[450px]">
        <p className="flex justify-center items-center">
          ログインしてあなたの活動をメモしましょう
        </p>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded max-w-max min-w-40 mx-auto mt-8"
          onClick={() => signIn()}
        >
          ログイン
        </button>
      </div>
    </>
  );
};
