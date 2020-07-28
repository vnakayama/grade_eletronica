/* Number of total semesters: */
window.semesters = 10;

/* List of available colors to toggle a course as completed */
/* The first color is default for selecting options as well, so make sure to choose that one wisely */
window.colors = ["#b1fca4", "#fac6ff", "#a8c9ff", "#ff6347", "#9400d3", "#19dfda", "#ff7373", "#223bf6"];

// { name: "Química Geral II", credits: 3, code: "IQG127", semester: 2, requirements: [6]},

window.courses = [
    [ // ECI
        { name: "Algoritmos e Programação", credits: 5, code: "COS110", semester: 1, category: 1, workload: 90},
        { name: "Int. a Eng. Comp. e Informação", credits: 2, code: "COS111", semester: 1, category: 1, workload: 30},
        { name: "Circuitos Lógicos", credits: 5, code: "EEL280", semester: 1, workload: 90},
        { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1, workload: 90},
        { name: "Física I", credits: 4, code: "FIT112", semester: 1, workload: 60},
        { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1, category: 1, workload: 30},
        { name: "Linguagens de Programação", credits: 5, code: "EEL670", semester: 2, category: 1, workload: 90},
        { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1, workload: 60},
        { name: "Sistemas Digitais", credits: 5, code: "EEL480", semester: 2, requirements: [2], category: 1, workload: 90},
        { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: [3], category: 1, workload: 60},
        { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [3, 4], category: 1, workload: 60},
        { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [4, 5], category: 1, workload: 30},
        { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 2, category: 4, workload: 30},
        { name: "Estruturas de Dados", credits: 5, code: "COS231", semester: 3, requirements: [0], category: 1, workload: 75},
        { name: "Teoria da Computação", credits: 4, code: "EEL881", semester: 3, category: 1, workload: 60},
        { name: "Arquitetura de Computadores", credits: 5, code: "EEL580", semester: 3, category: 1, workload: 75},
        { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [9], category: 1, workload: 60},
        { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [4, 9], category: 1, workload: 60},
        { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [11], category: 1, workload: 30},
        { name: "Atividades Acad. Opt. Humanas", credits: 2, semester: 3, category: 4, workload: 30},
        { name: "Teoria dos Grafos", credits: 4, code: "COS242", semester: 4, requirements: [13], category: 1, workload: 60},
        { name: "Estatística e Mod. Probabilísticos", credits: 4, code: "COE241", semester: 4, category: 1, workload: 60},
        { name: "Computadores e Sociedade", credits: 4, code: "COS471", semester: 4, category: 1, workload: 60},
        { name: "Cálculo IV", credits: 4, code: "MAC248", semester: 4, requirements: [9], category: 1, workload: 60},
        { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [17], category: 1, workload: 60},
        { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [18], category: 1, workload: 30},
        { name: "Banco de Dados", credits: 4, code: "EEL871", semester: 5, category: 1, workload: 75},
        { name: "Lógica Matemática", credits: 4, code: "COS351", semester: 5, category: 1, workload: 60},
        { name: "Álg. Linear Computacional", credits: 4, code: "COC473", semester: 5, requirements: [7, 16], category: 1, workload: 60},
        { name: "Redes de Computadores I", credits: 4, code: "EEL878", semester: 5, category: 1, workload: 75},
        { name: "Sistemas Operacionais", credits: 5, code: "EEL770", semester: 5, category: 1, workload: 75},
        { name: "Química Experimental", credits: 2, code: "IQG112", semester: 5, category: 1, workload: 60},
        { name: "Otimização", credits: 4, semester: 6, code: "COS360", requirements: [0, ,7, 16], category: 1, workload: 60},
        { name: "Inteligência Computacional", credits: 4, code: "COC361", semester: 6, category: 1, workload: 60},
        { name: "Engenharia de Software", credits: 4, code: "EEL873", semester: 6, category: 1, workload: 75},
        { name: "Redes de Computadores II", credits: 4, code: "EEL879", semester: 6, category: 1, workload: 60},
        { name: "Telecomunic.", credits: 4, code: "COE363", semester: 6, category: 1, workload: 60},
        { name: "Programação Avançada", credits: 4, code: "EEL418", semester: 7, requirements: [13, 6], category: 1, workload: 75},
        { name: "Computação de Alto Desempenho", credits: 3, code: "COC472", semester: 7, category: 1, workload: 75},
        { name: "Sistemas Distribuídos", credits: 4, code: "COS470", semester: 7, category: 1, workload: 60},
        { name: "Gestão do Conhecimento", credits: 4, code: "COP232", semester: 7, category: 1, workload: 60},
        { name: "Computação Gráfica", credits: 4, code: "EEL882", semester: 7, category: 1, workload: 75},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 7, step: 1, category: 2, workload: 120},
        { name: "Construção de Banco de Dados", credits: 4, code: "COS480", semester: 8, requirements: [26], category: 1, workload: 60},
        { name: "Empreend. I", credits: 4, code: "COP364", semester: 8, category: 1, workload: 60},
        { name: "Qualidade de Software", credits: 4, code: "COS482", semester: 8, requirements: [34], category: 1, workload: 60},
        { name: "Projeto de Graduação", credits: 4, code: "EEWX00", semester: 8, category: 1, workload: 180},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 8, step: 1, category: 2, workload: 120},
        { name: "Estágio Obrigatório", credits: 160, code: "EEWU00", semester: 9, category: 1, workload: 160},
        { name: "Atividades Acad. Optativas", credits: 16, semester: 9, step: 1, category: 2, workload: 240},
        { name: "Atividades Acad. Optativas", credits: 8, semester: 10, step: 1, category: 2, workload: 120},
        { name: "Atividades Acad. Livre Escolha", credits: 8, semester: 10, step: 1, category: 3, workload: 120},
        { name: "Ativ. Compl. Especiais", credits: 405, semester: 10, step: 15, category: 5, workload: 405},
        { name: "Química EE", credits: 4, semester: 4, code: "IQG111", category: 1, workload: 60},
    ],
    [ // Astronomy: Astrophysics
        // First term
        { name: "Introdução à Astronomia", credits: 2, code: "OVL111", semester: 1}, // 0
        { name: "Computação I", credits: 4, code: "MAB121", semester: 1}, // 1
        { name: "Cálculo I", credits: 6, code: "MAC118", semester: 1}, // 2
        { name: "Física I", credits: 4, code: "FIT111", semester: 1}, // 3
        { name: "Física Experimental I", credits: 1, code: "FIS111", semester: 1}, // 4
        // Second term
        { name: "Astronomia Esférica", credits: 5, code: "OVL121", semester: 2, category: 1}, // 5
        { name: "Álgebra Linear II", credits: 4, code: "MAE125", semester: 2, category: 1}, // 6
        { name: "Cálculo II", credits: 4, code: "MAC128", semester: 2, requirements: [2], category: 1}, // 7
        { name: "Física II", credits: 4, code: "FIT122", semester: 2, requirements: [2, 3], category: 1}, // 8
        { name: "Física Experimental II", credits: 1, code: "FIS121", semester: 2, requirements: [3, 4], category: 1}, // 9
        // Third term
        { name: "Laboratório de Astronomia", credits: 2, code: "OVL231", semester: 3, category: 1}, // 10
        { name: "Métodos Computacionais da Astronomia", credits: 5, code: "OVL232", semester: 3, requirements: [1,6], category: 1}, // 11
        { name: "Introdução à Estatística", credits: 4, code: "MAD124", semester: 3, category: 1}, // 12
        { name: "Cálculo III", credits: 4, code: "MAC238", semester: 3, requirements: [7], category: 1}, // 13
        { name: "Física III", credits: 4, code: "FIM230", semester: 3, requirements: [3, 7], category: 1}, // 14
        { name: "Física Experimental III", credits: 1, code: "FIN231", semester: 3, requirements: [9], category: 1}, // 15
        // Fourth term
        { name: "Astrofísica Geral", credits: 5, code: "OVL241", semester: 4, requirements: [2,14], category: 1}, // 16
        { name: "Física Moderna I", credits: 4, code: "FIN242", semester: 4, requirements: [14], category: 1}, // 17
        { name: "Mecânica Clássica I", credits: 4, code: "FIW243", semester: 4, requirements: [8,13], category: 1}, // 18
        { name: "Métodos da Física Teórica I", credits: 4, code: "FIW245", semester: 4, requirements: [13], category: 1}, // 19
        { name: "Física IV", credits: 4, code: "FIM240", semester: 4, requirements: [14], category: 1}, // 20
        { name: "Física Experimental IV", credits: 1, code: "FIN241", semester: 4, requirements: [15], category: 1}, // 21
        // Fifth term
        { name: "Sistemas Planetários", credits: 5, code: "OVL352", semester: 5, requirements: [5,18], category: 1}, // 22
        { name: "Técnica Observacional Astronômica", credits: 5, code: "OLV351", semester: 5, requirements: [10,16], category: 1}, // 23
        { name: "Mecânica Quântica I", credits: 4, code: "FIW356", semester: 5, requirements: [20,19,17], category: 1}, // 24
        { name: "Eletromagnetismo I", credits: 4, code: "FIW244", semester: 5, requirements: [20,19], category: 1}, // 25
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 5, category: 1}, // 26
        // Sixth term
        { name: "Evolução do Pensamento Astronômico", credits: 4, code: "OVL361", semester: 6, requirements: [16], category: 1}, // 27
        { name: "Termodinâmica e Física Estatística", credits: 6, code: "FIW363", semester: 6, requirements: [20,13], category: 1}, // 28
        { name: "Eletromagnetismo II", credits: 4, code: "FIW355", semester: 6, requirements: [25], category: 1}, // 29
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 6, category: 1}, // 30
        { name: "Atividades Acad. Optativas", credits: 4, semester: 6, category: 1}, // 31
        // Seventh term
        { name: "Estrutura e Evolução Estelar", credits: 4, code: "OVL471", semester: 7, requirements: [28,16], category: 1}, // 32
        { name: "Prática Observacional em Astronomia", credits: 4, code: "OVL473", semester: 7, requirements: [20,23], category: 1}, // 33
        { name: "Atividades Acad. Optativas", credits: 4, semester: 7, category: 1}, // 34
        // Eigth term
        { name: "Projeto Final de Curso", credits: 60,code:'OVLX01', semester: 8, category: 1, workload: 60}, // 35
        { name: "Atividades Acad. Livre. Esc.", credits: 4, semester: 8, category: 1}, // 36
        { name: "Atividades Acad. Optativas", credits: 4, semester: 8, category: 1}, // 37
    ],
    [ // Eletrônica e Computação
        // Primeiro período
        { name: "Computação I", credits: 5, semester: 1, code: "", category: 1, workload: 60},
        { name: "Química EE", credits: 4, semester: 1, code: "", category: 1, workload: 60},
        { name: "Cálculo I", credits: 6, semester: 1, code: "", category: 1, workload: 60},
        { name: "Física I", credits: 4, semester: 1, code: "", category: 1, workload: 60},
        { name: "Física Experimental I", credits: 1, semester: 1, code: "", category: 1, workload: 60},
        // Segundo período
        { name: "Computação II", credits: 5, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Álgebra Linear II", credits: 4, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Cálculo II", credits: 4, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física II", credits: 4, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física Experimental II", credits: 1, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Circuitos Lógicos", credits: 5, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Engenharia e Meio Ambiente", credits: 2, semester: 2, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Terceiro período
        { name: "Sistemas Lineares I", credits: 5, semester: 3, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Métodos Mat. em Eng. Eletrônica", credits: 5, semester: 3, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Cálculo III", credits: 5, semester: 3, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física III", credits: 5, semester: 3, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física Experimental III", credits: 5, semester: 3, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Sistemas Projetivos", credits: 5, semester: 3, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Quarto período
        { name: "Algoritmos e Estrutura de Dados", credits: 5, semester: 4, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Circuitos Elétricos I", credits: 5, semester: 4, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletrônica I", credits: 5, semester: 4, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física IV", credits: 5, semester: 4, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Física Experimental IV", credits: 5, semester: 4, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Sistemas Digitais", credits: 5, semester: 4, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Quinto período
        { name: "Sistemas Lineares II", credits: 5, semester: 5, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Circuitos Elétricos II", credits: 5, semester: 5, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletrônica II", credits: 5, semester: 5, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Teoria Eletromagnética II", credits: 5, semester: 5, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Arquitetura de Computadores", credits: 5, semester: 5, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Sexto período
        { name: "Comunicações I", credits: 5, semester: 6, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Controle Linear I", credits: 5, semester: 6, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletrônica III", credits: 5, semester: 6, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Modelos Probabilísticos em Eng.", credits: 5, semester: 6, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Linguagens de Programação", credits: 5, semester: 6, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Sétimo período
        { name: "Comunicações II", credits: 5, semester: 7, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Controle Linear II", credits: 5, semester: 7, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Eletônica IV", credits: 5, semester: 7, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Processamento de Sinais", credits: 5, semester: 7, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Projeto Integrado", credits: 5, semester: 7, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Sistemas Operacionas", credits: 5, semester: 7, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Oitavo período
        { name: "Conversão de Energia", credits: 5, semester: 8, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Instrum.e Técnicas de Medidas", credits: 5, semester: 8, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Projeto de Graduação", credits: 4, semester: 8, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Nono período
        { name: "Economia A", credits: 4, semester: 9, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        // Décimo período
        { name: "Organização das Indústrias", credits: 4, semester: 10, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
        { name: "Estágio Obrigatório", credits: 4, semester: 10, code: "", requirements: [0, 7, 16], category: 1, workload: 60},
    ]
]
