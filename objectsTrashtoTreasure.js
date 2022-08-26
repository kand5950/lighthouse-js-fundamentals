const smartGarbage = function (trash, bins) {
    for(var type in bins){
    if(type == trash){
    
        bins[type]+= 1;
      }
    } return bins; 
    }
    
    console.log(smartGarbage('compost',
      {waste: 4,
      recycling: 3,
      compost: 5,
      }))
