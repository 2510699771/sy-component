export const useCopytext = (value: any) => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    input.setAttribute("value", );
    input.select();
    if (document.execCommand("copy")) {
        document.execCommand("copy");
    }
    document.body.removeChild(input);
}
//点击复制