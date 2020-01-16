export function setOpenReg(state, openReg) {
    state.openRegistration = openReg;
}
export function setEarly(state, earlyReg) {
    state.earlyRegistration = earlyReg;
}
export function setParticipantTotal(state, total) {
    state.participantTotal = total;
}
export function setStateTotal(state, total) {
    state.stateTotal = total;
}
export function setParticipantList(state, list) {
    state.participantList = list;
    var teamsDictionary = {};
    for (let i = 0; i < list.length; i++) {
        const element = list[i].TeamName;
        if (teamsDictionary[element]) {
            teamsDictionary[element]++;
        }
        else {
            teamsDictionary[element] = 1;
        }
    }
    var teamsArray = [];
    for (const key in teamsDictionary) {
        if (teamsDictionary.hasOwnProperty(key)) {
            const val = teamsDictionary[key];
            const element = key;
            teamsArray.push({ 'Team': element, 'Count': val });
        }
    }
    state.teamsDictionary = teamsArray;
}
