const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const formatDateToDayAndMonth = (date: string) => {
  const destructuredDate = date.split('-')
  const month = parseInt(destructuredDate[1], 10)
  return `${destructuredDate[2]}${months[month - 1]}`
}

export default formatDateToDayAndMonth
