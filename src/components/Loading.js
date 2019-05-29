import Component from './Component.js';

class Loading extends Component {

    renderTemplate() {
        const loading = this.props.loading;
        if(!loading) {
            return '<div></div>';
        }

        return /*html*/ `
            <div class="loading">
                <img src="./data/3bd8a6f55acf2821bc899e93196ac49c.gif" alt="loading">
            </div>
        `;
    }
}
export default Loading;