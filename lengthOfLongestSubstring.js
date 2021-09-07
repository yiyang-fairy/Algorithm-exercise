// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。



// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set()
    let maxLength = 0
    let i = 0,
        j = 0
    if (s.length == 0) return 0
    for (i; i < s.length; i++) {
        if (set.has(s[i]) == false) {
            set.add(s[i])
            maxLength = Math.max(maxLength, set.size)
        } else {
            while (set.has(s[i])) {
                set.delete(s[j])
                j++
            }
            set.add(s[i])
        }

    }
    return maxLength
};