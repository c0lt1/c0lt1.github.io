/* Öffnungsstatus-Indicator: schaltet automatisch nach Uhrzeit/Wochentag.
   Öffnungszeiten: Mo–Fr 8:00–17:00 Uhr, Sa nach Absprache, So geschlossen. */
(function () {
  var status = document.querySelector('.topbar-status');
  if (!status) return;

  var now = new Date();
  var day = now.getDay(); // 0 = So, 6 = Sa
  var minutes = now.getHours() * 60 + now.getMinutes();
  var isOpen = day >= 1 && day <= 5 && minutes >= 480 && minutes < 1020; // 8:00–17:00

  status.classList.toggle('is-open', isOpen);
  status.classList.toggle('is-closed', !isOpen);
})();
