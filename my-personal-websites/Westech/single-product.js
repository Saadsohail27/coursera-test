var MainImg = document.getElementById('MainImg');
var MainImgBig = document.getElementById('MainImgBig');
    var smallImg = document.getElementsByClassName('small-img'); 



    smallImg[0].onclick = function (){
        MainImg.src = smallImg[0].src;
        MainImgBig.src = MainImg.src;
    }
    smallImg[1].onclick = function (){
        MainImg.src = smallImg[1].src;
        MainImgBig.src = MainImg.src;
    }
    smallImg[2].onclick = function (){
        MainImg.src = smallImg[2].src;
        MainImgBig.src = MainImg.src;
    }
    smallImg[3].onclick = function (){
        MainImg.src = smallImg[3].src;
        MainImgBig.src = MainImg.src;
    }
