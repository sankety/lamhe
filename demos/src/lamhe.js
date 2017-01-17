/**
 * Created by sankety on 12/1/17.
 */
(function (global) {
    global.lamhe = {};
    global.lamhe.convertUnix = function(input,format,wantTime){
        var a = new Date(input * 1000);
        if(format.length!=5){
            return 'Not a valid format!';
        }
        return getInFormat(a,format,wantTime);
    };
    function getInFormat(a,format,wantTime){
        var sep = format.charAt(1);
        var ind = format.split(sep);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var y = (a.getFullYear()<10)?'0'+a.getFullYear():a.getFullYear();
        var m = ind.find(function(num){
            if(num=='M')return true;
        })?months[a.getMonth()]:(function(){
            return a.getMonth() + 1 < 10 ? '0' + (a.getMonth() + 1) : a.getMonth() + 1;
        }());
        var d = function(){
            return a.getDate() < 10 ? '0' + a.getDate() : a.getDate();
        }();
        var temp = '';
        ind.forEach(function(item,index){
            var sep_loop = index!=2?sep:'';
            if(item=='y'){
                temp=temp+y+sep_loop;
            }
            if(item=='m' || item=='M'){
                temp=temp+m+sep_loop;
            }
            if(item=='d'){
                temp=temp+d+sep_loop;
            }
        });
        var strTime = '';
        if(wantTime){
            var sec = a.getSeconds();
            var hours = a.getHours();
            var minutes = a.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            hours = hours<10?'0'+hours:hours;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            strTime = hours + ':' + minutes + ' ' + ampm;
        }
        return temp+' '+strTime;

    }
}(window));