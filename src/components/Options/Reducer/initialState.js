const initialState = {
    withReverce: true,
    payAll: false,
    isRandom: true,
    withRed: false,
    redPoints: 2,
    yellowPoints: 1,
    lastBall: 1,
    lastBallByCost: true,
    customBallPrice: false,
    ballPrice: 0.5,
    players: [
        {
            id: 1,
            name: "",
            placeholder: "Имя *",
            canRemove: false
        },
        {
            id: 2,
            name: "",
            placeholder: "Имя *",
            canRemove: false
        }
    ],
    startOptions: [
        {
            id: 1,
            title: 'Реверс',
            class: 'Reverce',
            possibleValues: [
                {
                    id: 1,
                    title: 'С реверсом',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'Без реверса',
                    isSelected: false
                }
            ]
        },
        {
            id: 2,
            title: 'Оплата света',
            class: 'Payment',
            possibleValues: [
                {
                    id: 1,
                    title: 'Только минусовые',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'Свет на всех',
                    isSelected: false
                }
            ]
        },
        {
            id: 3,
            title: 'Жеребьевка',
            class: 'Random',
            possibleValues: [
                {
                    id: 1,
                    title: 'Случайный порядок',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'В порядке ввода имен',
                    isSelected: false
                }
            ]
        },
        {
            id: 4,
            title: 'Игра с красным?',
            class: 'Q-ball',
            possibleValues: [
                {
                    id: 1,
                    title: 'Только желтый',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'С красным',
                    isSelected: false
                }
            ]
        },
        {
            id: 5,
            title: 'Последний шар за',
            class: 'LastBall',
            possibleValues: [
                {
                    id: 1,
                    title: 'Стоимость шара',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'Стоимость шара + 1',
                    isSelected: false
                },
                {
                    id: 3,
                    title: 'По количеству игроков',
                    isSelected: false
                },
                {
                    id: 4,
                    title: 'Количество игроков + стоимость шара',
                    isSelected: false
                }
            ]
        },
        {
            id: 6,
            title: 'Цена шара',
            class: 'BallPrice',
            possibleValues: [
                {
                    id: 1,
                    title: 'Игра на очки',
                    isSelected: true
                },
                {
                    id: 2,
                    title: 'Установить цену шара',
                    isSelected: false
                }
            ]
        }
    ]

};

export default initialState;