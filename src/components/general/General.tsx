import React, {useRef, useState, useEffect} from "react";
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

    const [sliderValue, setSliderValue] = useState(14);
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const newPassword = generatePassword(checkBoxStates.symbolsCheckBox, checkBoxStates.numbersCheckBox, sliderValue);
        setPassword(newPassword);
    }, [checkBoxStates, sliderValue]);

    const handleCheckBoxChange = (id: string, checked: boolean) => {
        setCheckBoxStates(prevState => ({
            ...prevState,
            [id]: checked
        }));
    };

    const emailCopyRef = useRef<HTMLDivElement>(null);

    const extendedFormValues = {...formValues, password};

    const template: string = `
    Hi${formValues.name ? ` ${formValues.name[0].toUpperCase()}${formValues.name.slice(1, formValues.name.length)}` : ''},<br/><br/>
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
    return (
        <div className="flex flex-col gap-5 items-center w-3/4">
            <form className="flex gap-5 items-center content-center justify-center flex-col w-11/12"
                  onSubmit={handleSubmit}>
                <InputField
                    label="name"
                    labelText="First name"
                    setValue={(value) => handleInputChange('name', value)}
                    placeholder="Joanna"
                />
                <InputField
                    label="email"
                    labelText="Email"
                    setValue={(value) => handleInputChange('email', value)}
                    type="email"
                    placeholder="JoannaSmith@OT.co.uk"
                />
            </form>
            <div ref={emailCopyRef} className="w-11/12">
                <EmailCopy copyText={getCopyText(template, extendedFormValues)} className="w-fit"/>
            </div>
            <div className="flex flex-col border rounded-lg p-2 px-6 container items-center w-11/12">
                <div className="flex flex-col items-center w-fit">
                    <CheckBox
                        id="symbolsCheckBox"
                        labelText="Symbols"
                        type="checkbox"
                        className="border-0"
                        onChange={(checked) => handleCheckBoxChange("symbolsCheckBox", checked)}
                    />
                    <CheckBox
                        id="numbersCheckBox"
                        labelText="Numbers"
                        type="checkbox"
                        className="border-0"
                        onChange={(checked) => handleCheckBoxChange("numbersCheckBox", checked)}
                    />
                </div>
                <div className="w-full flex justify-center">
                    <Slider
                        label="Password length:"
                        id="passwordSlider"
                        value={sliderValue}
                        onChange={setSliderValue}
                    />
                </div>
                <CopyButton copyRef={emailCopyRef}/>
            </div>

        </div>
    );
};

export default General;