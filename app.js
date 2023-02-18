const myButton = document.querySelector('#generate-btn');
const myDiv = document.querySelector('#marksheet');

//generate press hone ke baad marksheet show ho jaye

myButton.addEventListener('click', function() {
  if (myDiv.style.display === 'none') {
    myDiv.style.display = 'block';
  } else {
    myDiv.style.display = 'block';
  }
});

//data calulate hoke marksheet me show ho jaye
function generatemarksheet() {

var name = (document.getElementById("name").value);
var roll = (document.getElementById("roll").value);
var maths = parseInt(document.getElementById("maths").value);
var science = parseInt(document.getElementById("science").value);
var english = parseInt(document.getElementById("english").value);
var urdu = parseInt(document.getElementById("urdu").value);
var computer = parseInt(document.getElementById("computer").value);

if(maths<0 || maths>100 || science<0 || science>100 || english<0 || english>100 || urdu<0 || urdu>100 || computer<0 || computer>100) { 
  alert("Please enter marks between 0 to 100");
  return;
}
var omaths = maths;
var oscience = science;
var oenglish = english;
var ourdu = urdu;
var ocomputer = computer;

// Calculate total marks and percentage
var totalMarks = maths + science + english + urdu + computer;
var percentage = (totalMarks / 500) * 100;

// Determine grade based on percentage
var grade;
if (percentage >= 80) {
grade = "A+";
} else if (percentage >= 70) {
grade = "A";
} else if (percentage >= 60) {
grade = "B";
} else if (percentage >= 50) {
grade = "C";
} else if (percentage >= 40) {
grade = "D";
} else {
grade = "F";
}
//determine grade based on marks for each subject 
//maths
if (maths >= 80) {
  mathsgrade = "A+";
  } else if (maths >= 70) {
  mathsgrade = "A";
  } else if (maths >= 60) {
  mathsgrade = "B";
  } else if (maths >= 50) {
  mathsgrade = "C";
  } else if (maths >= 40) {
  mathsgrade = "D";
  } else {
  mathsgrade = "F";
  }
//science
  if (science >= 80) {
    sciencegrade = "A+";
    } else if (science >= 70) {
    sciencegrade = "A";
    } else if (science >= 60) {
    sciencegrade = "B";
    } else if (science >= 50) {
    sciencegrade = "C";
    } else if (science >= 40) {
    sciencegrade = "D";
    } else {
    sciencegrade = "F";
    }
//english
    if (english >= 80) {
      englishgrade = "A+";
      } else if (english >= 70) {
      englishgrade = "A";
      } else if (english >= 60) {
      englishgrade = "B";
      } else if (english >= 50) {
      englishgrade = "C";
      } else if (english >= 40) {
      englishgrade = "D";
      } else {
      englishgrade = "F";
      }
//urdu
      if (urdu >= 80) {
        urdugrade = "A+";
        } else if (urdu >= 70) {
        urdugrade = "A";
        } else if (urdu >= 60) {
        urdugrade = "B";
        } else if (urdu >= 50) {
        urdugrade = "C";
        } else if (urdu >= 40) {
        urdugrade = "D";
        } else {
        urdugrade = "F";
        }
//computer
        if (computer >= 80) {
          computergrade = "A+";
          } else if (computer >= 70) {
          computergrade = "A";
          } else if (computer >= 60) {
          computergrade = "B";
          } else if (computer >= 50) {
          computergrade = "C";
          } else if (computer >= 40) {
          computergrade = "D";
          } else {
          computergrade = "F";
          }

  if(name!=="" && roll!=="" && maths!=="" && science!=="" && english!=="" && urdu!=="" && computer!=="") {
    // scroll to the marksheet
  
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}
// Determine remarks based on grade
if (maths < 40 || science < 40 || english < 40 || urdu < 40 || computer < 40) {
  grade="F"
  document.getElementById("grade").style.color = "red";
}
else {
  document.getElementById("grade").style.color = "black";
}
var remarks;
  if (grade == "F") {
    remarks = "Fail";
    document.getElementById("remarks").style.color = "red";
  } else {
    remarks = "Pass";
    document.getElementById("remarks").style.color = "green";
  }

  // Display the marksheet
  document.getElementById('otname').textContent = name;
  document.getElementById('otroll').textContent = roll;
  document.getElementById('otmaths').textContent = omaths;
  document.getElementById('otscience').textContent = oscience;
  document.getElementById('otenglish').textContent = oenglish;
  document.getElementById('oturdu').textContent = ourdu;
  document.getElementById('otcomputer').textContent = ocomputer;
  document.getElementById('total').textContent = totalMarks;
  document.getElementById('percentage').textContent = percentage.toFixed(2);
  document.getElementById('grade').textContent = grade;
  document.getElementById('remarks').textContent = remarks;
  document.getElementById('mathsgrade').textContent = mathsgrade;
  document.getElementById('sciencegrade').textContent = sciencegrade;
  document.getElementById('englishgrade').textContent = englishgrade;
  document.getElementById('urdugrade').textContent = urdugrade;
  document.getElementById('computergrade').textContent = computergrade;

  //sub fail hone ki surat main color change
if (maths<40) {
    document.getElementById('otmaths').style.color = "red";
    document.getElementById('mathsgrade').style.color = "red";
    
  }
  else{
    document.getElementById('otmaths').style.color = "black";
    document.getElementById('mathsgrade').style.color = "black";
  }
if (science<40) {
    document.getElementById('otscience').style.color = "red";
    document.getElementById('sciencegrade').style.color = "red";
  
  }
  else {
    document.getElementById('otscience').style.color = "black";
    document.getElementById('sciencegrade').style.color = "black";
  }
if (english<40) {
    document.getElementById('otenglish').style.color = "red";
    document.getElementById('englishgrade').style.color = "red";
    
  }
  else {
    document.getElementById('otenglish').style.color = "black";
    document.getElementById('englishgrade').style.color = "black";
  }
if (urdu<40) {
    document.getElementById('oturdu').style.color = "red";
    document.getElementById('urdugrade').style.color = "red";
  } 
  else {
    document.getElementById('oturdu').style.color = "black";
    document.getElementById('urdugrade').style.color = "black";
  }
if(computer<40) {
    document.getElementById('otcomputer').style.color = "red";
    document.getElementById('computergrade').style.color = "red";
  
}
else {
  document.getElementById('otcomputer').style.color = "black";
    document.getElementById('computergrade').style.color = "black";
}
}