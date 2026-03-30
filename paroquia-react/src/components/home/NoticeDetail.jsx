import { Link } from 'react-router-dom';
import './NoticeDetail.css';

export default function NoticeDetail({ notice }) {
  if (!notice) return null;

  return (
    <div className="notice-detail">
      {notice.image && (
        <div className="notice-detail-image-wrapper">
          <img src={notice.image} alt={notice.title} className="notice-detail-image" />
        </div>
      )}
      <div className="notice-detail-body">
        <h2 className="notice-detail-title">{notice.title}</h2>
        <p className="notice-detail-text">{notice.text}</p>
        {notice.linkHref && notice.linkText && (
          <Link to={notice.linkHref} className="notice-detail-link">
            {notice.linkText} →
          </Link>
        )}
      </div>
    </div>
  );
}
