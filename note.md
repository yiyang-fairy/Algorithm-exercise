## 1.twoSum

#### 题目

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum

#### 题解

首先创建一个map 数组，遍历nums 数组，获取每个元素相对target 的补数

1，如果在map 数组中找到 该元素的补数 返回对应的元素

2，如果没有找到，则将该元素的值和下标添入到map 中

#### 代码

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

#### 总结

还对map 使用不太熟悉呢，需要加强练习，今天关注的up主讲的好好哦，听懂了，希望别是过几天又忘了哈哈