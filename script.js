// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі

const wakeUp = (hour) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hour <= 6) {
                resolve('Good')
            } else {
                reject('Too late')
            }
        }, 300)


    })

}

const eatBreakfast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve('Now you are satisfied and not hungry')

        }, 1000)


    })

}

const goShower = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('good job')
        }, 500)


    })


}

const waitBus = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('You are in a bus')
        }, 3000)
    })
}

const haveLunch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('I had lunch')
        }, 1000)
    })
}

const myDay = async () => {
    try {
        const wakeUpTime = await wakeUp(6)
        console.log(wakeUpTime)
        const breakfast = await eatBreakfast()
        console.log('Breakfast')
        const shower = await goShower()
        console.log(shower)
        const bus = await waitBus()
        console.log(bus)
        const lunch = await haveLunch()
        console.log(lunch)

    } catch (e) {
        console.error(e)
    }
}

myDay()