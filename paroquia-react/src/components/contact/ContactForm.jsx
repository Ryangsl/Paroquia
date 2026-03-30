import { useState } from 'react';
import contactData from '../../data/contact.json';

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

  const inputClass = "w-full px-4 py-[14px] border-2 border-[#e0e0e0] rounded-md font-sans text-base focus:outline-none focus:border-accent focus:shadow-gold transition-all duration-300 bg-primary";

  return (
    <div className="bg-primary p-12 rounded-xl shadow-md">
      <h2 className="font-heading text-ink mb-2 text-[1.6rem]">{form.title}</h2>
      <p className="text-muted mb-8 leading-[1.6]">{form.intro}</p>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-2 text-ink font-semibold text-[0.95rem]">Nome Completo *</label>
          <input type="text" id="name" name="name" required placeholder="Seu nome completo"
            value={formData.name} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-ink font-semibold text-[0.95rem]">Email *</label>
          <input type="email" id="email" name="email" required placeholder="seu@email.com"
            value={formData.email} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="mb-2 text-ink font-semibold text-[0.95rem]">Telefone</label>
          <input type="tel" id="phone" name="phone" placeholder="(41) 99999-9999"
            value={formData.phone} onChange={handleChange} className={inputClass} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="subject" className="mb-2 text-ink font-semibold text-[0.95rem]">Assunto *</label>
          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className={inputClass}>
            {form.subjects.map((s, i) => (
              <option key={i} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-ink font-semibold text-[0.95rem]">Mensagem *</label>
          <textarea id="message" name="message" rows="6" required placeholder="Escreva sua mensagem aqui..."
            value={formData.message} onChange={handleChange} className={`${inputClass} resize-y`}></textarea>
        </div>
        <button
          type="submit"
          className="inline-block px-12 py-[14px] rounded-md font-semibold transition-all duration-300 border-none cursor-pointer text-base bg-gradient-to-br from-accent to-accent-dark text-primary tracking-[0.02em] hover:-translate-y-[3px] hover:shadow-gold-lg hover:brightness-105 active:-translate-y-[1px]"
        >
          Enviar Mensagem
        </button>
        <p className="text-[0.9rem] text-muted mt-4 italic">* Campos obrigatórios</p>
      </form>
    </div>
  );
}
