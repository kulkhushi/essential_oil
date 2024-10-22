import { useFormStatus } from "react-dom";

type btnSize = 'default' | 'lg' | 'sm';
type SubmitButtonProps = {
    className?: string;
    text?: string;
    size?: btnSize;
    pending?: boolean;
  };
  
  export function SubmitButton({
    className = '',
    text = 'submit',
    size = 'lg',
    pending
  }: SubmitButtonProps) {

    return (
        <button
        className="button button-secondary button-winona button-small"
        type="submit"
       
        disabled={pending}  
      >
        {pending ? (
          <>
            {/* <ReloadIcon className='mr-2 h-4 w-4 animate-spin' /> */}
            Please wait...
          </>
        ) : (
          text
        )}
      </button>
    );
  }