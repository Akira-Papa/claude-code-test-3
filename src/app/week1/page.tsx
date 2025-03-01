import Link from 'next/link';
import styles from '../page.module.css';

export default function Week1() {
  const topics = [
    "Next.js のインストールと設定",
    "Pages Router vs App Router",
    "基本的なルーティング",
    "プロジェクト構造の理解",
    "静的ページと動的ページ"
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#0070f3', textDecoration: 'none' }}>
            ← ホームに戻る
          </Link>
          
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Week 1: Next.js の基礎
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
            <p>この週では、Next.jsの基本的な概念を理解し、シンプルなウェブアプリケーションを構築できるようになることを目指します。Next.jsのプロジェクト構成、ルーティングの仕組み、そしてページの作成方法を学びます。</p>
          </div>
        </div>
      </main>
    </div>
  );
}