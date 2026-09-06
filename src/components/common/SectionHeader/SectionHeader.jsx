import './SectionHeader.css';

export function SectionHeader({
  tag,
  title,
  subtitle,
  id,
  centered = true,
}) {
  return (
    <div className={`section-header ${centered ? 'text-center' : 'text-left'}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 id={id} className="section-title">
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeader;
