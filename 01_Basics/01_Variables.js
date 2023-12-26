let account_no = 1234
let ac_holder_name = "Shravani"
const acc_type = 'savings bank'

 var Phone_no = 1234567891
 /*
  -> prefer not to use var
  -> It causes issue in block and functional scope
 */
//acc_type = 'Fixed deposit' //Not Allowed
console.log(account_no)
console.table([account_no,ac_holder_name,acc_type])