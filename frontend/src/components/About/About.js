import React from "react";
import "./About.css";
import { GiPlanePilot } from "react-icons/gi";
const About = () => {
  return (
    <div className="About">
      <div className="part_1">
        <h1 style={{ fontSize: "20px", textAlign: "center" }}>
          <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
          <span style={{ color: "rgb(252,158,21)" }}>val</span>
          <GiPlanePilot style={{ fontSize: "3vw" }} />
          <span style={{ color: "rgb(227,64,61)" }}>eo</span>
          .com™
        </h1>
        <p>
          Founded in 2021 in Jordan, Traveleo.com has grown from a small Dutch
          startup to one of the world’s leading digital travel companies. Part
          of Booking Holdings Inc. (NASDAQ: BKNG), Booking.com’s mission is to
          make it easier for everyone to experience the world.
        </p>
        <p>
          By investing in the technology that helps take the friction out of
          travel, Booking.com seamlessly connects millions of travellers with
          memorable experiences, a range of transport options and incredible
          places to stay - from homes to hotels and much more. As one of the
          world’s largest travel marketplaces for both established brands and
          entrepreneurs of all sizes, Booking.com enables properties all over
          the world to reach a global audience and grow their businesses.
        </p>

        <p>
          Booking.com is available in 43 languages and offers more than 28
          million total reported accommodation listings, including over 6.2
          million listings alone of homes, apartments and other unique places to
          stay. No matter where you want to go or what you want to do,
          Booking.com makes it easy and backs it all up with 24/7 customer
          support.
        </p>
      </div>
      <div className="part_2">
        <h2 style={{ fontSize: "20px", textAlign: "center" }}>
          {" "}
          What
          <span style={{ color: "rgb(19,145,210)" }}>Tre</span>
          <span style={{ color: "rgb(252,158,21)" }}>val</span>
          <GiPlanePilot style={{ fontSize: "3vw" }} />
          <span style={{ color: "rgb(227,64,61)" }}>eo</span>.com offers
        </h2>
        <h3>Incredible choice</h3>

        <p>
          Whether you want to stay in a chic city apartment, a luxury beach
          resort or a cosy B&B in the countryside, Booking.com provides you with
          amazing diversity and breadth of choice - all in one place.{" "}
        </p>
        <h3>Low rates</h3>
        <p>
          Traveleo.com guarantees to offer you the best available rates. And
          with our promise to price match, you can rest assured that you’re
          always getting a great deal.
        </p>
        <h3>Instant confirmation</h3>
        <p>
          At Booking.com, every reservation is instantly confirmed. Once you’ve
          found your perfect stay, a few clicks are all it takes.
        </p>
        <h3>No reservation fees</h3>
        <p>
          We don’t charge you any booking fees or add any administrative
          charges. And in many cases, your booking can be cancelled free of
          charge.
        </p>
        <h3>Secure booking</h3>
        <p>
          We facilitate hundreds of thousands of transactions every day through
          our secure platform, and work to the highest standards to guarantee
          your privacy. For further details, please check our Privacy Statement.
        </p>
        <h3>24/7 support</h3>
        <p>
          Whether you’ve just booked or are already enjoying your trip, our
          customer experience team are on hand around the clock to answer your
          questions and advocate on your behalf in more than 40 languages. Make
          sure to check out our FAQ for travellers.
        </p>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default About;
