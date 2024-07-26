type InfoTextProps = {
    text: string;
};

const InfoText = ({text}: InfoTextProps) => {
    return (
        <div>
            {text}
        </div>
    );
}

export default InfoText;
