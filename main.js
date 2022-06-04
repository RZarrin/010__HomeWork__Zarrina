    let list = receipt();

    const delivery = 9000;
    let price = delivery;

    let order = '';

    for (const name in list) {
        price += list[name].price;
        order += `${name} ${list[name].info}, `;
    }


    let answer = `Вы заказали: ${order.substring(0, order.length - 2)} | Общая стоимость ${price} сумм c доставкой ${delivery} сумм`;


    console.log(answer);