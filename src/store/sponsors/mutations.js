import Vue from 'vue'
export function setSponsors(state, sponsors) {
    state.allSponsors = sponsors
    state.allSponsors = sponsors.sort(function (a, b) { return a.level - b.level })
}

export function setHiddenSponsors(state, sponsors) {
    state.hiddenSponsors = sponsors;
    //Here is where we sort them by level
}
export function setVisibleSponsors(state, sponsors) {
    state.setVisibleSponsors = sponsors;
    for (const sponsor in sponsors) {
        if (sponsors.hasOwnProperty(sponsor)) {
            const element = sponsors[sponsor];
            switch (element.level) {
                case '1':
                    let exist = state.lvl1.find(vendor => vendor['_id'] === element._id);
                    if (!exist) {
                        state.lvl1.push(element)
                    }
                    break;
                case '2':
                    exist = state.lvl2.find(vendor => vendor['_id'] === element._id);
                    if (!exist) {
                        state.lvl2.push(element)
                    }
                    break;
                case '3':
                    exist = state.lvl3.find(vendor => vendor['_id'] === element._id);
                    if (!exist) {
                        state.lvl3.push(element)
                    }
                    break;
                case '4':
                    exist = state.lvl4.find(vendor => vendor['_id'] === element._id);
                    if (!exist) {
                        state.lvl4.push(element)
                    }
                    break;
                case '5':
                    exist = state.lvl5.find(vendor => vendor['_id'] === element._id);
                    if (!exist) {
                        state.lvl5.push(element)
                    }
                    break;

                default:
                    break;
            }
        }
    }
    //Here is where we sort them by level
}
