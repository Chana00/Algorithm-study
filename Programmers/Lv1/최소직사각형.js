function solution(sizes) {
    let wMax;
    let hMax;

    //가로 < 세로 이면 명함을 눕힌다.
    sortSizes = sizes.map(card => {
        if (card[0] > card[1]) {
            return [card[1], card[0]];
        }
        else
            return card;
    })

    wMax = sortSizes[0][0];
    hMax = sortSizes[0][1];

    for (const card of sortSizes) {
        if (wMax < card[0]) wMax = card[0];
        if (hMax < card[1]) hMax = card[1];
    }

    console.log(wMax * hMax)

    return wMax * hMax;
}

solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])