function onLoad() {
  var wynik = document.getElementById('display');
  var stanWyniku = '0';
  skladniki = [];
  var render = () => wynik.innerHTML = stanWyniku;
  const kliknieto = (przycisk) => {
    if(!isNaN(Number(stanWyniku + przycisk))){
     console.log('w ifie');
     stanWyniku += przycisk;
     
    }else if(['c','C'].includes(przycisk)){
     stanWyniku = '0';
    }
   
    if(stanWyniku[0] === '0' && !['.',','].includes(stanWyniku[1]) && stanWyniku.length !== 1){
     stanWyniku = stanWyniku.slice(1);
     
    }
    render();
  }
  const klikMysza = (zdarzenie) => kliknieto(zdarzenie.target.innerHTML);
 
  document.querySelectorAll('.key')
   .forEach(key => key.addEventListener('click', klikMysza));
  
  const klikKlawiatura = (zdarzenie) => kliknieto(zdarzenie.key);
  window.addEventListener('keydown', klikKlawiatura);
  
}

window.addEventListener("load", onLoad);