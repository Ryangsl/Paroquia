export const MONTHS = ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

export const MONTHS_FULL = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export function getTodayISO() {
  return new Date().toISOString().split('T')[0];
}

export function parseEventDate(dateStr) {
  const [, month, day] = dateStr.split('-').map(Number);
  return { day: String(day).padStart(2, '0'), month: MONTHS[month - 1] };
}

export function formatDateShort(dateStr) {
  const [, month, day] = dateStr.split('-').map(Number);
  return `${day} de ${MONTHS[month - 1]}`;
}

export function getMonthYear(dateStr) {
  const [year, month] = dateStr.split('-').map(Number);
  return { month, year, label: `${MONTHS_FULL[month - 1]} ${year}` };
}

export function stripTimeEmoji(timeStr) {
  return timeStr.replace('⏰ ', '');
}
