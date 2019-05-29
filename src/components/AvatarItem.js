import Component from './Component.js';

class AvatarItem extends Component {

    renderTemplate() {
        const avatar = this.props.avatar;
        return /*html*/ `
            <li class="avatar">
                <img src="${avatar.photoUrl}" onError="this.onerror=null; this.src='data/placeholder.png';" alt="${avatar.name}">
                <h2>${avatar.name}</h2>
            </li>
        `;
    }
}
export default AvatarItem;