//visits-count.js
// 网站访问量计数功能
function updateVisitCount() {
  // 从本地存储获取访问次数，初始化为0
  let count = localStorage.getItem('visitCount');
  count = count ? parseInt(count) : 0;

  // 访问次数加1
  count++;

  // 更新本地存储
  localStorage.setItem('visitCount', count);

  // 更新页面显示
  document.getElementById('visit-count').textContent = count;
}

// 页面加载时更新访问计数
window.addEventListener('load', updateVisitCount);