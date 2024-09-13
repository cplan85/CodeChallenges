/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    const finalArrayLength = m + n;
    let nums2counter = 0;
   for (var i = m; i < finalArrayLength; i++) {
            nums1[i] = nums2[nums2counter]; 
            nums2counter++;
    }

   nums1.sort(function(a,b){return a - b})
};