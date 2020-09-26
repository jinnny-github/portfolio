$(function () {
  $("#dDate , #aDate").datepicker({
    dateFormat: 'yy-mm-dd',
    inline: true,
    showMonthAfterYear: true
  });
  $('#dDate').datepicker('setDate', 'today');
  $('#aDate').datepicker('setDate', '+7D');
})
