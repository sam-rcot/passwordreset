import InputField from "../inputfield/InputField.tsx";
import EmailCopy from "../emailcopy/EmailCopy.tsx";
import getCopyText from "../../utils/getCopyText.ts";
import React from "react";

type StakeholderProps = {
    handleSubmit: (event: React.FormEvent) => void;
    handleInputChange: (field: string, value: string) => void;
    formValues: { [key: string]: string };
};

const Stakeholder = ({ handleSubmit, handleInputChange, formValues }: StakeholderProps) => {
    const template: string = `Hello {name}<br>
Your dog breed is {dogBreed}<br>
Your dog name is {dogName}`
    return (
        <div className='flex flex-col gap-5 items-center'>
            <form className="flex gap-5 justify-items-end flex-col" onSubmit={handleSubmit}>
                <InputField
                    label="name"
                    labelText="Name: "
                    setValue={(value) => handleInputChange('name', value)}
                />
                <InputField
                    label="dogBreed"
                    labelText="Dog breed:"
                    setValue={(value) => handleInputChange('dogBreed', value)}
                />
                <InputField
                    label="dogName"
                    labelText="Dog name:"
                    setValue={(value) => handleInputChange('dogName', value)}
                />

            </form>
            <EmailCopy copyText={getCopyText(template, formValues)} />
        </div>
    );
}

export default Stakeholder;
