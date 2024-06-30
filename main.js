let log = [];
let id = 0;
const sendmessage = (msg) => {
  log.unshift({ msg: msg, id: id });
  $("#messagecontent").html(`<p id="indivlog_${id}" class="indivlog">${msg}</p>`.concat($("#messagecontent").html()));
  if (log.length > 20) {
    $(`#indivlog_${log[log.length - 1].id}`).remove();
    log.pop();
  }
}
$("waffle").click(() => {
  
}
