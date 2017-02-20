/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityInput = document.getElementById("aqi-city-input");
var valueInput = document.getElementById("aqi-value-input");
var aqiTbody = document.getElementsByTagName("tbody")[0];
var addBtn = document.getElementById("add-btn");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var cityValue = cityInput.value.trim();
    var valueValue = valueInput.value.trim();
    if( !cityValue.match(/^[\u4e00-\u9fa5a-zA-Z]+$/ )){
        alert("城市名称请输入英文或汉字");
        cityInput.value = "";
        return;
    }
    if( !valueValue.match(/^\d+$/) ){
        alert("空气质量指数请输入整数");
        valueInput.value = "";
        return;
    }
    aqiData[cityValue] = valueValue;
    cityInput.value = "";
    valueInput.value = "";
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var str = "";
    for(var city in aqiData){
        str +=   `<tr>
                     <td>${city}</td>
                     <td>${aqiData[city]}</td>
                     <td>
                       <button>删除</button>
                     </td>
                 </tr>`;
     }
    aqiTbody.innerHTML = str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    delete aqiData[city];
    renderAqiList();
}

function init() {
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    addBtn.onclick = addBtnHandle;
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    aqiTbody.onclick = function (e) {
        if(e.target.nodeName === "BUTTON"){
            var delTr = e.target.parentNode.parentNode;
            var delCity = delTr.querySelector("td").innerHTML;
            delBtnHandle(delCity);
        }
    }
}
init();

