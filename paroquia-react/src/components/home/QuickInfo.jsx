import homeData from '../../data/home.json';
import styles from './QuickInfo.module.css';

export default function QuickInfo() {
  const { quickInfo } = homeData;

  return (
    <section className={styles.quickInfo}>
      <div className="container">
        <div className={styles.quickInfoGrid}>
          {quickInfo.map((item, i) => (
            <div key={i} className={styles.quickInfoItem}>
              <h3>{item.icon} {item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
