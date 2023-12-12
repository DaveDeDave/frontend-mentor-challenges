import { useId, useRef, useState } from "react";
import Button from "../../atoms/button";
import { TextInput } from "../../atoms/input/TextInput";
import { Paragraph } from "../../atoms/text/Paragraph";
import { Title } from "../../atoms/text/Title";
import List from "../list";
import { emailRegex } from "../../../utilities/general";
import { SuccessIcon } from "../../atoms/icon";
import Spacer from "../../atoms/spacer";

interface NewsletterFormErrors {
  email: boolean;
}

export const NewsletterForm = () => {
  const [errors, setErrors] = useState<NewsletterFormErrors>();
  const [submittedEmail, setSubmittedEmail] = useState<string | null>();

  const emailInputId = useId();
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (!emailRegex.test(emailInputRef.current!.value)) {
      setErrors({
        email: true,
      });
    } else {
      setErrors({
        email: false,
      });
      setSubmittedEmail(emailInputRef.current!.value);
    }
  };

  return (
    <div className="nw-newsletter-form-helper">
      {!submittedEmail ? (
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
              <TextInput
                id={emailInputId}
                ref={emailInputRef}
                error={
                  errors?.email
                    ? { message: "Valid email required" }
                    : undefined
                }
                label="Email address"
                placeholder="email@company.com"
              />

              <Button
                label="Subscribe to monthly newsletter"
                onClick={handleSubmit}
              />
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
      ) : (
        <div className="nw-newsletter-container">
          <div className="nw-newsletter-confirm">
            <SuccessIcon />
            <Title text="Thanks for subscribing" />
            <Paragraph
              text={`A confirmation email has been sent to ${submittedEmail}. Please open it and click the button inside to confirm your subscription.`}
            ></Paragraph>
            <Spacer />
            <Button
              label="Dismiss Message"
              onClick={() => {
                setSubmittedEmail(null);
              }}
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
};
