import PageHeader from '../components/layout/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import FAQGrid from '../components/contact/FAQGrid';
import CTASection from '../components/ui/CTASection';
import contactData from '../data/contact.json';
import './ContactPage.css';

export default function ContactPage() {
  return (
    <>
      <PageHeader title={contactData.pageHeader.title} subtitle={contactData.pageHeader.subtitle} />
      <section className="contact-page-section">
        <div className="container">
          <div className="contact-page-content">
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
