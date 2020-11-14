
let R = prompt('Радиус вращения цилиндра R', '');
let H = prompt('Высота цилиндра H', '');
let S = Math.PI * R ** 2;
let V = S * H;

document.write('************** <br>');
document.write('Обьем цилиндра с площадью основы ' + S + ', ' + 'радиусом ' + R + ' и высотой ' + H + ', ' + 'равен: <br>');
document.write('-------------------- <br>');
document.write('V = ' + V + '<br>');
document.write('-------------------- <br>');
document.write('end')
