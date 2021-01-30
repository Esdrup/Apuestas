window.addEventListener('load',function(){
  new Glider(document.querySelector('.list__element'),{
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.ind',
      arrows: {
          prev: '.ant',
          next: '.sig'
      }
  })
});
/*--------------------------------------*/
var cantidad = [];
var hora = [];
var cont_a=1;

/*--------------------------------------*/
function g_random(min,max){
  min= Math.ceil(min);
  max=Math.floor(max);
  
  return Math.floor(Math.random()*(1+max-min)+min);
}
/*-----------------------------------------*/

function aleatorio(){
    Plotly.plot("grafico",data,layout);

  for(var i=0;i<cont_a;i++){
    cantidad[cont_a-1]=g_random(5,50)
    hora[cont_a-1]=i+1;
  }
  console.log(cantidad);
  console.log(hora);
  cont_a++;
}


var data =[{
    x:hora,
    y:cantidad,
    type: "linear"
}];

var layout = {
    title:'Variacion Lineal',
    font: {
      family: 'Lato',
      size: 15,
      color: 'azure'
    },
    paper_bgcolor:'transparent',
    plot_bgcolor: ' rgba(255, 255, 255, 0.3)',
    margin: {
        l:50,
        r:25,
        t:50,
        b:60,
      pad: 10
    },
    xaxis: {
      title: 'TIEMPO',
      titlefont: {
        color: 'azure',
        size: 12
      },
      rangemode: 'Georgia'
    },
    yaxis: {
      title: 'PRECIO',
      titlefont: {
        color: 'azure',
        size: 12
      },
      rangemode: 'Georgia'
    },
    showlegend:false,
    hidessources:false
  };
/*--------------------------------------*/
window.addEventListener('load',function(){
    Plotly.plot("grafico",data,layout)
});
window.addEventListener('load',setInterval(aleatorio,10000));