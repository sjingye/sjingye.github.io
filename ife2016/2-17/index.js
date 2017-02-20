/* 数据格式演示
 var aqiSourceData = {
     "北京": {
         "2016-01-01": 10,
         "2016-01-02": 10,
         "2016-01-03": 10,
         "2016-01-04": 10
     }
 };
 */
// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}
var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};
// DOM
var aqiChartTable = document.getElementsByClassName("aqi-chart-table")[0];
var nowCity = document.querySelector(".aqi-chart-wrap h3 span");
var nowTime = document.querySelector(".aqi-chart-wrap h3 em");
var graTimesInput = document.querySelector("#form-gra form");
var citySelect = document.getElementById("city-select");

// 用于渲染图表的数据
var chartData = {};
var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
    '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8'];
var graTimes = ["每日","每周","每月"];
// 记录当前页面的表单选项
var pageState = {
    nowSelectCity: "北京",
    nowGraTime: "day"
};
/**
 * 渲染图表
 */
function renderChart() {
    var html = "";
    for (var time in chartData){
        html += `
                    <li title=${time},${chartData[time]} style="height:${chartData[time]/500*380 }px;background-color:${colors[Math.floor(Math.random() * 11)]}"></li>
                `
    }
    aqiChartTable.innerHTML = html;
    nowCity.innerHTML = pageState.nowSelectCity;
    switch (pageState.nowGraTime){
        case "day":
            nowTime.innerHTML = graTimes[0];
            break;
        case "week":
            nowTime.innerHTML = graTimes[1];
            break;
        default:
            nowTime.innerHTML = graTimes[2];
    }
};

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    var graTimesChecked = document.querySelector("#form-gra form input:checked");
    if(graTimesChecked.value === pageState.nowGraTime){
        return;
    }
    else{
        // 设置对应数据
        pageState.nowGraTime = graTimesChecked.value;
        initAqiChartData();
        // 调用图表渲染函数
        renderChart();
    }
}
/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    if(citySelect.value===pageState.nowSelectCity){
        return;
    }
    else{
        // 设置对应数据
        pageState.nowSelectCity = citySelect.value;
        // 调用图表渲染函数
        initAqiChartData();
        renderChart();
    }
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    graTimesInput.addEventListener("change",graTimeChange);
};

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var html = "";
    for(let i in aqiSourceData){
        html += "<option>"+i+"</option>";
    }
    citySelect.innerHTML = html;
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    //用change而不是click等
    citySelect.addEventListener("change",citySelectChange);
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    var nowCityData = aqiSourceData[pageState.nowSelectCity];
    switch (pageState.nowGraTime){
        case "day":
            chartData = nowCityData;
            break;
        case "week":
            chartData = {};
            let countSumWeek=0, daySum=0, week=0;
            for(let i in nowCityData){
                daySum++;
                countSumWeek += nowCityData[i];
                if(new Date(i).getDay()===6){
                    week++;
                    chartData["第"+week+"周"] = Math.round(countSumWeek/daySum);
                    daySum=0;
                    countSumWeek=0;
                }
            };
            if(daySum!==0){
                week++;
                chartData["第"+week+"周"] = Math.round(countSumWeek/daySum);
            }
            break;
        default:
            chartData = {};
            let countSumMonth=0, daySumMonth=0, month=0;
            for(let i in nowCityData){
                daySumMonth++;
                countSumMonth += nowCityData[i];
                if(new Date(i).getMonth() !== month){
                    month++;
                    chartData["第"+month+"月"] = Math.round(countSumMonth/daySumMonth);
                    daySumMonth=0;
                    countSumMonth=0;
                }
            }
            if(daySumMonth!==0){
                month++;
                chartData["第"+month+"月"] = Math.round(countSumMonth/daySumMonth);
            }
    }
}

/**
 * 初始化函数
 */
function init() {
    initGraTimeForm();
    initCitySelector();
    initAqiChartData();
    renderChart();
}
init();
