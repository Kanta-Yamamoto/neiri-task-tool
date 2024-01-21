import { gql, useQuery } from "@apollo/client";
import { signOut } from "next-auth/react";

const Memo = () => {
  const BOOKS = gql`
    query Books {
      books {
        title
        author
      }
    }
  `;

  type BooksType = {
    title: string;
    author: string;
  };

  function Books() {
    const { loading, error, data } = useQuery(BOOKS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.books.map(({ title, author }: BooksType) => (
      <div key={title}>
        <p>
          {title} by {author}
        </p>
      </div>
    ));
  }

  return (
    <>
      <h1>メモ一覧</h1>
      <Books />
      <div>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    </>
  );
};

export default Memo;
