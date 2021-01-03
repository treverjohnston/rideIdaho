export function setOpenReg(state) {
    // NOTE: This logic is duplicated on Register.vue bc it wasn't loading quick enough. I know, shoddy fix, but it'll do. Just make sure to change the date both places
    let closeDate = new Date("June 25, 2021 00:00:00")
    let openDate = new Date("January 10, 2021 00:00:00")

    let date = new Date();
    if (date > openDate && date < closeDate) {
        state.openRegistration = true;
    }
    else{
        state.openRegistration = false;
    }
    let startEarly = new Date("April 1 2021 01:00:00")
    let endEarly = new Date("April 30 2021 11:59:59")

    // if (date > startEarly && date < endEarly) {
    //     this.$store.commit('state/setEarly', true);
    // }
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
