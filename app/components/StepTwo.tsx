import React, { useEffect, useState } from "react";
import { GuestData, RSVPGroup } from "../types";

interface StepTwoProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
  handleNext: () => void;
  verifyNext: boolean;
  handleBack: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  formData,
  setFormData,
  errors,
  handleBack,
  handleNext,
  verifyNext,
}) => {
  useEffect(() => {
    if (formData.number && formData.number > 1) {
    }
  }, [formData.number]);
  const [names, setNames] = useState<string>(
    formData.guests?.map((ele) => ele.name).join(", ") || ""
  );
  const make_guests = (names?: string): GuestData[] => {
    if (names) {
      let guests: GuestData[] = names
        .split(",")
        .map((ele) => ({ name: ele.trim(), comments: "", diet: [] }));
      return [{ name: formData.name || "", comments: "", diet: [] }, ...guests];
    } else {
      return [{ name: formData.name || "", comments: "", diet: [] }];
    }
  };
  return (
    <div className="w-full relative flex content-center items-center">
      <button
        onClick={handleBack}
        className="size-8 flex content-center enabled:text-deep-cove-950 items-center enabled:bg-deep-cove-100/70 disabled:text-slate-500 disabled:bg-text-slate-100 top-1/2 -right-4 transform -translate-y-1/2 p-4 dark:hover:bg-deep-cove-950 hover:enabled:bg-deep-cove-600 text-deep-cove-950 hover:text-deep-cove-100 rounded-full hover:shadow-lg focus:outline-none"
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
      <div className="drop-shadow-md grow border-deep-cove-950/90 grid  grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
        <label
          htmlFor="number"
          className="block text-sm font-medium leading-6 text-deep-cove-950"
        >
          <span className="text-deep-cove-950">
            How many people are in your party?{" "}
          </span>
          <input
            type="number"
            placeholder="Number"
            value={formData.number || ""}
            onChange={(e) =>
              setFormData({ ...formData, number: Number(e.target.value) })
            }
            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
          />
        </label>
        {errors.number ? (
          <label className="text-red-500">{errors.number}</label>
        ) : null}
        {formData.number && formData.number > 1 ? (
          <>
            <label
              htmlFor="names"
              className="block text-sm font-medium leading-6 text-deep-cove-950"
            >
              <span className="text-deep-cove-950">
                {formData.number && formData.number > 2
                  ? "What are their names?"
                  : "What is their name?"}
              </span>
              <input
                id="names"
                type="text"
                placeholder="Guest names"
                value={names}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    guests: make_guests(e.target.value),
                  });
                  setNames(e.target.value || "");
                }}
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
              />
            </label>

            <label className="text-deep-cove-950">
              Please separate names with a comma.
            </label>
          </>
        ) : null}
      </div>
      <button
        onClick={handleNext}
        disabled={!verifyNext}
        className="size-8 enabled:text-deep-cove-950 flex content-center items-center enabled:bg-deep-cove-400 disabled:text-slate-500 disabled:bg-text-slate-100 top-1/2 -right-4 transform -translate-y-1/2 p-4 dark:hover:bg-deep-cove-950 hover:enabled:bg-deep-cove-600 text-deep-cove-950 hover:text-deep-cove-100 rounded-full hover:shadow-lg focus:outline-none"
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

export default StepTwo;
