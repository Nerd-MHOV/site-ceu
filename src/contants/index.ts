import {
    carrent,
    creator,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    jobit,
    meta,
    mobile,
    mongodb,
    nodejs,
    reactjs,
    redux,
    shopify,
    starbucks,
    observacao,
    planetarium,
    tailwind,
    tesla,
    threejs,
    tripguide,
    typescript,
    web,
} from "@/../public/assets";

export const navLinks = [
    {
        id: "estrutura",
        title: "Estrutura",
        link: '/estrutura'
    },
    {
        id: "atividades",
        title: "Atividades",
        link: '/atividades'
    },
    {
        id: "escolas",
        title: "Escolas & Colégios",
        link: '/escolas'
    },
    {
        id: "publico",
        title: "Atendimento ao Público",
        link: '/publico'
    },
    {
        id: "corporativo",
        title: "Eventos Corporativos",
        link: '/corporativo'
    },
];

const structure = [
    {
        id: 0,
        name: 'Anfiteatro',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. recusandae velit voluptas.`,
        staticImage: '/a-static.png',
        dynamicImage: '/auditorio-teste.png',
    },
    {
        id: 1,
        name: 'Caverna',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. recusandae velit voluptas.`,
        staticImage: '/a-static.png',
        dynamicImage: '/auditorio-teste.png',
    },
    {
        id: 2,
        name: 'Planetario',
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. recusandae velit voluptas.`,
        staticImage: '/a-static.png',
        dynamicImage: '/auditorio-teste.png',
    },

]

const activities = [
    {
        id: "1",
        title: "atividade 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. Ad commodi hic ipsum itaque molestiae quo
                recusandae velit voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. Ad commodi hic ipsum itaque molestiae quo
                recusandae velit voluptas.`,
        video: "/video.mp4",
    },
    {
        id: "2",
        title: "atividade 2",
        description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. Ad commodi hic ipsum itaque molestiae quo
                recusandae velit voluptas.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda blanditiis dignissimos hic iusto
                nesciunt odio, odit repellendus sapiente veniam voluptate. Ad commodi hic ipsum itaque molestiae quo
                recusandae velit voluptas.`,
        video: "/video2.mp4",
    }
]

const activitiesList = [
    {
        id: 1,
        type: "workshop",
        title: "Energias",
        image: "https://images.pexels.com/photos/4338617/pexels-photo-4338617.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: `Em grupo, os estudantes analisam características de cidades fictícias e trabalham em um plano de gestão para ampliação e geração de energia. Neste processo, é possível compreender as variações de sua produção em usinas hidrelétricas, termoelétricas, termonucleares, eólicas e solares. Os grupos também discutem entre si sobre as soluções apresentadas mostrando vantagens e desvantagens do uso de cada matriz energética escolhida.`,
        subjects: [
            { title: "Ciências", color: "text-blue-300", },
            { title: "Geografia", color: "text-orange-300", },
            { title: "Meio Ambiente", color: 'text-green-300', },
            { title: 'Física', color: 'text-green-500', },
        ],
        topics: [
            "Definição de tipos de energia",
            "Matrizes energéticas disponíveis ( Hidroelétrica, Solar, Nuclear, Termonuclear, Eólica )",
            "Sustentabilidade",
            "Dinâmica de trabalho em equipe",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 2,
        title: "A Família do Sol",
        type: "multimedia",
        image: "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Simulação de uma viagem pelo Sistema Solar, onde visitamos o Sol, os oito planetas, luas mais importantes, cometas e asteróides. Para cada objeto descrevemos suas características físicas (tamanho, temperatura, composição) e orbitais (distância e período de revolução). Comparamos estas características com a Terra que é também detalhada ao final da viagem. Durante o passeio passamos pelas superfícies de alguns planetas e mostramos que a Terra é o único planeta com condições para abrigar seres vivos como nós.`,
        subjects: [
            { title: "Ciências", color: "text-blue-300", },
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Geografia", color: "text-orange-300", },
        ],
        topics: [
            "Tipos de objetos do Sistema Solar ( sol, planetas, luas, asteróides e cometas )",
            "Características físicas dos planetas ( diâmetro, temperatura, composição )",
            "Características orbitais dos planeas ( revolução, rotação )",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '3°ano', color: 'text-emerald-300', },
            { title: '4°ano', color: 'text-emerald-400', },
            { title: '5°ano', color: 'text-emerald-500', },
        ],
    },
    {
        id: 3,
        title: "Gravidade Zero",
        type: "multimedia",
        image: "https://images.pexels.com/photos/41005/rocket-launch-rocket-take-off-soyuz-41005.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: `Iniciamos com uma rápida introdução a história da aviação e da astronáutica mostrando algumas pessoas que foram importantes neste campo da ciência, como Santos Dumont e Verner Von Braun. A seguir apresentamos os componentes e funções de alguns foguetes e sua evolução. Comenta-se sobre a exploração do espaço, desde a corrida espacial com destino a Lua até os dias de hoje com o turismo espacial. Finalmente exploramos como o corpo humano reage ao ambiente espacial e o que é preciso para ser um astronauta.`,
        subjects: [
            { title: "Astronáutica", color: 'text-blue-500', },
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Geografia", color: "text-orange-300", },
            { title: "História", color: 'text-brown-300', },
            { title: 'Física', color: 'text-green-500', },
        ],
        topics: [
            "Funcionamento e importância dos foguetes",
            "Missões Apollo",
            "Veículos espaciais",
            "Estação Espacial Internacional",
            "Corpo Humano em baixa gravidade",
            "Tecnologia aeroespacial",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 4,
        title: "Geometria Cósmica",
        type: "multimedia",
        image: "https://images.pexels.com/photos/7046423/pexels-photo-7046423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Descrição da história da Astronomia com personagens importantes como Ptolomeu, Galileu e Copérnico e suas contribuições para nossa visão de Universo. A seguir explicam-se os fenômenos do Sistema Sol-Terra-Lua, incluindo calendários, estações do ano, fases da Lua e eclipses.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', }, 
            { title: "Ciências", color: "text-blue-300", },
            { title: "Geografia", color: "text-orange-300", },
            { title: "História", color: 'text-brown-300', },
            { title: 'Matemática', color: 'text-yellow-200', },
        ],
        topics: [
            "História da Astronomia",
            "Sistemas de mundos",
            "Estações do ano",
            "Fases da Lua",
            "Eclipses",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 5,
        title: "Albedo 0.39",
        type: "multimedia",
        image: "https://images.pexels.com/photos/1275393/pexels-photo-1275393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Uma viagem de estudo do planeta Terra, onde são descritas as características da sua superfície, estrutura intera e fenômenos que ocorrem na crosta terrestre. São explicados a formação de vulções, cordilheiras de montanhas, deriva continental, terremotos, maremotos e suas conseqüências para nós.`,
        subjects: [
            { title: "Ciências", color: "text-blue-300", },
            { title: "Geografia", color: "text-orange-300", },
            { title: "Geologia", color: "text-orange-600", },
        ],
        topics: [
            "Estrutura interna da Terra",
            "Vulcões",
            "Terremotos",
            "Maremotos",
            "Placas Tectônicas",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
        ],
    },
    {
        id: 6,
        title: "Jornada nas Estrelas",
        type: "multimedia",
        image: "https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Viagem interestelar simulada, onde mostramos as características físicas das estrelas, como temperaturas, tamanhos, distâncias e classificações básicas. A seguir explica-se o ciclo de formação de estrelas no interior de nebulosas, os tipos de nebulosas e a destruição de estrelas que podem gerar objetos como pulsares e buracos negros.Também é explicado o conceito de galáxia e demonstrado o tamanho do Universo observável.`,
        subjects: [
            { title: "Ciências", color: "text-blue-300", },
            { title: "Geografia", color: "text-orange-300", },
            { title: "Astronomia", color: 'text-blue-300', }, 
            { title: 'Matemática', color: 'text-yellow-200', },
            { title: 'Física', color: 'text-green-500', },
            { title: 'Química', color: 'text-blue-900', },
        ],
        topics: [
            "Unidade de medidas estelar ( ano-luz )",
            "Características físicas de estrelas",
            "Tipos de objetos ( estrelas, nebulosas, pulsares, buracos negros )",
            "Evolução estelar",
            "Conceitos de galáxia e Universo",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 7,
        title: "Turma Alto Astral",
        type: "planetarium",
        image: "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Os alunos interagem com a turma alto astral em busca de pistas misteriosas para salvar o planeta Terra, incentivando a conscientização, respeito ao próximo, trabalho em grupo e a preservação do planeta.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', }, 
            { title: "Meio Ambiente", color: 'text-green-300', },
        ],
        topics: [
            "Recursos naturais",
            "Sustentabilidade",
            "Planetas do Sistema Solar",
        ],
        tags: [
            { title: '1°ano', color: 'text-emerald-100', },
            { title: '2°ano', color: 'text-emerald-200', },
            { title: '3°ano', color: 'text-emerald-300', },
        ],
    },
    {
        id: 8,
        title: "Endereço Espacial",
        type: "planetarium",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Com os robozinhos Teka e Tiko, os alunos participam de uma aventura para salvar um bebê alienígena que se perdeu e veio parar na Terra. Nesta jornada, os estudantes acompanham o desafio de localizar a casa do bebê alienígena no universo e, geograficamente, aprendem a identificar regiões, bairros, estados, países, continentes, planetas, galáxias e grupos de galáxias para terem assim uma ideia geral do tamanho de nosso Universo.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', }, 
            { title: "Geografia", color: "text-orange-300", },
            { title: "Valores Humanos", color: "text-blue-100", },
            { title: "Responsabilidade", color: "text-violet-500", },
            { title: "Coragem", color: "text-green-500", },
        ],
        topics: [
            "Localização geográfica ( bairro, cidade, região, estado, pais, continente, planeta )",
            "Localização espacial ( demais planetas, estrelas, galáxias, aglomerados de galáxias )",
        ],
        tags: [
            { title: '2°ano', color: 'text-emerald-200', },
            { title: '3°ano', color: 'text-emerald-300', },
            { title: '4°ano', color: 'text-emerald-400', },
        ],
    },
    {
        id: 9,
        title: "Filhos do Sol",
        type: "planetarium",
        image: "https://images.pexels.com/photos/954929/pexels-photo-954929.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: `Através de um tour  pelo Sistema Solar, a sessão apresenta as principais características dos seus componentes, partindo da Terra em direção ao Sol e seguindo até os planetas, asteroides, planetas anões e cometas. Em cada componente são apresentadas as informações e caracteristicas mais relevantes associando ao conteúdo da grade de ciências abordados, principalmente, no Ensino Fundamental.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', }, 
            { title: "Geografia", color: "text-orange-300", },
            { title: "Ciências", color: "text-blue-300", },
        ],
        topics: [
            "Sol",
            "Planetas do Sistema Solar",
            "Planetas Anões",
            "Cometas",
            "Vida na Terra",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '3°ano', color: 'text-emerald-300', },
            { title: '4°ano', color: 'text-emerald-400', },
            { title: '5°ano', color: 'text-emerald-500', },
        ],
    },
    {
        id: 10,
        title: "Micromonstros",
        type: "planetarium",
        image: "https://images.pexels.com/photos/3992943/pexels-photo-3992943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Em uma viagem microscópica, os estudantes podem conhecer alguns seres invisíveis aos nossos olhos e que podem nos fazer mal: piolhos, vermes, pulgas, carrapatos e bactérias em estilo de desenho animado. Tudo isso, explorando o mundo invisível no quarto de uma criança.`,
        subjects: [
            { title: "Biologia", color: 'text-green-200', }, 
            { title: "Higiene", color: "text-white-300", },
            { title: "Doenças", color: "text-yellow-800", },
            { title: "Parasitismo", color: "text-red-800", },
            { title: "Simbiose", color: "text-black-400", },
        ],
        topics: [
            "Piolhos",
            "Pulgas",
            "Percevejos",
            "Ácaros",
            "Tênia",
            "Protozoários",
            "Plasmodium",
            "Bactérias",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '4°ano', color: 'text-emerald-400', },
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
        ],
    },
    {
        id: 11,
        title: "Palco Celeste",
        type: "planetarium",
        image: "https://images.pexels.com/photos/2565420/pexels-photo-2565420.jpeg",
        description: `Essa sessão aborda a nossa visão do céu noturno, longe da poluição luminosa produzida pelas cidades e mostra o que podemos ver sem o uso de telescópios. É feito o reconhecimento de constelações de verão e inverno para o hemisfério Sul e a seguir viajamos no tempo para diferentes locais da Terra, para que o expectador presencie o acontecimento de eventos astronômicas como auroras, cometas e chuvas de meteoros.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Ciências", color: "text-blue-300", },
            { title: "Geografia", color: "text-orange-300", },
            { title: "História", color: 'text-brown-300', },
            { title: 'Física', color: 'text-green-500', },
        ],
        topics: [
            "Visão do céu a olho nú",
            "Poluição luminosa",
            "Constelações",
            "Fenômenos celestes",
            "Chuva de meteoros",
            "Cometas",
            "Lua",
            "Eclipses",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 12,
        title: "Irmãos de Gaia",
        type: "planetarium",
        image: "https://images.pexels.com/photos/4737484/pexels-photo-4737484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Essa sessão aborda a nossa visão do céu noturno, longe da poluição luminosa produzida pelas cidades e mostra o que podemos ver sem o uso de telescópios. É feito o reconhecimento de constelações de verão e inverno para o hemisfério Sul e a seguir viajamos no tempo para diferentes locais da Terra, para que o expectador presencie o acontecimento de eventos astronômicas como auroras, cometas e chuvas de meteoros.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Ciências", color: "text-blue-300", },
            { title: 'Química', color: 'text-blue-900', },
            { title: "Geografia", color: "text-orange-300", },
        ],
        topics: [
            "Origem do Sistema Solar",
            "Estrutura interna dos planetas",
            "Origem da Lua",
            "Evolução do Sol",
        ],
        tags: [
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
        ],
    },
    {
        id: 13,
        title: "Vingança do Clima",
        type: "planetarium",
        image: "https://images.pexels.com/photos/76969/cold-front-warm-front-hurricane-felix-76969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Transportados para um futuro distante, os alunos conhecem seres extraterrestres que descobrem o planeta Terra e se deparam com as implicações, hoje previstas e que estão se concretizando, sobre o aquecimento global. São apresentados cenários futuros onde ocorreram o derretimento das geleiras e aumento do nível dos mares. São discutidos os impactos das intervenções humanas no equilíbrio do planeta.`,
        subjects: [
            { title: "Ciências", color: "text-blue-300", },
            { title: "Meio Ambiente", color: 'text-green-300', },
            { title: "Geografia", color: "text-orange-300", },
        ],
        topics: [
            "Biosfera",
            "Meio Ambiente",
            "Aquecimento Global",
            "Desmatamento",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 14,
        title: "O Sopro da Vida",
        type: "planetarium",
        image: "https://images.pexels.com/photos/1586068/pexels-photo-1586068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `A ideia dessa sessão é estudar a vida a partir de uma célula primordial. Para entender como a vida surgiu nos oceanos primitivos da Terra, voltamos no tempo, entramos em uma célula gigante para conhecer suas organelas. Dentro de um organismo, conhecemos alguns órgãos e sistemas até o cérebro humano.`,
        subjects: [
            { title: "Biologia", color: 'text-green-200', }, 
            { title: "Ciências", color: "text-blue-300", },
        ],
        topics: [
            "Formação do ambiente propício a vida",
            "Surgimento e evolução da vida",
            "Moléculas orgânicas, DNA",
            "Célula e organelas celulares",
            "Tecidos, órgãos e sistemas",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 15,
        title: "O Reino da Luz",
        type: "planetarium",
        image: "https://images.pexels.com/photos/15326066/pexels-photo-15326066/free-photo-of-show-concerto-apresentacao-sombrio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Com lindas imagens e olhando para as estrelas, os expectadores são convidados a contemplar e refletir filosoficamente sobre a origem do Universo e da vida como a conhecemos.`,
        subjects: [
            { title: "Biologia", color: 'text-green-200', }, 
            { title: "Ciências", color: "text-blue-300", },
            { title: "Filosofia", color: "text-yellow-700, "},
        ],
        topics: [
            "Formação do Universo",
            "Formação da Terra",
            "Surgimento e evolução da vida",
        ],
        tags: [
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
        ],
    },
    {
        id: 14,
        title: "Uma Noite com 100 Bilhões de Estrelas",
        type: "planetarium",
        image: "https://images.pexels.com/photos/2098427/pexels-photo-2098427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Em uma viagem espacial simulada, atravessamos a estrutura da Via Láctea para conhecer diferentes objetos astronômicos que compõem nossa Galáxia. A simulação proporciona a experiência de observar a paisagem de uma região até então, inalcansável para a humanidade.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Geografia", color: "text-orange-300", },
            { title: 'Física', color: 'text-green-500', },
            { title: "Ciências", color: "text-blue-300", },
        ],
        topics: [
            "Estrutura da Via-Láctea",
            "Estrelas",
            "Nebulosas",
            "Buracos Negros",
            "Aglomerados Estelares",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 15,
        title: "Universo Líquido",
        type: "planetarium",
        image: "https://images.pexels.com/photos/10161677/pexels-photo-10161677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Dada a importância da água líquida para o surgimento e manutenção da vida na Terra, a sessão apresenta a água enquanto substância química e sua importância como solvente universal. A seguir viajamos pelo Universo para explicar o origem da água e de seus elementos componentes, Hidrogênio e Oxigênio e ainda discutimos sua disponibilidade em outros locais no universo, como a nossa Lua, outros planetas e exoplanetas.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', },
            { title: 'Física', color: 'text-green-500', },
            { title: 'Química', color: 'text-blue-900', },
            { title: "Ciências", color: "text-blue-300", },
        ],
        topics: [
            "Características físicas das água",
            "Água na Terra",
            "Origem da água e do hidrogênio e oxigênio",
            "Água no Universo",
            "Água em exoplanetas",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 16,
        title: "Mundos Vivos",
        type: "workshop",
        image: "https://images.pexels.com/photos/10161677/pexels-photo-10161677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Na primeira parte da oficina, os estudantes são divididos em grupos onde cada um representa um planeta, e seguindo instruções de medida, criam uma maquete em escala do Sistema Solar. A seguir é realizada uma gincana, onde os alunos são obrigados a discutir entre si e trocar informações para responder perguntas sobre os objetos do Sistema Solar.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Ciências", color: "text-blue-300", },
            { title: 'Matemática', color: 'text-yellow-200', },
            { title: "Geografia", color: "text-orange-300", },
        ],
        topics: [
            "Proporção e escala",
            "Distância entre planetas do Sistema Solar",
            "Características dos planetas",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
        ],
    },
    {
        id: 17,
        title: "Fobos: O Fogute",
        type: "workshop",
        image: "https://images.pexels.com/photos/87089/rocket-lift-off-liftoff-astronautics-87089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Inicialmente é feita uma breve introdução sobre a estrutura de um foguete, seu tipo de combustível e como será o roteiro da atividade. A seguir, na base de lançamento, com casamata para proteger a equipe e torre de lançamento, os alunos realizam os procedimentos para o lançamento de um minifoguete. Os estudantes trabalham em equipe e seus integrantes têm funções específicas como  para ignição, segurança e resgate.`,
        subjects: [
            { title: "Astronáutica", color: 'text-blue-500', },
            { title: 'Química', color: 'text-blue-900', },
            { title: 'Física', color: 'text-green-500', },
            { title: "Ciências", color: "text-blue-300", },
        ],
        topics: [
            "Terceira Lei de Newton ( acão e reação )",
            "Programa espacial brasileiro",
            "Procedimentos de segurança",
            "Propelentes",
            "Dinâmica de trabalho em equipe",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
            { title: '1°ano[E.M.]', color: 'text-lime-100', },
            { title: '2°ano[E.M.]', color: 'text-lime-200', },
            { title: '3°ano[E.M.]', color: 'text-lime-300', },
        ],
    },
    {
        id: 18,
        title: "O Céu na Régua e Compasso",
        type: "workshop",
        image: "https://images.pexels.com/photos/15206853/pexels-photo-15206853/free-photo-of-crepusculo-cair-da-noite-fim-da-tarde-lago.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Nessa oficina a teoria se junta a prática. Cada estudante monta o seu próprio relógio solar horizontal e com matemática e geometria básicas, compreende o movimento aparente do Sol, aprende a posicionar seu relógio e compara com o relógio solar analemático no jardim do CEU.`,
        subjects: [
            { title: "Astronomia", color: 'text-blue-300', },
            { title: "Ciências", color: "text-blue-300", },
            { title: 'Matemática', color: 'text-yellow-200', },
            { title: "Geografia", color: "text-orange-300", },
        ],
        topics: [
            "Geometria básica",
            "Movimentos da Terra",
            "Movimento aparente do Sol",
            "Coordenadas geográficas",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '5°ano', color: 'text-emerald-500', },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
        ],
    },
    {
        id: 19,
        title: "Identificação de Rochas",
        type: "workshop",
        image: "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Dentro da caverna cenográfica, é feita uma rápida introdução aos tipos de rocha que existem na Terra e sobre o ciclo de rochas. Também é fornecido um texto com pistas e um diagrama para auxiliar na identificação das rochas que serão encontradas nas paredes da caverna. Os alunos trabalham em grupos coletando as rochas simulando uma escavação. Em seguida, os grupos podem analisar as rochas com o objetivo de compreender o ciclo das rochas e identificar quais são as sedimentares, magmáticas e metamórficas. As amostras são de rochas reais extraídas de nove regiões específicas do Brasil.`,
        subjects: [
            { title: "Geologia", color: "text-orange-600", },
            { title: "Geografia", color: "text-orange-300", },
        ],
        topics: [
            "Formação da Terra",
            "Tipos de rochas ( Magmáticas, Metamórficas e Sedimentares )",
            "Ciclo das Rochas",
            "Identificação de 9 exemplos de rochas ( mármore, diabásico, gnaisse, quartzito, vervito, granito, arenito, calcário e basalto )",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
        ],
    },
    {
        id: 20,
        title: "Desvendando Gaia ( Oficina de Fósseis )",
        type: "workshop",
        image: "https://images.pexels.com/photos/2726724/pexels-photo-2726724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: `Num paredão com o perfil geológico do Estado de São Paulo no interior da Caverna, os alunos coletam réplicas de fósseis de diferentes períodos geológicos afim de descrevê-los: são dentes, pegadas, esqueletos e outros vestígios e restos, os quais os alunos identificam e classificam em suas planilhas de paleontólogos. Ao final da atividade, durante a exposição dos fósseis coletados, é possível demonstrar a evolução da complexidade dos organismos vivos através de uma linha do tempo.`,
        subjects: [
            { title: "Geografia", color: "text-orange-300", },
            { title: "Paleontologia", color: "text-orange-800", },
            { title: "Ciências", color: "text-blue-300", },
        ],
        topics: [
            "Períodos geológicos",
            "Formação de fósseis",
            "Restos e vetígios",
            "Identificação de réplicas de fósseis de diferentes períodos geológicos",
        ],
        tags: [
            { title: "Inglês", color: "text-red-400", },
            { title: '6°ano', color: 'text-emerald-600', },
            { title: '7°ano', color: 'text-emerald-700', },
            { title: '8°ano', color: 'text-emerald-800', },
            { title: '9°ano', color: 'text-emerald-900', },
        ],
    },
]

const services = [
    {
        title: "Atendimento ao Público",
        icon: web,
    },
    {
        title: "Escolas & Colégios",
        icon: mobile,
    },
    {
        title: "Eventos Corporativos",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];


const publicActivities = [
    {
        title: "Observação",
        company_name: "por Telescópio",
        icon: observacao,
        iconBg: "#E6DEDD",//"#383E56",
        date: "A atividade está sujeita às condições meteorológicas. Em caso de céu nublado/chuvoso, ela será substituída e o público receberá um voucher para retornar e realizar a observação gratuitamente em outra noite de atendimento ao público e mediante a aviso prévio.",
        points: [
            "Em noites com boas condições do tempo, a observção é a primeira atividade realizada.",
            "O público é levado para o Auditório, onde recebe instruções sobre as atividades da noite e as técnicas de observação.",
            "Após a introdução, as pessoas sobem até a laje de observação. Os professores realizam o reconhecimento de céu e explicam sobre os objetos que serão vistos.",
            "A quantidade de telescópios e de astros a serem observados ficam a critério dos professores.",
        ],
    },
    {
        title: "Sessão de Planetário",
        company_name: "",
        icon: planetarium,
        iconBg: "#383E56",
        date: "",
        points: [
            "Após um breve intervalo entre a observação e a segunda atividade, o público é levado ao planetário, onde assiste à uma sessão de contemplação dos objetos no céu.",
            "Durante todo o período de atividades e mesmo após o planetário, os professores ficarão dispostos a tirar dúvidas e ouvir os comentários das pessoas que desejarem fazê-lo.",
            "Ao término do planetário, o público já fica liberado para, se assim desejar, deixar o CEU e retornar à Terra.",
        ],
    },
]

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];


export { services, technologies, experiences, testimonials, projects, activities, activitiesList, structure, publicActivities };