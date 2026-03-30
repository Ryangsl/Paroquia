import SectionHeader from '../ui/SectionHeader';
import contactData from '../../data/contact.json';

export default function FAQGrid() {
  const { faq } = contactData;

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <SectionHeader title={faq.sectionTitle} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          {faq.items.map((item, i) => (
            <div
              key={i}
              className="bg-secondary py-8 px-8 pl-[calc(2rem+4px)] rounded-md border-l-[3px] border-l-accent hover:border-l-[6px] hover:pl-8 hover:bg-warm hover:shadow-sm transition-all duration-300"
            >
              <h3 className="text-ink mb-2 text-[1.2rem] font-bold leading-[1.4]">{item.question}</h3>
              <p className="text-muted leading-[1.7]">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
