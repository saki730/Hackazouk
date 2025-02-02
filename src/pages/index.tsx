import Head from "next/head";
import Header from "@/components/Header";
import styles from "../styles/style.module.scss";
import Timeline from "@/components/Timeline";
import Post from "@/components/Post";
import { useEffect, useState } from "react";

// Memo : データベースから取得しているイメージ（API）
const dummyData: any = [
  {
    id: 1,
    name: "山田 太郎",
    date: "2024-02-01",
    content: "今日はReactの勉強をしました！",
  },
  {
    id: 2,
    name: "佐藤 花子",
    date: "2024-02-02",
    content: "新しいプロジェクトが始まりました。",
  },
  {
    id: 3,
    name: "鈴木 一郎",
    date: "2024-02-03",
    content: "Next.jsのSSRを試しています。",
  },
  {
    id: 4,
    name: "田中 桃子",
    date: "2024-02-04",
    content: "UIデザインの改善を行いました。",
  },
  {
    id: 5,
    name: "中村 健",
    date: "2024-02-05",
    content: "TypeScriptの型安全性について学習中。",
  },
];

export default function Home() {
  // useStateを貼り付けてください:hugging:
  const [posts, setPosts] = useState([]);

  // useEffectの処理=画面が表示された直後に１度実行されます:hugging:
  useEffect(() => {
    // ここに書く

    setPosts(dummyData);
    console.log(11111111);
    // ここの下消さない
  }, []);

  // 追加
  console.log(posts, "データ");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        {/*  */}
        {/* 先ほど作成したHeaderのパーツを呼び出す記述を書きます:hugging: */}
        <Header />

        <Timeline />

        {/* 後で消しますが先に表示の確認をしましょう:hugging: */}
        {/* <Button textColor="pink" bg="blue" /> */}
        {posts.map((item, index) => (
          <Post
            key={index}
            id={item.id}
            name={item.name}
            date={item.date}
            content={item.content}
          />
        ))}

        {/*  */}
      </main>
    </>
  );
}