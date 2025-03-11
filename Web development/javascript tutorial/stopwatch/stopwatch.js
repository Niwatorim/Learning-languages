const display = document.getElementById('display');
let timer;
let starttime = 0;
let elapsed = 0;
let run = false;

function start(){
    if (!run){
        starttime = Date.now()-elapsed; //Date.now() returns time in milliseconds since January 1, 1970
        timer = setInterval(update,10);
        run= true;
    }
}

function stop(){
    if (run){
        clearInterval(timer);
        elapsed = Date.now()-starttime;
        run=false;
    }
}

function reset(){
    clearInterval(timer);
    starttime=0;
    elapsed=0;
    run=false;
    display.textContent = '00:00:00:00'

}

function update(){
    const timern = Date.now();
    elapsed = timern - starttime;
    let hours = Math.floor(elapsed / (1000 * 60 * 60));
    let minutes = Math.floor(elapsed / (1000 * 60) % 60);
    let seconds = Math.floor(elapsed/ 1000 % 60);
    let mili = Math.floor(elapsed % 1000 / 10);

    hours = String(hours).padStart(2,'0');
    minutes = String(minutes).padStart(2,'0');
    seconds = String(seconds).padStart(2,'0');
    mili = String(mili).padStart(2,'0');


    display.textContent = `${hours}:${minutes}:${seconds}:${mili}`
}
