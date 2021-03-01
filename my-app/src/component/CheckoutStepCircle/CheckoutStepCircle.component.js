import { PureComponent } from 'react';

/**
 * Content Wrapper
 * @class CheckoutStepCircle
 * @namespace myApp/Component/CheckoutStepCircle/Component/CheckoutStepCircleComponent */
export class CheckoutStepCircleComponent extends PureComponent {
    renderStepNummeration() {
        // eslint-disable-next-line react/prop-types
        const { stepNumeration } = this.props;
        if (this.renderisCompleted()) {
            return <span> &#10003; </span>;
        }

        return (
            stepNumeration
        );
    }

    renderisActive() {
        // eslint-disable-next-line react/prop-types
        const { isActive } = this.props;
        return (
            isActive
        );
    }

    renderisCompleted() {
        // eslint-disable-next-line react/prop-types
        const { isCompleted } = this.props;
        return (
            isCompleted
        );
    }

    renderTitle() {
        // eslint-disable-next-line react/prop-types
        const { title } = this.props;
        return (
            title
        );
    }

    render() {
        return (
            <div>
                <div className={ `shippingCircle ${ this.renderisActive() ? 'shippingCircleActive' : '' }
                ${ this.renderisCompleted() ? 'shippingCircleCompleted' : '' }` }
                >
                    { this.renderStepNummeration() }
                </div>
                <p className={ `stepTitle ${ this.renderisActive() ? 'activeTitle' : '' }
                ${ this.renderisCompleted() ? 'activeTitle' : '' }` }
                >
                    { this.renderTitle() }
                </p>
            </div>
        );
    }
}

export default CheckoutStepCircleComponent;
