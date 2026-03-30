import { useState, useEffect } from 'react';
import './AdminPage.css';

// ─── Auth ────────────────────────────────────────────────────────────────────

const STORAGE_KEY = 'admin_auth';

function isAuthenticated() {
  return sessionStorage.getItem(STORAGE_KEY) === 'true';
}

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
    <div className="admin-login-wrapper">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h1 className="admin-login-title">🔒 Painel do Desenvolvedor</h1>
        <p className="admin-login-subtitle">Acesso restrito — somente em desenvolvimento local.</p>
        <input
          type="password"
          className="admin-input"
          placeholder="Senha"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(''); }}
          autoFocus
        />
        {error && <p className="admin-error-msg">{error}</p>}
        <button type="submit" className="admin-btn-primary">Entrar</button>
      </form>
    </div>
  );
}

// ─── Notice Form ─────────────────────────────────────────────────────────────

const EMPTY_NOTICE = { id: Date.now(), image: '', title: '', text: '', linkText: '', linkHref: '', active: true };

function NoticeForm({ notice, onChange, onSave, onCancel }) {
  return (
    <div className="admin-form-card">
      <div className="admin-form-grid">
        <label className="admin-label">
          Título *
          <input className="admin-input" value={notice.title} onChange={e => onChange({ ...notice, title: e.target.value })} />
        </label>
        <label className="admin-label">
          URL da imagem (opcional)
          <input className="admin-input" placeholder="Ex: /imagens/aviso.jpg" value={notice.image} onChange={e => onChange({ ...notice, image: e.target.value })} />
        </label>
        <label className="admin-label admin-full-width">
          Texto *
          <textarea className="admin-textarea" value={notice.text} onChange={e => onChange({ ...notice, text: e.target.value })} rows={3} />
        </label>
        <label className="admin-label">
          Texto do link
          <input className="admin-input" placeholder="Ex: Saiba mais" value={notice.linkText} onChange={e => onChange({ ...notice, linkText: e.target.value })} />
        </label>
        <label className="admin-label">
          Rota do link
          <input className="admin-input" placeholder="Ex: /eventos" value={notice.linkHref} onChange={e => onChange({ ...notice, linkHref: e.target.value })} />
        </label>
        <label className="admin-label admin-check-label">
          <input type="checkbox" checked={notice.active} onChange={e => onChange({ ...notice, active: e.target.checked })} />
          Aviso ativo (visível na home)
        </label>
      </div>
      <div className="admin-form-actions">
        <button className="admin-btn-primary" onClick={onSave}>Salvar</button>
        <button className="admin-btn-secondary" onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
}

// ─── Event Form ───────────────────────────────────────────────────────────────

const EMPTY_EVENT = { date: '', title: '', time: '', location: '', description: '', featured: false };

function EventForm({ event, onChange, onSave, onCancel }) {
  return (
    <div className="admin-form-card">
      <div className="admin-form-grid">
        <label className="admin-label">
          Data *
          <input className="admin-input" type="date" value={event.date} onChange={e => onChange({ ...event, date: e.target.value })} />
        </label>
        <label className="admin-label">
          Título *
          <input className="admin-input" value={event.title} onChange={e => onChange({ ...event, title: e.target.value })} />
        </label>
        <label className="admin-label">
          Horário
          <input className="admin-input" placeholder="Ex: 19h30" value={event.time} onChange={e => onChange({ ...event, time: e.target.value })} />
        </label>
        <label className="admin-label">
          Local
          <input className="admin-input" placeholder="Ex: Igreja Matriz" value={event.location} onChange={e => onChange({ ...event, location: e.target.value })} />
        </label>
        <label className="admin-label admin-full-width">
          Descrição
          <textarea className="admin-textarea" value={event.description} onChange={e => onChange({ ...event, description: e.target.value })} rows={3} />
        </label>
        <label className="admin-label admin-check-label">
          <input type="checkbox" checked={event.featured} onChange={e => onChange({ ...event, featured: e.target.checked })} />
          Evento em Destaque (aparece na home)
        </label>
      </div>
      <div className="admin-form-actions">
        <button className="admin-btn-primary" onClick={onSave}>Salvar</button>
        <button className="admin-btn-secondary" onClick={onCancel}>Cancelar</button>
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

  // Notice actions
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

  // Event actions
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
    <div className="admin-wrapper">
      <header className="admin-header">
        <div>
          <h1 className="admin-title">🛠 Painel Admin</h1>
          <p className="admin-subtitle">Paróquia Nossa Senhora Aparecida — somente dev</p>
        </div>
        <button className="admin-btn-logout" onClick={handleLogout}>Sair</button>
      </header>

      {feedback && <div className="admin-feedback-bar">{feedback}</div>}

      <div className="admin-tabs">
        <button className={`admin-tab ${tab === 'notices' ? 'admin-tab-active' : ''}`} onClick={() => setTab('notices')}>
          📢 Avisos ({notices.length})
        </button>
        <button className={`admin-tab ${tab === 'events' ? 'admin-tab-active' : ''}`} onClick={() => setTab('events')}>
          📅 Eventos ({events.length})
        </button>
      </div>

      {/* ── NOTICES TAB ── */}
      {tab === 'notices' && (
        <div className="admin-tab-content">
          <div className="admin-tab-toolbar">
            <h2 className="admin-tab-title">Avisos Importantes</h2>
            {!newNotice && (
              <button className="admin-btn-primary" onClick={() => setNewNotice({ ...EMPTY_NOTICE, id: Date.now() })}>
                + Novo Aviso
              </button>
            )}
          </div>

          {newNotice && (
            <>
              <p className="admin-form-label">Novo aviso</p>
              <NoticeForm
                notice={newNotice}
                onChange={setNewNotice}
                onSave={() => handleAddNotice(newNotice)}
                onCancel={() => setNewNotice(null)}
              />
            </>
          )}

          {notices.length === 0 && !newNotice && (
            <p className="admin-empty-msg">Nenhum aviso cadastrado.</p>
          )}

          {notices.map(notice => (
            <div key={notice.id}>
              {editingNotice?.id === notice.id ? (
                <>
                  <p className="admin-form-label">Editando: {notice.title}</p>
                  <NoticeForm
                    notice={editingNotice}
                    onChange={setEditingNotice}
                    onSave={() => handleSaveNotice(editingNotice)}
                    onCancel={() => setEditingNotice(null)}
                  />
                </>
              ) : (
                <div className={`admin-item-row ${!notice.active ? 'admin-item-inactive' : ''}`}>
                  <div className="admin-item-info">
                    <span className="admin-item-title">{notice.title}</span>
                    <span className="admin-item-meta">{notice.text.slice(0, 60)}…</span>
                  </div>
                  <div className="admin-item-actions">
                    <button
                      className={notice.active ? 'admin-btn-toggle-on' : 'admin-btn-toggle-off'}
                      onClick={() => handleToggleNotice(notice.id)}
                      title={notice.active ? 'Desativar' : 'Ativar'}
                    >
                      {notice.active ? '✅ Ativo' : '⭕ Inativo'}
                    </button>
                    <button className="admin-btn-edit" onClick={() => setEditingNotice({ ...notice })}>Editar</button>
                    <button className="admin-btn-delete" onClick={() => handleDeleteNotice(notice.id)}>Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── EVENTS TAB ── */}
      {tab === 'events' && (
        <div className="admin-tab-content">
          <div className="admin-tab-toolbar">
            <h2 className="admin-tab-title">Eventos</h2>
            {!newEvent && (
              <button className="admin-btn-primary" onClick={() => setNewEvent({ ...EMPTY_EVENT })}>
                + Novo Evento
              </button>
            )}
          </div>

          {newEvent && (
            <>
              <p className="admin-form-label">Novo evento</p>
              <EventForm
                event={newEvent}
                onChange={setNewEvent}
                onSave={() => handleAddEvent(newEvent)}
                onCancel={() => setNewEvent(null)}
              />
            </>
          )}

          {events.length === 0 && !newEvent && (
            <p className="admin-empty-msg">Nenhum evento cadastrado.</p>
          )}

          {events.map((event, idx) => (
            <div key={idx}>
              {editingEvent?.idx === idx ? (
                <>
                  <p className="admin-form-label">Editando: {event.title}</p>
                  <EventForm
                    event={{ ...editingEvent, time: editingEvent.time.replace('⏰ ', ''), location: editingEvent.location.replace('📍 ', '') }}
                    onChange={updated => setEditingEvent({ ...updated, idx })}
                    onSave={() => handleSaveEvent(editingEvent, idx)}
                    onCancel={() => setEditingEvent(null)}
                  />
                </>
              ) : (
                <div className="admin-item-row">
                  <div className="admin-item-info">
                    <span className="admin-item-date">{event.date}</span>
                    <span className="admin-item-title">{event.title}</span>
                    {event.featured && <span className="admin-featured-badge">⭐ Destaque</span>}
                  </div>
                  <div className="admin-item-actions">
                    <button
                      className={event.featured ? 'admin-btn-toggle-on' : 'admin-btn-toggle-off'}
                      onClick={() => handleToggleFeatured(idx)}
                      title="Alternar destaque"
                    >
                      {event.featured ? '⭐ Destaque' : '☆ Normal'}
                    </button>
                    <button className="admin-btn-edit" onClick={() => setEditingEvent({ ...event, idx })}>Editar</button>
                    <button className="admin-btn-delete" onClick={() => handleDeleteEvent(idx)}>Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Page root ────────────────────────────────────────────────────────────────

export default function AdminPage() {
  const [authed, setAuthed] = useState(isAuthenticated());

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;
  return <AdminPanel />;
}
