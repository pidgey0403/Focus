export function date(){
    const d = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let weekArr = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return weekArr[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}


export function time() {
    const d = new Date();
    let time = d.toLocaleString('en-US', { hour: 'numeric', minute:'numeric', second:'numeric', hour12: true}) ;
    return time;
}
