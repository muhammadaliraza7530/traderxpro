 <style>



 #snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: rgba(31, 28, 28, 0.5);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  text-align: center;
  border-radius: 10px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 50%;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

#snackbar_error {
  visibility: hidden;
  width: 40%;
  margin-left: 5px;
  background-color: whitesmoke;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: black;
  text-align: center;
  border-radius: 10px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 30%;
  bottom: 50%;
  font-size: 17px;
}

#snackbar_error.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}
@-webkit-keyframes fadein {
  from {
    bottom: 50%;
    opacity: 0;
  }
  to {
    bottom: 50%;
    opacity: 1;
  }
}

@keyframes fadeout {
  from {
    bottom: 50%;
    opacity: 1;
  }
  to {
    bottom: 50%;
    opacity: 0;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  #snackbar_error {
    width: 60%;
    left: 20%;
    bottom: 70px;
    font-size: 12px;
  }
  #snackbar {
    width: 50%;
    left: 25%;
    bottom: 70px;
    font-size: 12px;
  }
}
@media (max-width: 575.99px) {
  #snackbar_error {
    width: 80%;
    margin-left: 5px;
    left: 10%;
    font-size: 12px;
  }
  #snackbar {
    width: 80%;
    margin-left: 5px;
    left: 10%;
    font-size: 12px;
  }
}

        /* Styles for the preloader */
        #preloade {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
       
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black
        }
        /* Styles for the preloader */
        #preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
           
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            color: black
        }
</style>


 <script>
    $(document).ready(function() 
{
    $('#loader').hide();

    $('a').click(function() 
    {
        $('#loader').show();
    }) 
})
</script>
<script>
    $(document).ready(function() 
{
    $('#loader').hide();

    $('form').submit(function() 
    {
        $('#loader').show();
    }) 
})
</script>



    <script>
        document.onreadystatechange = function () {
            var state = document.readyState;
            if (state == "interactive") {
                // Show the preloader when the page starts loading
                showPreloader();
            } else if (state == "complete") {
                // Hide the preloader when the page finishes loading
                hidePreloader();
            }
        };

        function showPreloader() {
            document.getElementById("preloader").style.display = "flex";
            document.getElementById("blurred-background").style.display = "block";
        }

        function hidePreloader() {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("blurred-background").style.display = "none";
        }

    </script>
    <title>
         Home
    </title>
    <script>
        document.onreadystatechange = function () {
            var state = document.readyState;
            if (state == "interactive") {
                // Show the preloader when the page starts loading
                showPreloader();
            } else if (state == "complete") {
                // Hide the preloader when the page finishes loading
                hidePreloader();
            }
        };

        function showPreloader() {
            document.getElementById("preloader").style.display = "flex";
            document.getElementById("blurred-background").style.display = "block";
        }

        function hidePreloader() {
            document.getElementById("preloader").style.display = "none";
            document.getElementById("blurred-background").style.display = "none";
        }

    </script>
</head>

<body class="main-layout m-0 p-0">
    <!-- loader  -->
    <div class="loader" id="preloader">
        <i  class="fa-regular fa-loader fa-flip fa-10x"></i>
        <div class="loader"><div role="dialog" tabindex="0" class="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
        style="z-index: 2002; display: ;" bis_skin_checked="1">
        <div class="van-loading van-loading--spinner van-toast__loading" aria-live="polite" aria-busy="true"
            bis_skin_checked="1">
            <span class="van-loading__spinner van-loading__spinner--spinner"><i class="van-loading__line van-loading__line--1"></i><i class="van-loading__line van-loading__line--2"></i><i class="van-loading__line van-loading__line--3"></i><i class="van-loading__line van-loading__line--4"></i><i class="van-loading__line van-loading__line--5"></i><i class="van-loading__line van-loading__line--6"></i><i class="van-loading__line van-loading__line--7"></i><i class="van-loading__line van-loading__line--8"></i><i class="van-loading__line van-loading__line--9"></i><i class="van-loading__line van-loading__line--10"></i><i class="van-loading__line van-loading__line--11"></i><i class="van-loading__line van-loading__line--12"></i></span>
            <!---->
        </div>
        <!---->
        <!---->
    </div>
    <div class="van-floating-bubble" bis_skin_checked="1" style="transform: translate3d(1308px, 316.5px, 0px);"><img class="w-50px rounded-full h-auto" src="{{asset ('core/03042324661/login/upload/img/675f1549ec3f.webp">
    </div>
        </div>
    </div>
    <!-- end loader -->
    <!-- loader  -->
    <div class="loaderd" id="preloade">
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
     <center>   <div class="loaderd">    <div role="dialog" tabindex="0" class="van-popup van-popup--center van-toast van-toast--middle van-toast--loading"
        style="z-index: 2002; display: ;" bis_skin_checked="1">
        <div class="van-loading van-loading--spinner van-toast__loading" aria-live="polite" aria-busy="true"
            bis_skin_checked="1">
            <span class="van-loading__spinner van-loading__spinner--spinner"><i class="van-loading__line van-loading__line--1"></i><i class="van-loading__line van-loading__line--2"></i><i class="van-loading__line van-loading__line--3"></i><i class="van-loading__line van-loading__line--4"></i><i class="van-loading__line van-loading__line--5"></i><i class="van-loading__line van-loading__line--6"></i><i class="van-loading__line van-loading__line--7"></i><i class="van-loading__line van-loading__line--8"></i><i class="van-loading__line van-loading__line--9"></i><i class="van-loading__line van-loading__line--10"></i><i class="van-loading__line van-loading__line--11"></i><i class="van-loading__line van-loading__line--12"></i></span>
            <!---->
        </div>
        <!---->
        <!---->
    </div>
    <div class="van-floating-bubble" bis_skin_checked="1" style="transform: translate3d(1308px, 316.5px, 0px);"><img class="w-50px rounded-full h-auto" src="{{asset ('core/03042324661/login/upload/img/675f1549ec3f.webp">
    </div></center>
        </div>
    </div>
    <!-- end loader -->
  <script src="https://pakshoppings.com/blue/public/assets/toast.js"></script>
<script>
    
    
    
    </script>
<script>

    function login(){
        document.querySelector('.loader').style.display = 'block';
        document.querySelector('form').submit();
    }

    window.onload = function() {
        document.querySelector('.loaderd').style.display = 'none';
    };

    function eye() {
        var pass = document.querySelector('input[name="password"]');
        if (pass.type == 'password') {
            pass.type = 'text'
        } else {
            pass.type = 'password'
        }
    }
</script>