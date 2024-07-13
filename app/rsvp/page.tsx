"use client";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FC, FormEvent, MouseEventHandler, useState } from "react";
interface GuestData {
  name?: string;
  rsvp?: boolean;
  menuChoice?: string | null;
  comments?: string;
  diet?: string[];
}
interface RSVPgroup {
  email: string;
  name: string;
  guests: GuestData[];
  number: number;
}
const initial_group_data = {
  name: "",
  email: "",
  guests: [{ name: "", menuChoice: "", diet: [], rsvp: true }],
  number: 1,
};

const GuestComponent: FC<{
  id: number;
  handleChange: (
    newValue: string | number | boolean | undefined,
    key: string,
    guest: boolean
  ) => void;
  guest: GuestData;
}> = ({ id, handleChange, guest }) => {
  const [showComments, setComments] = useState<boolean>(false);
  return (
    <div>
      <div className="mb-4">
        <label className="block text-darkblue text-sm mb-2" htmlFor="name">
          {`Name of Guest No. ${id + 1}}`}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-darkblue leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          value={guest.name}
          type="text"
          required
          placeholder="Guest name"
          onChange={(e) => handleChange(e.target.value, `name-${id}`, true)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-darkblue text-sm mb-2" htmlFor="menu">
          {`Menu Choice of Guest No. ${id + 1}}`}
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-darkblue leading-tight focus:outline-none focus:shadow-outline"
          id="menu"
          value={guest.menuChoice || ""}
          onChange={(e) =>
            handleChange(e.target.value, `menuChoice-${id}`, true)
          }
          required
        >
          <option value="someOption">Some option</option>
          <option value="otherOption">Other option</option>
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-darkblue text-sm mb-2"
          htmlFor="showcomments"
        >
          Any additional comments or dietary requirements for Guest {id + 1}
        </label>

        <div className="toggle-switch">
          <input
            type="checkbox"
            className="checkbox"
            checked={showComments}
            onChange={(e) => handleChange(e.target.value, "rsvp", false)}
            name={"show comments"}
            id={"show comments"}
          />
          <label className="label" htmlFor={"show comments"}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-darkblue text-sm mb-2" htmlFor="name">
          {`Any additional menu requirements for Guest No. ${id + 1}`}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-darkblue leading-tight focus:outline-none focus:shadow-outline"
          id="comments"
          value={guest.comments}
          type="text"
          required
          placeholder="Comments"
          onChange={(e) => handleChange(e.target.value, `comments-${id}`, true)}
        />
      </div>
    </div>
  );
};
const RSVP: NextPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<RSVPgroup>(initial_group_data);

  const onSubmit: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const form = new FormData();
      for (const [key, value] of Object.entries(formData)) {
        form.append(key, value);
      }
      const response = await fetch("/api/rsvp", {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      //@ts-expect-error
      setError(error?.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleChange = (
    newValue: string | number | boolean | undefined,
    key: string,
    guest: boolean
  ) => {
    if (key === "number" && newValue !== formData.number) {
      let guests = formData.guests;
      if (guests.length > Number(newValue)) {
        guests = guests.slice(0, Number(newValue));
      } else {
        guests.push({ name: "", menuChoice: "", comments: "" });
      }
      setFormData((prevValue) => ({
        ...prevValue,
        guests: guests,
        number: Number(newValue),
      }));
    }
    if (guest) {
      const [val, id] = key.split("-");
      if (Number(id) === 0) {
        setFormData((prevValue) => ({ ...prevValue, [val]: newValue }));
      } else {
        let guest = { ...formData.guests.at(Number(id) + 1), [val]: newValue };
        let allguests = formData.guests;
        allguests[Number(id) + 1] = guest;
        setFormData((prevValue) => ({ ...prevValue, guests: allguests }));
      }
    } else {
      setFormData((prevValue) => ({ ...prevValue, [key]: newValue }));
    }
  };
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Head>
        <title>RSVP</title>
        <meta name="description" content="RSVP for our wedding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 py-5">
        <div className="bgWrap">
          <Image
            src="/background.jpg"
            object-fit="cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Zach+O"
            width={700}
            height={475}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <h1 className="text-4xl text-center">RSVP for Our Wedding</h1>
        <p className="mt-3 text-xl text-center">
          We are excited to celebrate with you!
        </p>
        {/* <form className="mt-6 max-w-md w-full">
          <div className="mb-4">
            <label className="block text-darkblue text-sm mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkblue leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              required
              onChange={(e) => handleChange(e.target.value, "name-0", true)}
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-darkblue text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkblue leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              onChange={(e) => handleChange(e.target.value, "email", false)}
              placeholder="Your email"
            />
          </div>
         
          <div className="mb-4">
            <label
              className="block text-darkblue text-sm mb-2"
              htmlFor="attending"
            >
              Will you be attending?
            </label>

            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                checked={formData.rsvp}
                onChange={(e) => handleChange(e.target.value, "rsvp", false)}
                name={"rsvp"}
                id={"rsvp"}
              />
              <label className="label" htmlFor={"rsvp"}>
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-darkblue text-sm mb-2"
              htmlFor="number"
            >
              Number of people in your party
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkblue leading-tight focus:outline-none focus:shadow-outline"
              id="number"
              type="number"
              onChange={(e) => handleChange(e.target.value, "number", false)}
              placeholder="Number of people attending"
            />
          </div>
          {formData.guests.map((guest, i) => (
            <GuestComponent handleChange={handleChange} id={i} guest={guest} />
          ))}
          <div className="flex items-center justify-between">
            <button
              className="hover:bg-mdblue-700 text-darkblue py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </form> */}
      </main>
    </div>
  );
};

export default RSVP;
