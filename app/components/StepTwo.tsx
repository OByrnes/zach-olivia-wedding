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
    <div className="border border-blue-950 rounded-lg p-6 shadow-md max-w-lg mx-auto my-4 backdrop-grayscale-0 bg-purple-100/30">
      <h6 className="text-xl mb-4 text-blue-950">
        How many people are in your party?
      </h6>
      <input
        type="number"
        placeholder="Number"
        value={formData.number || ""}
        onChange={(e) =>
          setFormData({ ...formData, number: Number(e.target.value) })
        }
        className="w-full p-2 border text-blue-950 border-blue-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
      />
      {errors.number ? (
        <label className="text-red-500">{errors.number}</label>
      ) : null}
      {formData.number && formData.number > 1 ? (
        <>
          <input
            type="text"
            placeholder="Guest names"
            value={names}
            onChange={(e) => {
              setFormData({ ...formData, guests: make_guests(e.target.value) });
              setNames(e.target.value || "");
            }}
            className="w-full p-2 border text-blue-950 border-blue-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
          />
          {names.split(",").length !== (formData.number || 0) - 1 ? (
            <label className="text-red-500">
              You might be miss counting the names
            </label>
          ) : null}
          <label className="text-blue-950">
            Please separate names with a comma.
          </label>
        </>
      ) : null}
    </div>
  );
};

export default StepTwo;
