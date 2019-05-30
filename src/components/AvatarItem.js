import Component from './Component.js';
import encodeSearchParams from './encode-search-params.js';

class AvatarItem extends Component {
    
    renderTemplate() {
        const avatar = this.props.avatar;
        const enemiesLink = encodeSearchParams('enemies', avatar.name);
        const alliesLink = encodeSearchParams('allies', avatar.name);

        return /*html*/ `
            <li class="avatar">
                <img src="${avatar.photoUrl}" onError="this.onerror=null; this.src='data/placeholder.png';" alt="${avatar.name}">
                <h2>${avatar.name}</h2>
                <a id="enemies" href="#?${enemiesLink}">Enemies</a>
                <a id="allies" href="#?${alliesLink}">Allies</a>
            </li>
        `;
    }
}
export default AvatarItem;