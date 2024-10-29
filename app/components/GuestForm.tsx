"use client";
import React, { useMemo, useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { GuestData, RSVPGroup } from "../types";
import { validateRSVPGroup } from "../utils";
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
  submitForm: (data: RSVPGroup) => Promise<
    | {
        id: number;
        email: string;
        name: string;
        number: number;
      }
    | undefined
  >;
}> = ({ submitForm }) => {
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
  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    // Add submission logic here
    if (validateRSVPGroup(formData)) {
      submitForm(formData);
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
    <div className="max-w-2xl mx-auto p-6 relative">
      {/* Render the current step */}
      <div className="transition duration-300 ease-in-out transform">
        {renderStep()}
      </div>

      {/* Decorative navigation arrows */}
      {step > 1 && (
        <button
          onClick={handleBack}
          className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-4 bg-purple-100 text-blue-950 rounded-full shadow-lg hover:bg-purple-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      )}
      {step < 3 ? (
        <button
          onClick={handleNext}
          className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-4 bg-blue-950 text-white rounded-full shadow-lg hover:bg-blue-900 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      ) : (
        <button
          onClick={handleSubmit}
          className="absolute top-1/2 -right-5 transform -translate-y-1/2 p-4 bg-blue-950 text-white rounded-full shadow-lg hover:bg-blue-900 focus:outline-none"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default MultiStepForm;
