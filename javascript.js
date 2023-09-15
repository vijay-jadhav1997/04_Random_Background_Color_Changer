setInterval(()=>{
      const time = new Date().toLocaleTimeString();

      const clock = document.querySelector('.clock');
      clock.textContent = `${time}`;
    }, 1000);


    

    let interval;
    const start = document.querySelector('#start');
    start.addEventListener('click', (event)=> {
      const body = document.querySelector('#body');
      if (interval == null) {
        interval = setInterval(() => {
        let redRandom = Math.floor(Math.random()*255);
        // console.log(redRandom);
        let greenRandom = Math.floor(Math.random()*255);
        // console.log(greenRandom);
        let blueRandom = Math.floor(Math.random()*255);
        // console.log(blueRandom);
        // let opacityRandom = Math.random().toFixed(1);
        // console.log(opacityRandom);
        body.style = `background-color: rgba(${redRandom}, ${greenRandom}, ${blueRandom});`; /*, ${opacityRandom} */
      }, 1000);
      }
    });

    const stop = document.querySelector('#stop');
    stop.addEventListener('click', (event) => {
      clearInterval(interval);
      return interval = null;
    });

    const reset = document.querySelector('#reset');
    reset.addEventListener('click', (event) => {
      clearInterval(interval);
      document.body.style.backgroundColor = 'white';
      return interval = null;
    })