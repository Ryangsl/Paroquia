import PageHeader from '../components/layout/PageHeader';
import EventsList from '../components/events/EventsList';
import ActivitiesGrid from '../components/events/ActivitiesGrid';
import GroupsGrid from '../components/events/GroupsGrid';
import CTASection from '../components/ui/CTASection';
import eventsData from '../data/events.json';

export default function EventsPage() {
  return (
    <>
      <PageHeader title={eventsData.pageHeader.title} subtitle={eventsData.pageHeader.subtitle} />
      <EventsList />
      <ActivitiesGrid />
      <GroupsGrid />
      <CTASection {...eventsData.cta} />
    </>
  );
}
