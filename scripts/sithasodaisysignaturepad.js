
/* sithasodaisysignaturepad */
function banano_sithasodaisysignaturepad_sduisignaturepad() {var _B=this;_B.__1="";_B.__2="";_B.__3={};_B.__4=null;_B.__5=null;_B.__6={};_B.__7="";_B.__8={};_B.__9=false;_B.__a="";_B.__b="";_B.__c="";_B.__d="";_B.__e="";_B.__f="";_B.__10=0;_B.__11="200";_B.__12="";_B.__13=0;_B.__14=0;_B.__15=0;_B.__16="";_B.__17=0;_B.__18=0;_B.__19="400";_B.__1a=null;_B.__1b="";_B.__1c="";_B.__1d="";_B.__1e="";_B.__1f="";_B.__20={};_B.__21= new banano_sithasodaisy_sduidiv();_B.__22= new banano_sithasodaisy_sduidiv();_B.initialize=function(__5af,__d0,__5b0) {_B.__1=_banano_sithasodaisy_sduishared.cleanid(__d0);_B.__3=__5af;_B.__2=_banano_sithasodaisy_sduishared.cleanid(__5b0);_B.__8={};};_B.enable=function() {_B.__22.disabled(false);};_B.disable=function() {_B.__22.disabled(true);};_B.show=function() {_B.__22.hidden(false);};_B.hide=function() {_B.__22.hidden(true);};_B.defaults=function() {_B.setdotsize(0,_B);_B.setheight("200",_B);_B.setimagetype("jpeg",_B);_B.setmaxwidth(2.5,_B);_B.setmindistance(5,_B);_B.setminwidth(0.5,_B);_B.setthrottle(16,_B);_B.setvelocityfilterweight(0.7,_B);_B.setwidth("400",_B);};_B.getid=function() {return _B.__1;};_B.gethere=function() {return "#" + _B.__1 + "";};_B.setbackgroundcolor=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__f=_v;_B.__8["backgroundColor"]=_v;};_B.setdotsize=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__10=_v;_B.__8["dotSize"]=_v;};_B.setheight=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__11=_v;_B.__21.addattr("height",_v);_B.__21.addstyle("height","" + _v + "px");_B.__22.addstyle("height","" + _v + "px");};_B.setimagetype=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__12=_v;_B.__8["imageType"]=_v;};_B.setmaxwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__13=_v;_B.__8["maxWidth"]=_v;};_B.setmindistance=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__14=_v;_B.__8["minDistance"]=_v;};_B.setminwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__15=_v;_B.__8["minWidth"]=_v;};_B.setpencolor=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__16=_v;_B.__8["penColor"]=_v;};_B.setthrottle=function(_v) {_v=_banano_sithasodaisy_sduishared.cint(_v);_B.__17=_v;_B.__8["throttle"]=_v;};_B.setvelocityfilterweight=function(_v) {_v=_banano_sithasodaisy_sduishared.cdbl(_v);_B.__18=_v;_B.__8["velocityFilterWeight"]=_v;};_B.setwidth=function(_v) {_v=_banano_sithasodaisy_sduishared.cstr(_v);_B.__19=_v;_B.__21.addattr("height",_v);_B.__21.addstyle("width","" + _v + "px");_B.__22.addstyle("width","" + _v + "px");};_B.refresh=function() {var __5b6;__5b6=u("#" + _B.__1 + "").nodes[0];_B.__1a=new SignaturePad(__5b6,_B.__8);BANanoExec("resizeCanvas", window, __5b6,_B.__1a);};_B.clear=function() {_B.__1a["clear"]();};_B.download=function() {var __5b7,__5b8,_blob;__5b7=_B.todataurl(_B);__5b8="" + _B.__1 + "." + _B.__12 + "";_blob=_banano_sithasodaisy_sduishared.dataurltoblob(__5b7);BANanoExec("saveAs", window, _blob,__5b8);};_B.fromdata=function(_data) {_B.__1a["fromData"](_data);};_B.fromdataurl=function(__5b7) {_B.__1a["fromDataURL"](__5b7);};_B.draw=function() {var __5b6,_ctx;__5b6=u("#" + _B.__1 + "").nodes[0];_ctx=__5b6["getContext"]("2d");_ctx["globalCompositeOperation"]="source-over";};_B.erase=function() {var __5b6,_ctx;__5b6=u("#" + _B.__1 + "").nodes[0];_ctx=__5b6["getContext"]("2d");_ctx["globalCompositeOperation"]="destination-out";};_B.todata=function() {var _data;_data=_B.__1a["toData"]();return _data;};_B.undo=function() {var _data;_data=_B.__1a["toData"]();if (is.null(_data)==false) {_data["pop"]();_B.__1a["fromData"](_data);}};_B.todataurl=function() {var _res;_res="";switch ("" + _B.__12) {case "" + "jpeg":_res=_B.__1a["toDataURL"]("image/jpeg");break;case "" + "png":_res=_B.__1a["toDataURL"]("image/png");break;case "" + "svg":_res=_B.__1a["toDataURL"]("image/svg+xml");break;}return _res;};_B.isempty=function() {var _res;_res=_B.__1a["isEmpty"]();return _res;};_B.off=function() {_B.__1a["off"]();};_B.on=function() {_B.__1a["on"]();};_B.designercreateview=function(__5bc,__5bd) {_B.__20=__5bd;_B.__4=__5bc;if (__5bd!=null) {_B.__7=__5bd["ParentID"]===undefined? "":__5bd["ParentID"];_B.__7=_banano_sithasodaisy_sduishared.cstr(_B.__7);_B.__9=__5bd["Visible"]===undefined? true:__5bd["Visible"];_B.__9=_banano_sithasodaisy_sduishared.parsebool(_B.__9);_B.__a=__5bd["RawClasses"]===undefined? "":__5bd["RawClasses"];_B.__b=__5bd["RawStyles"]===undefined? "":__5bd["RawStyles"];_B.__c=__5bd["RawAttributes"]===undefined? "":__5bd["RawAttributes"];_B.__d=__5bd["MarginAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__5bd["MarginAXYTBLR"];_B.__e=__5bd["PaddingAXYTBLR"]===undefined? "a=?; x=?; y=?; t=?; b=?; l=?; r=?":__5bd["PaddingAXYTBLR"];_B.__f=__5bd["BackgroundColor"]===undefined? "white":__5bd["BackgroundColor"];_B.__f=_banano_sithasodaisy_sduishared.cstr(_B.__f);_B.__10=__5bd["DotSize"]===undefined? "0":__5bd["DotSize"];_B.__10=_banano_sithasodaisy_sduishared.cdbl(_B.__10);_B.__11=__5bd["Height"]===undefined? "200":__5bd["Height"];_B.__11=_banano_sithasodaisy_sduishared.cstr(_B.__11);_B.__12=__5bd["ImageType"]===undefined? "jpeg":__5bd["ImageType"];_B.__12=_banano_sithasodaisy_sduishared.cstr(_B.__12);_B.__13=__5bd["MaxWidth"]===undefined? "2.5":__5bd["MaxWidth"];_B.__13=_banano_sithasodaisy_sduishared.cdbl(_B.__13);_B.__14=__5bd["MinDistance"]===undefined? 5:__5bd["MinDistance"];_B.__14=_banano_sithasodaisy_sduishared.cint(_B.__14);_B.__15=__5bd["MinWidth"]===undefined? "0.5":__5bd["MinWidth"];_B.__15=_banano_sithasodaisy_sduishared.cdbl(_B.__15);_B.__16=__5bd["PenColor"]===undefined? "black":__5bd["PenColor"];_B.__16=_banano_sithasodaisy_sduishared.cstr(_B.__16);_B.__17=__5bd["Throttle"]===undefined? 16:__5bd["Throttle"];_B.__17=_banano_sithasodaisy_sduishared.cint(_B.__17);_B.__18=__5bd["VelocityFilterWeight"]===undefined? "0.7":__5bd["VelocityFilterWeight"];_B.__18=_banano_sithasodaisy_sduishared.cdbl(_B.__18);_B.__19=__5bd["Width"]===undefined? "400":__5bd["Width"];_B.__19=_banano_sithasodaisy_sduishared.cstr(_B.__19);_B.__1c=__5bd["BorderColor"]===undefined? "black":__5bd["BorderColor"];_B.__1c=_banano_sithasodaisy_sduishared.cstr(_B.__1c);_B.__1d=__5bd["BorderRadius"]===undefined? "5px":__5bd["BorderRadius"];_B.__1d=_banano_sithasodaisy_sduishared.cstr(_B.__1d);_B.__1e=__5bd["BorderStyle"]===undefined? "solid":__5bd["BorderStyle"];_B.__1e=_banano_sithasodaisy_sduishared.cstr(_B.__1e);_B.__1f=__5bd["BorderWidth"]===undefined? "1px":__5bd["BorderWidth"];_B.__1f=_banano_sithasodaisy_sduishared.cstr(_B.__1f);_B.__1b=__5bd["BorderPosition"]===undefined? "all":__5bd["BorderPosition"];_B.__1b=_banano_sithasodaisy_sduishared.cstr(_B.__1b);}if (_B.__7!="") {_B.__7=_B.__7.toLowerCase();_B.__4=u("#" + _B.__7 + "");}if (u("#" + _B.__1 + "").length>0) {_B.__5=u("#" + _B.__1 + "");} else {_B.__5=_B.__4.append("<div id=\"" + _B.__1 + "wrapper\"><canvas id=\"" + _B.__1 + "\"></canvas></div>").find("#"+_B.__1).bananofirst();}_B.assignelement(_B.__3,_B.__1,_B);_B.__21.classes(_B.__a);_B.__21.attributes(_B.__c);_B.__21.styles(_B.__b);_B.__21.paddingaxytblr(_B.__e);_B.__21.marginaxytblr(_B.__d);if (_B.__9==false) {_B.hide(_B);}_B.__8["backgroundColor"]=_banano_sithasodaisy_sduishared.getcolorhex(_B.__f);_B.__8["dotSize"]=_B.__10;_B.__8["maxWidth"]=_B.__13;_B.__8["minDistance"]=_B.__14;_B.__8["minWidth"]=_B.__15;_B.__8["penColor"]=_banano_sithasodaisy_sduishared.getcolorhex(_B.__16);_B.__8["throttle"]=_B.__17;_B.__8["velocityFilterWeight"]=_B.__18;_B.__21.setborder(_B.__1b,_B.__1e,_B.__1f,_B.__1c,_B.__1d);_B.setheight(_B.__11,_B);_B.setwidth(_B.__19,_B);_B.__22.addstyle("position","relative");_B.__22.addstyle("-moz-user-select","none");_B.__22.addstyle("-webkit-user-select","none");_B.__22.addstyle("-ms-user-select","none");_B.__22.addstyle("user-select","none");_B.__21.addstyle("position","absolute");_B.__21.addstyle("left","0");_B.__21.addstyle("top","0");_B.refresh(_B);};_B.assignelement=function(__5c6,_id) {_id=_banano_sithasodaisy_sduishared.cleanid(_id);if (u("#" + _id + "").length>0==false) {return;}_B.__1=_id;_B.__3=__5c6;_B.__5=u("#" + _id + "");_B.__21.assignelement(_B.__3,_B.__1);_B.__22.assignelement(_B.__3,"" + _B.__1 + "wrapper");_B.__21.addevent("afterUpdateStroke",null);_B.__21.addevent("beforeUpdateStroke",null);_B.__21.addevent("beginStroke",null);_B.__21.addevent("endStroke",null);};_B.shadow=function(_s) {_B.__21.shadow(_s);};_B.roundedbox=function() {_B.__21.roundedbox();};_B.addtoparent=function(__5c8,__5bd) {__5c8=_banano_sithasodaisy_sduishared.cleanid(__5c8);_B.__4=u("#"+__5c8);_B.designercreateview(_B.__4,__5bd,_B);};}