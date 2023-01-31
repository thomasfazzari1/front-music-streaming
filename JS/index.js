
          const links = document.querySelectorAll('#nav-tab-menu2> .nav-link');
            links.forEach((link) => {
                link.addEventListener('click', (e) => {
                    links.forEach((link) => {
                        link.classList.remove('active');
                    });
                    e.preventDefault();
                    link.classList.add('active');
                });
            });

        function displayNav(number){
            document.getElementById("nav-albums").style.display="none";
            document.getElementById("nav-artistes").style.display="none";
            document.getElementById("nav-songs").style.display="none";
            if(number==1){
                document.getElementById("nav-albums").style.display="flex";
            }
            if(number==2){
                document.getElementById("nav-artistes").style.display="flex";
            }
            if(number==3){
                document.getElementById("nav-songs").style.display="flex";
            }
        }   

        duration = document.querySelector("#duration");
        current = document.querySelector("#current");
        playPause = document.querySelector("#playPause");
        
        var timeCalculator = function (value) {
            second = Math.floor(value % 60);
            minute = Math.floor((value / 60) % 60);
            
            if (second < 10) {
                second = "0" + second;
            }
        
            return minute + ":" + second;
        };
        
        //start wavesurfer object 
        wavesurfer = WaveSurfer.create({
            container: "#wave",
            waveColor: "#cdedff",
            progressColor: "cornflowerblue",
            height: 48,
            scrollParent: false
        });
        
        //load audio file
        wavesurfer.load("../MP3/ARTIST/KAVINSKY/OUTRUN/nightcall.mp3");
        
        //play and pause a player
        playPause.addEventListener("click", function (e) {
            wavesurfer.playPause();
        });
        
        //load audio duration on load
        wavesurfer.on("ready", function (e) {
            duration.textContent = timeCalculator(wavesurfer.getDuration());
        });
        
        //get updated current time on play
        wavesurfer.on("audioprocess", function (e) {
            current.textContent = timeCalculator(wavesurfer.getCurrentTime());
        });
        
        //change play button to pause on plying
        wavesurfer.on("play", function (e) {
            playPause.innerHTML = '<i class="fa fa-pause" ></i>';
        });
        
        //change pause button to play on pause
        wavesurfer.on("pause", function (e) {
            playPause.innerHTML = '<i class="fa fa-play" ></i>';
        });
        
        //update current time on seek
        wavesurfer.on("seek", function (e) {
            current.textContent = timeCalculator(wavesurfer.getCurrentTime());
        });

        
        


            
