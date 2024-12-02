import React from "react";
import { RSVPGroup } from "../types";

interface StepOneProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
}

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData }) => {
  return (
    <div className="drop-shadow-md size-full border-deep-cove-950/90 grid grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
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
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
        />
      </label>
      {/* <input
        id="name"
        type="text"
        placeholder="Name"
        required
        value={formData.name || ""}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border text-deep-cove-950 border-deep-cove-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-deep-cove-950"
      /> */}
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
        />
      </label>
    </div>
  );
};

export default StepOne;
