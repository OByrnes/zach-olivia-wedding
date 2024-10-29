import React from "react";
import { RSVPGroup } from "../types";

interface StepOneProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
}

const StepOne: React.FC<StepOneProps> = ({ formData, setFormData }) => {
  return (
    <div className="border border-blue-950/50 p-6 shadow-md max-w-lg mx-auto my-4 backdrop-grayscale-50 bg-blue-100/30">
      <h2 className="text-2xl mb-4 text-blue-950">
        We are excited to Celebrate with you!
      </h2>

      <label
        htmlFor="name"
        className="block text-sm font-medium leading-6 text-blue-900"
      >
        First and Last Name
      </label>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
          First and Last Name
        </span>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          autoComplete="name"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
        />
      </div>
      {/* <input
        id="name"
        type="text"
        placeholder="Name"
        required
        value={formData.name || ""}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full p-2 border text-blue-950 border-blue-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
      /> */}
      <label
        htmlFor="name"
        className="block text-sm font-medium leading-6 text-blue-900"
      >
        {" "}
        Enter your email
      </label>
      <input
        type="text"
        placeholder="E-Mail"
        value={formData.email || ""}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="w-full p-2 border text-blue-950 border-blue-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
      />
    </div>
  );
};

export default StepOne;
