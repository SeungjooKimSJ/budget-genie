// 웹앱에서 사용되는 슬로건 목록
export const slogans = [
  "Your magical little helper for smarter spending.",
  "Smarter budgeting starts with your genie.",
  "Make every dollar count, like magic.",
  "A wish away from financial clarity.",
  "Wave goodbye to messy budgets.",
  "Saving feels better with a genie.",
  "Poof! Your budget problems—gone.",
  "Three wishes? Just one: better budgeting.",
  "Spent too much? Genie's judging (nicely).",
  "Your wallet called. It wants Budget Genie.",
  "Stop guessing. Start wishing.",
  "Forget spreadsheets. This is magic."
];

// 랜덤한 슬로건을 반환하는 유틸리티 함수
export const getRandomSlogan = () => {
  const randomIndex = Math.floor(Math.random() * slogans.length);
  return slogans[randomIndex];
}; 