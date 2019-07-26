const usersList = [{
        id: '1',
        nome: 'Felipe',
        genre: 'M'
    },
    {
        id: '5',
        nome: 'Giovana',
        genre: 'F'
    },
    {
        id: '2',
        nome: 'Julia',
        genre: 'F',
    },
    {
        id: '3',
        nome: 'Elias',
        genre: 'M',
    },
    {
        id: '4',
        nome: 'Rodrigo',
        genre: 'M',
    },
];

const kidsList = [{
        id: '1',
        nome: 'marcos',
        genre: 'M',
        motherId: '5',
        fatherId: '1'
    },
    {
        id: '2',
        nome: 'rafaela',
        genre: 'F',
        motherId: '2',
        fatherId: '3'
    },
    {
        id: '3',
        nome: 'lucas',
        genre: 'M',
        fatherId: '1'
    },
    {
        id: '4',
        nome: 'enzo',
        genre: 'M'
    },
];

module.exports = {
    usersList,
    kidsList
}