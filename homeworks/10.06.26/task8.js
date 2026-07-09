// Joriy vaqtni quyidagi formatda chiqaring:
// HH:MM:SS

function currentTime() {
  const date = new Date();

  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();

  return `${hh}:${mm}:${ss}`;
}

console.log(currentTime());
