import { PureComponent } from 'react';

import CheckoutProgressBarComponent from 'Component/CheckoutProgressBar/CheckoutProgressBar.component';
import CheckoutStepCircleComponent from 'Component/CheckoutStepCircle/CheckoutStepCircle.component';

import './CheckoutProgress.style';
/**
 * Content Wrapper
 * @class CheckoutProgress
 * @namespace myApp/Component/CheckoutProgress/Component/CheckoutProgressComponent */
export class CheckoutProgressComponent extends PureComponent {
    renderIsActive(circleName) {
        // eslint-disable-next-line react/prop-types
        const { step } = this.props;
        if (step === circleName) {
            return true;
        }

        return false;
    }

    renderIsCompleted(circleName) {
        if ((this.renderIsActive('billing') || this.renderIsActive('details')) && circleName === 'shipping') {
            return true;
        }

        if (this.renderIsActive('details') && circleName === 'billing') {
            return true;
        }

        return false;
    }

    renderIsActiveBar(barName) {
        // eslint-disable-next-line react/prop-types
        const { step } = this.props;
        if (step === barName || this.renderIsCompleted(barName)) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div block="CheckoutProgressComponent">
                <CheckoutProgressBarComponent isActive={ this.renderIsActiveBar('shipping') } />
                <CheckoutStepCircleComponent
                  title="Shipping"
                  stepNumeration={ 1 }
                  isActive={ this.renderIsActive('shipping') }
                  isCompleted={ this.renderIsCompleted('shipping') }
                />
                <CheckoutProgressBarComponent isActive={ this.renderIsActiveBar('billing') } />
                <CheckoutStepCircleComponent
                  title="Review & Payments"
                  stepNumeration={ 2 }
                  isActive={ this.renderIsActive('billing') }
                  isCompleted={ this.renderIsCompleted('billing') }
                />
                <CheckoutProgressBarComponent isActive={ this.renderIsActiveBar('details') } />
            </div>
        );
    }
}

export default CheckoutProgressComponent;
