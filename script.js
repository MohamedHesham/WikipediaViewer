$(document).ready(function() {
   $('.loading').hide();
   
  $("#submit").click(function() {
    $('.content').empty();
    $('.search').animate({'margin-top': '20px'}, 'slow');
    $('.loading').show();
    $.ajax( {
      url: "https://en.wikipedia.org/w/api.php?action=query&generator=search&format=json&gsrprop=snippet&prop=info&inprop=url&gsrsearch=" + $('input[name="search"]').val(),
      // data: { action: 'query', list: 'search', srsearch: "mohamed", format: 'json', prop: 'info', inprop: 'url' },
      dataType: 'jsonp',
      type: 'GET',
      headers: { 'Api-User-Agent': 'Example/1.0' },
   complete: function(){
      $('.loading').hide();
   },
      success: function(data) {
         // do something with data
         console.log(data.query.pages);
         for (var n in data.query.pages) {
           $('.content').append('<p><a target="_blank" href="'+data.query.pages[n].canonicalurl+'">' + data.query.pages[n].title + '</a></p>');
         }
      }
  } );
  });
});
