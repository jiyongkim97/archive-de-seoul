function IMGsrc(source){
  document.getElementById("img-preview").src = source;
}

  const imgPreview = document.getElementById("img-preview");
  const nextMove = document.querySelector(".img").src;

  let loopInterval = setInterval(() => {
    IMGsrc(nextMove);
  }, 10000);

  

