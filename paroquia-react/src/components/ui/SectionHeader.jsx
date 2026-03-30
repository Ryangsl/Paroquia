import './SectionHeader.css';

export default function SectionHeader({ title, description }) {
  return (
    <div className="section-header">
      <h2 className="section-title">{title}</h2>
      <div className="title-underline"></div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
