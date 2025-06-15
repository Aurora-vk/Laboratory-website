// 导航栏滚动效果
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md', 'py-2');
        navbar.classList.remove('py-4');
    } else {
        navbar.classList.remove('bg-white', 'shadow-md', 'py-2');
        navbar.classList.add('py-4');
    }
});

// 移动端菜单切换
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 移动端下拉菜单
const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
mobileDropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const targetId = toggle.dataset.dropdownTarget;
        const content = document.getElementById(targetId);
        content.classList.toggle('hidden');

        // 切换图标
        const icon = toggle.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

// 点击菜单项关闭移动端菜单
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 导航栏菜单项高亮
const STICKY_OFFSET = 80; // 导航栏高度

const highlightNavItems = () => {
    const scrollY = window.scrollY;
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const sectionTop = section.offsetTop - STICKY_OFFSET;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
            // 移除所有活动状态
            document.querySelectorAll('nav a').forEach(navLink => {
                navLink.classList.remove('nav-item-active');
            });

            // 添加当前活动状态
            const currentNavLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            if (currentNavLink) {
                currentNavLink.classList.add('nav-item-active');
            }
        }
    });
};

// 初始化高亮
highlightNavItems();

// 滚动时更新高亮
window.addEventListener('scroll', highlightNavItems);