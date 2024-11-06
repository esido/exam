function myReduce(nums, fn, init) {

    let result = init;
    
  
    for (let i = 0; i < nums.length; i++) {
      result = fn(result, nums[i]);
    }
    
    return result;
  }
  

  

  let nums1 = [1, 2, 3, 4];
  let fn1 = function sum(accum, curr) { return accum + curr; };
  let init1 = 0;
  console.log(myReduce(nums1, fn1, init1));

  let nums2 = [1, 2, 3, 4];
  let fn2 = function sum(accum, curr) { return accum + curr * curr; };
  let init2 = 100;
  console.log(myReduce(nums2, fn2, init2));
  
  let nums3 = [];
  let fn3 = function sum(accum, curr) { return accum + curr * curr;};
  let init3 = 25;
  console.log(myReduce(nums3, fn3, init3)); 