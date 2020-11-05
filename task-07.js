const object = {balance: 0}
function totalUsersBalance ({balance}) { return balance;}
 const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0)
 

 console.log(calculateTotalBalance(users)); 
// 20916
