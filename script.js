// Today's Date
let todayDateDiv = document.getElementById("todayDateDiv");
const todayDate = () => { 
  let days = ['Sunday', 'Monday', 'Tuesday',  'Wednesday',  'Thursday',  'Friday',  'Saturday'],
      months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],      
      dates = new Date(),
      day = dates.getDay(),
      dt  = dates.getDate(), 	
      m   = dates.getMonth(), 	
      y   = dates.getFullYear();

  //Checking the Day
  let checkDay = () => {
    for( var x = 0; x < days.length; x++){
      if( day == x ){
        return day = days[x]
      }
    }
  }

  //Checking the Month
  let checkMonth = () => {
    for(var x = 0; x<months.length; x++){
      if(m == x){
        return m = months[x]
      }
    }
  }
  
  //Adding the 1st, 2nd, 3rd or 4th like extensions to the Date
  let extension = ['st', 'nd', 'rd', 'th'],
      dateToString = dt.toString(),
      dateSplit = dateToString.split(""),
      lastDigit = dateSplit[dateSplit.length-1];      
      addExtension = extension[0];
  
      if( lastDigit == 1 ){    
        addExtension = extension[0];
      }
      else if( lastDigit == 2 ){        
        addExtension = extension[1];
      }
      if( lastDigit == 3 ){    
        addExtension = extension[2];
      }
      else if( lastDigit == 0 || lastDigit == 4 || lastDigit == 5 || lastDigit == 6 || lastDigit == 7 || lastDigit == 8 || lastDigit == 9){        
        addExtension = extension[3];
      }  
      let fullDate = `${checkDay()}, ${dt}<sup>${addExtension}</sup> ${checkMonth()}, ${y}`;
      todayDateDiv.innerHTML = fullDate; 
}

// Calling Today's Date Function 
todayDate();