const onDayTimestamp = 24 * 60 * 60 * 1000,

/**
 * 根据格式 格式化时间戳 返回日期格式化结果
 * @param
 * timesTamp 时间戳 example 1531584000
 * formate 日期格式  //yyyy-mm-dd yyyy/mm/dd
 * 
 */
function formateDate(timesTamp, format) {
  let date = new Date(timesTamp);
  const year = date.getFullYear();
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