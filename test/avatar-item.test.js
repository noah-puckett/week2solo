import AvatarItem from '../src/components/AvatarItem.js';
const test = QUnit.test;

QUnit.module('Avatar Item Test');

test('IF I GIVE YOU DATA WILL YOU DISPLAY IT LIKE A GOOD CHILD???', assert => {
    const avatar = {
        '_id': '5cdf0769b6e02a467e3e766b',
        'photoUrl': 'https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441',
        'name': '46th Earth King'
    };

    const avatarItem = new AvatarItem({ avatar });
    const rendered = avatarItem.renderTemplate();

    assert.htmlEqual(rendered, /*html*/ `
    <li class="avatar">
        <img src="https://vignette.wikia.nocookie.net/avatar/images/5/51/46th_Earth_King.png/revision/latest?cb=20130627160441" alt="46th Earth King">
        <h2>46th Earth King</h2>
    </li>
    `);
});