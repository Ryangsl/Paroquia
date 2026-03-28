import styles from './SectionHeader.module.css';

export default function SectionHeader({ title, description }) {
  return (
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.titleUnderline}></div>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  );
}
