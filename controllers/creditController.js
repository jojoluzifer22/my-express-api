const users = require('../data/users');
const creditsData = require('../data/credits');

/*
 *@desc Get the current user's credit balance 
 *@route GET /credit
 *@access Private (require token)
* 
 */

const getCredit = async (req,res)=>{

  try{

    const userId = req.user.id;
    console.log(`[Controller] Getting credit for User ID: ${userId}`);

    const userCredit = await creditsData.find(c => c.user_id === userId);

    if(!userCredit){

      return res.status(200).json({credit: 0});

    }

    return res.status(200).json({credit: userCredit.credit});

  }catch(err){
    console.error('Error in getting contrller', err);
    res.status(500).json({message: 'Server Error'});
  }

}

/*
*@desc  Top up credit for the current user
*@route POST /credit/topup
*@access  Private (requires token)
*/
const topupCredit = async (req, res)=>{

  try{

    const userId = req.user.id;
    const {amount} = req.body;

    if(typeof amount !== 'number' || amount <= 0 ){
      return res.status(400).json({message: 'Invalid amount provided.'});
    }
    
    let userCredit = await creditsData.find(c => c.user_id === userId);

    if(userCredit){
      userCredit.credit += amount; 
    }else{

      const newCreditEntry = {
        id: creditsData.length +1 ,
        user_id : userId,
        credit: amount,
      }

      creditsData.push(newCreditEntry);
      userCredit =  newCreditEntry;

    }

    console.log(`User ID ${userId} new balance is ${userCredit.credit}`);

    res.status(200).json({
      message: 'Top-up successful',
      newCredit : userCredit.credit ,
    });
    

  }catch(err){
    console.log('Error in topUpCredit controller', err);
    res.status(500).json({message : 'Server Error'});
  }

}


module.exports = {
  getCredit,
  topupCredit
};