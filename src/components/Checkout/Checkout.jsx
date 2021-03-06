import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

// Styling
import "./styles.css";

// MUI
import {
    Step,
    Paper,
    Stepper,
    StepLabel,
    Container,
    Typography,
    CircularProgress,
} from "@material-ui/core";

// Commerce JS
import { commerce } from '../../lib/Commerce';

// Helpers
import { renderCheckoutComponent } from '../../helpers/Checkout/helpers';

const steps = ["Order Address", "Order Details", "Order Payment"];

const convertObjectToArray = (countries) =>
    Object.entries(countries || {}).map(([code, name]) => ({ code, name }));

const usePreviousState = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

const Checkout = ({ cartData, orderInfo, orderError, handleCheckout }) => {

    /* State Management */
    const [user, setUser] = useState({
        city: "",
        email: "",
        address: "",
        postalCode: "",
        lastName: "",
        firstName: "",
        shippingOption: {},
        shippingOptions: [],
        shippingCountry: {},
        shippingCountries: [],
        shippingSubdivision: {},
        shippingSubdivisions: [],
    });

    const [checkoutStep, setCheckoutStep] = useState("Order Address");
    const [checkoutData, setCheckoutData] = useState("");

    const previousShippingCountry = usePreviousState(user.shippingCountry);
    const previousShippingSubdivision = usePreviousState(
        user.shippingSubdivision
    );

    const history = useHistory();

    /* Functions */

    const handleSubmit = (e) => {
        e.preventDefault();
        setCheckoutStep("Order Details");
    };

    const handleNextStep = (e, step) => {
        e.preventDefault();
        setCheckoutStep(step);
    };

    const handleBackStep = (e, step) => {
        e.preventDefault();
        setCheckoutStep(step);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSelectChange = (e, state) => {
        const { name, value } = e.target;
        if (state === "shippingOptions") {
            setUser({
                ...user,
                [name]: {
                    id: value,
                },
            });
        } else {
            setUser({
                ...user,
                [name]: {
                    name: user[state].find((country) => country.code === value).name,
                    code: value,
                },
            });
        }
    };

    /* useEffect */

    useEffect(() => {
        if (cartData.id) {
            const generateToken = async () => {
                try {
                    const response = await commerce.checkout.generateToken(
                        cartData.id,
                        {
                            type: "cart",
                        }
                    );
                    setCheckoutData(response);
                } catch (error) {
                    console.error("Checkout error: ", error);
                }
            };
            generateToken();
        }
    }, [cartData, history]);

    useEffect(() => {
        const fetchShippingCountries = async () => {
            const { countries } = await commerce.services.localeListShippingCountries(
                checkoutData.id
            );
            const FormattedCountries = convertObjectToArray(countries);
            setUser({
                ...user,
                shippingCountries: FormattedCountries,
                shippingCountry: FormattedCountries[FormattedCountries.length - 1],
            });
        };
        if (!user.shippingCountries.length && checkoutData.id) {
            fetchShippingCountries();
        }
    }, [user, checkoutData]);

    useEffect(() => {
        const fetchSubdivisions = async (countryCode) => {
            const { subdivisions } = await commerce.services.localeListSubdivisions(
                countryCode
            );

            const shippingSubdivisions = convertObjectToArray(subdivisions);
            setUser({
                ...user,
                shippingSubdivisions,
                shippingSubdivision: shippingSubdivisions[0],
            });
        };

        if (
            (user.shippingCountry.code && !user.shippingSubdivisions.length) ||
            (previousShippingCountry &&
                previousShippingCountry.code !== user.shippingCountry.code)
        )
            fetchSubdivisions(user.shippingCountry.code);
    }, [user, previousShippingCountry]);

    useEffect(() => {
        const fetchShippingOptions = async (
            checkoutDataId,
            country,
            stateProvince = null
        ) => {
            const options = await commerce.checkout.getShippingOptions(
                checkoutDataId,
                {
                    country,
                    region: stateProvince,
                }
            );

            setUser({
                ...user,
                shippingOptions: options,
                shippingOption: { id: options[0].id },
            });
        };

        if (
            (user.shippingSubdivision.code && !user.shippingOptions.length) ||
            (previousShippingSubdivision &&
                previousShippingSubdivision.code !== user.shippingSubdivision.code)
        )
            fetchShippingOptions(
                checkoutData.id,
                user.shippingCountry.code,
                user.shippingSubdivision.code
            );
    }, [
        user,
        checkoutData.id,
        user.shippingCountry.code,
        user.shippingSubdivision,
        previousShippingSubdivision,
    ]);

    if (
        !user.shippingSubdivisions.length ||
        !user.shippingCountries.length ||
        !user.shippingOptions.length ||
        !checkoutData.live
    ) {
        return (
            <div className="checkout">
                <Container>
                    <Paper className="paper" elevation={3}>
                        <div className="products-spinner">
                            <CircularProgress />
                        </div>
                    </Paper>
                </Container>
            </div>
        );
    }

    return (
        <>
            <br /><br /><br /><br />
            <h1 className="font-bold text-4xl text-center uppercase text-[#57ADAD]">Checkout Items</h1>
            <div className="checkout mb-16">
                <Container>
                    <Paper className="paper" elevation={3}>
                        {checkoutStep !== "confirmation" && (
                            <Stepper
                                className="stepper"
                                activeStep={steps.indexOf(checkoutStep)}
                            >
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        )}
                        {renderCheckoutComponent({
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
                        })}
                    </Paper>
                </Container>
            </div>
        </>
    );
}

export default Checkout
