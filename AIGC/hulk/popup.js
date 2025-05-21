document.addEventListener('DOMContentLoaded', async () => {
    const changeColorButton = document.getElementById('changeColorButton');
    let originalColor = null; // 存储原始背景颜色

    changeColorButton.addEventListener('click', async () => {
        try {
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            if (!tab) {
                alert('未找到当前激活的标签页');
                return;
            }

            // 第一次点击：保存原始颜色（使用 getComputedStyle 获取实际颜色）
            if (!originalColor) {
                // 注入脚本获取计算后的背景颜色（兼容CSS样式）
                const [result] = await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: () => {
                        const computedColor = window.getComputedStyle(document.body).backgroundColor;
                        return computedColor === 'rgba(0, 0, 0, 0)' ? 'white' : computedColor; // 处理透明背景默认白色
                    }
                });
                originalColor = result.result;

                // 修改为红色
                await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: () => document.body.style.backgroundColor = 'red'
                });
                changeColorButton.textContent = '还原颜色';
            } 
            // 第二次点击：恢复原始颜色（通过 args 传递原始颜色值）
            else {
                await chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: (color) => {  // 接收传递的颜色参数
                        document.body.style.backgroundColor = color;
                    },
                    args: [originalColor]  // 传递原始颜色值给注入脚本
                });
                changeColorButton.textContent = '改变颜色';
                originalColor = null; // 重置状态
            }

        } catch (error) {
            alert(`操作失败：${error.message}`);
            console.error('背景颜色修改失败详细原因:', error);
        }
    });
});