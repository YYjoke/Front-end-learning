window.onload = function(){
    var PartArea = document.getElementById('part2');
    var Scroll1 = document.getElementById('scroll1');
    var Scroll2 = document.getElementById('scroll2');
    
    Scroll2.innerHTML = Scroll1.innerHTML;
    
    function roll() {
        if(Scroll2.offsetHeight - PartArea.scrollTop <= 0) {
            PartArea.scrollTop -= Scroll1.offsetHeight;
        } else {
            PartArea.scrollTop++;
        }
    }
    
    var StopRoll = setInterval(roll, 60);
    
    PartArea.onmouseover = function () {
        clearInterval(StopRoll);
    }
    PartArea.onmouseout = function () {
        StopRoll = setInterval(roll, 60);
    }
    
}


