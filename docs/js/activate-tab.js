// 根据 URL 哈希值激活对应的标签页
function activateTabByHash() {
    const hash = window.location.hash.substring(1);
    const link = document.querySelector(`a[href="#${hash}"]`);
    if (link) {
        link.click();
    }
}