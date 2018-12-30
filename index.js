module.exports = function saveMIRR(mod) {
	const teleporters = [
		{"HuntingZoneId": 13, "ID": 5012},
		{"HuntingZoneId": 58, "ID": 1005},
		{"HuntingZoneId": 59, "ID": 1017},
		{"HuntingZoneId": 60, "ID": 1030},
		{"HuntingZoneId": 61, "ID": 1009},
		{"HuntingZoneId": 62, "ID": 1027},
		{"HuntingZoneId": 64, "ID": 1050},
		{"HuntingZoneId": 65, "ID": 1014},
		{"HuntingZoneId": 66, "ID": 1015},
		{"HuntingZoneId": 67, "ID": 1022},
		{"HuntingZoneId": 68, "ID": 1015},
		{"HuntingZoneId": 69, "ID": 1005},
		{"HuntingZoneId": 70, "ID": 1007},
		{"HuntingZoneId": 71, "ID": 1007},
		{"HuntingZoneId": 73, "ID": 1007},
		{"HuntingZoneId": 74, "ID": 1021},
		{"HuntingZoneId": 75, "ID": 1015},
		{"HuntingZoneId": 76, "ID": 1007},
		{"HuntingZoneId": 77, "ID": 1008},
		{"HuntingZoneId": 78, "ID": 1007},
		{"HuntingZoneId": 79, "ID": 1008},
		{"HuntingZoneId": 80, "ID": 1008},
		{"HuntingZoneId": 81, "ID": 1008},
		{"HuntingZoneId": 83 ,"ID": 1007},
		{"HuntingZoneId": 85, "ID": 1008},
		{"HuntingZoneId": 833, "ID": 1021}
	];
	
	mod.hook('S_SPAWN_NPC', 10, e => {
		if(!e.villager) return;
		if (teleporters.find(o => o.HuntingZoneId === e.huntingZoneId && o.ID === e.templateId)) {
			e.huntingZoneId = 152;
			e.templateId = 6014;
			return true;
		}
	});
}
