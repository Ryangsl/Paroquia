import { useState } from 'react';
import contactData from '../../data/contact.json';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const { form } = contactData;
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado, ${formData.name}! Sua mensagem foi recebida. Entraremos em contato em breve.`);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className={styles.contactFormWrapper}>
      <h2>{form.title}</h2>
      <p className={styles.formIntro}>{form.intro}</p>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nome Completo *</label>
          <input type="text" id="name" name="name" required placeholder="Seu nome completo"
            value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" required placeholder="seu@email.com"
            value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" name="phone" placeholder="(34) 99999-9999"
            value={formData.phone} onChange={handleChange} />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Assunto *</label>
          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}>
            {form.subjects.map((s, i) => (
              <option key={i} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Mensagem *</label>
          <textarea id="message" name="message" rows="6" required placeholder="Escreva sua mensagem aqui..."
            value={formData.message} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className={styles.submitBtn}>Enviar Mensagem</button>
        <p className={styles.formNote}>* Campos obrigatórios</p>
      </form>
    </div>
  );
}
