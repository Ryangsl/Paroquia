import PageHeader from '../components/layout/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import FAQGrid from '../components/contact/FAQGrid';
import CTASection from '../components/ui/CTASection';
import contactData from '../data/contact.json';

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactData.pageHeader.title} subtitle={contactData.pageHeader.subtitle} />
      <section className="bg-warm">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>
      <MapSection />
      <FAQGrid />
      <CTASection {...contactData.cta} />
    </>
  );
}
