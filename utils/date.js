const onDayTimestamp = 24 * 60 * 60 * 1000,

/**
 * 根据格式 格式化时间戳 返回日期格式化结果
 * @param
 * timesTamp 时间戳 example 1531584000
 * formate 日期格式  //yyyy-mm-dd yyyy/mm/dd
 * 
 */
export const formatDate = (timesTamp, format) => {
  let date = new Date(timesTamp);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() + 1;
  month = month < 10 ? ("0"+ month) : month;
  day = day < 10 ? ("0" + day) : day;
  
  if(format.includes("-")){
    date = `${year}-${month}-${day}`;
  }else if(format.includes("/")){
    date = `${year}/${month}/${day}`;
  }else{
    date = `${year}-${month}-${day}`;
  }
  return date
}

/**@param
 * ts: yyyy-mm-dd 
 * to 1539187200000 
 * 返回的是一个00:00:00的是时间戳
 */
const dateToTimesTamp = ts => {
  return new Date(ts).setHours(0 , 0 ,0 , 0)
},

/**
 * @param ts日期 num 前后多少天
 *
 */
const preOrNexDay = (ts, num) => {
  let currentDate = new Date(ts);
  let date = new Date(currentDate.setDate(currentDate.getDate()+num))
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() + 1;

  month = month < 10 ? ("0"+ month) : month;

  if(ts.includes("-")) {
    date = `${year}-${month}-${day}`;
  }else if(ts.includes("/")) {
    date = `${year}/${month}/${day}`;
  } else {
    date = `${year}-${month}-${day}`;
  }

  return date
}



