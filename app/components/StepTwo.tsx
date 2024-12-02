import React, { useEffect, useState } from "react";
import { GuestData, RSVPGroup } from "../types";

interface StepTwoProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
}

const StepTwo: React.FC<StepTwoProps> = ({ formData, setFormData, errors }) => {
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
    <div className="drop-shadow-md size-full border-deep-cove-950/90 grid gap-4 grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
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
  );
};

export default StepTwo;
