$('#full_name').keyup(function() {
    $('#last_name').val(this.value.toLowerCase().replace(/\s/g, ''));
  });