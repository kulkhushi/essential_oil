"use server";

// export const downloadBrochureActions = async (
//     prevState: any,
//     formData: FormData
//   ): Promise<{ message: string }> => {
//     // Simulate form submission delay
//     await new Promise((resolve) => {
//       setTimeout(resolve, 3000); // 3-second delay
//     });

//     console.log("fgdgdg")
  
//     // After the delay, return a success message
//     return { message: 'Form submitted successfully' };
//   };

export const downloadBrochureActions = async (
  prevState: any,
  formData: FormData
): Promise<{ message: string }> => {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("mobile");
  const subject = "Download Brochure";

  const isServer = typeof window === "undefined";
  const baseUrl = isServer ? process.env.NEXT_PUBLIC_BASE_URL : '';

  console.log('baseUrl',baseUrl)

  try {
    const response = await fetch(`${baseUrl}/api/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userEmail: email, subject, name, phone }),
    });

    const data = await response.json();
    console.log('data',response)
    if (response.ok) {
      return { message: "Thank you for your message." };
    }
  } catch (error: unknown) {
    console.error("Error in fetch:", error);
    return {
      message: error instanceof Error ? error.message : "Error fetching",
    };
  }
  return { message: "Error fetching" };
};
