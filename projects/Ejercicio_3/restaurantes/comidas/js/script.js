minus.addEventListener("click", () => {
    let count = parseInt(counter.value);
    if (count != 0) {
        count -= 1;
        counter.value = count;
    }
});

plus.addEventListener("click", () => {
    let count = parseInt(counter.value);
    count += 1;
    counter.value = count;
});