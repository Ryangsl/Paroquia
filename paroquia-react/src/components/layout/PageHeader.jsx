import './PageHeader.css';

export default function PageHeader({ title, subtitle }) {
  return (
    <section className="page-header">
      <div className="container">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
      </div>
    </section>
  );
}
