function fn_ValForm() {
  var sMsg = "";

  var nameEl = document.getElementById("name");
  var emailEl = document.getElementById("email");
  var msgEl = document.getElementById("message");

  var nameVal = nameEl.value.replace(/^\s+|\s+$/g, "");
  var emailVal = emailEl.value.replace(/^\s+|\s+$/g, "");
  var messageVal = msgEl.value.replace(/^\s+|\s+$/g, "");

  if (nameVal === "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }
  if (emailVal === "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else {
    var emailRe =
      /^[a-z0-9][a-z0-9_.-]*[a-z0-9]@[a-z0-9][a-z0-9_.-]*[a-z0-9]\.[a-z0-9]{2,4}$/i;
    if (!emailRe.test(emailVal)) {
      sMsg += "\n* Format email tidak valid";
    }
  }
  if (messageVal === "") {
    sMsg += "\n* Anda belum mengisikan pesan";
  }

  if (sMsg !== "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  }
  return true;
}
