export function formatRecruitmentDate(recruitmentDate) {
  const formattedDate = new Date(recruitmentDate);
  const year = formattedDate.getFullYear();
  const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
  const day = String(formattedDate.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
