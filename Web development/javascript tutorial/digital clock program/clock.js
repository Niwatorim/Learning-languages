

function update(){
    const date = new Date();
    const noon = date.getHours() > 12 ? 'PM' : 'AM';
    const hrs = date.getHours().toString().padStart(2,0);
    hr = hrs % 12 || 12; //to make it from 24 hr to 12 hrs
    const mins = date.getMinutes().toString().padStart(2,0);
    const scnds = date.getSeconds().toString().padStart(2,0);
    const time = `${hr}:${mins}:${scnds} ${noon}`;
    let clock = document.getElementById("Clock");
    clock.textContent = time;
}

update();
setInterval(update, 1000);