function requireAll(r) {
    return r.keys();
}
  
  
const anime = requireAll(require.context('./', true, /\.json$/));
function getListAnime() {
    const items = [];
    anime.forEach(i => {
        const r = i.replace('./', '').replace('.json', '');
        const item = require(`./${r}`);
        item.filename = r;
        items.push(item);
    });
    return items;
}

export default {
    anime,
    getListAnime
}