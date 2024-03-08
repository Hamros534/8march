var conv = document.querySelector(".conv");
var odi = document.querySelector(".odin");

var flows = document.querySelector(".flows");
var cnt=0;

function conv_opn() {
  if(cnt>0) {
    conv.style.transition = '1s';
    conv.style.transform = "translateY(500px) rotateZ(14400deg) scale(20)";
    odi.style.transition = '1s';
    odi.style.transform = "translateY(500px) rotateZ(14400deg) scale(20)";

    conv.style.opacity = '0';
    odi.style.opacity = '0';
    document.querySelector('.flows').appendChild(Object.assign(document.createElement('img'), { src: 'img/f1.png', className: 'flow', draggable: false  }));
    document.querySelector('.flows').appendChild(Object.assign(document.createElement('img'), { src: 'img/f4.png', className: 'flow', draggable: false }));
    document.querySelector('.flows').appendChild(Object.assign(document.createElement('img'), { src: 'img/f3.png', className: 'flow', draggable: false  }));
    document.querySelector('.flows').style.opacity = '1';    
    setTimeout(function() {
      conv.remove();
      odi.remove();
    }, 1000);
    return;
  }
  conv.style.transition = '1.5s';
  conv.style.transform = "translateY(500px)";

  setTimeout(function () {
    conv.style.transition = '8s';
    odi.style.transition = '8s';
    odi.style.opacity = '1';
    conv.style.transform = "translateY(500px) rotateZ(1440deg) scale(5)";

  }, 1500); 
  cnt++;
}

conv.addEventListener("click", conv_opn);
