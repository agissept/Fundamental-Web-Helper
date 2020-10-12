document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container')
  templateMessage.forEach((data) => {
    if (data.type === 'reject' || data.type ==='custom-reject') {
      container.innerHTML += `<button class="btn btn-reject">${data.key}</button>`
    } else if(data.type === 'accept') {
      container.innerHTML += `<button class="btn btn-accept">${data.key}</button>`
    }else{
      container.innerHTML += `<button class="btn" style="color:black;">${data.key}</button>`
    }
  })


  const buttons = document.querySelectorAll('.btn')
  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      chrome.tabs.query({
        currentWindow: false,
        active: false
      }, (tabs) => {
        chrome.windows.getAll({
          populate: true
        }, (windows) => {
          windows.forEach((window) => {
            window.tabs.forEach((tab) => {
              chrome.tabs.sendMessage(tab.id, templateMessage[index]);
            });
          });
        });
      })
    })
  })
})

function copyToClip(str) {
  function listener(e) {
    e.clipboardData.setData("text/html", str);
    e.clipboardData.setData("text/plain", str);
    e.preventDefault();
  }
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
};