var a = 1, b = 1, c, d;

c = ++a; alert(c);       // 2 - т.к. переменная а == 1, а префиксная форма ++а сначала увеличивает значение переменной "а" на 1, затем присваивает новое значение "а" переменной "с", то переменной "с" присваивается значение 2
d = b++; alert(d);     // 1 -
c = (2+ ++a); alert(c); 	// 5
d = (2+ b++); alert(d); 	// 4

alert(a); 	// 3
alert(b);	 // 3
