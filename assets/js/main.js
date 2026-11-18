// Pipeline Builder mock: Cloud / HPC toggle
document.querySelectorAll('[data-pipeline]').forEach(function (mock) {
  var out = mock.querySelector('[data-command-out]');
  var btns = mock.querySelectorAll('.toggle__btn');
  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.toggle('is-on', b === btn); });
      out.textContent = btn.dataset.command;
    });
  });
});

// Contact form: opens the visitor's email app with the message filled in
document.querySelectorAll('form[data-mailto]').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var d = new FormData(form);
    var subject = '[' + d.get('topic') + '] Enquiry from ' + d.get('name');
    var body = d.get('message') + '\n\n' + d.get('name') + '\n' + d.get('email');
    window.location.href = 'mailto:' + form.dataset.mailto + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    var note = form.querySelector('.form__note');
    if (note) note.hidden = false;
  });
});
