export function addToNewGallery(state) {
    for (let i = 1; i < 23; i++) {
        state.newGallery.push(
            {
                url: `./statics/2018_gallery/${i}.jpg`,
                id: i
            });
    }
}

export function handleError(state, err) {
    console.error(err);
    // state.error = err
}

export function setPics(state, pics) {
    var arr = [];
    for (let i = 0; i < pics.length; i++) {
        const pic = pics[i];
        var url = `//res.cloudinary.com/treverscloud/image/upload/c_crop/v${
            pic.version
            }/${pic.public_id}.${pic.format}`;
        arr.unshift({ url: url, id: i });
    }
    state.gallery = arr;
}