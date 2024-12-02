import React from "react";
import { RSVPGroup } from "../types";

interface StepThreeProps {
  formData: Partial<RSVPGroup>;
  setFormData: React.Dispatch<React.SetStateAction<Partial<RSVPGroup>>>;
  errors: { [key: string]: string };
}

const StepThree: React.FC<StepThreeProps> = ({ formData, setFormData }) => {
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
    <div className="drop-shadow-md size-full border-deep-cove-950/90 grid gap-4 grid-cols-1 gap-3 p-6 shadow-md backdrop-grayscale-50 bg-deep-cove-100/60 dark:hover:bg-deep-cove-100/60">
      <h6 className="text-xl mb-4 text-deep-cove-950">
        Anything we should know about you?
      </h6>
      <div>
        {formData.guests?.map((ele, i) => (
          <div key={ele.name}>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-deep-cove-950"
            >
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
            </label>
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
  );
};

export default StepThree;
