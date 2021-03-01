import { PureComponent } from 'react';

/**
 * Content Wrapper
 * @class CheckoutProgressBar
 * @namespace myApp/Component/CheckoutProgressBar/Component/CheckoutProgressBarComponent */
export class CheckoutProgressBarComponent extends PureComponent {
    renderisActive() {
        // eslint-disable-next-line react/prop-types
        const { isActive } = this.props;
        return (
            isActive
        );
    }

    render() {
        return (
            <div className={ `progressBar ${ this.renderisActive() ? 'progressBarActive' : '' }` } />
        );
    }
}

export default CheckoutProgressBarComponent;
