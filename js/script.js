

// Call the function when the page is loaded, rest the variables and add the event listeners to the buttons
window.onload = () => {
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    time = document.getElementById("time");
    btnStart = document.getElementById("btn-start");
    btnStop = document.getElementById("btn-stop");
    btnReset = document.getElementById("btn-reset");
    btnStart.addEventListener("click", start);
    btnStop.addEventListener("click", stop);
    btnReset.addEventListener("click", reset);
};

// Function to write the time in the HTML
function write() {
    let ht, mt, st, mlst;
    mls++;
    // If the time is greater than 99, add 1 to the seconds and reset the time(mls)
    if (mls > 99) {
        s++;
        mls = 0;
    }
    // If the seconds are greater than 59, add 1 to the minutes and reset the seconds
    if (s > 59) {
        m++;
        s = 0;
    }
    // If the minutes are greater than 59, add 1 to the hours and reset the minutes
    if (m > 59) {
        h++;
        m = 0;
    }
    // If the hours are greater than 24, reset the hours(new day)
    if (h > 24) h = 0;

    // Add a 0 to the left of the numbers if they are less than 10
    mlst = ('0' + mls).slice(-2);
    // mlst = mls < 10 ? `0${mls}` : mls;
    st = ('0' + s).slice(-2);
    // st = s < 10 ? `0${s}` : s;
    mt = ('0' + m).slice(-2);
    // mt = m < 10 ? `0${m}` : m;
    ht = ('0' + h).slice(-2);

    // Write the time in the HTML
    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
}

function start() {
    write();
    // Call the function every 10ms
    timeStarted = setInterval(write, 10);
    // Remove the event listener to avoid multiple clicks
    btnStart.removeEventListener("click", start);
}

function stop() {
    clearInterval(timeStarted);
    btnStart.addEventListener("click", start);
}

function reset() {
    clearInterval(timeStarted);
    time.innerHTML = "00:00:00.00"
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    btnStart.addEventListener("click", start);
}