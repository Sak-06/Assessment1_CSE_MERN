const name=document.getElementsByName('name');
const email=document.getElementsByName('emailid');
const phone=document.getElementsByName('phnum');
const linkid=document.getElementsByName('linkid');
const gitid=document.getElementsByName('gitid');
const exp=document.getElementsByName('exp');
const ed=document.getElementsByName('ed');
const photo=document.getElementsByName('photo');


function generateresume() {
    // Get input values
    document.getElementById("output-name").textContent = document.getElementById("name").value;
    document.getElementById("output-email").textContent = document.getElementById("email").value;
    document.getElementById("output-phone").textContent = document.getElementById("phone").value;
    document.getElementById("output-linkedin").textContent = document.getElementById("linkid").value;
    document.getElementById("output-githuub").value;
      document.getElementById("output-experience").textContent = document.getElementById("exp").value;
      document.getElementById("output-education").textContent = document.getElementById("ed").value;

      // Display photo if uploaded
      const photoInput = document.getElementById("photo");
      const outputPhoto = document.getElementById("output-photo");
      if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
          outputPhoto.src = e.target.result;
          outputPhoto.style.display = 'block';
        };
        reader.readAsDataURL(photoInput.files[0]);
      } else {
        outputPhoto.style.display = 'none';
      }

      // Show the resume output
      document.getElementById("resume-output").style.display = "block";
    }

function generateresume(){
    if(button.clicked){
    entries.style.visibility='hidden';
    }
}