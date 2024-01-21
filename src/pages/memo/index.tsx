import { gql, useQuery } from "@apollo/client";
import { signOut } from "next-auth/react";

const Memo = () => {
  const posts = gql`
    query posts {
      posts {
        title
        id
      }
    }
  `;

  type postsType = {
    title: string;
    id: number;
  };

  function Books() {
    const { loading, error, data } = useQuery(posts);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.posts.map(({ title, id }: postsType) => (
      <div key={title}>
        <p>
          {title} by {id}
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
