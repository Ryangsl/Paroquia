import SectionHeader from '../ui/SectionHeader';
import contactData from '../../data/contact.json';
import styles from './FAQGrid.module.css';

export default function FAQGrid() {
  const { faq } = contactData;

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <SectionHeader title={faq.sectionTitle} />
        <div className={styles.faqGrid}>
          {faq.items.map((item, i) => (
            <div key={i} className={styles.faqItem}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
