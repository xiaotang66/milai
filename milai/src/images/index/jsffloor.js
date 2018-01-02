var mheight=new Array();var floorId=0;function floor(floorData,floorObject){this.floorObject=floorObject;this.print=function(){var floorCon="";$.each(floorData,function(k,floorRows){var rows=new floorElements(k,floorRows);floorCon+=rows.print();mheight[k]=floorElements.mrow*floor.floorElementWidth+parseInt(floorRows.floorTop);});floorCon+="</div></div>";floorObject.html(floorCon);}}
floor.floorElementWidth=0;floor.prototype.setHeight=function(){this.floorObject.find(".floorCon").each(function(i){$(this).height(mheight[i]);$(this).find(".floorScrool").RoamFocus({slideWay:"left",control:1,autoChange:false});});}
function floorElements(k,floorRows){this.floorTop=floorRows.floorTop;this.title_img=floorRows.title_img;this.link=floorRows.link;this.name=floorRows.name;this.floor_name=floorRows.floor_name;floorId=floorRows.id;this.floorType=floorRows.floorType;var spacing=floorRows.spacing;this.print=function(){var floorElementsCon="<div id='"+(this.floor_name)+"' class='floor floor"+k+" clearfix'> ";if(this.title_img)
{if(this.link){floorElementsCon+="<h4 class='text-hide'><a href='"+this.link+" ' target='blank' title='"+this.name+"'><img class='lazy' src='"+this.title_img+"' alt='"+this.name+"' /></a></h4>";}
else{floorElementsCon+="<h4 class='text-hide'><img class='lazy' src='"+this.title_img+"' alt='"+this.name+"' /></h4>";}}
else if(this.name)
{if(this.link){floorElementsCon+="<h4><a href='"+this.link+" ' target='blank' title='"+this.name+"'>"+this.name+"</a></h4>";}
else{floorElementsCon+="<h4>"+this.name+"</h4>";}}
else{floorElementsCon+="<h4 class='text-hide'></h4>";}
if(floorRows.items){floorElementsCon+="<div class='floorCon ft"+this.floorType+"' style='top: "+this.floorTop+"px'>";$.each(floorRows.items,function(kk,floorRow){var row=new floorElement(kk,floorRow,spacing);floorElementsCon+=row.print();});floorElementsCon+="</div>";}
floorElementsCon+="</div>";return floorElementsCon;}}
floorElements.mrow=0;floorElements.mcol=0;function floorElement(kk,floorRow,spacing){this.url=floorRow.url;this.img=floorRow.img;this.title=floorRow.title;this.img_source=floorRow.img_source;this.rows=floorRow.rows;this.cols=floorRow.cols;if(floorRow.img_source==4)
{this.goods_name=floorRow.goods_name;this.goods_number=floorRow.goods_number;this.promote_price=floorRow.promote_price;this.shop_price=floorRow.shop_price;this.market_price=floorRow.market_price;this.end_time=floorRow.end_time;this.slogan=floorRow.slogan;}
if(floorRow.img_source==99)
{this.categorys=floorRow.categorys;this.brands=floorRow.brands;}
this.mark=floorRow.mark;var srow=floorRow.posstart.substring(1,(floorRow.posstart).length);var erow=floorRow.posend.substring(1,(floorRow.posend).length);var scol=floorRow.posstart.charCodeAt(0);var ecol=floorRow.posend.charCodeAt(0);this.spacing=parseInt(spacing);var temp_row=erow-srow;var temp_col=ecol-scol;this.width=(temp_col+1)*floor.floorElementWidth-this.spacing;this.height=(temp_row+1)*floor.floorElementWidth-this.spacing;this.left=(scol-97)*floor.floorElementWidth+this.spacing/2;this.top=(srow-1)*floor.floorElementWidth;if(kk==0){floorElements.mrow=temp_row+1;floorElements.mcol=temp_col+1;}
floorElements.mrow=Math.max(floorElements.mrow,erow);floorElements.mcol=Math.max(floorElements.mcol,(temp_col+1));this.print=function(){var floorElementCon="<div class='item item"+kk+"' style='left:"+this.left+"px;top:"+this.top+"px'>";switch(this.img_source)
{case"99":floorElementCon+=this.extend();break;case"4":floorElementCon+=this.goods();break;case"3":if(floorId==42||(this.cols==12)){floorElementCon+=this.ad();}else{floorElementCon+=this.diy();}
break;default:floorElementCon+=this.ad();}
floorElementCon+="</div>";return floorElementCon;}}
floorElement.prototype.goods=function()
{var goodsCon="<div class='goods' width='"+this.width+"' height='"+this.height+"'>";var goodsUrl=(this.url)?this.url:"javascript:void(0)";var price=(this.promote_price&&this.is_promote)?this.promote_price:this.shop_price;goodsCon+="<a href='"+goodsUrl+"' title='"+this.goods_name+"' target='_blank' class='focus'>";goodsCon+="<img class='lazy' src='"+this.img+"' width='"+this.width+"' height='"+this.height+"' alt='"+this.goods_name+"'>";goodsCon+="<div class='info'><h4>"+this.goods_name+"</h4><p class='goodsPrice'>"+price+"</p></div>";goodsCon+="<div class='goodsOver'></div>"
if(this.goods_number<=0){goodsCon+="<div class='goodsTag'></div>"}
goodsCon+="</a></div>";return goodsCon;}
floorElement.prototype.ad=function()
{var adCon="<div class='ad'>";var adUrl=(this.url)?this.url:"javascript:void(0)";adCon+="<a href='"+adUrl+"' target='_blank' title='"+this.mark+"'>";adCon+="<img class='lazy' src='"+this.img+"' alt='"+this.mark+"' width='"+this.width+"' height='"+this.height+"' /><i></i>";adCon+="</a></div>";return adCon;}
floorElement.prototype.diy=function()
{var diyCon="<div class='diy'>";var diyUrl=(this.url)?this.url:"javascript:void(0)";diyCon+="<a href='"+diyUrl+"' target='_blank' title='"+this.mark+"'>";diyCon+="<img class='lazy' src='"+this.img+"' alt='"+this.mark+"' width='"+this.width+"' height='"+this.height+"'>";diyCon+="<div class='goodsOver'></div>";diyCon+="</a></div>";return diyCon;}
floorElement.prototype.extend=function()
{var extendCon="<div class='extend' style='width:"+this.width+"px; height:"+this.height+"px'>";if(this.categorys)
{extendCon+="<div class='categorys m10 clearfix'><ul>"
$.each(this.categorys,function(c,cat){extendCon+="<li class='fl ml10 mt10'><a href='"+cat.url+"' title='"+cat.name+"' >"+cat.name+"</a></li>";});extendCon+="</ul></div>"}
if(this.brands)
{extendCon+="<div class='floorScrool brands clearfix m20 mt50'><h4 class='tc'><span class='show pa f18 strong'>精选品牌</span></h4><div class='floorScroolCon mt20'><ul><li>"
$.each(this.brands,function(b,bra){if(b%6==0){extendCon+="</li><li><a href='"+bra.url+"' title='"+bra.name+"'><img class='lazy' src='"+bra.logo+"' alt='"+bra.name+"' /></a>";}
else{extendCon+="<a href='"+bra.url+"' title='"+bra.name+"'><img class='lazy' src='"+bra.logo+"'  alt='"+bra.name+"' /></a>";}});extendCon+="</li></ul></div><div class='prev'></div><div class='next'></div></div>";}
extendCon+="</div>";return extendCon;};$("#indexFocus").RoamFocus({slideWay:"rand",changeTime:4000});$("#supportDynamicCover").attr("src",$("#indexSupportImage img:first").attr("data-cover"));$("#indexSupportImage li").RoamHoverDelay({hoverDuring:200,outDuring:200,hoverEvent:function(){$("#indexSupportCover a").attr("href",$(this).find("a").attr("href"));$("#supportDynamicCover").attr("src",$(this).find("img").attr("data-cover"));$("#supportDynamicInfo").text($(this).find("a").attr("data-reason"));$(this).addClass("on").siblings().removeClass("on");},outEvent:function(){}});var objFloor=$("#floor");var objWeek=$("#week");var FloorsData=objFloor.attr("data");var WeekData=objWeek.attr("data");FloorsData=$.parseJSON(FloorsData);WeekData=$.parseJSON(WeekData);if(WeekData){floor.floorElementWidth=objWeek.width()/12;var week=new floor(WeekData,objWeek);week.print();week.setHeight();}
if(FloorsData){floor.floorElementWidth=objFloor.width()/12;var floors=new floor(FloorsData,objFloor);floors.print();floors.setHeight();}
$(window).resize(function(){if(WeekData){floor.floorElementWidth=objWeek.width()/12;week=new floor(WeekData,objWeek);week.print();week.setHeight();}
if(FloorsData){floor.floorElementWidth=objFloor.width()/12;floors=new floor(FloorsData,objFloor);floors.print();floors.setHeight();}});