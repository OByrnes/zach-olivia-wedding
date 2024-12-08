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
  const verifyNext: boolean = useMemo(() => {
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
    return false;
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
            verifyNext={verifyNext}
            handleNext={handleNext}
          />
        );
      case 2:
        return (
          <StepTwo
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            verifyNext={verifyNext}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <StepThree
            formData={formData}
            setFormData={setFormData}
            errors={errors}
            verifyNext={verifySubmit}
            handleNext={handleSubmit}
            handleBack={handleBack}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full mx-auto relative">
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
      <div className="transition duration-300 ease-in-out transform relative">
        {renderStep()}
      </div>
    </div>
  );
};

export default MultiStepForm;
