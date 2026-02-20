

1. What is the difference between null and undefined?
Ans: যখন কোন varible declare করা হয় কিন্তু কোন value assign করা হয় না তখন সেটার value হয় undefined যেমন - let a;
আর declare করার পর যদি value হিসেবে null assign করা হয় তখন সেটা null যেমন - let a = null;

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
Ans: দুটোই for loop এর মত কাজ করে। এক্ষেত্রে map নতুন array return করে orginal array এর কোন change করে না।
 আর forEach কোন নতুন array return করে না । এটা শুধূ loop এর মত কাজ করে।

3) What is the difference between == and ===?
Ans: === value এবং type দুটোই compare করে ।
== value compare করে কিন্তু type compare করে না। এজন্য (5 == "5")  == এর ক্ষেত্রে true হলেও  === এর ক্ষেত্রে false হবে।

4) What is the significance of async/await in fetching API data?
Ans: এর significance হল async/await use করলে code দেখতে synchronous এর মতো মনে হয়, যার জন্য দেখতে জটিল মনে হয় না ,পড়তে সহজ লাগে আর সহজে error handle ও করা যায় ।


5) Explain the concept of Scope in JavaScript (Global, Function, Block).
Ans: Global Scope function এর বাইরে declare করা হয়। এটা সব জায়গা থেকে access করা যায়।
Function Scope function এর ভিতরে declare করা হয়। তাই এটা শুধু function এর ভিতরে ব্যবহার করা যাবে।
Block scope - এটা {} এর বাইরে access করা যাবে না। let এবং const block scope follow করে।