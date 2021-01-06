export function setDates(state, dates) {
    state.allDates = dates
    let openDate = new Date();
    let closeDate = new Date();
    dates.forEach(d => {
        switch (d.simpleId) {
            case "rideDate":
                state.rideDate = d;
                break;

            case "openReg":
                state.openReg = d;
                openDate = new Date(d.date);
                break;

            case "closeReg":
                state.closeReg = d;
                closeDate = new Date(d.date);
                break;

            default:
                break;
        }
    });
    let date = new Date();

    if (date > openDate && date < closeDate) {
        state.openRegistration = true;
        localStorage.openRegistration = true;
    } else if(!window.location.hash.includes('?openreg=true')) { 
       localStorage.openRegistration = false;
       state.openRegistration = false;
    }
}
