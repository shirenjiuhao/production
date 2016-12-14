/**
 * Created by Master on 2016/9/29.
 */
/*
封装一个名字为$的函数，用于获取元素
1)	$(“#box”) 用于获取id名为box的DOM元素。
2)	$(“.active”) 用于获取class名为active的DOM元素
3)	$(“input”) 用于获取标签名为input的DOM元素
4)	$(“name=user”) 用于获取name属性等于user的DOM元素
*/
 function $(str){
     var reg1=/^#/ig;
     var reg2=/^\./ig;
     var reg3=/^name=/ig;

     if(reg1.test(str)){
         return document.getElementById(str.substring(1));
     }else if(reg2.test(str)){
         return document.getElementsByClassName(str.substring(1));
     }else if(reg3.test(str)){
         return document.getElementsByName(str.substring(5));
     }else{
         return document.getElementsByTagName(str);
     }
 };
 /*
 目的 : 1 由于真正项目中 拿元素属性都是通过引入的，所以 不能直接.
        2 要换一种方式拿  obj.currentStyle[attr]   getComputedStyle(obj)[attr]

        3 i 对象
            ii 对象的属性


        方法的要素 1 方法名 ，function关键字
                2 形参列表 每个形参代表什么意思
                3 需不需要有返回值 ，以及返回什么结果
 */
function getStyle(obj,attr) {
     if(obj.currentStyle){
         return obj.currentStyle[attr];
     }else{
         return getComputedStyle(obj)[attr];
     }
}
//封装函数distinct(arr) 用于去除数组中的重复元素，并返回新的数组
function distinct(arr){
    var result=[];
    for(var i=0;i<arr.length;i++){
        if(result.indexOf(arr[i])==-1){
            result.push(arr[i]);
        }
    }
    return result;
}
/*
  function distinct(arr){
      var arr1=[];//存不重复的
      var arr2=[];//记录个数
      for(var i=0;i<arr.length;i++){
          var index=arr1.indexOf(arr[i]);
          if(index==-1){
              arr1.push(arr[i]);
              var obj=new Object();
              obj.name=arr[i];
              obj.count=1;
              obj.toString = function () {
                  return this.name+":"+this.count+"个";
              }
              arr2.push(obj);
          }else{
              arr2[index].count++;
          }

      }
      return arr2;
  }*/
