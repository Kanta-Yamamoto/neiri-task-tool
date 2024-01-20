import { signOut } from "next-auth/react";

const Memo = () => {
  return (
    <>
      <h1>メモ一覧</h1>
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </>
  );
};

export default Memo;
