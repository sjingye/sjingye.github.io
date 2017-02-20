const EventUtil = {
    addEvent: (element,event,listener) => {
        //验证方法是否存在
        if(element.addEventListener){
            element.addEventListener(event,listener);
        }
        else if(element.attachEvent){
            element.attachEvent("on"+event,listener);
        }
        else{
            element["on"+event] = listener;
        }
    },
    getEvent: (event) => event?event:window.event,
    getTarget: (event) => event.target?event.target:event.srcElement
};
export default EventUtil;