import Link from 'next/link';
import styles from '../page.module.css';

export default function Week2() {
  const topics = [
    "Server Components",
    "Client Components",
    "getServerSideProps と getStaticProps",
    "API Routes",
    "データフェッチングの最適化",
    "SWR とキャッシュ戦略"
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#0070f3', textDecoration: 'none' }}>
            ← ホームに戻る
          </Link>
          
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Week 2: データフェッチング
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
            <p>この週では、Next.jsにおけるデータフェッチングのさまざまな方法を学び、異なるユースケースに最適なアプローチを理解します。サーバーサイドレンダリングと静的生成の違い、APIルートの作成と利用、そしてクライアント側とサーバー側のコンポーネントの使い分けを習得します。</p>
          </div>
        </div>
      </main>
    </div>
  );
}