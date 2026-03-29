import { useState, useEffect } from 'react';
import styles from './AdminPage.module.css';

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
    <div className={styles.loginWrapper}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className={styles.loginTitle}>🔒 Painel do Desenvolvedor</h1>
        <p className={styles.loginSubtitle}>Acesso restrito — somente em desenvolvimento local.</p>
        <input
          type="password"
          className={styles.input}
          placeholder="Senha"
          value={password}
          onChange={e => { setPassword(e.target.value); setError(''); }}
          autoFocus
        />
        {error && <p className={styles.errorMsg}>{error}</p>}
        <button type="submit" className={styles.btnPrimary}>Entrar</button>
      </form>
    </div>
  );
}

// ─── Notice Form ─────────────────────────────────────────────────────────────

const EMPTY_NOTICE = { id: Date.now(), image: '', title: '', text: '', linkText: '', linkHref: '', active: true };

function NoticeForm({ notice, onChange, onSave, onCancel }) {
  return (
    <div className={styles.formCard}>
      <div className={styles.formGrid}>
        <label className={styles.label}>
          Título *
          <input className={styles.input} value={notice.title} onChange={e => onChange({ ...notice, title: e.target.value })} />
        </label>
        <label className={styles.label}>
          URL da imagem (opcional)
          <input className={styles.input} placeholder="Ex: /imagens/aviso.jpg" value={notice.image} onChange={e => onChange({ ...notice, image: e.target.value })} />
        </label>
        <label className={`${styles.label} ${styles.fullWidth}`}>
          Texto *
          <textarea className={styles.textarea} value={notice.text} onChange={e => onChange({ ...notice, text: e.target.value })} rows={3} />
        </label>
        <label className={styles.label}>
          Texto do link
          <input className={styles.input} placeholder="Ex: Saiba mais" value={notice.linkText} onChange={e => onChange({ ...notice, linkText: e.target.value })} />
        </label>
        <label className={styles.label}>
          Rota do link
          <input className={styles.input} placeholder="Ex: /eventos" value={notice.linkHref} onChange={e => onChange({ ...notice, linkHref: e.target.value })} />
        </label>
        <label className={`${styles.label} ${styles.checkLabel}`}>
          <input type="checkbox" checked={notice.active} onChange={e => onChange({ ...notice, active: e.target.checked })} />
          Aviso ativo (visível na home)
        </label>
      </div>
      <div className={styles.formActions}>
        <button className={styles.btnPrimary} onClick={onSave}>Salvar</button>
        <button className={styles.btnSecondary} onClick={onCancel}>Cancelar</button>
      </div>
    </div>
  );
}

// ─── Event Form ───────────────────────────────────────────────────────────────

const EMPTY_EVENT = { date: '', title: '', time: '', location: '', description: '', featured: false };

function EventForm({ event, onChange, onSave, onCancel }) {
  return (
    <div className={styles.formCard}>
      <div className={styles.formGrid}>
        <label className={styles.label}>
          Data *
          <input className={styles.input} type="date" value={event.date} onChange={e => onChange({ ...event, date: e.target.value })} />
        </label>
        <label className={styles.label}>
          Título *
          <input className={styles.input} value={event.title} onChange={e => onChange({ ...event, title: e.target.value })} />
        </label>
        <label className={styles.label}>
          Horário
          <input className={styles.input} placeholder="Ex: 19h30" value={event.time} onChange={e => onChange({ ...event, time: e.target.value })} />
        </label>
        <label className={styles.label}>
          Local
          <input className={styles.input} placeholder="Ex: Igreja Matriz" value={event.location} onChange={e => onChange({ ...event, location: e.target.value })} />
        </label>
        <label className={`${styles.label} ${styles.fullWidth}`}>
          Descrição
          <textarea className={styles.textarea} value={event.description} onChange={e => onChange({ ...event, description: e.target.value })} rows={3} />
        </label>
        <label className={`${styles.label} ${styles.checkLabel}`}>
          <input type="checkbox" checked={event.featured} onChange={e => onChange({ ...event, featured: e.target.checked })} />
          Evento em Destaque (aparece na home)
        </label>
      </div>
      <div className={styles.formActions}>
        <button className={styles.btnPrimary} onClick={onSave}>Salvar</button>
        <button className={styles.btnSecondary} onClick={onCancel}>Cancelar</button>
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
    <div className={styles.adminWrapper}>
      <header className={styles.adminHeader}>
        <div>
          <h1 className={styles.adminTitle}>🛠 Painel Admin</h1>
          <p className={styles.adminSubtitle}>Paróquia Nossa Senhora Aparecida — somente dev</p>
        </div>
        <button className={styles.btnLogout} onClick={handleLogout}>Sair</button>
      </header>

      {feedback && <div className={styles.feedbackBar}>{feedback}</div>}

      <div className={styles.tabs}>
        <button className={`${styles.tab} ${tab === 'notices' ? styles.tabActive : ''}`} onClick={() => setTab('notices')}>
          📢 Avisos ({notices.length})
        </button>
        <button className={`${styles.tab} ${tab === 'events' ? styles.tabActive : ''}`} onClick={() => setTab('events')}>
          📅 Eventos ({events.length})
        </button>
      </div>

      {/* ── NOTICES TAB ── */}
      {tab === 'notices' && (
        <div className={styles.tabContent}>
          <div className={styles.tabToolbar}>
            <h2 className={styles.tabTitle}>Avisos Importantes</h2>
            {!newNotice && (
              <button className={styles.btnPrimary} onClick={() => setNewNotice({ ...EMPTY_NOTICE, id: Date.now() })}>
                + Novo Aviso
              </button>
            )}
          </div>

          {newNotice && (
            <>
              <p className={styles.formLabel}>Novo aviso</p>
              <NoticeForm
                notice={newNotice}
                onChange={setNewNotice}
                onSave={() => handleAddNotice(newNotice)}
                onCancel={() => setNewNotice(null)}
              />
            </>
          )}

          {notices.length === 0 && !newNotice && (
            <p className={styles.emptyMsg}>Nenhum aviso cadastrado.</p>
          )}

          {notices.map(notice => (
            <div key={notice.id}>
              {editingNotice?.id === notice.id ? (
                <>
                  <p className={styles.formLabel}>Editando: {notice.title}</p>
                  <NoticeForm
                    notice={editingNotice}
                    onChange={setEditingNotice}
                    onSave={() => handleSaveNotice(editingNotice)}
                    onCancel={() => setEditingNotice(null)}
                  />
                </>
              ) : (
                <div className={`${styles.itemRow} ${!notice.active ? styles.itemInactive : ''}`}>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemTitle}>{notice.title}</span>
                    <span className={styles.itemMeta}>{notice.text.slice(0, 60)}…</span>
                  </div>
                  <div className={styles.itemActions}>
                    <button
                      className={notice.active ? styles.btnToggleOn : styles.btnToggleOff}
                      onClick={() => handleToggleNotice(notice.id)}
                      title={notice.active ? 'Desativar' : 'Ativar'}
                    >
                      {notice.active ? '✅ Ativo' : '⭕ Inativo'}
                    </button>
                    <button className={styles.btnEdit} onClick={() => setEditingNotice({ ...notice })}>Editar</button>
                    <button className={styles.btnDelete} onClick={() => handleDeleteNotice(notice.id)}>Excluir</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ── EVENTS TAB ── */}
      {tab === 'events' && (
        <div className={styles.tabContent}>
          <div className={styles.tabToolbar}>
            <h2 className={styles.tabTitle}>Eventos</h2>
            {!newEvent && (
              <button className={styles.btnPrimary} onClick={() => setNewEvent({ ...EMPTY_EVENT })}>
                + Novo Evento
              </button>
            )}
          </div>

          {newEvent && (
            <>
              <p className={styles.formLabel}>Novo evento</p>
              <EventForm
                event={newEvent}
                onChange={setNewEvent}
                onSave={() => handleAddEvent(newEvent)}
                onCancel={() => setNewEvent(null)}
              />
            </>
          )}

          {events.length === 0 && !newEvent && (
            <p className={styles.emptyMsg}>Nenhum evento cadastrado.</p>
          )}

          {events.map((event, idx) => (
            <div key={idx}>
              {editingEvent?.idx === idx ? (
                <>
                  <p className={styles.formLabel}>Editando: {event.title}</p>
                  <EventForm
                    event={{ ...editingEvent, time: editingEvent.time.replace('⏰ ', ''), location: editingEvent.location.replace('📍 ', '') }}
                    onChange={updated => setEditingEvent({ ...updated, idx })}
                    onSave={() => handleSaveEvent(editingEvent, idx)}
                    onCancel={() => setEditingEvent(null)}
                  />
                </>
              ) : (
                <div className={styles.itemRow}>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemDate}>{event.date}</span>
                    <span className={styles.itemTitle}>{event.title}</span>
                    {event.featured && <span className={styles.featuredBadge}>⭐ Destaque</span>}
                  </div>
                  <div className={styles.itemActions}>
                    <button
                      className={event.featured ? styles.btnToggleOn : styles.btnToggleOff}
                      onClick={() => handleToggleFeatured(idx)}
                      title="Alternar destaque"
                    >
                      {event.featured ? '⭐ Destaque' : '☆ Normal'}
                    </button>
                    <button className={styles.btnEdit} onClick={() => setEditingEvent({ ...event, idx })}>Editar</button>
                    <button className={styles.btnDelete} onClick={() => handleDeleteEvent(idx)}>Excluir</button>
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
