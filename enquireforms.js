function go() {
    const name = document.getElementById("inputone").value.trim();
    const schoolID = document.getElementById("inputtwo").value.trim();
    const phonenumber = document.getElementById("inputthree").value.trim();
    const message = document.getElementById("inputfour").value.trim();
    if (!name || !schoolID || !phonenumber || !message) {
      alert("Please fill in all fields.");
      return;
    }
    if (isNaN(phonenumber)) {
      alert("Phone number must be numeric!");
      return;
    }
    if (isNaN(schoolID)) {
        alert("school ID must be numeric!");
        return;
    }
    if (!/^[a-zA-Z]+$/.test(name) ) {
      alert(" name must contain only letters!");
      return;
    }
    if (message.split(" ").length >100) {
      alert("Message must be a maximum of 100 words!");
      return;
    }
    alert("succeed!");
  }
