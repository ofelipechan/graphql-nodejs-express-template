const usersList = [{
        id: '1',
        name: 'Felipe',
        genre: 'M'
    },
    {
        id: '5',
        name: 'Giovana',
        genre: 'F'
    },
    {
        id: '2',
        name: 'Julia',
        genre: 'F',
    },
    {
        id: '3',
        name: 'Elias',
        genre: 'M',
    },
    {
        id: '4',
        name: 'Rodrigo',
        genre: 'M',
    },
];

const kidsList = [{
        id: '1',
        name: 'marcos',
        genre: 'M',
        motherId: '5',
        fatherId: '1'
    },
    {
        id: '2',
        name: 'rafaela',
        genre: 'F',
        motherId: '2',
        fatherId: '3'
    },
    {
        id: '3',
        name: 'lucas',
        genre: 'M',
        fatherId: '1'
    },
    {
        id: '4',
        name: 'enzo',
        genre: 'M'
    },
];

module.exports = {
    usersList,
    kidsList
}