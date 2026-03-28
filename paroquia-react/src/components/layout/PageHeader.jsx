import styles from './PageHeader.module.css';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className={styles.pageHeader}>
      <div className="container">
        <h1 className={styles.pageTitle}>{title}</h1>
        <p className={styles.pageSubtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
