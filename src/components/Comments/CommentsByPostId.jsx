import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <ul className="space-y-2">
      {data.map((comments) => {
        return (
          <li key={comments.id} className="border-b pb-2">
            <Link href={`/comments/${comments.id}`}>
              <a className="block hover:text-blue-500">
                {comments.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
