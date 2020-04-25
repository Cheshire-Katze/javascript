let i;
let s;
let q = '';

for (i=1; i<=20; i++) {
    for (s=0; s<i; s++) {
        q += ('x');
    }
    console.log(q);
    q = '';
}