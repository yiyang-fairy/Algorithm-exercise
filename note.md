## 1、twoSum

* **题目**

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum

* **题解**

首先创建一个map 数组，遍历nums 数组，获取每个元素相对target 的补数

1，如果在map 数组中找到 该元素的补数 返回对应的元素

2，如果没有找到，则将该元素的值和下标添入到map 中

* **代码**

~~~js
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i)
        }

    }
    return []
};
~~~

* **理解**

还对map 使用不太熟悉呢，需要加强练习，今天关注的up主讲的好好哦，听懂了（但又好像没有完全听懂==），希望别是过几天又忘了哈哈（0905）

## 2、addTwoNumbers

* **题目**

  给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

  请你将两个数相加，并以相同形式返回一个表示和的链表。

  你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  ~~~js
  示例：
  输入：l1 = [2,4,3], l2 = [5,6,4]
  输出：[7,0,8]
  解释：342 + 465 = 807.
  ~~~

  

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/add-two-numbers

* **题解**

  创建一个新的链表dummy，l1 、l2 不为空时，将 l1 和 l2 中的值加入sum 中，有进位的话设carry 为1 ，链表依次往后推

* **代码**

  ~~~js
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  var addTwoNumbers = function(l1, l2) {
      let dummy = new ListNode();
      let curr = dummy
      let carry = 0;
      while (l1 !== null || l2 != null) {
          let sum = 0
          if (l1 != null) {
              sum += l1.val
              l1 = l1.next
          }
          if (l2 != null) {
              sum += l2.val
              l2 = l2.next
          }
          sum += carry
          curr.next = new ListNode(sum % 10)
          carry = sum >= 10 ? 1 : 0
          curr = curr.next
      }
      if (carry > 0) {
          curr.next = new ListNode(carry)
      }
      return dummy.next
  };
  ~~~

  

* **理解**

  感觉通过这个问题好像点醒了我对链表的认识nice，一个节点一个节点往后推也不是很难理解嘛，听这个up主一讲茅塞顿开太棒啦，对了，发现一点 js 中的 7/10=0.7而不是0 （0906）

## 3、lengthOfLongestSubstring

* **题目**

  给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。 

  示例 1:

  输入: s = "abcabcbb"
  输出: 3 
  解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters

* **题解**

  sliding window 滑动窗口  

  创建一个 set

  用两个指针 i，j，首先i, j 都指向s 第一个元素，接着 i 顺序遍历 s 将s[i] 放进 set 中，然后更新最大不重复字符的数量

  比较set 中是否有s[i] ，有则删除set 中的 s[j] ，j 指针向后移动，直到set 中没有s[i]

* **代码**

  ~~~js
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
  ~~~

  

* **理解**

   let i,j =0 这样子写 i 是没有被赋值，要写成 let i =0, j =0;    (0907)