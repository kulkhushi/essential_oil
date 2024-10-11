
'use client';

import { useFormState } from 'react-dom';

export type actionFunction = (
    prevState: any,
    formData: FormData
  ) => Promise<{ message: string }>;

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);
  return <form action={formAction}>{children}</form>;
}
export default FormContainer;