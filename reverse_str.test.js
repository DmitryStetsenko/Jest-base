const reverseStr = require('./tasks/task_01');

// test(
//     'Проверка реверса строки',
//     () => {
//         expect(reverseStr('Hello')).toBe('olleH');
//     }
// );

describe(
    'Моя проверка',
    () => {
        const testCases = [
            {inString: 'Hello', expected: 'olleH'},
            {inString: 'This is JS', expected: 'SJ si sihT'},
            {inString: 'Dima', expected: 'amiD'},
            {inString: 'Negative', expected: 'Negative'},
        ];

        testCases.forEach((test) => {
            it(
                `входные данные: ${test.inString}; ожидаемый результат: ${test.expected}`,
                () => {
                    const res = reverseStr(test.inString);
                    expect(res).toBe(test.expected);
                }
            );
        });
    }
    );