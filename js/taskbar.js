function onClickWinBtn()
{
    let startMenu=document.getElementById('startmenu');
    startMenu.hidden=!startMenu.hidden;
}
function updateTime()
{
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    let labSysTime=document.getElementById('systime');
    labSysTime.textContent=year+'/'+month+'/'+day;
}