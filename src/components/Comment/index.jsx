import { PostByCommentId } from "src/components/Post/PostByCommentId";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { data, error, isLoading } = useComment();

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.body}</li>
      </ul>
      <h2>元の記事</h2>
      <PostByCommentId id={data.postId} />
    </div>
  );
};
