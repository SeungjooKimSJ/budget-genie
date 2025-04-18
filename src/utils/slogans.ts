// 웹앱에서 사용되는 슬로건 목록
export const slogans = [
  "Your magical little helper for smarter spending.",
  "Budget smarter, live better — with a little help from your genie.",
  "Make every dollar count, like magic.",
  "A wish away from financial clarity.",
  "Wave goodbye to messy budgets."
];

// 랜덤한 슬로건을 반환하는 유틸리티 함수
export const getRandomSlogan = () => {
  const randomIndex = Math.floor(Math.random() * slogans.length);
  return slogans[randomIndex];
}; 