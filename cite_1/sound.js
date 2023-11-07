const blip3 = new Audio('./music/Blip3.mp3');
 blip3.volume = 0.5;

 const gl = new Audio('./music/gl.mp3');
 gl.volume = 0.6;

 const screamer = new Audio('./music/Xscream2.mp3');
 screamer.volume = 0.2;

 const yeah = new Audio('./music/Crowd Small Chil.mp3');
 yeah.volume = 0.3;

let l1 = document.getElementById('about-game');
let l2 = document.getElementById('plot');
let l3 = document.getElementById('gameplay');
let l4 = document.getElementById('characters');
let l5 = document.getElementById('secrets');
let l6 = document.getElementById('link');
let l7 = document.getElementById('more');
let l8 = document.getElementById('screamer');
let l9 = document.getElementById('yeah');


    l1.addEventListener('mouseenter', ()=>
    {
      blip3.play() 
    });
    l1.addEventListener('mouseleave', ()=>
    {
      blip3.pause(); 
    });

    l2.addEventListener('mouseenter', ()=>
    {
      blip3.play() 
    });
    l2.addEventListener('mouseleave', ()=>
    {
      blip3.pause(); 
    });

    l3.addEventListener('mouseenter', ()=>
    {
      blip3.play() 
    });
    l3.addEventListener('mouseleave', ()=>
    {
      blip3.pause(); 
    });

    l4.addEventListener('mouseenter', ()=>
    {
      blip3.play() 
    });
    l4.addEventListener('mouseleave', ()=>
    {
      blip3.pause(); 
    });

    l5.addEventListener('mouseenter', ()=>
    {
      blip3.play() 
    });
    l5.addEventListener('mouseleave', ()=>
    {
      blip3.pause(); 
    });

    l6.addEventListener('mouseenter', ()=>
    {
      gl.play() 
    });
    l6.addEventListener('mouseleave', ()=>
    {
      gl.pause(); 
    });

    
    l7.addEventListener('mouseenter', ()=>
    {
      blip3.play() 
    });
    l7.addEventListener('mouseleave', ()=>
    {
      blip3.pause(); 
    });



  
    l8.addEventListener('mouseenter', ()=>
    {
      screamer.play() 
    });
  

    l9.addEventListener('click', ()=>
    {
      yeah.play() 
    });




    
    


