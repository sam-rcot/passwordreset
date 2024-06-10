import DOMPurify from 'dompurify';

type EmailCopyProps = {
    copyText: string;
    className?: string;
};

const EmailCopy = ({ copyText, className = "" }: EmailCopyProps) => {
    const sanitizedText = DOMPurify.sanitize(copyText);

    return (
        <div className={`mt-5 border-teal border-2 p-4 rounded text-left text-dark-teal ${className}`}>
            <p dangerouslySetInnerHTML={{ __html: sanitizedText }}></p>
        </div>
    );
};

export default EmailCopy;
