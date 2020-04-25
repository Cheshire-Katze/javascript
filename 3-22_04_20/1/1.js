let i = 0;

while (i>=0 && i<=100) {

    for (let r = 2; i>=r; r++) {

        if (i % r == 0 && i!==r) {
            break;
        }
        else if (i==r) {
            document.write(i + ' ');
        }
    }

    i++;
}