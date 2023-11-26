import { useId } from "react";
import Button from "../../atoms/button";
import { TextInput } from "../../atoms/input/TextInput";
import { Label } from "../../atoms/text/Label";
import { Paragraph } from "../../atoms/text/Paragraph";
import { Title } from "../../atoms/text/Title";
import List from "../list";

export const NewsletterForm = () => {
  const formInputId = useId();

  return (
    <div className="nw-newsletter-form-helper">
      <div className="nw-newsletter-container">
        <div className="nw-newsletter-form">
          <div className="nw-newsletter-form-info">
            <Title text="Stay updated!" />
            <Paragraph text="Join 60,000+ product managers receiving monthly updates on:" />
            <List
              elements={[
                "Product discovery and building what matters",
                "Measuring to ensure updates are a success",
                "And much more!",
              ]}
            ></List>
          </div>
          <div className="nw-newsletter-form-submit">
            <div className="nw-newsletter-input">
              <Label htmlFor={formInputId} text="Email address" />
              <TextInput id={formInputId} placeholder="email@company.com" />
            </div>
            <Button label="Subscribe to monthly newsletter" />
          </div>
        </div>
        <div className="nw-newsletter-image">
          <img
            className="nw-image-mobile"
            src="/images/illustration-sign-up-mobile.svg"
            alt="illustration-newsletter-sign-up"
          />
          <img
            className="nw-image-desktop"
            src="/images/illustration-sign-up-desktop.svg"
            alt="illustration-newsletter-sign-up"
            height={500}
          />
        </div>
      </div>
    </div>
  );
};
