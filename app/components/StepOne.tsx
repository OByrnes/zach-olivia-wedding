import React from "react";
import { RSVPGroup } from "../types";

interface StepOneProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
  handleNext: () => void;
  verifyNext: boolean;
}

const StepOne: React.FC<StepOneProps> = ({
  formData,
  setFormData,
  handleNext,
  verifyNext,
}) => {
  return (
    <div className="w-full relative flex  flex-row content-center items-center">
      <div className="drop-shadow-md grow content-center border-deep-cove-950/90 grid grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6 text-deep-cove-950"
        >
          <span>First and Last Name</span>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            autoComplete="name"
            value={formData.name || ""}
            onChange={(e) =>
              setFormData((prevFormData) => {
                let guests = prevFormData.guests || [];
                guests[0] = { name: e.target.value };
                return {
                  ...prevFormData,
                  name: e.target.value,
                  guests: guests,
                };
              })
            }
            required
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
          />
        </label>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-deep-cove-950"
        >
          <span className="text-deep-cove-950">Enter your email</span>

          <input
            id="email"
            required
            type="email"
            placeholder="E-Mail"
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
          />
        </label>
      </div>
      <button
        onClick={handleNext}
        disabled={!verifyNext}
        className="size-8 p-1 flex content-center enabled:text-deep-cove-950 items-center enabled:bg-deep-cove-400 disabled:text-slate-500 disabled:bg-text-slate-100 top-1/2 -right-4 transform -translate-y-1/2  dark:hover:bg-deep-cove-950 hover:enabled:bg-deep-cove-600 text-deep-cove-950 hover:text-deep-cove-100 rounded-full hover:shadow-lg focus:outline-none"
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
    </div>
  );
};

export default StepOne;
