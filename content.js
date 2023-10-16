// 创建按钮元素
const img = document.createElement('img');
img.src = chrome.runtime.getURL('youdao_icon.png');
img.style.width = '130px';
img.style.height = '40px';
img.style.position = "fixed";
img.style.right = "240px";
img.style.top = "10px";
img.style.zIndex = 100000;
img.style.cursor = 'pointer';
img.style.display = 'none'; // 初始状态隐藏img标签

// 将按钮添加到页面
document.body.appendChild(img);

const url = new URL(window.location.href);
// 检查页面是否含有PDF文件
if (url.pathname.endsWith(".pdf")) {
  img.style.display = 'block'; // 显示img标签
}

// 为按钮添加点击事件监听器
img.addEventListener("click", async () => {
  const url = new URL(window.location.href);

  if (url.pathname.endsWith(".pdf")) {
    const redirectURL = `https://read.youdao.com/#/home?pdfUrl=${encodeURIComponent(window.location.href)}`;
    // window.location.href = redirectURL;
    window.open(redirectURL, "_blank");
  } else {
    const noPdfURL = "https://read.youdao.com/#/home";
    // window.location.href = noPdfURL;
    window.open(noPdfURL, "_blank");
  }
});