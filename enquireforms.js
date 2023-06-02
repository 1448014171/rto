function go() {
    const name = document.getElementById("inputone").value.trim();//Extract the value of the name text box
    const schoolID = document.getElementById("inputtwo").value.trim();//Extract the value of the schoolID text box
    const phonenumber = document.getElementById("inputthree").value.trim();//Extract the value of the phone number text box
    const message = document.getElementById("inputfour").value.trim();//Extract the value of message text box
    if (!name || !schoolID || !phonenumber || !message) {//Detects the input value of the text box
      alert("Please fill in all fields.");
      return;
    }
    if (isNaN(phonenumber)) {
      alert("Phone number must be numeric!");//The test phone number must be a number
      return;
    }
    if (isNaN(schoolID)) {
        alert("school ID must be numeric!");//The test school ID must be a number
        return;
    }
    if (!/^[a-zA-Z]+$/.test(name) ) {
      alert(" name must contain only letters!");//The test name must be a letters
      return;
    }
    if (message.split(" ").length >100) {
      alert("Message must be a maximum of 100 words!");//Check that the message length does not exceed 100 characters
      return;
    }
    alert("succeed!");
  }
    

    

    



