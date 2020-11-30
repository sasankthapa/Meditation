const allContainer=document.querySelector('.all_container');
const battery=document.querySelector('.inner_battery');
let hold=false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function addAura(){
    const AuraDiv=document.createElement("DIV");
    AuraDiv.classList.add("aura");
    setTimeout(()=>{AuraDiv.remove() },3000)
    allContainer.appendChild(AuraDiv)
}

function increaseBattery(){
    //let curr=window.getComputedStyle(battery).getPropertyValue('width');
    //console.log(curr)
    //curr=parseInt(curr)/2
    //console.log(curr)
    console.log(battery.style.width);
    let curr=parseInt(battery.style.width);
    if(curr==100) return
    curr+=5;
    battery.style.width=`${curr}%`;
}

let delay=3000;
function addAuraNonStop(){
    addAura();
    increaseBattery()
    setTimeout(()=>{
        if(hold){
            addAuraNonStop()
            if(delay>=1000)
                delay-=200;
        }
    },delay);
}

document.body.addEventListener('mousedown',(e)=>{
    delay=2000;
    hold=true; 
    addAuraNonStop();
})

document.body.addEventListener('mouseup',(e)=>{
    hold=false;
})
