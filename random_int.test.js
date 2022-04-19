const randomInt = require('./tasks/task_03');

describe(
    'Тест функции генерации случайного числа в заданном диапазоне',
    () => {
        const testCases = [
            {from: 100, to: 110},
            {from: 200, to: 201},
        ];

        testCases.forEach(test => {
            it(
                `from: ${test.from}; to: ${test.to}`,
                () => {
                    const res = randomInt(test.from, test.to);
                    console.log(res);
                    expect(res).toBeGreaterThanEqual(test.from);
                    expect(res).toBeLessThanEqual(test.to);
                }
            );
        })
    }
);