var images = [
    "Ananya Kurup.png","Priya Kurup.png","Sunil Kurup.png","Shlok Kurup.png"
    ];
    
    var i=0;
    function changethepic(){
    if (i==4);
      {
        i=0;
      };
    document.getElementById("book").src=images[i];
    i++;
    }
    