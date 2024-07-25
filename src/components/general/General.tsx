import React, {useRef, useState} from "react";
import InputField from "../inputfield/InputField.tsx";
import EmailCopy from "../emailcopy/EmailCopy.tsx";
import getCopyText from "../../utils/getCopyText.ts";
import generatePassword from "../../utils/generatePassword.ts";
import CopyButton from "../copybutton/CopyButton.tsx";
import CheckBox from "../checkbox/CheckBox.tsx";
import Slider from "../slider/Slider.tsx";

type GeneralProps = {
    handleSubmit: (event: React.FormEvent) => void;
    handleInputChange: (field: string, value: string) => void;
    formValues: { [key: string]: string };
};

const General = ({handleSubmit, handleInputChange, formValues}: GeneralProps) => {
    const [checkBoxStates, setCheckBoxStates] = useState({
        symbolsCheckBox: true,
        numbersCheckBox: true
    });

    const handleCheckBoxChange = (id: string, checked: boolean) => {
        setCheckBoxStates(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };
    const handleClick = () => {
        alert(checkBoxStates.symbolsCheckBox);
    }
    const handlePassword = () => {
        return generatePassword(checkBoxStates.symbolsCheckBox, checkBoxStates.numbersCheckBox);
    }
    // Generate the password
    const password = handlePassword()

    // Include the password in formValues
    const extendedFormValues = {...formValues, password};

    const template: string = `

   Hi {name},<br/><br/>
   Apologies for the issues you have been having logging in. 
   I have now updated your account and created a new temporary password.<br/><br/>
   Please login to the 
   <a class="underline font-bold text-dark-teal" href="https://portal.rcot.co.uk/" target="_blank" rel="noopener noreferrer">
   RCOT Portal</a> <a class="underline text-dark-teal" href="https://portal.rcot.co.uk/">(https://portal.rcot.co.uk/)</a> 
   in a new browser window or tab using the access credentials shown below and amend your password to 
   something more secure.<br/><br/>
   <table class="table-fixed w-full text-left border-collapse border border-teal min-w-80 px-1">
      <tbody>
         <tr class="flex items-stretch h-12 w-full">
            <th class="flex-shrink-0 font-medium w-1/4 flex items-center border border-teal min-w-28 pl-2">Username:</th>
            <td class="flex-1 flex items-center border border-teal min-w-fit">
               <div class="w-full h-full pl-3">
                  <table class="w-full h-full">
                     <thead>
                        <tr>
                           <td class="w-full h-full">
                              <span class="select-all">
                              {email}
                              </span>
                           </td>
                        </tr>
                     </thead>
                  </table>
               </div>
            </td>
         </tr>
         <tr class="flex items-stretch h-12 w-full">
            <th class="flex-shrink-0 font-medium w-1/4 flex items-center border border-teal min-w-28  pl-2">Password:</th>
            <td class="flex-1 flex items-center border border-teal min-w-0">
               <div class="w-full h-full pl-3">
                  <table class="w-full h-full">
                     <thead>
                        <tr>
                           <td class="w-full h-full">
                              <span class="select-all">
                              {password}
                              </span>
                           </td>
                        </tr>
                     </thead>
                  </table>
               </div>
            </td>
         </tr>
      </tbody>
   </table>
   <br>
   Kind Regards,<br>
   Digital Team`;

    const emailCopyRef = useRef<HTMLDivElement>(null);

    return (
        <div className='flex flex-col gap-5 items-center'>
            <form className="flex gap-5 items-center content-center flex-col w-full" onSubmit={handleSubmit}>
                <InputField
                    label="name"
                    labelText="First name"
                    setValue={(value) => handleInputChange('name', value)}
                    // className="px-6"
                />
                <InputField
                    label="email"
                    labelText="Email"
                    setValue={(value) => handleInputChange('email', value)}
                    type="email"
                    // className="px-6"
                />
            </form>
            <div ref={emailCopyRef} className="w-11/12">
                <EmailCopy copyText={getCopyText(template, extendedFormValues)} className="w-fit"/>
            </div>
            <div className="flex flex-col gap-5 border rounded-lg p-2 px-6">
                <CheckBox id="symbolsCheckBox" labelText="Symbols" type="checkbox" className="border-0"
                          onChange={(checked) => handleCheckBoxChange("symbolsCheckBox", checked)}/>
                <CheckBox id="numbersCheckBox" labelText="Numbers" type="checkbox" className="border-0"
                          onChange={(checked) => handleCheckBoxChange("numbersCheckBox", checked)}/>
                <Slider label="Password length: " id="passwordSlider"/>
            </div>
            <button onClick={handleClick}>Test</button>
            <CopyButton copyRef={emailCopyRef}/>
        </div>
    );
}

export default General;
