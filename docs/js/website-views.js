//website-views.js
//网站访问量统计
document.addEventListener('DOMContentLoaded', function() {
    // 通过 AJAX 从后端获取数据并展示
    fetch('/api/get-website-views')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应状态不是OK');
            }
            return response.json();
        })
        .then(data => {
            const viewsElement = document.getElementById('website-views');
            if (viewsElement) {
                viewsElement.textContent = `总访问量: ${data.totalViews.toLocaleString()}`;
            }
        })
        .catch(error => {
            const viewsElement = document.getElementById('website-views');
            if (viewsElement) {
                viewsElement.textContent = '数据加载失败';
            }
            console.error('获取访问量数据失败:', error);
        });
});