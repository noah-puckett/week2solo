import AvatarItem from '../src/components/AvatarItem.js';
const test = QUnit.test;

QUnit.module('Avatar Item Test');

test('displays value given', assert => {
    const avatar = {
        '_id': '5cdf0769b6e02a467e3e766b',
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        'name': '46th Earth King'
    };

    const avatarItem = new AvatarItem({ avatar });
    const rendered = avatarItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/ `
    <li class="avatar">
        <img src="${avatar.photoUrl}" onError="this.onerror=null; this.src='data/placeholder.png';" alt="${avatar.name}">
        <h2>${avatar.name}</h2>
        <a id="enemies" href="#?enemies=46th+Earth+King">Enemies</a> <a id="allies" href="#?allies=46th+Earth+King">Allies</a> 
    </li>
    `);
});