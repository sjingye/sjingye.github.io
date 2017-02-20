import  data  from "./data";
class Table{
    constructor(container,theadData,tbodyData){
        this.container = container;
        this.theadData = theadData;
        this.tbodyData = tbodyData;
    }
    init(){
       let self = this;
       self.fill();
       self.freeze();
    };
    //封装根据数据填充html的方法
    fill(){
        let html = '<table class="table table-hover table-bordered"><thead class="start">';
        this.theadData.map(function (item){
            html += `<th class="text-center">${item}</th>`;
        })
        html += '</thead><tbody>';
        this.tbodyData.map(function(item){
            let str = "";
            for (let key in item){
                str += `<td class="text-center">${item[key]}</td>`;
            }
            html += `<tr>${str}</tr>`;
        })
        html += `</tbody></table>`;
        this.container.append($(html));
    };
    //封装冻结首行的方法
    freeze(){
        let $thead = this.container.find("thead");
        let $table = this.container.find("table");
        let headOffTop = this.container.offset().top;
        let headOffLeft = this.container.offset().left;
        // trFirst.css("top",headOffTop).css("left",headOffLeft);
        $(window).scroll(function() {
            if( $thead.offset().top < $(document).scrollTop()){
                // trFirst.css("top",0).css("left",0);
                // $thead.css("position","fixed").css("left",headOffLeft).css("top",0);
                $thead.css({
                    "position":"fixed",
                    "left": headOffLeft,
                    "top": 0,
                    "z-index": 4,
                    "width": $table.width()
                })
                .find("th")
                .css({
                    "width": $table.width()/(data.hData.length)
                });
            }
            else if($table.offset().top+$table.height() < $(document).scrollTop()){
                $thead.hide();
            }
        });
    };
}

//dom
let $t1 = $(".t1");
let $t2 = $(".t2");
let $t3 = $(".t3");

//生成实例
let t1 = new Table($t1,data.hData,data.bData);
let t2 = new Table($t2,data.hData,data.bData);
let t3 = new Table($t3,data.hData,data.bData);

t1.init();
t2.init();
t3.init();