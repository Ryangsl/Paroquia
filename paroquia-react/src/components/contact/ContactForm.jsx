import { useState } from 'react';
import contactData from '../../data/contact.json';
import './ContactForm.css';

const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function ContactForm() {
  const { form } = contactData;
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!WEB3FORMS_KEY) {
      alert('Formulário indisponível no momento. Entre em contato por telefone ou WhatsApp.');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Contato Paróquia: ${formData.subject}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Não informado',
          assunto: formData.subject,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h2>{form.title}</h2>
      <p className="contact-form-intro">{form.intro}</p>

      {status === 'success' ? (
        <div className="contact-form-success">
          <span className="contact-form-success-icon">✓</span>
          <h3>Mensagem enviada com sucesso!</h3>
          <p>Obrigado pelo contato. Responderemos o mais breve possível.</p>
          <button className="contact-form-submit-btn" onClick={() => setStatus('idle')}>
            Enviar nova mensagem
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Nome Completo *</label>
            <input type="text" id="name" name="name" required placeholder="Seu nome completo"
              value={formData.name} onChange={handleChange} disabled={status === 'sending'} />
          </div>
          <div className="contact-form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required placeholder="seu@email.com"
              value={formData.email} onChange={handleChange} disabled={status === 'sending'} />
          </div>
          <div className="contact-form-group">
            <label htmlFor="phone">Telefone</label>
            <input type="tel" id="phone" name="phone" placeholder="(41) 99999-9999"
              value={formData.phone} onChange={handleChange} disabled={status === 'sending'} />
          </div>
          <div className="contact-form-group">
            <label htmlFor="subject">Assunto *</label>
            <select id="subject" name="subject" required value={formData.subject}
              onChange={handleChange} disabled={status === 'sending'}>
              {form.subjects.map((s, i) => (
                <option key={i} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>
          <div className="contact-form-group">
            <label htmlFor="message">Mensagem *</label>
            <textarea id="message" name="message" rows="6" required placeholder="Escreva sua mensagem aqui..."
              value={formData.message} onChange={handleChange} disabled={status === 'sending'}></textarea>
          </div>

          {status === 'error' && (
            <p className="contact-form-error">
              Não foi possível enviar a mensagem. Tente novamente ou entre em contato por WhatsApp.
            </p>
          )}

          <button type="submit" className="contact-form-submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
          <p className="contact-form-note">* Campos obrigatórios</p>
        </form>
      )}
    </div>
  );
}
