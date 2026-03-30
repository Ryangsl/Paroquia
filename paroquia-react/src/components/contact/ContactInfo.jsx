import contactData from '../../data/contact.json';

export default function ContactInfo() {
  const { contactInfo } = contactData;

  return (
    <div className="flex flex-col gap-8">
      <h2 className="font-heading text-ink text-[1.8rem]">{contactInfo.title}</h2>
      <p className="text-muted -mt-4 leading-[1.7]">{contactInfo.intro}</p>

      {contactInfo.items.map((item, i) => (
        <div
          key={i}
          className="flex gap-4 items-start bg-secondary p-8 rounded-md hover:shadow-sm hover:-translate-y-[2px] transition-all duration-300"
        >
          <div className="text-[1.6rem] w-12 h-12 flex items-center justify-center bg-[var(--bg-accent-subtle)] rounded-full flex-shrink-0 text-accent">
            {item.icon}
          </div>
          <div>
            <h3 className="font-heading text-ink mb-[4px] text-[1.05rem]">{item.title}</h3>
            {item.lines && item.lines.map((line, j) => (
              <span key={j} className="text-muted leading-[1.6] block">{line}</span>
            ))}
            {item.entries && item.entries.map((entry, j) => (
              <p key={j} className="text-muted leading-[1.6]">
                <strong className="text-ink">{entry.label}:</strong> {entry.value}
              </p>
            ))}
            {item.socialButtons && (
              <div className="flex flex-col gap-2 mt-2">
                {item.socialButtons.map((btn, j) => (
                  <a
                    key={j}
                    href={btn.url}
                    className="inline-block px-4 py-2 bg-secondary text-ink no-underline rounded-md font-medium hover:bg-accent hover:text-primary hover:translate-x-[4px] transition-all duration-300"
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
