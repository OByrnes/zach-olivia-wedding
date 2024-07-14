"use client";
import React, { useState } from "react";
import { GuestData, RSVPGroup } from "../types";
import styles from "./RSVPForm.module.css";
import handleRsvp from "../rsvp/api/rsvp";
import { useRouter } from "next/navigation";

const RSVPForm: React.FC = () => {
  const [rsvpGroup, setRsvpGroup] = useState<RSVPGroup>({
    email: "",
    name: "",
    guests: [],
    number: 1,
  });

  const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-Free",
    "Nut-Free",
    "Dairy-Free",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof RSVPGroup
  ) => {
    if (field === "name" && rsvpGroup.guests.length === 0) {
      setRsvpGroup({
        ...rsvpGroup,
        [field]: e.target.value,
        guests: [{ name: e.target.value, comments: "", diet: [] }],
      });
    } else {
      setRsvpGroup({ ...rsvpGroup, [field]: e.target.value });
    }
  };

  const handleGuestChange = (
    index: number,
    field: keyof GuestData,
    value: string | string[]
  ) => {
    const updatedGuests = rsvpGroup.guests.map((guest, i) =>
      i === index ? { ...guest, [field]: value } : guest
    );
    setRsvpGroup({ ...rsvpGroup, guests: updatedGuests });
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = parseInt(e.target.value, 10);
    if (number) {
      let guest_list = rsvpGroup.guests;
      if (guest_list.length < number) {
        guest_list = [
          ...guest_list,
          ...Array(number - guest_list.length).fill({
            name: "",
            comments: "",
            diet: [],
          }),
        ];
      } else {
        guest_list = guest_list.slice(0, number);
      }
      setRsvpGroup({
        ...rsvpGroup,
        number,
        guests: guest_list,
      });
    } else {
      setRsvpGroup({
        ...rsvpGroup,
        number,
        guests: Array(1).fill({ name: rsvpGroup.name, comments: "", diet: [] }),
      });
    }
  };
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await handleRsvp(rsvpGroup);
    if (response) {
      router.push("/dashboard");
    }
    console.log(response);
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <div className={styles["form-group"]}>
        <label>
          Name:
          <input
            type="text"
            value={rsvpGroup.name}
            onChange={(e) => handleInputChange(e, "name")}
            required
          />
        </label>
      </div>
      <div className={styles["form-group"]}>
        <label>
          Email:
          <input
            type="email"
            value={rsvpGroup.email}
            onChange={(e) => handleInputChange(e, "email")}
            required
          />
        </label>
      </div>
      <div className={styles["form-group"]}>
        <label>
          Number of Guests:
          <input
            type="number"
            min="1"
            value={rsvpGroup.number}
            onChange={handleNumberChange}
            required
          />
        </label>
      </div>
      {rsvpGroup.guests.map((guest, index) => (
        <div className={styles["form-group"]} key={index}>
          <h3>Guest {index + 1}</h3>
          <div>
            <label>
              Name:
              <input
                type="text"
                value={guest.name}
                onChange={(e) =>
                  handleGuestChange(index, "name", e.target.value)
                }
                required
              />
            </label>
          </div>
          <div className={styles["form-group"]}>
            <label>Dietary Restrictions:</label>
            {dietaryOptions.map((option) => (
              <label key={option}>
                <input
                  type="checkbox"
                  checked={guest.diet?.includes(option) || false}
                  onChange={(e) => {
                    const newDiet = e.target.checked
                      ? [...(guest.diet || []), option]
                      : (guest.diet || []).filter((diet) => diet !== option);
                    handleGuestChange(index, "diet", newDiet);
                  }}
                />
                {option}
              </label>
            ))}
          </div>
          <div className={styles["form-group"]}>
            <label>
              Comments:
              <textarea
                value={guest.comments}
                onChange={(e) =>
                  handleGuestChange(index, "comments", e.target.value)
                }
              />
            </label>
          </div>
        </div>
      ))}
      <button type="submit">Submit RSVP</button>
    </form>
  );
};

export default RSVPForm;
