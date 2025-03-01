import Link from 'next/link';
import styles from '../page.module.css';

export default function Week5() {
  const topics = [
    "Vercel へのデプロイ",
    "画像最適化",
    "SEO 対策",
    "パフォーマンス最適化",
    "インクリメンタル静的再生成 (ISR)",
    "Lighthouse スコア改善"
  ];

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Link href="/" style={{ display: 'inline-block', marginBottom: '1rem', color: '#0070f3', textDecoration: 'none' }}>
            ← ホームに戻る
          </Link>
          
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Week 5: デプロイメントと最適化
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
            <p>この週では、Next.jsアプリケーションのデプロイメントと最適化の方法を学びます。Vercelへのシームレスなデプロイメント、画像とフォントの最適化、SEOベストプラクティスの適用、そしてパフォーマンスを最大化するための様々な手法を習得します。最終的に実運用に耐えうる高品質なウェブアプリケーションの完成を目指します。</p>
          </div>
        </div>
      </main>
    </div>
  );
}