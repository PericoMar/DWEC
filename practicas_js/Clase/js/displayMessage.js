function displayMessage(msgText , msgType) {
    let body = document.body;

    let panel = document.createElement("div");
    panel.setAttribute("class", "msgBox");
    body.appendChild(panel);

    let msg = document.createElement("p");
    msg.textContent = msgText;
    panel.appendChild(msg);

    let closeBtn = document.createElement("button");
    closeBtn.textContent = "x";
    panel.appendChild(closeBtn);

    closeBtn.onclick = function () {
    panel.parentNode.removeChild(panel);
    };
    if (msgType === "warning") {
        msg.style.backgroundImage = "url(assets/warning.png)";
        panel.style.backgroundColor = "red";
      } else if (msgType === "chat") {
        msg.style.backgroundImage = "url(assets/chat.png)";
        panel.style.backgroundColor = "aqua";
      } else {
        msg.style.paddingLeft = "20px";
      }
}

let btn = document.querySelector("#display");
btn.onclick = () => displayMessage("Mensaje distinto" , "warning");
