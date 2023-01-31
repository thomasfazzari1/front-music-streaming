
            var player = document.getElementById("AudioPlayer");
            function play(isPlaying){
              if(isPlaying){
                player.play();
                document.getElementById("playBtn").style.display = "none";
                document.getElementById("pauseBtn").style.display = "block";
              }else{
                player.pause();
                document.getElementById("pauseBtn").style.display = "none";
                document.getElementById("playBtn").style.display = "block";
              }
              player.addEventListener("timeupdate", function() {
              var currentTime = player.currentTime;
              var duration = player.duration;
              $('.hp_range').stop(true,true).animate({'width':(currentTime +.25)/duration*100+'%'},250,'linear');
              });
            }

            $(".hp_slide").on("click", function(e) {
              var progbar = $('.hp_slide');
              var pos = e.pageX - progbar.offset().left; //Position cursor
              var percent = pos / progbar.width(); //Get width element
              player.currentTime = percent * player.duration;
              progbar.value = percent / 100;
            });




            document.addEventListener("DOMContentLoaded", () => {
            const range = document.querySelector(".volume input[type=range]");
            const barHoverBox = document.querySelector(".volume .bar-hoverbox");
            const fill = document.querySelector(".volume .bar .bar-fill");
            const setValue = (value) => {
              fill.style.width = value + "%";
              range.setAttribute("value", value)
              range.dispatchEvent(new Event("change"))
            }
            setValue(range.value);
            const calculateFill = (e) => {
              let offsetX = e.offsetX
              if (e.type === "touchmove") {
                offsetX = e.touches[0].pageX - e.touches[0].target.offsetLeft
              }
              const width = e.target.offsetWidth - 30;
            
              setValue(
                Math.max(
                  Math.min(
                    (offsetX - 15) / width * 100.0,
                    100.0
                    ),0));
            }
            let barStillDown = false;
            
            barHoverBox.addEventListener("touchstart", (e) => {barStillDown = true;calculateFill(e);}, true);
            barHoverBox.addEventListener("touchmove", (e) => {
              if (barStillDown) {
                calculateFill(e);
              }
            }, true);
            barHoverBox.addEventListener("mousedown", (e) => {
              barStillDown = true;
              calculateFill(e);
            }, true);
            barHoverBox.addEventListener("mousemove", (e) => {
              if (barStillDown) {
                calculateFill(e);
              }
            });
            barHoverBox.addEventListener("wheel", (e) => {
              const newValue = +range.value + e.deltaY * 0.5;
              setValue(Math.max(
                Math.min(newValue,100.0),0))
            });
            document.addEventListener("mouseup", (e) => {
              barStillDown = false;
            }, true);
            document.addEventListener("touchend", (e) => {
              barStillDown = false;
            }, true);
          })


          let volume = document.getElementById('vol-range');

          volume.addEventListener("change", function(e) {
            player.volume = e.currentTarget.value / 100;
          })



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
        
        
        function playPhantom(){
            document.getElementById("AudioPlayer").setAttribute("src","../MP3/ARTIST/JUSTICE/CROSS/phantompt2.mp3");
            document.getElementById("NowPlaying").setAttribute("src","../IMAGES/ALBUMS/cross.jpg");
            $("#ASongName").text("Phantom Pt.II");
            $("#AArtistName").text("Justice");
            player.play();

            
        }



            
