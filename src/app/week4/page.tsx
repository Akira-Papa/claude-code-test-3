import Link from 'next/link';
import styles from '../page.module.css';

export default function Week4() {
  const topics = [
    "NextAuth.js",
    "Context API",
    "Zustand/Redux",
    "フォーム処理と検証",
    "クッキーとセッション管理",
    "JWT認証"
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#0070f3', textDecoration: 'none' }}>
            ← ホームに戻る
          </Link>
          
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Week 4: 認証と状態管理
          </h1>
          
          <div style={{ border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>学習トピック</h2>
            <ul style={{ paddingLeft: '2rem' }}>
              {topics.map((topic, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '2rem', border: '1px solid #eaeaea', borderRadius: '8px', padding: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>学習目標</h2>
            <p>この週では、Next.jsアプリケーションでの認証システムの実装と状態管理の方法を学びます。NextAuth.jsを使った各種認証プロバイダーの設定、Context APIとZustandを使ったアプリケーション状態の管理、そしてユーザー入力の検証とフォーム処理の実装方法を習得します。</p>
          </div>
        </div>
      </main>
    </div>
  );
}