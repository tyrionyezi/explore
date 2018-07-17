var arr1 = [1,2,3];
var arr2 = [7,8,9];
/**
 * Array.concat( arr1, arr2, arr3, ......, arr4);
 * 用于连接多个数组 不修改原来数组 返回合并后的数组
 */
var arr_concat = arr1.concat(arr2)  // [1,2,3,7,8,9]

/**
 * join() 把数组转化成一个字符串 不修改原数组 返回字符串
 */
 var arr_join = arr1.join("-") //"1-2-3-7-8-9"

 /**
  * pop() 删除并返回数组的最后一个元素  修改原数组
  */
var arr_pop = arr1.pop() //3

/**
 * push() 向数组的末尾添加一个或更多的元素 并返回新的长度 修改原数组
 * 
 */
var arr_push = arr1.push(4) //4

/**
 * reverse() 向点到数组中的元素顺序  修改原数组
 */
var arr_reverse = arr1.reverse() //[3,2,1]

/**
 * shift() 删除并返回数组中的第一个元素  修改原数组
 * 
 */

 var arr_shift = arr1.shift() //1

 /**
  * sort()  对数组进行排序 修改原数组
  * 
  */

  var arr_sort = arr1.sort((a,b) => {return a < b}) //3 2 1

  /**
   * slice() 从某个已有的数组返回截取的元素 不修改原数组
   */
  var arr_slice = arr1.slice(1,2) //[2]

  /**
   * splice(index,howmany,item,....,itemx) 从数组添加删除项目 然后返回被删除的项目 修改原数组 
   *  index 必填索引  howmany 删除多少项 item，itemx 可选向数组中添加的新项目
   */

   var arr_splice = arr1.splice(1) //[2,3]
 
/**
 * toString() 把数组转化为字符转  并返回结果  // 不修改原数组
 * 
 */

 var arr_toString = arr1.toString() //1,2,3

 /**
  * unshift() 向数组的开头添加一个或多个元素 并返回新的长度
  */

  var arr_unshift = arr1.unshift(0) //4