import React from "react";
import { RSVPGroup } from "../types";

interface StepThreeProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
  handleNext: () => void;
  verifyNext: boolean;
  handleBack: () => void;
}

const StepThree: React.FC<StepThreeProps> = ({
  formData,
  setFormData,
  handleBack,
  handleNext,
  verifyNext,
}) => {
  const editGuestName = (
    formData: Partial<RSVPGroup>,
    index: number,
    newName?: string
  ) => {
    if (formData.guests) {
      let guest = formData.guests[index];
      if (newName) {
        let newGuests = [...formData.guests];
        newGuests[index] = guest;
        return { ...formData, guests: newGuests };
      }
    }
    return formData;
  };
  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Nut-Free",
    "Dairy-Free",
  ];
  const editGuestComments = (
    formData: Partial<RSVPGroup>,
    index: number,
    newComments?: string
  ) => {
    if (formData.guests) {
      let guest = formData.guests[index];

      let newGuests = [...formData.guests];
      newGuests[index] = { ...guest, comments: newComments };
      return { ...formData, guests: newGuests };
    }
    return formData;
  };
  const editDiet = (
    formData: Partial<RSVPGroup>,
    index: number,
    newDiet?: string[]
  ) => {
    if (formData.guests) {
      let guest = formData.guests[index];
      if (newDiet) {
        let newGuests = [...formData.guests];
        newGuests[index] = { ...guest, diet: newDiet };
        return { ...formData, guests: newGuests };
      }
    }
    return formData;
  };
  return (
    <div className="w-full enabled:text-deep-cove-950 relative flex content-center items-center">
      <button
        onClick={handleBack}
        className="size-8 flex content-center items-center enabled:bg-deep-cove-100/70 disabled:text-slate-500 disabled:bg-text-slate-100 top-1/2 -right-4 transform -translate-y-1/2 p-4 dark:hover:bg-deep-cove-950 hover:enabled:bg-deep-cove-600 text-deep-cove-950 hover:text-deep-cove-100 rounded-full hover:shadow-lg focus:outline-none"
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
      <div className="drop-shadow-md  scroll-m-0 snap-x snap-mandatory border-deep-cove-950/90 grid grid-cols-1 gap-3 p-4 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
        <h6 className="text-xl mb-4 text-deep-cove-950">
          Anything we should know about you and your guest(s)?
        </h6>
        <div className="divide-y-2 snap-always snap-center">
          {formData.guests?.map((ele, i) => (
            <div key={ele.name}>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-deep-cove-950"
              ></label>
              <input
                type="text"
                placeholder="Name"
                value={ele.name}
                onChange={(e) =>
                  setFormData((prev) =>
                    editGuestName(prev, i, e.target.value || "")
                  )
                }
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
              />
              <label
                htmlFor="comments"
                className="block text-sm font-medium leading-6 text-deep-cove-950"
              >
                <span className="text-deep-cove-950">First and Last Name</span>
                <input
                  type="text"
                  placeholder="Comments"
                  value={ele.comments}
                  onChange={(e) =>
                    setFormData((prev) =>
                      editGuestComments(prev, i, e.target.value || "")
                    )
                  }
                  className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
                />
              </label>
              <div className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-deep-cove-950">
                <label className="text-deep-cove-950 block w-full">
                  Dietary Restrictions:
                </label>
                {dietaryOptions.map((option) => (
                  <label className="text-deep-cove-950  mr-1" key={option}>
                    <input
                      type="checkbox"
                      className="mt-0 px-1 mr-1 border-1 border-gray-200 focus:ring-0 focus:border-deep-cove-950"
                      checked={ele.diet?.includes(option) || false}
                      onChange={(e) => {
                        const newDiet = e.target.checked
                          ? [...(ele.diet || []), option]
                          : (ele.diet || []).filter((diet) => diet !== option);
                        setFormData((prev) => editDiet(prev, i, newDiet));
                      }}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        disabled={!verifyNext}
        onClick={handleNext}
        className="size-6 flex content-center items-center enabled:bg-deep-cove-400 disabled:text-slate-500 disabled:bg-text-slate-100 top-1/2 -right-4 transform -translate-y-1/2 p-4 dark:hover:bg-deep-cove-950 hover:enabled:bg-deep-cove-600 text-deep-cove-950 hover:text-deep-cove-100 rounded-full hover:shadow-lg focus:outline-none"
      >
        Submit
      </button>
    </div>
  );
};

export default StepThree;
