/**
 * Sample transaction processor function.
 * @param {org.party.Vote} vote
 * @transaction
 */
async function vote(vote) {  // eslint-disable-line no-unused-vars

    // Save the old value of the asset.
    const oldValue = vote.asset;



    // Update the asset with the new value.
  	if(vote.newValue==0){
		vote.asset.bjp = vote.asset.bjp + 1;
	}else if(vote.newValue==1){
		vote.asset.cong = vote.asset.cong + 1;
	}else if(vote.newValue==2){
		vote.asset.aap = vote.asset.aap + 1;
	}else if(vote.newValue==3){
		vote.asset.ncp = vote.asset.ncp + 1;
	}

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.party.Result#1');
    // Update the asset in the asset registry.
    await assetRegistry.update(vote.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.party', 'Voting');
    event.asset = vote.asset;
    event.oldValue = oldValue;
    event.newValue = vote.newValue;
    emit(event);
}
