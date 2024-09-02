import React from 'react';

type EmailButtonProps = {
  template: string;
  email: string;
  subject: string;
  disabled?: boolean;
  className?: string;
};

const EmailButton: React.FC<EmailButtonProps> = ({
  template,
  email,
  subject,
  disabled = false,
  className = '',
}) => {
  const encodedBody = encodeURIComponent(template);
  const encodedSubject = encodeURIComponent(subject);

  const mailtoLink = `mailto:${email}?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <div
      className={`relative w-48 rounded-3xl bg-teal px-8 py-3 text-center font-bold text-dark-teal transition-all duration-200 ease-in-out ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:scale-110 hover:bg-teal/70 hover:text-dark-teal/90 active:scale-95'
      } ${className}`}
    >
      <a
        href={disabled ? undefined : mailtoLink}
        onClick={(e) => disabled && e.preventDefault()}
      >
        Send Email
      </a>
    </div>
  );
};

export default EmailButton;
