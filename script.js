const baby = "url('https://www.pngarts.com/files/8/Baby-Yoda-Transparent-Images.png')";
const adult = "url('https://static.wikia.nocookie.net/rustarwars/images/c/c3/Yoda_TPM_RotS.png')";
let status = 1;

function yodaClick() {
  if (status === 1) {
    document.querySelector(".cylon_eye").style.backgroundImage = adult;
    status = 2;
  }
  else if (status === 2) {
    document.querySelector(".cylon_eye").style.backgroundImage = baby;
    status = 1;
  }
}
