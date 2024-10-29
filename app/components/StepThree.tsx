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
    <div className="border border-blue-950 rounded-lg p-6 shadow-md max-w-lg mx-auto my-4 backdrop-grayscale-0 bg-purple-100/30">
      <h6 className="text-xl mb-4 text-blue-950">
        Anything we should know about you?
      </h6>
      <div>
        {formData.guests?.map((ele, i) => (
          <div key={ele.name}>
            <input
              type="text"
              placeholder="Name"
              value={ele.name}
              onChange={(e) =>
                setFormData((prev) =>
                  editGuestName(prev, i, e.target.value || "")
                )
              }
              className="w-full p-2 text-blue-950 border border-blue-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <input
              type="text"
              placeholder="Comments"
              value={ele.comments}
              onChange={(e) =>
                setFormData((prev) =>
                  editGuestComments(prev, i, e.target.value || "")
                )
              }
              className="w-full text-blue-950 p-2 border border-blue-950 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-950"
            />
            <div className="w-full p-2 border border-blue-950 rounded-md mb-4 bg-white-100 focus:outline-none focus:ring-2 focus:ring-blue-950">
              <label className="text-blue-950">Dietary Restrictions:</label>
              {dietaryOptions.map((option) => (
                <label className="text-blue-950 " key={option}>
                  <input
                    type="checkbox"
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
