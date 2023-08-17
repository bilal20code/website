window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("mynavbar").style.padding = "8px 15px";
    document.getElementById("mynavbar").style.backgroundColor = "#333333";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("mynavbar").style.padding = "20px 8px";
    document.getElementById("logo").style.fontSize = "15px";
  }
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
  expandImg.parentElement.style.textAlign = "center";
}


// Pehle wale code se JavaScript wala part same rakhe

const socialIcons = document.querySelectorAll(".social-icons a");

socialIcons.forEach(icon => {
  icon.addEventListener("click", e => {
    e.preventDefault(); // Prevent default link behavior
    const contactURL = e.target.parentElement.getAttribute("href");
    window.open(contactURL, "_blank"); // Open link in new tab
  });
});




    // Change counter on hover
    const statsItem = document.querySelectorAll('.stats-item');
    statsItem.forEach(item => {
        const counter = item.querySelector('.counter');
        const originalNumber = parseInt(counter.textContent.replace(/\D+/g, ''));

        item.addEventListener('mouseover', function() {
            const interval = 100;
            const targetNumber = originalNumber + 1000; // Change this to adjust increment

            let currentNumber = originalNumber;
            const updateCounter = () => {
                if (currentNumber < targetNumber) {
                    currentNumber += 10; // Change this to adjust increment speed
                    counter.textContent = currentNumber.toLocaleString();
                    setTimeout(updateCounter, interval);
                }
            };

            updateCounter();
        });

        item.addEventListener('mouseout', function() {
            counter.textContent = originalNumber.toLocaleString();
        });
    });

