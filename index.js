// Code your solution in this file!


function distanceFromHqInBlocks(distance){
     if (distance>42) {
        return distance-42;
        
     }
     else{
        return  42- distance;
     }
        
}
function distanceFromHqInFeet(feet) {
    const dist = distanceFromHqInBlocks(feet) * 264
    return dist;  
  }
  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
     let distance

    if (start < destination) {
       distance= (destination - start)*264;
       return distance
        
    } else {
       distance= ( start - destination)*264
        return distance
    }
  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <=400) {
        return 0; 
    }
    else if (distanceInFeet <=2000){
        return (distanceInFeet - 400)* 0.02;
    }else if(distanceInFeet <= 2500){
        return 25;
    }
    else{
        return 'cannot travel that far';
    }
  }