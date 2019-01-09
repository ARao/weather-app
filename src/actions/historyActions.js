import { CITY_NAME, KEY, HISTORY_WEATHER } from './types';


export const fetchHistories = () => dispatch =>{
    let arr  = [];
    for(let day of getNextDate()){
        arr.push( fetch(`http://api.apixu.com/v1/history.json?key=${KEY}&q=${CITY_NAME}&dt=${day}`) )
    }
  
  Promise.all(arr)
  .then( histories => Promise.all(histories.map( history => history.json() ) ) )
  .then( histories =>{ 
    dispatch({
      type: HISTORY_WEATHER,
      payload : histories
    });
  })
  .catch(err=>{
      console.log("error at homeAction ------->")
      console.log(err)
  })
  
}

function *getNextDate(){
  let today = new Date();
  for(let i = 2; i< today.getDate(); i++){
    yield  `${i}-${today.getMonth()+1}-${today.getFullYear()}`
  }
  return ;
}