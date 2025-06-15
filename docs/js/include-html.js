// 动态加载外部 HTML 文件内容
async function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const file = element.dataset.include;
        try {
            const response = await fetch(file);
            if (response.ok) {
                const html = await response.text();
                element.addEventListener('click', function () {
                    document.getElementById('tab-content').innerHTML = html;
                    // 高亮点击的子菜单和其父菜单
                    highlightClickedMenu(this);
                });
            } else {
                console.error(`Failed to load ${file}: ${response.statusText}`);
            }
        } catch (error) {
            console.error(`Error loading ${file}: ${error.message}`);
        }
    }
}

// 高亮点击的子菜单和其父菜单
function highlightClickedMenu(clickedElement) {
    // 移除所有子菜单的高亮样式
    document.querySelectorAll('.sub-nav-item-active').forEach(item => {
        item.classList.remove('sub-nav-item-active');
    });
    // 移除所有父菜单的高亮样式
    document.querySelectorAll('.nav-item-active').forEach(item => {
        item.classList.remove('nav-item-active');
    });

    // 高亮点击的子菜单
    clickedElement.classList.add('sub-nav-item-active');

    // 找到其父菜单并高亮
    const parentMenu = clickedElement.closest('.group').querySelector('a[href^="#"]');
    if (parentMenu) {
        parentMenu.classList.add('nav-item-active');
    }
}