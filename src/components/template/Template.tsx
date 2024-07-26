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
