"use client";

import { downloadBrochureActions } from "@/actions/actions";
import React, { useState, useTransition } from "react";

import { SubmitButton } from "./Button";
import { usePathname } from "next/navigation";

const initialState = {
  message: "",
};

const DownloadForm = () => {
  const [resMessage, setResMessage] = useState<{ message: string }>(
    initialState
  );
  const [dpdfName, satePdfName] = useState<string|null>(null)
  const [pending, setTransition] = useTransition();
  const pathName = usePathname();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("pathName", pathName);

    let pdfName;

    switch (pathName) {
      case "/oleoresin":
        pdfName = "Oleoresin.pdf";
        break;
      case "/absolute-oil":
        pdfName = "Absolute_Oil.pdf";
        break;
      case "/carrier-oil":
        pdfName = "Carrier_Oil.pdf";
        break;
      case "/floral-water":
        pdfName = "Floral_Water.pdf";
        break;
      case "/essential-oil":
        pdfName = "Essential_Oil.pdf";
        break;
      default:
        pdfName = null;
    }

    const pdfUrl = `/pdf/${pdfName}`;

   

    // Create a FormData object from the form
    const formData = new FormData(e.currentTarget);
    setTransition(() => {
      downloadBrochureActions({}, formData)
        .then((res) => {
          setResMessage(res);
          new Promise((resolve) => {
            setTimeout(resolve, 6000); // 3-second delay
          });
          if(!pdfName) return false;
          satePdfName(pdfName)
          const link = document.createElement("a");
          link.href = pdfUrl;
          link.setAttribute("download", pathName); // Set download attribute
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link); // Clean up
          window.location.reload()
        })
        .catch((err) => {
          console.error(err);
        });
    });
  };

  //  const [state, formAction] = useFormState(downloadBrochureActions,initialState);
  //  const { pending } = useFormStatus();

  //  console.log('pending:', pending);
  //  console.log('state:', state);

  return (
    <form onSubmit={handleSubmit}>
      {resMessage.message && (<div className="bg-green-300/10 text-green-800 px-4 py-1 rounded-lg mb-5">{resMessage.message}</div>)}     
      <label htmlFor="name">Name:</label>
      <br />
      <input
        type="text"
        id="name"
        name="name"
        // value={formData.name}
        // onChange={handleChange}
        required
        // disabled={pending}
      />
      <br />
      <br />

      <label htmlFor="email">Email:</label>
      <br />
      <input
        type="email"
        id="email"
        name="email"
        // value={formData.email}
        // onChange={handleChange}
        required
        // disabled={pending}
      />
      <br />
      <br />

      <label htmlFor="mobile">Mobile Number:</label>
      <br />
      <input
  type="tel"
  id="mobile"
  name="mobile"
  required
  pattern="\+?[0-9\s\-]{7,15}"
  title="Please enter a valid phone number"
  placeholder="+123 456 7890"
/>
      <br />
      <br />

      <SubmitButton pending={pending} />
    </form>
  );
};

export default DownloadForm;
