const filterArray = require('./tasks/task_02');

describe(
    'Тест фильтрации индексов массива на четность',
    () => {
        const testCases = [
            {in: [0, 1, 2, 3, 4], expected: [0, 2, 4]},
            {in: [true, false, true, false, true], expected: [true, true, true]},
        ];

        testCases.forEach(test => {
            it(
                `in: ${test.in}; expected: ${test.expected}`,
                () => {
                    const res = filterArray(test.in);
                    expect(res).toEqual(test.expected);
                }
            );
        });
    }
);