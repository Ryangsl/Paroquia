import SectionHeader from '../ui/SectionHeader';
import eventsData from '../../data/events.json';

export default function GroupsGrid() {
  const { groupsMinistries } = eventsData;

  return (
    <section className="py-16 bg-primary">
      <div className="container">
        <SectionHeader title={groupsMinistries.sectionTitle} description={groupsMinistries.description} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-12">
          {groupsMinistries.groups.map((group, i) => (
            <div
              key={i}
              className="bg-secondary p-12 rounded-lg text-center border-b-[3px] border-b-transparent hover:-translate-y-[6px] hover:shadow-md hover:border-b-accent transition-all duration-300 shadow-xs"
            >
              <div className="text-[2.5rem] mb-4 w-[64px] h-[64px] inline-flex items-center justify-center bg-[var(--bg-accent-subtle)] rounded-full leading-none">
                {group.icon}
              </div>
              <h3 className="font-heading text-ink mb-2 text-[1.2rem]">{group.title}</h3>
              <p className="text-muted text-[0.95rem] leading-[1.6]">{group.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
