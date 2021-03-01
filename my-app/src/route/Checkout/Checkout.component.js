import CheckoutProgressComponent from 'Component/CheckoutProgress/CheckoutProgress.component';
import ContentWrapper from 'Component/ContentWrapper';
import { BILLING_STEP, DETAILS_STEP, SHIPPING_STEP } from 'Route/Checkout/Checkout.config';
import { Checkout as SourceCheckout }
    from 'SourceRoute/Checkout/Checkout.component';
/** @namespace myApp/Route/Checkout/Component/CheckoutComponent */
export class CheckoutComponent extends SourceCheckout {
    renderProgressStep() {
        // eslint-disable-next-line react/prop-types
        const { checkoutStep } = this.props;
        switch (checkoutStep) {
        case SHIPPING_STEP:
            return 'shipping';
        case BILLING_STEP:
            return 'billing';
        case DETAILS_STEP:
            return 'details';
        default:
            return '';
        }
    }

    render() {
        return (
            <main block="Checkout">
                <CheckoutProgressComponent step={ this.renderProgressStep() } />
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default CheckoutComponent;
