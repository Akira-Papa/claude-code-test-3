import Image from "next/image";
import styles from "./page.module.css";

import Link from 'next/link';

export default function Home() {
  const curriculum = [
    {
      week: 1,
      title: "Next.js の基礎",
      path: "/week1"
    },
    {
      week: 2,
      title: "データフェッチング",
      path: "/week2"
    },
    {
      week: 3,
      title: "スタイリングとレイアウト",
      path: "/week3"
    },
    {
      week: 4,
      title: "認証と状態管理",
      path: "/week4"
    },
    {
      week: 5,
      title: "デプロイメントと最適化",
      path: "/week5"
    }
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Next.js カリキュラム
        </h1>
        
        <div style={{ width: '100%', maxWidth: '800px' }}>
          {curriculum.map((week) => (
            <div key={week.week} style={{ 
              marginBottom: '1rem', 
              border: '1px solid #eaeaea', 
              borderRadius: '8px', 
              padding: '1.5rem',
              transition: 'all 0.2s ease',
              cursor: 'pointer',
              ':hover': {
                backgroundColor: '#f7f7f7'
              }
            }}>
              <Link href={week.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                <h2 style={{ fontSize: '1.5rem' }}>
                  Week {week.week}: {week.title}
                </h2>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
