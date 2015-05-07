// THIS IS YOUR CUSTOM JAVASCRIPT UTILITY LIBRARY
// This file is already included in you project!
// Make use of your utility functions, and create some new ones!

(function(){

    this.myUtils = {}

    myUtils = {}

    myUtils.myEach = function myEach(arr, cb){
        var len = arr.length;
        for(var i=0; i<len; i++){
            cb(arr[i], i, arr);
        }  
    }

    myUtils.myMap = function myMap(arr, cb){
      var len = arr.length;
      var newArr = [];
      for(var i=0; i<len; i++){
         newArr[i] = cb(arr[i], i, arr);
      }
      return newArr;
    }

    myUtils.myReduce = function myReduce(arr, cb, val){
      var len = arr.length;
      val = val || 0;
      for(var i=0; i<len; i++){
         val = cb(val, arr[i], i, arr)
      }
      return val;
    }  
    
    myUtils.buildElement = function buildElement(tag, str){
       return "<" + tag + ">" + str + "</" + tag + ">" 
    }
    
    myUtils.toDollarAmount = function toDollarAmount(num){
        return Math.floor(num*100)/ 100;
    }


    myUtils.toCurrencyString = function toCurrencyString(num, curr){
        return curr + toDollarAmount(num);
    }

    
}.call(this))
