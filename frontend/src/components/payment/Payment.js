import React,{useState,useEffect} from "react";
import StripeCheckout from "react-stripe-checkout";
 import Button from "react-bootstrap/Button";
import axios from "axios";
import swal from "sweetalert";
const Payment=({amount})=>{
  const [stripeToken, setStripeToken] = useState(null);
  const [message, setMessage] = useState('');
 
  const KEY = 'pk_test_51JmGKeKbP3md6iwKmNhMpoMdThc8BgleFnUw0cI1n1eGKCkRgOPHBSGDFuVBzXVaAMlsmVi8CqNaqOejDjtcBefj00iwrv2rao';


      const onToken = (token) => {
      setStripeToken(token);
    };
    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await axios.post(`http://localhost:5000/payment`, {
            tokenId: stripeToken.id,
            amount: (amount),
          });
          // history.push("/success", { data: res.data });
          setMessage("Success payment")
          swal(
            "Thank You!",
            "When your reservation is confirmed you will be notified by SMS."
          );
          console.log("///////",res.data)
        } catch(err) {
          console.log("payment err",err)
        }
      };
      stripeToken && makeRequest();
    }, [stripeToken]);


    return(
      <>
      <StripeCheckout 
              name="Auto Rental"
            //   image=""
              billingAddress
              shippingAddress
              description="description"
              amount={parseInt(amount * 100)}
              token={onToken}
              stripeKey={KEY}
            >

              <Button  style={{backgroundColor:"rgb(2, 36, 59)",borderRadius:"5px",padding:"6px",color:"#fff"}} >CHECKOUT NOW</Button>

             </StripeCheckout>

            <p>{message}</p>
            </>
    )
}

export default Payment