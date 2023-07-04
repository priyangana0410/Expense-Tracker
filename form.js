function sendMail() {
    var params = {
      Name: document.getElementById("Name").value,
      Email: document.getElementById("Email").value,
      message: document.getElementById("message").value,
    };
  
    
  
      emailjs.send("service_b2w71h4","template_4cxh77q", params)
      .then(res=>{
          document.getElementById("Name").value,
          document.getElementById("Email").value,
          document.getElementById("message").value,
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }