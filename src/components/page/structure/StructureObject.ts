export type positionType =  [x: number, y: number, z: number];
export type pointType = {
    name: string;
    position: positionType;
    link: number;
}
export type pointStructureObjectType = {
    points: pointType[],
    rotation?: positionType,
    url: string,
}
const structureObject: pointStructureObjectType[]  =  [
    {
        points: [
            {
                name: 'Hall',
                position: [-25, -2, 0],
                link: 1,
            },
            {
                name: 'Cupula',
                position: [-30, 4, -3],
                link: 8,
            },
            {
                name: 'Aquario',
                position: [-30, -1, -15],
                link: 4,
            },
            {
                name: 'Teatro de Arena',
                position: [5, 0, -12],
                link: 16,
            },
            {
                name: 'Stonehenge',
                position: [0, -1, 20],
                link: 15,
            },

        ],
        rotation: [0, -1.5, 0],
        url: '/images/360/01-entrada.JPG',
    },
    {
        points: [
            {
                name: 'Entrada',
                position: [-11, 0, 7],
                link: 0,
            },
            {
                name: 'Auditorio',
                position: [-15, 0, 3],
                link: 5,
            },
            {
                name: 'Antessala',
                position: [-1, -1, -10],
                link: 2,
            },
        ],
        rotation: [0,-1.2,0],
        url: '/images/360/02-hall.JPG',
    },
    {
        points: [
            {
                name: 'Planetario',
                position: [-8, -1, 6],
                link: 13,
            },
            {
                name: 'Hall',
                position: [-10, -1, -3],
                link: 1,
            },
            {
                name: 'Auditorio',
                position: [-4, -1, -10],
                link: 5,
            },
            {
                name: 'Jardim',
                position: [10, 0, 0],
                link: 10,
            },
        ],
        rotation: [0, 3, 0],
        url: '/images/360/03-antessala.JPG',
    },
    {
        points: [
            {
                name: 'Caverna',
                position: [40, 4, -40],
                link: 7,
            },
            {
                name: 'Geoshow',
                position: [30, 0, -10],
                link: 11,
            },
            {
                name: 'Aquario',
                position: [30, 1, 4],
                link: 4,
            },
            {
                name: 'Relogio de Sol',
                position: [4, 0, 30],
                link: 14,
            },
            {
                name: 'Jardim',
                position: [15, 0, 40],
                link: 10,
            },
        ],
        url: '/images/360/alossauro.jpg',
    },
    {
        points: [
            {
                name: 'Arena',
                position: [8, -1, 16],
                link: 16,
            },
            {
                name: 'Entrada',
                position: [-9, -1, 14],
                link: 0,
            },
            {
                name: 'Jardim',
                position: [-8, 0, -20],
                link: 10,
            },
        ],
        url: '/images/360/aquario.JPG',
    },
    {
        points: [
            {
                name: 'Antessala',
                position: [-10, 0, -6],
                link: 2,
            },
            {
                name: 'Hall',
                position: [10, 0, -6],
                link: 5,
            },
        ],
        rotation: [0,-1.6, 0],
        url: '/images/360/06-auditorio.JPG',
    },
    {
        points: [
            {
                name: 'Foguete',
                position: [-30, -4, 0],
                link: 12,
            },
            {
                name: 'Jardim',
                position: [5, -2, 20],
                link: 10,
            },
            {
                name: 'Antessala',
                position: [18, -1, 28],
                link: 2,
            },
        ],
        url: '/images/360/base-de-lancamento.jpg',
    },
    {
        points: [
            {
                name: 'Sair',
                position: [10, -1, -28],
                link: 11,
            },
        ],
        rotation: [0,-0.7, 0],
        url: '/images/360/08-caverna.JPG',
    },
    {
        points: [
            {
                name: 'Sair',
                position: [18, -8, -2],
                link: 0,
            },
        ],
        url: '/images/360/cupula.jpg',
    },
    {
        points: [
            {
                name: 'Auditorio',
                position: [-2, 0, -26],
                link: 5,
            },
            {
                name: 'Hall',
                position: [20, 0, 0],
                link: 1,
            },
        ],
        url: '/images/360/entrada_auditorio.jpg',
    },
    {
        points: [
            {
                name: 'Base de Lançamento',
                position: [-10, 0, 10],
                link: 6,
            },
            {
                name: 'Antessala',
                position: [20, 2, -6],
                link: 2,
            },
            {
                name: 'Alossauro',
                position: [-10, 2, -10],
                link: 3,
            },
            {
                name: 'Relogio de Sol',
                position: [-15, 2, -8],
                link: 14,
            },
            {
                name: 'Aquario',
                position: [0, 1, -15],
                link: 4,
            },
        ],
        url: '/images/360/11-jardim.JPG',
    },
    {
        points: [
            {
                name: 'Caverna',
                position: [-1, 0, -20],
                link: 7,
            },
            {
                name: 'Aquario',
                position: [30, 0, 0],
                link: 4,
            },
            {
                name: 'Relogio de Sol',
                position: [15, 0, 20],
                link: 14,
            },
            {
                name: 'Alossauro',
                position: [0, 0, 20],
                link: 3,
            },
        ],
        url: '/images/360/geoshow.jpg',
    },
    {
        points: [
            {
                name: 'Base',
                position: [30, 2, 0],
                link: 6,
            },
        ],
        url: '/images/360/lancamento-foguetes.jpg',
    },
    {
        points: [
            {
                name: 'Sair',
                position: [-10, -1, -3],
                link: 2,    
            },
        ],
        rotation: [0, 1.8, 0],
        url: '/images/360/14-planetario.JPG',
    },
    {
        points: [
            {
                name: 'Jardim',
                position: [8, 0, 20],
                link: 10,
            },
            {
                name: 'Alossauro',
                position: [0, 0, -20],
                link: 3,
            },
            {
                name: 'Geoshow',
                position: [12, 0, -20],
                link: 11,
            },
            {
                name: 'Aquario',
                position: [20, 0, -2],
                link: 4,
            },
        ],
        url: '/images/360/relogio-de-sol.jpg',
    },
    {
        points: [
            {
                name: 'Entrada',
                position: [10, 0, -10],
                link: 0,
            },
            {
                name: 'Jardim',
                position: [-5, 0, -15],
                link: 10,
            },
        ],
        url: '/images/360/16-stonehenge.JPG',
    },
    {
        points: [
            {
                name: 'Geoshow',
                position: [-2, 0, -20],
                link: 11,
            },
            {
                name: 'Entrada',
                position: [-5, 0, 20],
                link: 0,
            },
        ],
        url: '/images/360/teatro-de-arena.jpg',
    },
]

export default structureObject