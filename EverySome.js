    function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        if(submittedUsers.every(goodUsers)){
          return true
        }
        else { 
          return false
        }
      };
    }
    
    module.exports = checkUsersValid
