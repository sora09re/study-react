import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { usePost } from "src/hooks/usePost";
import { Post } from "src/components/Post";

const PostsId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};
export default PostId;
