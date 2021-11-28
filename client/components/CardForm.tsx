import React, { useMemo, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardNumberElement, CardCvcElement, CardExpiryElement } from "@stripe/react-stripe-js";
import { Button, InputContainer } from "../styles/form.style";
import Error from "./Error";

const stripePromise = loadStripe(
	"pk_test_51K0Hd7SG1eYyyJfNR68qJKlqigMzX6hHZIsSPHRqdOeyi3hSxOWDAt0FenlUBMZ9ZAiqPRs9EAH8aguVdF5azfLg00Dp0oPEFm",
);

interface CheckoutFormProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useOptions = () => {
	const options = useMemo(
		() => ({
			style: {
				base: {
					fontSize: "0.88rem",
					padding: "13px 22px",
					color: "#1b3e87",
					letterSpacing: "0.025em",
					paddingLeft: "10px",
					fontWeight: 400,
					lineHeight: "45px",
					height: "45px",

					"::placeholder": {
						color: "#1b3e87",
						fontFamily: "'Montserrat', sans-serif",
						fontWeight: 400,
						fontSize: "0.88rem",
					},
				},
				invalid: {
					color: "#F53997",
				},
			},
		}),
		[],
	);

	return options;
};

const StripeForm: React.FC<CheckoutFormProps> = ({ handleSubmit }) => {
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();

	const [cardErrMsg] = useState("");

	return (
		<Elements stripe={stripePromise}>
			<form onSubmit={handleSubmit}>
				<InputContainer mb={15}>
					<label htmlFor="username">CARD NUMBER</label>
					<CardNumberElement
						options={{
							...options,
							placeholder: "",
						}}
						className="stripe_input"
						onChange={() => {}}
					/>
					{cardErrMsg && <Error message={cardErrMsg} />}
				</InputContainer>
				<InputContainer mb={15}>
					<label htmlFor="username">EXPIRY DATE</label>
					<CardExpiryElement
						options={{
							...options,
							placeholder: "",
						}}
						className="stripe_input"
						onChange={() => {}}
					/>
					{cardErrMsg && <Error message={cardErrMsg} />}
				</InputContainer>
				<InputContainer mb={25}>
					<label htmlFor="username">CVV</label>
					<CardCvcElement
						options={{
							...options,
							placeholder: "",
						}}
						className="stripe_input"
						onChange={() => {}}
					/>
					{cardErrMsg && <Error message={cardErrMsg} />}
				</InputContainer>
				<Button type="submit" disabled={!stripe || !elements}>
					ADD CARD
				</Button>
			</form>
		</Elements>
	);
};

const CheckoutForm = (props) => (
	<Elements stripe={stripePromise}>
		<StripeForm {...props} />
	</Elements>
);

export default CheckoutForm;
