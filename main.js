let log = [];
let id = 0;
const sendmessage = (msg) => {
  log.unshift({ msg: msg, id: id });
  document.querySelector("#messagecontent").html(`<p id="indivlog_document.querySelector{id}" class="indivlog">document.querySelector{msg}</p>`.concat(document.querySelector("#messagecontent").html()));
  if (log.length > 20) {
    document.querySelector(`#indivlog_${log[log.length - 1].id}`).remove();
    log.pop();
  }
}
sendmessage("There's not much to do here.");
});
