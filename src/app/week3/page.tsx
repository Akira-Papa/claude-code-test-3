import Link from 'next/link';
import styles from '../page.module.css';

export default function Week3() {
  const topics = [
    "CSS Modules",
    "Tailwind CSS",
    "レイアウトコンポーネント",
    "レスポンシブデザイン",
    "グローバルスタイルとテーマ設定",
    "アニメーションとトランジション"
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#0070f3', textDecoration: 'none' }}>
            ← ホームに戻る
          </Link>
          
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Week 3: スタイリングとレイアウト
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
            <p>この週では、Next.jsアプリケーションのスタイリングとレイアウト構築の方法を学びます。CSS Modulesの活用方法、Tailwind CSSの導入と設定、効率的なレイアウトコンポーネントの作成、そしてすべてのデバイスで美しく機能するレスポンシブデザインの実装方法を習得します。</p>
          </div>
        </div>
      </main>
    </div>
  );
}