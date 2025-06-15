// 更新最后更新日期功能
function updateLastUpdateDate() {
  // 获取当前日期
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  // 格式化日期
  const formattedDate = `${year}/${month}/${day}`;

  // 更新页面显示
  document.getElementById('update-date').textContent = formattedDate;
}

// 页面加载时更新日期
window.addEventListener('load', updateLastUpdateDate);