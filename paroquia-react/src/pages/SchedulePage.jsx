import PageHeader from '../components/layout/PageHeader';
import ScheduleGrid from '../components/schedule/ScheduleGrid';
import CelebrationsGrid from '../components/schedule/CelebrationsGrid';
import SacramentsGrid from '../components/schedule/SacramentsGrid';
import ImportantNotes from '../components/schedule/ImportantNotes';
import CTASection from '../components/ui/CTASection';
import scheduleData from '../data/schedule.json';

export default function SchedulePage() {
  return (
    <>
      <PageHeader title={scheduleData.pageHeader.title} subtitle={scheduleData.pageHeader.subtitle} />
      <ScheduleGrid />
      <CelebrationsGrid />
      <SacramentsGrid />
      <ImportantNotes />
      <CTASection {...scheduleData.cta} />
    </>
  );
}
