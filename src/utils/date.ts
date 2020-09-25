export function getMonthDay(date: string) {
  return new Date(date).toLocaleDateString('en', {
    month: 'long',
    day: 'numeric',
  })
}

export function getMonthDayRange(
  {
    startDate,
    endDate,
  }: {
    startDate: string
    endDate: string
  },
  showYear = false,
) {
  let dateRange = `${getMonthDay(startDate)} - ${getMonthDay(endDate)}`
  if (showYear) {
    dateRange = `${dateRange}, ${new Date(endDate).toLocaleDateString('en', {
      year: 'numeric',
    })}`
  }

  return dateRange
}
