import { useState, useEffect } from 'react';

// ─── Auth ────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'admin_auth';

function isAuthenticated() {
  return sessionStorage.getItem(STORAGE_KEY) === 'true';
}

const inputClass = "w-full px-3 py-2 border-2 border-[#e0e0e0] rounded-sm bg-primary text-ink text-[0.9rem] focus:outline-none focus:border-accent transition-colors duration-300 box-border";
const btnPrimary = "bg-gradient-to-br from-accent to-accent-dark text-primary border-none px-[18px] py-2 rounded-md font-bold text-[0.9rem] cursor-pointer hover:opacity-85 transition-opacity duration-300";
const btnSecondary = "bg-transparent border-2 border-muted text-muted px-[18px] py-2 rounded-md font-semibold text-[0.9rem] cursor-pointer hover:border-ink hover:text-ink transition-all duration-300";
const btnSmall = "px-3 py-[5px] rounded-sm text-[0.8rem] font-semibold cursor-pointer transition-all duration-300 border-2";

function LoginScreen({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const expected = import.meta.env.VITE_ADMIN_KEY;
    if (!expected) {
      setError('VITE_ADMIN_KEY não configurada no .env');
      return;
    }
    if (password === expected) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      onLogin();
    } else {
      setError('Senha incorreta.');
      setPassword('');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary p-8">
      <form className="bg-primary p-16 rounded-lg shadow-lg w-full max-w-[400px] flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="font-heading text-[1.5rem] text-ink text-center">🔒 Painel do Desenvolvedor</h1>
        <p className="text-[0.875rem] text-muted text-center">Acesso restrito — somente em desenvolvimento local.</p>
        <input
          type="password"
          className={inputClass}
          placeholder="Senha"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(''); }}
          autoFocus
        />
        {error && <p className="text-[#e53935] text-[0.875rem] text-center">{error}</p>}
        <button type="submit" className={btnPrimary}>Entrar</button>
      </form>
    </div>
  );
}

// ─── Notice Form ─────────────────────────────────────────────────────────────

const EMPTY_NOTICE = { id: Date.now(), image: '', title: '', text: '', linkText: '', linkHref: '', active: true };

function NoticeForm({ notice, onChange, onSave, onCancel }) {
  const labelClass = "flex flex-col gap-[4px] text-[0.875rem] font-semibold text-ink";

  return (
    <div className="bg-secondary rounded-md p-8 mb-8 border-l-[4px] border-l-accent">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <label className={labelClass}>
          Título *
          <input className={inputClass} value={notice.title} onChange={e => onChange({ ...notice, title: e.target.value })} />
        </label>
        <label className={labelClass}>
          URL da imagem (opcional)
          <input className={inputClass} placeholder="Ex: /imagens/aviso.jpg" value={notice.image} onChange={e => onChange({ ...notice, image: e.target.value })} />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          Texto *
          <textarea className={`${inputClass} resize-y`} value={notice.text} onChange={e => onChange({ ...notice, text: e.target.value })} rows={3} />
        </label>
        <label className={labelClass}>
          Texto do link
          <input className={inputClass} placeholder="Ex: Saiba mais" value={notice.linkText} onChange={e => onChange({ ...notice, linkText: e.target.value })} />
        </label>
        <label className={labelClass}>
          Rota do link
          <input className={inputClass} placeholder="Ex: /eventos" value={notice.linkHref} onChange={e => onChange({ ...notice, linkHref: e.target.value })} />
        </label>
        <label className="flex flex-row items-center gap-2 text-[0.875rem] cursor-pointer">
          <input type="checkbox" checked={notice.active} onChange={e => onChange({ ...notice, active: e.target.checked })} />
          Aviso ativo (visível na home)
        </label>
      </div>
      <div className="flex gap-2">
        <button className={btnPrimary} onClick={onSave}>Salvar</button>
        <button className={btnSecondary} onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
}

// ─── Event Form ───────────────────────────────────────────────────────────────

const EMPTY_EVENT = { date: '', title: '', time: '', location: '', description: '', featured: false };

function EventForm({ event, onChange, onSave, onCancel }) {
  const labelClass = "flex flex-col gap-[4px] text-[0.875rem] font-semibold text-ink";

  return (
    <div className="bg-secondary rounded-md p-8 mb-8 border-l-[4px] border-l-accent">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <label className={labelClass}>
          Data *
          <input className={inputClass} type="date" value={event.date} onChange={e => onChange({ ...event, date: e.target.value })} />
        </label>
        <label className={labelClass}>
          Título *
          <input className={inputClass} value={event.title} onChange={e => onChange({ ...event, title: e.target.value })} />
        </label>
        <label className={labelClass}>
          Horário
          <input className={inputClass} placeholder="Ex: 19h30" value={event.time} onChange={e => onChange({ ...event, time: e.target.value })} />
        </label>
        <label className={labelClass}>
          Local
          <input className={inputClass} placeholder="Ex: Igreja Matriz" value={event.location} onChange={e => onChange({ ...event, location: e.target.value })} />
        </label>
        <label className={`${labelClass} sm:col-span-2`}>
          Descrição
          <textarea className={`${inputClass} resize-y`} value={event.description} onChange={e => onChange({ ...event, description: e.target.value })} rows={3} />
        </label>
        <label className="flex flex-row items-center gap-2 text-[0.875rem] cursor-pointer">
          <input type="checkbox" checked={event.featured} onChange={e => onChange({ ...event, featured: e.target.checked })} />
          Evento em Destaque (aparece na home)
        </label>
      </div>
      <div className="flex gap-2">
        <button className={btnPrimary} onClick={onSave}>Salvar</button>
        <button className={btnSecondary} onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
}

// ─── Admin Panel ─────────────────────────────────────────────────────────────

function AdminPanel() {
  const [tab, setTab] = useState('notices');
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [editingNotice, setEditingNotice] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newNotice, setNewNotice] = useState(null);
  const [newEvent, setNewEvent] = useState(null);

  useEffect(() => {
    fetch('/api/admin/data')
      .then(r => r.json())
      .then(data => {
        setNotices(data.home.notices.items || []);
        setEvents(data.events.upcomingEvents.events || []);
      })
      .catch(() => setFeedback('Erro ao carregar dados. O servidor dev está rodando?'));
  }, []);

  function showFeedback(msg) {
    setFeedback(msg);
    setTimeout(() => setFeedback(''), 3000);
  }

  async function saveNotices(updated) {
    const res = await fetch('/api/admin/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sectionTitle: 'Avisos Importantes', items: updated }),
    });
    if (res.ok) { setNotices(updated); showFeedback('Avisos salvos com sucesso!'); }
    else showFeedback('Erro ao salvar avisos.');
  }

  async function saveEvents(updated) {
    const res = await fetch('/api/admin/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (res.ok) { setEvents(updated); showFeedback('Eventos salvos com sucesso!'); }
    else showFeedback('Erro ao salvar eventos.');
  }

  function handleSaveNotice(notice) {
    const updated = notices.map(n => n.id === notice.id ? notice : n);
    saveNotices(updated);
    setEditingNotice(null);
  }
  function handleAddNotice(notice) {
    saveNotices([...notices, { ...notice, id: Date.now() }]);
    setNewNotice(null);
  }
  function handleDeleteNotice(id) {
    if (!confirm('Remover este aviso?')) return;
    saveNotices(notices.filter(n => n.id !== id));
  }
  function handleToggleNotice(id) {
    const updated = notices.map(n => n.id === id ? { ...n, active: !n.active } : n);
    saveNotices(updated);
  }

  function handleSaveEvent(event, idx) {
    const time = event.time ? `⏰ ${event.time.replace('⏰ ', '')}` : '';
    const location = event.location ? (event.location.startsWith('📍') ? event.location : `📍 ${event.location}`) : '';
    const updated = events.map((e, i) => i === idx ? { ...event, time, location } : e);
    saveEvents(updated);
    setEditingEvent(null);
  }
  function handleAddEvent(event) {
    const time = event.time ? `⏰ ${event.time.replace('⏰ ', '')}` : '';
    const location = event.location ? (event.location.startsWith('📍') ? event.location : `📍 ${event.location}`) : '';
    saveEvents([...events, { ...event, time, location }].sort((a, b) => a.date.localeCompare(b.date)));
    setNewEvent(null);
  }
  function handleDeleteEvent(idx) {
    if (!confirm('Remover este evento?')) return;
    saveEvents(events.filter((_, i) => i !== idx));
  }
  function handleToggleFeatured(idx) {
    const updated = events.map((e, i) => i === idx ? { ...e, featured: !e.featured } : e);
    saveEvents(updated);
  }

  function handleLogout() {
    sessionStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }

  return (
    <div className="min-h-screen bg-secondary p-8">
      <div className="max-w-[900px] mx-auto">
        <header className="flex items-center justify-between bg-primary p-8 rounded-lg mb-8 border-l-[5px] border-l-accent shadow-sm">
          <div>
            <h1 className="font-heading text-ink text-[1.4rem] m-0">🛠 Painel Admin</h1>
            <p className="text-muted text-[0.875rem] m-0">Paróquia Nossa Senhora Aparecida — somente dev</p>
          </div>
          <button
            className="bg-transparent border-2 border-[#e53935] text-[#e53935] px-4 py-[6px] rounded-md font-semibold text-[0.875rem] cursor-pointer hover:bg-[#e53935] hover:text-white transition-all duration-300"
            onClick={handleLogout}
          >
            Sair
          </button>
        </header>

        {feedback && (
          <div className="admin-feedback bg-gradient-to-br from-accent to-accent-dark text-primary px-8 py-4 rounded-md font-semibold text-center mb-8">
            {feedback}
          </div>
        )}

        <div className="flex gap-2 mb-8">
          <button
            className={`bg-primary border-2 px-5 py-[10px] rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ${tab === 'notices' ? 'border-accent text-accent' : 'border-transparent text-muted hover:border-accent hover:text-accent'}`}
            onClick={() => setTab('notices')}
          >
            📢 Avisos ({notices.length})
          </button>
          <button
            className={`bg-primary border-2 px-5 py-[10px] rounded-md text-base font-semibold cursor-pointer transition-all duration-300 ${tab === 'events' ? 'border-accent text-accent' : 'border-transparent text-muted hover:border-accent hover:text-accent'}`}
            onClick={() => setTab('events')}
          >
            📅 Eventos ({events.length})
          </button>
        </div>

        {/* ── NOTICES TAB ── */}
        {tab === 'notices' && (
          <div className="bg-primary rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-ink text-[1.2rem] m-0">Avisos Importantes</h2>
              {!newNotice && (
                <button className={btnPrimary} onClick={() => setNewNotice({ ...EMPTY_NOTICE, id: Date.now() })}>
                  + Novo Aviso
                </button>
              )}
            </div>

            {newNotice && (
              <>
                <p className="text-muted text-[0.875rem] mb-2">Novo aviso</p>
                <NoticeForm
                  notice={newNotice}
                  onChange={setNewNotice}
                  onSave={() => handleAddNotice(newNotice)}
                  onCancel={() => setNewNotice(null)}
                />
              </>
            )}

            {notices.length === 0 && !newNotice && (
              <p className="text-muted text-center py-12">Nenhum aviso cadastrado.</p>
            )}

            {notices.map(notice => (
              <div key={notice.id}>
                {editingNotice?.id === notice.id ? (
                  <>
                    <p className="text-muted text-[0.875rem] mb-2">Editando: {notice.title}</p>
                    <NoticeForm
                      notice={editingNotice}
                      onChange={setEditingNotice}
                      onSave={() => handleSaveNotice(editingNotice)}
                      onCancel={() => setEditingNotice(null)}
                    />
                  </>
                ) : (
                  <div className={`flex items-center justify-between p-4 px-8 rounded-md bg-secondary mb-2 gap-4 flex-wrap ${!notice.active ? 'opacity-50' : ''}`}>
                    <div className="flex items-center gap-4 flex-wrap min-w-0">
                      <span className="font-semibold text-ink">{notice.title}</span>
                      <span className="text-[0.8rem] text-muted">{notice.text.slice(0, 60)}…</span>
                    </div>
                    <div className="flex gap-2 flex-shrink-0 max-sm:w-full max-sm:justify-end">
                      <button
                        className={`${btnSmall} ${notice.active ? 'border-[#43a047] text-[#43a047]' : 'border-muted text-muted'}`}
                        onClick={() => handleToggleNotice(notice.id)}
                        title={notice.active ? 'Desativar' : 'Ativar'}
                      >
                        {notice.active ? '✅ Ativo' : '⭕ Inativo'}
                      </button>
                      <button className={`${btnSmall} border-accent text-accent hover:bg-accent hover:text-primary`} onClick={() => setEditingNotice({ ...notice })}>Editar</button>
                      <button className={`${btnSmall} border-[#e53935] text-[#e53935] hover:bg-[#e53935] hover:text-white`} onClick={() => handleDeleteNotice(notice.id)}>Excluir</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── EVENTS TAB ── */}
        {tab === 'events' && (
          <div className="bg-primary rounded-lg p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-ink text-[1.2rem] m-0">Eventos</h2>
              {!newEvent && (
                <button className={btnPrimary} onClick={() => setNewEvent({ ...EMPTY_EVENT })}>
                  + Novo Evento
                </button>
              )}
            </div>

            {newEvent && (
              <>
                <p className="text-muted text-[0.875rem] mb-2">Novo evento</p>
                <EventForm
                  event={newEvent}
                  onChange={setNewEvent}
                  onSave={() => handleAddEvent(newEvent)}
                  onCancel={() => setNewEvent(null)}
                />
              </>
            )}

            {events.length === 0 && !newEvent && (
              <p className="text-muted text-center py-12">Nenhum evento cadastrado.</p>
            )}

            {events.map((event, idx) => (
              <div key={idx}>
                {editingEvent?.idx === idx ? (
                  <>
                    <p className="text-muted text-[0.875rem] mb-2">Editando: {event.title}</p>
                    <EventForm
                      event={{ ...editingEvent, time: editingEvent.time.replace('⏰ ', ''), location: editingEvent.location.replace('📍 ', '') }}
                      onChange={updated => setEditingEvent({ ...updated, idx })}
                      onSave={() => handleSaveEvent(editingEvent, idx)}
                      onCancel={() => setEditingEvent(null)}
                    />
                  </>
                ) : (
                  <div className="flex items-center justify-between p-4 px-8 rounded-md bg-secondary mb-2 gap-4 flex-wrap">
                    <div className="flex items-center gap-4 flex-wrap min-w-0">
                      <span className="text-[0.8rem] text-accent-dark font-bold whitespace-nowrap">{event.date}</span>
                      <span className="font-semibold text-ink">{event.title}</span>
                      {event.featured && (
                        <span className="bg-gradient-to-br from-accent to-accent-dark text-primary text-[0.7rem] font-bold px-2 py-[2px] rounded-sm whitespace-nowrap">
                          ⭐ Destaque
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2 flex-shrink-0 max-sm:w-full max-sm:justify-end">
                      <button
                        className={`${btnSmall} ${event.featured ? 'border-[#43a047] text-[#43a047]' : 'border-muted text-muted'}`}
                        onClick={() => handleToggleFeatured(idx)}
                        title="Alternar destaque"
                      >
                        {event.featured ? '⭐ Destaque' : '☆ Normal'}
                      </button>
                      <button className={`${btnSmall} border-accent text-accent hover:bg-accent hover:text-primary`} onClick={() => setEditingEvent({ ...event, idx })}>Editar</button>
                      <button className={`${btnSmall} border-[#e53935] text-[#e53935] hover:bg-[#e53935] hover:text-white`} onClick={() => handleDeleteEvent(idx)}>Excluir</button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState(isAuthenticated());

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;
  return <AdminPanel />;
}
