'use strict';

class FBeamer {
	constructor ({ pageAccessToken , VerifyToken }) {

		try{

			this.pageAccessToken=pageAccessToken;
			this.VerifyToken=VerifyToken;
		}
		catch{
			console.log(error);
		}

	}

	registerHook (req , res ) {
		const params = req. query ;
		const mode = params [’hub. mode ’] ,
		token = params [’hub. verify_token ’] ,
		challenge = params [’hub. challenge ’];
		// if mode === ’subscribe ’ and token === verifytoken , then send back challenge
		try {
			if ((mode && this.verifyToken) && mode === 'subscribe' && token === this.verifyToken) {
				console.log("The webhook is registered!");
				return res.send ( challenge ) ;
			} else {
				console.log (" Could not register webhook !") ;
				return res.sendStatus (200) ;
			}
		} catch (e) {
			console.log (e) ;
		}
	}

}

module.exports = FBeamer ;
