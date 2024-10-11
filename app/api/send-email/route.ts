import { sendMail } from "@/utils/emailconfig";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  
 const responseBody = await req.json();
 const { userEmail, subject, name,phone } = responseBody;
 console.log(userEmail);
//  return responseBody;
//  return NextResponse.json({ message: 'Email sent successfully',userEmail }, { status: 200 });
  try {
    const info = await sendMail({
      sender: userEmail,
      subject,
      message: `<p>Name: ${name}</p><p>Email: ${userEmail}</p><p>Phone: ${phone}</p>`,
    });
    return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
  } catch (error) {
    console.error('Error sending email: ', error);
    return NextResponse.json({ message: 'Error sending email', error }, { status: 500 });
  }
};
