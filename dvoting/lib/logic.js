/**
 * Sample transaction processor function.
 * @param {org.party.Vote} tx The sample transaction instance.
 * @transaction
 */
async function Vote(tx) {  // eslint-disable-line no-unused-vars


  	if (tx.voter.voted==0){
      if (tx.newValue==0){
          tx.asset.bjp = tx.asset.bjp+1;
      }else if(tx.newValue==1){
          tx.asset.cong = tx.asset.cong+1
      }else if(tx.newValue==2){
          tx.asset.aap = tx.asset.aap+1
      }else if(tx.newValue==3){
          tx.asset.ncp = tx.asset.ncp+1
      }
    }
	tx.voter.voted = 1

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.party.Result');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

  	    // Get the asset registry for the asset.
    const voterRegistry = await getParticipantRegistry('org.party.Voter');
    // Update the asset in the asset registry.
    await voterRegistry.update(tx.voter);


}
