"use client";
import React, { useMemo, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { GuestData, RSVPGroup } from "../types";
import { validateRSVPGroup } from "../utils";
import { NavLinks } from "./NavLinks";
function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function makeErrors(
  data: Partial<RSVPGroup>,
  step: Number
): { [key: string]: string } {
  let errors: { [key: string]: string } = {};
  if (step === 1) {
    if (!data.email) {
      errors["email"] = "Please add an Email";
    } else if (data.email && !validateEmail(data.email)) {
      errors["email"] = "Thats not an email";
    } else {
      if (errors.email) {
        delete errors["email"];
      }
    }
    if (!data.email) {
      errors["name"] = "Please enter a name";
    } else {
      if (errors.name) {
        delete errors["name"];
      }
    }
  } else if (step === 2) {
    if (!data.number) {
      errors["number"] =
        "Add number of guests in your party. (Including yourself)";
    } else if (data.number < 0) {
      ("What?!!? Are you going to start kidnapping guests");
    } else if (data.number < 1) {
      errors["number"] = "Zero Guests?!? You aren't going to make it?";
    } else {
      if (errors.number) {
        delete errors["number"];
      }
    }
  }

  return errors;
}
const MultiStepForm: React.FC<{
  submitForm: (data: RSVPGroup) => Promise<void | undefined>;
}> = ({ submitForm }) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<Partial<RSVPGroup>>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const verifyNext = useMemo(() => {
    if (step === 1) {
      if (formData.email && formData.name) {
        if (validateEmail(formData.email)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else if (step === 2) {
      if (!formData.number) {
        return false;
      } else if (formData.number < 1) {
        return false;
      }
      return true;
    }
  }, [formData, step]);

  const verifySubmit = useMemo(() => validateRSVPGroup(formData), [formData]);
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    // Add submission logic here
    if (validateRSVPGroup(formData)) {
      submitForm(formData);
      setAlertOpen(true);
    } else {
      setErrors;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <StepOne
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            setFormData={setFormData}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="size-4/5 mx-auto p-6 relative">
      {alertOpen ? (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4"
          role="alert"
        >
          <p className="font-bold">Success!</p>
          <p>We will see you there!</p>
          <NavLinks href="/">Go Back Home screen</NavLinks>
        </div>
      ) : null}
      {/* Render the current step */}
      <div className="transition duration-300 ease-in-out transform">
        {renderStep()}
      </div>

      {/* Decorative navigation arrows */}
      {step > 1 && (
        <button
          onClick={handleBack}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-4 hover:bg-deep-cove-600 rounded-full hover:shadow-lg bg-transparent focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 box-shadow-lg hover:box-shadow-0"
          >
            <path
              fillRule="evenodd"
              d="M10.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L12.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M4.72 11.47a.75.75 0 0 0 0 1.06l7.5 7.5a.75.75 0 1 0 1.06-1.06L6.31 12l6.97-6.97a.75.75 0 0 0-1.06-1.06l-7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
      {step < 3 ? (
        <button
          onClick={handleNext}
          disabled={!verifyNext}
          className="absolute disabled:text-slate-500 top-1/2 -right-4 transform -translate-y-1/2 p-4 dark:hover:bg-deep-cove-950 hover:bg-deep-cove-600 text-deep-cove-950 hover:text-deep-cove-100 rounded-full hover:shadow-lg bg-transparent focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 box-shadow-lg hover:shadow-0"
          >
            <path
              fillRule="evenodd"
              d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ) : (
        <button
          disabled={!verifySubmit}
          onClick={handleSubmit}
          className="absolute top-1/2 disabled:text-slate-500 -right-5 transform -translate-y-1/2 p-4 hover:bg-deep-cove-600 dark:hover:bg-deep-cove-950 text-deep-cove-950 dark:text-deep-cove-50 hover:dark:text-purple-100 rounded-full hover:shadow-lg focus:outline-none"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default MultiStepForm;
