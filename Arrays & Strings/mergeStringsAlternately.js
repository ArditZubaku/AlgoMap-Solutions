// https://leetcode.com/problems/merge-strings-alternately/description/
/*
You are given two strings word1 and word2.
Merge the strings by adding letters in alternating order, starting with word1.
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.



Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q
merged: a p b q c   d


Constraints:

1 <= word1.length, word2.length <= 100
word1 and word2 consist of lowercase English letters.
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
function mergeAlternately(word1, word2) {
    const arr = [];

    if (word1.length === word2.length) {
        for (let i = 0; i < word2.length; i++) {
            arr.push(word1[i])
            arr.push(word2[i]);
        }
    } else if (word1.length > word2.length) {
        for (let i = 0; i < word2.length; i++) {
            arr.push(word1[i])
            arr.push(word2[i]);
        }

        const leftToPush = word1.split("").toSpliced(0, word2.length);
        if (leftToPush.length > 0) arr.push(...leftToPush);
    } else {
        for (let i = 0; i < word1.length; i++) {
            arr.push(word1[i])
            arr.push(word2[i]);
        }
        const leftToPush = word2.split("").toSpliced(0, word1.length);
        if (leftToPush.length > 0) arr.push(...leftToPush);
    }

    return arr.join("");
}

const {test} = require("node:test");
const assert = require("node:assert");

test('mergeAlternately', function () {
    assert.strictEqual(mergeAlternately("abc", "pqr"), "apbqcr");
    assert.strictEqual(mergeAlternately("ab", "pqrs"), "apbqrs");
    assert.strictEqual(mergeAlternately("abcd", "pq"), "apbqcd");
});
