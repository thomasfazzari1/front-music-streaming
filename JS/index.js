
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
            document.getElementById("suggestions").style.display="none";
            if(number==1){
                document.getElementById("nav-albums").style.display="flex";
                document.getElementById("nav-albums-tab").classList.add("active");
                document.getElementById("suggestions").style.display="block";
                document.getElementById("nav-artistes-tab").classList.remove("active");
                document.getElementById("nav-songs-tab").classList.remove("active");

            }
            if(number==2){
                document.getElementById("nav-artistes").style.display="flex";
                document.getElementById("nav-albums-tab").classList.remove("active");
                document.getElementById("nav-artistes-tab").classList.add("active");
                document.getElementById("nav-songs-tab").classList.remove("active");
            }
            if(number==3){
                document.getElementById("nav-songs").style.display="flex";
                document.getElementById("nav-albums-tab").classList.remove("active");
                document.getElementById("nav-artistes-tab").classList.remove("active");
                document.getElementById("nav-songs-tab").classList.add("active");
            }
        }   



        function play(path){
              
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
            wavesurfer.load(path);
            
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
                if(wavesurfer.isPlaying()){
                    wavesurfer.play();
                }

            });

        }



        function playPhantom(){
            try {
                if(wavesurfer.isPlaying()){
                    wavesurfer.pause();
                }
              } catch (error) {
                console.error(error);
              }

            MusicPlayer.innerHTML= '<div class="player"><div class="thumb"><img src="../IMAGES/ALBUMS/cross.jpg" alt="" /></div><div class="info"><div class="detail"> <div class="title">Justice - Phantom Pt.II<div class="time"><span id="current">0:00</span> /<span id="duration"></span></div></div><div class="control"><a id="playPause"><i class="fa fa-play" ></i></a></div> </div><div id="wave"></div></div> </div>';
            play("../MP3/ARTIST/JUSTICE/CROSS/phantompt2.mp3");
        }

        function playNightcall(){
            try {
                if(wavesurfer.isPlaying()){
                    wavesurfer.pause();
                }
              } catch (error) {
                console.error(error);
              }
            MusicPlayer.innerHTML= '<div class="player"> <div class="thumb"> <img src="../IMAGES/ALBUMS/outrun.jpg" alt="" /> </div> <div class="info"> <div class="detail"> <div class="title"> Kavinsky - Nightcall <div class="time"> <span id="current">0:00</span> / <span id="duration"></span> </div> </div> <div class="control"> <a id="playPause"><i class="fa fa-play" ></i></a> </div> </div> <div id="wave"></div> </div> </div>';    
            play("../MP3/ARTIST/KAVINSKY/OUTRUN/nightcall.mp3"); 
        }

        function loadProfile() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
               document.getElementById("main").innerHTML = this.responseText;
              }
            };
            xhttp.open("GET", "../HTML/profil.html", true);
            xhttp.send();
          }

        function loadIndex() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
               document.getElementById("main").innerHTML = this.responseText;
              }
            };
            xhttp.open("GET", "../HTML/indexContent.html", true);
            xhttp.send();
          }  

        function loadArtist() {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
               document.getElementById("main").innerHTML = this.responseText;
              }
            };
            xhttp.open("GET", "../HTML/artist.html", true);
            xhttp.send();
          }   

        window.addEventListener("load", (event) => {
            loadIndex();
            playNightcall();
        });


            
