import SectionHeader from '../ui/SectionHeader';
import contactData from '../../data/contact.json';
import './FAQGrid.css';

export default function FAQGrid() {
  const { faq } = contactData;

  return (
    <section className="faq-section">
      <div className="container">
        <SectionHeader title={faq.sectionTitle} />
        <div className="faq-grid">
          {faq.items.map((item, i) => (
            <div key={i} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
