const fs = require('fs')
const path = require('path')
module.exports = function saveMIRR(dispatch) {
	let teleporters = null;
	fs.readFile(path.join(__dirname, 'teleporters.json'), (err, data) => {
		teleporters = JSON.parse(data);
		return;
	});
	dispatch.hook('S_SPAWN_NPC', 8, (event) => {
		if(!event.villager) return;
		for(let i of teleporters){
			if(!(i.HuntingZoneId - event.huntingZoneId) && !(i.ID - event.templateId)){
				event.huntingZoneId = 152;
				event.templateId = 6014;
				return true;
			}
		}
	});
}
