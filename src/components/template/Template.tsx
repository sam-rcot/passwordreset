// File used to generate templates by 'createComponent.js', do not import or delete
type TemplateProps = {
    exampleProp: string
};

const Template = ({exampleProp}: TemplateProps) => {
    return (
        <div id="Template">
            {exampleProp}
        </div>
    );
}

export default Template;
