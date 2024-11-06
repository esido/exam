function last(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : -1;
  }
  

  let nums1 = [null, {}, 2];
  console.log(last(nums1));
  
  let nums2 = [];
  console.log(last(nums2)); 
  