const RenderLIst = {
    render: (element,list) => {
        let html = "";
        list.map(function (item) {
            html += `<li>${item}</li>` ;
        })
        element.innerHTML = html;
    }
}
export default RenderLIst;