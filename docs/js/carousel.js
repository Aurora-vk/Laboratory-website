// 轮播图功能
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    let currentIndex = 0;
    let slideInterval;

    // 创建指示器
    carouselItems.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-dot');
        indicator.classList.add(index === 0 ? 'carousel-dot-active' : 'bg-gray-400');
        indicator.setAttribute('data-index', index);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });

    // 显示当前幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        carouselItems.forEach(item => {
            item.style.opacity = '0';
            item.style.zIndex = '0';
        });

        // 显示当前幻灯片
        carouselItems[index].style.opacity = '1';
        carouselItems[index].style.zIndex = '1';

        // 更新指示器
        document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('carousel-dot-active');
                dot.classList.remove('bg-gray-400');
            } else {
                dot.classList.remove('carousel-dot-active');
                dot.classList.add('bg-gray-400');
            }
        });

        currentIndex = index;
    }

    // 前往指定幻灯片
    function goToSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }

        showSlide(index);
        resetInterval();
    }

    // 重置自动轮播计时器
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000);
    }

    // 初始化
    showSlide(0);
    resetInterval();

    // 事件监听器
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // 鼠标悬停时暂停自动轮播
    carousel.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    carousel.addEventListener('mouseleave', resetInterval);
});