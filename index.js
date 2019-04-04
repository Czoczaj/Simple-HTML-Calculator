function onLoad() {
  var i = 0;
  var pamiec = [];
  var operacja = '';
  var saved = '0';
  var wynik = document.getElementById('display');
  var operacje = new Map();
  operacje.set('+',(a,b) => (Number(a) + Number(b)));
  operacje.set('-',(a,b) => (Number(a) - Number(b)));
  operacje.set('/',(a,b) => (Number(a) / Number(b)));
  operacje.set('*',(a,b) => (Number(a) * Number(b)));
  var stanWyniku = '0';
  skladniki = [];
  var render = () => {
    if(operacja !== ''){
      wynik.innerHTML = operacja;
    }else{
      wynik.innerHTML = stanWyniku;}};
  const kliknieto = (przycisk) => {
    operacja = '';
    if(!isNaN(Number(stanWyniku + przycisk))){
     stanWyniku += przycisk;
    }else if(['+','-','*','/'].includes(przycisk)){
      operacja = przycisk;
      pamiec.push(stanWyniku);
      pamiec.push(operacja);
      saved = stanWyniku;
      console.log(saved);
      stanWyniku = '0';
    }else if(['c','C'].includes(przycisk)){
     stanWyniku = '0';
    }else if(przycisk === 'Backspace'){
      console.log(saved);
     stanWyniku = stanWyniku.slice(0,-1);
     if(saved !== ''){
       console.log(saved);
       stanWyniku = saved;
       pamiec --;
     }
    }else if(przycisk === '='){
      pamiec.push(stanWyniku);
      suma = pamiec[0];
      console.log(pamiec);
      for(i = 0;i<= pamiec.length;i++){
        if(i % 2 === 0 && i !== 0){
          suma = operacje.get(pamiec[i - 1])(suma,pamiec[i]);
          console.log(suma);
        }
      }
      stanWyniku = suma;
      pamiec = [];
    }
    if(stanWyniku[0] === '0' && !['.',','].includes(stanWyniku[1]) && stanWyniku.length !== 1){
     stanWyniku = stanWyniku.slice(1);
    
    }
    if(stanWyniku.length <= 0 ){
     stanWyniku = '0';
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