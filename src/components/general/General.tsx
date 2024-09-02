import React, { useRef, useState, useEffect } from 'react';
import InputField from '../inputfield/InputField.tsx';
import EmailCopy from '../emailcopy/EmailCopy.tsx';
import getCopyText from '../../utils/getCopyText.ts';
import generatePassword from '../../utils/generatePassword.ts';
import CopyButton from '../copybutton/CopyButton.tsx';
import CheckBox from '../checkbox/CheckBox.tsx';
import Slider from '../slider/Slider.tsx';
import OptionsContainer from '../optionscontainer/OptionsContainer.tsx';
import PasswordButton from '../passwordbutton/PasswordButton.tsx';
import EmailButton from '../emailbutton/EmailButton.tsx';

type GeneralProps = {
  handleSubmit: (event: React.FormEvent) => void;
  handleInputChange: (field: string, value: string) => void;
  formValues: { [key: string]: string };
};

const General = ({
  handleSubmit,
  handleInputChange,
  formValues,
}: GeneralProps) => {
  const [checkBoxStates, setCheckBoxStates] = useState({
    symbolsCheckBox: true,
    numbersCheckBox: true,
  });

  const [sliderValue, setSliderValue] = useState(14);
  const [password, setPassword] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [isEdge, setIsEdge] = useState(false);


  useEffect(() => {
    const isValid = formValues.name?.trim() && formValues.email?.trim();
    setIsFormValid(!!isValid);
  }, [formValues.name, formValues.email]);
  const generateNewPassword = () => {
    const newPassword = generatePassword(
      checkBoxStates.symbolsCheckBox,
      checkBoxStates.numbersCheckBox,
      sliderValue
    );
    setPassword(newPassword);
  };

  useEffect(() => {
    generateNewPassword();
  }, [checkBoxStates, sliderValue]);

  useEffect(() => {
    // Detect if the browser is Microsoft Edge
    const isEdgeBrowser = /Edg/.test(navigator.userAgent);
    setIsEdge(isEdgeBrowser);
  }, []);

  const handleCheckBoxChange = (id: string, checked: boolean) => {
    setCheckBoxStates((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const emailCopyRef = useRef<HTMLDivElement>(null);

  const extendedFormValues = { ...formValues, password };

  const htmlTemplate: string = `
    Hi${formValues.name ? ` ${formValues.name[0].toUpperCase()}${formValues.name.slice(1)}` : ''},<br/><br/>
    Apologies for the issues you have been having logging in. 
    I have now updated your account and created a new temporary password.<br/><br/>
    Please login to the 
    <a class="underline font-bold text-dark-teal" href="https://portal.rcot.co.uk/" target="_blank" rel="noopener noreferrer">
    RCOT Portal</a> <a class="underline text-dark-teal" href="https://portal.rcot.co.uk/">(https://portal.rcot.co.uk/)</a> 
    in a new browser window or tab using the access credentials shown below and amend your password to 
    something more secure.<br/><br/>
    <table class="table-fixed w-fit text-left border-collapse border border-teal min-w-80 px-1">
    <tbody>
        <tr class="h-12">
            <th class="w-1/4 border border-teal px-2">Username:</th>
            <td class="border border-teal pl-3">
                <span class="select-all">
                    ${formValues.email ? formValues.email : ''}
                </span>
            </td>
        </tr>
        <tr class="h-12">
            <th class="w-1/4 border border-teal px-2">Password:</th>
            <td class="border border-teal pl-3">
                <span class="select-all">
                    ${password}
                </span>
            </td>
        </tr>
    </tbody>
</table>

    <br>
    Kind Regards,<br>
    Digital Team`;

  const plainTextTemplate: string = `Hi${formValues.name ? ` ${formValues.name[0].toUpperCase()}${formValues.name.slice(1)}` : ''},

Apologies for the issues you have been having logging in. 
I have now updated your account and created a new temporary password.

Please login to the RCOT Portal (https://portal.rcot.co.uk/) in a new browser window or tab using the access credentials shown below and amend your password to something more secure.

Username: ${formValues.email}
Password: ${password}

Kind Regards,
Digital Team`;

  return (
    <div className="flex w-3/4 flex-col items-center gap-3">
      <form
        className="flex w-full flex-col content-center items-center justify-center gap-5"
        onSubmit={handleSubmit}
      >
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
      <div ref={emailCopyRef} className="w-full">
        <EmailCopy
          copyText={getCopyText(htmlTemplate, extendedFormValues)}
          className="w-fit"
        />
      </div>
      <div className="container flex w-full flex-col items-center justify-center gap-2 rounded-lg border px-6 py-2">
        <OptionsContainer containerText="password options">
          <div className="flex w-48 flex-row items-center justify-center">
            <CheckBox
              id="symbolsCheckBox"
              labelText="Symbols"
              type="checkbox"
              className="border-0"
              onChange={(checked) =>
                handleCheckBoxChange('symbolsCheckBox', checked)
              }
            />
            <CheckBox
              id="numbersCheckBox"
              labelText="Numbers"
              type="checkbox"
              className="border-0"
              onChange={(checked) =>
                handleCheckBoxChange('numbersCheckBox', checked)
              }
            />
          </div>
          <div className="flex w-48 justify-center">
            <Slider
              label="Password length:"
              id="passwordSlider"
              value={sliderValue}
              onChange={setSliderValue}
            />
          </div>
        </OptionsContainer>
        <div className="flex w-max flex-col items-center justify-around gap-2">
          <PasswordButton
            buttonText="New password"
            onClick={generateNewPassword}
            className="w-96"
          />
          <div className="flex flex-col items-center justify-center gap-2 group">
            <div className="flex w-96 flex-row items-center justify-center gap-3">
              <CopyButton
                copyRef={emailCopyRef}
                disabled={!isFormValid}
                className={!isFormValid ? "cursor-not-allowed opacity-50" : ""}
              />
              <EmailButton
                template={plainTextTemplate}
                email={formValues.email}
                subject="RCOT – your new temporary password"
                disabled={!isFormValid}
                className={!isFormValid ? "cursor-not-allowed opacity-50 " : ""}
              />
            </div>
            {isEdge && (
              <div className="w-96 opacity-0 text-xxs font-nunito text-dark-teal text-center group-hover:opacity-100">
                <p className="text-center">
                  The email button won't work in Microsoft Edge unless you
                  have a default email client set up.
                </p>
                  <a className="underline text-link-blue" href="https://support.microsoft.com/en-gb/office/make-outlook-the-default-program-for-email-contacts-and-calendar-ff7990c4-54c4-4390-8fe3-c0285226f021">Make Outlook the default program for email, contacts, and calendar</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default General;