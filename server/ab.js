var sqlInfo = {
  user:{
    search:'select * from user limit 1'
  },
  shopList:{
    list:'select * from shopList'
  },
  food:{
    list:'SELECT  *  FROM food'
  },
  selected :{
    list:''
  },
  audio:{
    list:'select * from audio'
  }

} 
module.exports = sqlInfo;