grains.forEach(function (item) {
  var $h2 = $('<h2>');
  var $ul = $('ul');
  var $li = $('<li>');
  var $img = $('<img>');
  var $p = $('<p>');

  $h2.html(item.name);
  $ul.append($li);
  $li.append($img);
  $li.append($h2);
  $li.append($p);
  $img.attr('src', 'images/' + item.img);
  $p.html(item.desc);
});
