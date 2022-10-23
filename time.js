const clock = () =>{
    //現在日時取得
    const d = new Date();

    //年月日/曜日/時・分・秒の設定
    let year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    
    let dayNum = d.getDay();
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let day =  week[dayNum];
    
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();

    //日付の繰り上げ
    month = month< 10 ? "0" + month : month;
    date = date< 10 ? "0" + date : date;
    hour = hour< 10 ? "0" + hour : hour;
    min = min< 10 ? "0" + min : min;
    sec = sec< 10 ? "0" + sec : sec;

    //文字列形成
    let today = `${year}.${month}.${date},${day}.`;
    let time = `${hour}:${min}:${sec}`;
    
    //文字列出力
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;

};
 //カウントする
 setInterval(clock,1000);