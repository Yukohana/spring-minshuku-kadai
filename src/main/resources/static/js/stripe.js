const stripe = Stripe('pk_test_51RSpXEQ5vneJ9GsveqkNMVQ0ersq1Hf1ro0AjxvHFs9OWLXMWiDMQazBG0NG2mKk5jcYDag0xM9wUU70UcuAYfO400gaOxXRfG');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});