/*função que define o conjunto de objetos e itera sobre ele um innerHTML da section do arquivo html*/
function carregaDicionario() { 
    var filmes = {
        filme00:{
            nome:"Alice Júnior", 
            imagem:"imagem-filme/alicejunior.jpg",
            classificacao:"imagem-classificacao/14.png",
            genero: "Comédia", 
            descricao:"Alice é uma adolescente trans cheia de carisma que investe seu tempo fazendo vídeos para o Youtube. Um dia, seu pai Jean é transferido pela sua empresa no Recife para Araucárias do Sul, e eles precisam se mudar. Na nova escola, Alice enfrenta preconceitos ao se deparar com uma sociedade mais retrógrada do que estava acostumada. O desejo da menina é dar seu primeiro beijo mas, antes de tudo, quer o direito de ser quem ela é.", 
        },
        filme01:{
            nome:"A New York Christmas Wedding", 
            imagem:"imagem-filme/anewyorkchristmaswedding.jpg", 
            classificacao:"imagem-classificacao/10.png",
            genero:"Romance/Drama", 
            descricao:"Na véspera de seu casamento com David, Jennifer recebe a visita de um anjo. Ele revela como seria sua vida se ela não tivesse negado os sentimentos pela melhor amiga de infância.", 
        },
        filme02:{
            nome:"Badhaai Do", 
            imagem:"imagem-filme/badhaaido.jpg",
            classificacao:"imagem-classificacao/14.png", 
            genero:"Drama", 
            descricao:"Um policial gay e uma professora lésbica começam um casamento de mentira para acalmar suas famílias. Mas relacionamentos, sejam eles verdadeiros ou falsos, não são nada fáceis.", 
        },
        filme03:{
            nome:"Booksmart", 
            imagem:"imagem-filme/booksmart.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Comédia", 
            descricao:"Duas garotas extremamente esforçadas do ensino médio decidem compensar o tempo perdido e juntar quatro anos de diversão em uma única noite", 
        },
        filme04:{
            nome:"But I'm a Cheerleader", 
            imagem:"imagem-filme/butimacheerleader.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Comédia Romântica", 
            descricao:"Megan é uma estudante que adora ser animadora de torcida e namora um jogador de futebol. Sua vida suburbana sofre uma reviravolta quando sua família suspeita de que ela pode ser lésbica. Eles decidem mandá-la para uma escola de “reorientação sexual”, onde questiona sua sexualidade pela primeira vez.", 
        }, 
        filme05:{
            nome:"Carol", 
            imagem:"imagem-filme/carol.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Romance/Drama", 
            descricao:"Therese Belivet tem um emprego entediante em uma loja de departamentos. Um dia, ela conhece Carol, uma elegante e misteriosa cliente. Rapidamente, as duas mulheres desenvolvem um vínculo amoroso que terá consequências sérias.", 
        },
        filme06:{
            nome:"Crush", 
            imagem:"imagem-filme/crush.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Comédia romântica", 
            descricao:"Uma jovem artista é forçada a se juntar à equipe de atletismo de sua escola, e usa isso como uma chance de ficar próxima da garota por quem está se apaixonando. Porém, seu coração resolve lhe pregar uma peça", 
        },
        filme07:{
            nome:"D.E.B.S", 
            imagem:"imagem-filme/debs.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Ação/Comédia/Romance ", 
            descricao:"Amy, Max, Janet e Dominique formam o esquadrão de espiãs juvenis escalado pelo governo americano para infiltrar-se em uma escola secundária e descobrir o paradeiro de uma agente que desapareceu após o confronto com a criminosa Lucy Diamond.", 
        }, 
        filme08:{
            nome:"Disobedience", 
            imagem:"imagem-filme/disobedience.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Drama", 
            descricao:"Ronit precisa voltar para sua cidade natal, uma estrita comunidade de judeus ortodoxos, após a morte de seu pai, um rabino. Uma vez de volta, ela recorda a paixão proibida pela melhor amiga de infância, atualmente casada com seu primo, e as duas exploram os limites da fé e sexualidade", 
        }, 
        filme09:{
            nome:"Fear Street", 
            imagem:"imagem-filme/fearstreet.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Terror", 
            descricao:"A trilogia Fear Street é uma série de filmes com vários subgêneros de terror, particularmente os subgêneros slasher e sobrenaturais. A história se passa ao redor de adolescentes que se empenham para quebrar uma maldição atravessa a cidade por centenas de anos.", 
        },
        filme010:{
            nome:"Flores Raras", 
            imagem:"imagem-filme/floresraras.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Romance/Drama", 
            descricao:"Elizabeth Bishop é uma poetisa insegura e tímida, que apenas se sente à vontade ao narrar seus versos para o amigo Robert Lowell. Em busca de algo que a motive, ela resolve partir para o Rio de Janeiro e passar uns dias na casa de uma colega de faculdade, Mary, que vive com a arquiteta brasileira Lota de Macedo Soare. A princípio Elizabeth e Lota não se dão bem, mas logo se apaixonam uma pela outra.", 
        }, 
        filme011:{
            nome:"Happiest Season", 
            imagem:"imagem-filme/happiestseason.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Comédia Romântica", 
            descricao:"As namoradas Harper e Abby visitam a família de Harper para o jantar anual de Natal. No entanto, logo após chegar, Abby percebe que a moça tem mantido seu relacionamento em segredo de seus pais conservadores.", 
        },
        filme012:{
            nome:"I Can't Think Straight", 
            imagem:"imagem-filme/icantthinkstraight.jpg", 
            classificacao:"imagem-classificacao/12.png",
            genero:"Romance/Drama", 
            descricao:"Às vésperas de seu casamento, Tala conhece e se apaixona por Leyla, uma jovem de ascendência indiana e britânica, que sonha se tornar escritora. Embora residindo em Londres, Tala tem de enfrentar o peso das tradições de seu país, a Jordânia, onde sua família dedica-se integralmente à preparação do casamento.", 
        }, 
        filme013:{
            nome:"Imagine Me And You", 
            imagem:"imagem-filme/imaginemeandyou.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Comédia romântica", 
            descricao:"No dia do seu casamento, Rachel conhece a florista Luce e sente uma forte atração por ela. Ao se reencontrarem, a amizade entre as duas cresce tanto quanto as dúvidas de Rachel em relação ao marido. Ao saber que Luce é gay, sua vida vira do avesso", 
        }, 
        filme014:{
            nome:"Marte Um", 
            imagem:"imagem-filme/marteum.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Drama", 
            descricao:"Uma família negra da periferia de Contagem, Minas Gerais, busca seguir seus sonhos em um país que acaba de eleger como presidente um homem de extrema-direita, que representa o contrário de tudo que eles são. Enquanto isso, a filha mais velha, Eunice, se apaixona por uma jovem de espírito livre e questiona se é hora de sair de casa.", 
        }, 
        filme015:{
            nome:"Pariah", 
            imagem:"imagem-filme/pariah.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Drama", 
            descricao:"Alike é uma garota de 17 anos que enfrenta problemas demais para a sua idade. Além de sofrer de baixa auto-estima, a adolescente precisa decidir entre expressar sua sexualidade abertamente ou obedecer os seus pais e seguir os planos que eles têm para ela.", 
        },
        filme016:{
            nome:"Portrait Of A Lady On Fire", 
            imagem:"imagem-filme/portraitofaladyonfire.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Romance/Drama", 
            descricao:"Marianne é uma jovem pintora na França do século 18, com a tarefa de pintar um retrato de Héloïse para seu casamento, sem que ela saiba. Passando seus dias observando Héloïse e as noites pintando, Marianne se vê cada vez mais próxima de sua modelo.", 
        }, 
        filme017:{
            nome:"Rafiki", 
            imagem:"imagem-filme/rafiki.jpg", 
            classificacao:"imagem-classificacao/14.png",
            genero:"Romance/Drama", 
            descricao:"As jovens quenianas Kena e Ziki são grandes amigas e, embora suas famílias sejam rivais políticas, as duas continuaram juntas ao longo dos anos, apoiando uma a outra na batalha pela conquista de seus sonhos. A relação de amizade transforma-se em um romance que passa a afetar a rotina da comunidade conservadora em que vivem. Elas então precisam escolher entre viver este amor intensamente, desafiando as leis do Quênia, ou se distanciar para ter uma vida segura.", 
        }, 
        filme018:{
            nome:"Saving Face", 
            imagem:"imagem-filme/savingface.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Romance/Drama", 
            descricao:"Em comunidade chinesa nos EUA, médica lésbica enrustida centrada na carreira começa relacionamento com bailarina assumida ao mesmo tempo que sua mãe, grávida de desconhecido, é expulsa de casa e lhe pede abrigo.", 
        }, 
        filme019:{
            nome:"The Half Of It", 
            imagem:"imagem-filme/thehalfofit.jpg", 
            classificacao:"imagem-classificacao/12.png",
            genero:"Comédia/Drama", 
            descricao:"Ellie Chu, uma menina tímida ajuda o atleta da escola a conquistar uma garota de quem, secretamente, os dois gostam. Eles acabam se conectando e aprendendo sobre a natureza do amor.", 
        }, 
        filme020:{
            nome:"The Handmaiden", 
            imagem:"imagem-filme/thehandmaiden.jpg", 
            classificacao:"imagem-classificacao/18.png",
            genero:"Romance/Drama", 
            descricao:"Sook-hee é contratada como criada de uma herdeira japonesa, Hideko. Mas, na verdade, esconde um segredo: ela veio para arruinar a vida da herdeira. No entanto, seu plano parece falhar à medida que elas descobrem algumas emoções inesperadas.", 
        }, 
        filme021:{
            nome:"The Perfection", 
            imagem:"imagem-filme/theperfection.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Terror/Thriller", 
            descricao:"Uma musicista excepcional volta a sua escola de música, mas descobre que há uma nova estrela em seu lugar. Corroída pela inveja e pela rivalidade, a moça embarca em um caminho sinistro de destruição.", 
        },  
        filme022:{
            nome:"The Prom", 
            imagem:"imagem-filme/theprom.jpg", 
            classificacao:"imagem-classificacao/12.png",
            genero:"Musical", 
            descricao:"Emma, uma adolescente do último ano do ensino médio, decide levar sua namorada ao baile de formatura, porém a escola cancela a festa. Ao chamar a atenção para o problema nas redes sociais, um grupo de estrelas decadentes da Broadway decide ajudá-la", 
        },
        filme023:{
            nome:"The Watermelon Woman", 
            imagem:"imagem-filme/thewatermelonwoman.jpg", 
            classificacao:"imagem-classificacao/16.png",
            genero:"Romance/Comédia", 
            descricao:"Cheryl é uma jovem, negra e lésbica, que trabalha na Filadélfia com sua melhor amiga Tamara e está consumida pelo projeto de um filme: fazer um vídeo sobre sua busca por uma atriz negra da Filadélfia, que apareceu em filmes na década de 30 e ficou conhecida como a Mulher Melancia. Seguindo várias dicas, Cheryl descobre o nome real da Mulher Melancia e supõe que a atriz teve um longo caso com Martha Page, uma mulher branca e uma das poucas diretoras de cinema mulheres de Hollywood. Enquanto ela faz essas descobertas, Cheryl se envolve com Diana.", 
        }, 
    };

    var content = document.getElementById("content");

    for(var i in filmes) {
        content.innerHTML +=
            '<div class="card">' +
            '<img src="' +
            filmes[i].imagem +
            '" alt="Pôster do filme"/>'+
            "<details>" +
            "<summary>" +
            filmes[i].nome +
            "</summary>" +
            "<p>Gênero: " +
            filmes[i].genero +
            "</p>" +
            "<p>Classificação indicativa:" +
            '<img class="idade" src="' +
            filmes[i].classificacao +
            '" alt="Classificação indicativa"/></p>' +
            "<p><q>" +
            filmes[i].descricao +
            "</q></p>" +
            "</details></div>";     
    };
};

carregaDicionario();
