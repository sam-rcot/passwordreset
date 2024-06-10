const getCopyText = (template: string, values: { [key: string]: string }) => {
    return template.replace(/\{(\w+)\}/g, (_, key) => values[key] || '');
};

export default getCopyText;
