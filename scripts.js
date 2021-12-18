

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // при необходимости добавьте другие значения по умолчанию
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
  console.log(updatedCookie)
}
 
function deleteCookie(name) {
  setCookie(name, "", {
    'max-age': -1
  })
}
function handleclick(divid){
    getCookie(divid)
    var x = document.getElementById(divid);
    if (getCookie(divid)){
         x.style.display = "block";
         deleteCookie(divid);

    } 
    else {
       x.style.display = "none";
       setCookie(divid,"visible");
      }
}
function restoreVisibility(){
  let divs = ["div1","div2","div3"];
  divs.forEach((div) => {
    let is_visible = getCookie(div);
    //console.log(is_visible)
    console.log(div)
    if (is_visible){
      var x = document.getElementById(div);
      console.log(x)
      //console.log(x)
      x.style.display = "none"
    }
  })
}

setTimeout(restoreVisibility, 100);