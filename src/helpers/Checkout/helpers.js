import CheckoutForm from "./CheckoutForm";
import CheckoutDetails from "./CheckoutDetails";
import Confirmation from "./Confirmation";
import Payment from "./Payment";

export const renderCheckoutComponent = ({
    user,
    orderInfo,
    orderError,
    checkoutStep,
    handleChange,
    handleSubmit,
    checkoutData,
    handleBackStep,
    handleNextStep,
    handleCheckout,
    handleSelectChange,
}) => {
    switch (checkoutStep) {
        case "Order Address":
            return (
                <CheckoutForm 
                    user={user}
                    orderInfo={orderInfo}
                    checkoutData={checkoutData}
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                />
            )
        case "Order Details":
            return (
                <CheckoutDetails 
                    user={user}
                    checkoutData={checkoutData}
                    handleBackStep={handleBackStep}
                    handleNextStep={handleNextStep}
                    handleCheckout={handleCheckout}
                />
            )
        case "Order Payment":
            return (
                <Payment 
                    user={user}
                    checkoutData={checkoutData}
                    handleBackStep={handleBackStep}
                    handleNextStep={handleNextStep}
                    handleCheckout={handleCheckout}
                />
            )
        case "confirmation":
            return (
                <Confirmation 
                    orderInfo={orderInfo} orderError={orderError}
                />
            )
    
        default:
            return null;
    }
}
