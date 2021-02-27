const workLog = [
    {
        date: '24.02.2021',
        hours: [
            { from: '18:45', to: '19:45' }, // 60
            { from: '23:00', to: '00:00' }, // 60
        ],
        totalMinutes: '120',
    },
    {
        date: '25.02.2021',
        hours: [
            { from: '20:00', to: '22:45' }, // 165
        ],
        totalMinutes: '165',
    },
    {
        date: '26.02.2021',
        hours: [
            { from: '23:20', to: '01:00' }, // 100
            { from: '06:00', to: '07:00' }, // 60
            { from: '17:10', to: '18:00' }, // 50
        ],
        totalMinutes: '210',
    },
]

const getTotalTimeWorked = (log) => {
    let total = 0;
    log.map(x => x.totalMinutes)
        .forEach(amount => {
            total += +amount;
        });

    const hours = Math.ceil(total / 60);
    const minutes = total % 60;

    const totalTime = `${hours}:${minutes}`;

    return totalTime;
}

getTotalTimeWorked(workLog);
