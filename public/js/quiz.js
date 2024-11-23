const todas_as_perguntas = [
  { 
    numeroPergunta: 0, 
    pergunta: "Em que ano o Liverpool foi fundado?", 
    btn_a: "1892", 
    btn_b: "1901", 
    btn_c: "1888", 
    btn_d: "1890", 
    correta: "a" 
  },
  { 
    numeroPergunta: 1, 
    pergunta: "Qual é o estádio do Liverpool?", 
    btn_a: "Old Trafford", 
    btn_b: "Anfield", 
    btn_c: "Etihad Stadium", 
    btn_d: "Stamford Bridge", 
    correta: "b" 
  },
  { 
    numeroPergunta: 2, 
    pergunta: "Quantas vezes o Liverpool venceu a Champions League?", 
    btn_a: "5", 
    btn_b: "6", 
    btn_c: "7", 
    btn_d: "4", 
    correta: "b" 
  },
  { 
    numeroPergunta: 3, 
    pergunta: "Quem é o maior artilheiro da história do Liverpool?", 
    btn_a: "Steven Gerrard", 
    btn_b: "Ian Rush", 
    btn_c: "Kenny Dalglish", 
    btn_d: "Robbie Fowler", 
    correta: "b" 
  },
  { 
    numeroPergunta: 4, 
    pergunta: "Qual é o apelido do Liverpool?", 
    btn_a: "The Red Devils", 
    btn_b: "The Blues", 
    btn_c: "The Reds", 
    btn_d: "The Gunners", 
    correta: "c" 
  },
  {
    numeroPergunta: 5,
    pergunta: "Quem é o atual técnico do Liverpool?",
    btn_a: "Pep Guardiola",
    btn_b: "Jurgen Klopp",
    btn_c: "Arne Slot",
    btn_d: "Thomas Tuchel",
    correta: "c"
  },
  {
    numeroPergunta: 6,
    pergunta: "Qual é o lema do Liverpool?",
    btn_a: "Glory, Glory Liverpool",
    btn_b: "You'll Never Walk Alone",
    btn_c: "Forever Red",
    btn_d: "This Is Anfield",
    correta: "b"
  },
  {
    numeroPergunta: 7,
    pergunta: "Quantas vezes o Liverpool venceu a Premier League (desde 1992)?",
    btn_a: "0",
    btn_b: "1",
    btn_c: "2",
    btn_d: "3",
    correta: "b"
  },
  {
    numeroPergunta: 8,
    pergunta: "Quem é considerado o maior técnico da história do Liverpool?",
    btn_a: "Bill Shankly",
    btn_b: "Bob Paisley",
    btn_c: "Kenny Dalglish",
    btn_d: "Jurgen Klopp",
    correta: "a"
  },
  {
    numeroPergunta: 9,
    pergunta: "Contra qual time o Liverpool venceu sua sexta Champions League?",
    btn_a: "Real Madrid",
    btn_b: "Tottenham Hotspur",
    btn_c: "Barcelona",
    btn_d: "AC Milan",
    correta: "b"
  },
  {
    numeroPergunta: 10,
    pergunta: "Qual jogador marcou o gol mais rápido da história do Liverpool?",
    btn_a: "Mohamed Salah",
    btn_b: "Robbie Fowler",
    btn_c: "Michael Owen",
    btn_d: "Sadio Mané",
    correta: "b"
  },
  {
    numeroPergunta: 11,
    pergunta: "Qual é a cor principal do uniforme do Liverpool?",
    btn_a: "Azul",
    btn_b: "Vermelho",
    btn_c: "Branco",
    btn_d: "Amarelo",
    correta: "b"
  },
  {
    numeroPergunta: 12,
    pergunta: "Quem foi o capitão do Liverpool na final da Champions League em 2005?",
    btn_a: "Xabi Alonso",
    btn_b: "Jamie Carragher",
    btn_c: "Steven Gerrard",
    btn_d: "Didi Hamann",
    correta: "c"
  },
  {
    numeroPergunta: 13,
    pergunta: "Qual é a maior vitória do Liverpool na Premier League?",
    btn_a: "9-0 contra Bournemouth",
    btn_b: "8-0 contra Aston Villa",
    btn_c: "7-0 contra Manchester United",
    btn_d: "6-0 contra Newcastle",
    correta: "a"
  },
  {
    numeroPergunta: 14,
    pergunta: "Quem é o dono majoritário do Liverpool atualmente?",
    btn_a: "Fenway Sports Group",
    btn_b: "Sheikh Mansour",
    btn_c: "Roman Abramovich",
    btn_d: "Daniel Levy",
    correta: "a"
  },
  {
    numeroPergunta: 15,
    pergunta: "Qual jogador marcou o gol da vitória na final da Champions League de 2019?",
    btn_a: "Sadio Mané",
    btn_b: "Mohamed Salah",
    btn_c: "Divock Origi",
    btn_d: "Roberto Firmino",
    correta: "c"
  },
  {
    numeroPergunta: 16,
    pergunta: "Em que ano o Liverpool conquistou sua primeira FA Cup?",
    btn_a: "1965",
    btn_b: "1974",
    btn_c: "1986",
    btn_d: "1950",
    correta: "a"
  },
  {
    numeroPergunta: 17,
    pergunta: "Quem foi o goleiro titular do Liverpool na temporada 2019/20?",
    btn_a: "Simon Mignolet",
    btn_b: "Alisson Becker",
    btn_c: "Loris Karius",
    btn_d: "Adrián",
    correta: "b"
  },
  {
    numeroPergunta: 18,
    pergunta: "Quantas vezes o Liverpool venceu a Copa da Liga Inglesa?",
    btn_a: "7",
    btn_b: "8",
    btn_c: "9",
    btn_d: "10",
    correta: "c"
  },
  {
    numeroPergunta: 19,
    pergunta: "Qual jogador do Liverpool venceu a Bola de Ouro em 2001?",
    btn_a: "Steven Gerrard",
    btn_b: "Michael Owen",
    btn_c: "Robbie Fowler",
    btn_d: "Fernando Torres",
    correta: "b"
  },
  {
    numeroPergunta: 20,
    pergunta: "Qual jogador do Liverpool ficou conhecido como 'O Rei de Kop'?",
    btn_a: "Ian Rush",
    btn_b: "Kenny Dalglish",
    btn_c: "Steven Gerrard",
    btn_d: "John Barnes",
    correta: "b"
  },
  {
    numeroPergunta: 21,
    pergunta: "Em que ano o Liverpool venceu o Mundial de Clubes pela primeira vez?",
    btn_a: "2005",
    btn_b: "1984",
    btn_c: "2019",
    btn_d: "2020",
    correta: "c"
  },
  {
    numeroPergunta: 22,
    pergunta: "Quantos gols Ian Rush marcou pelo Liverpool em competições oficiais?",
    btn_a: "346",
    btn_b: "285",
    btn_c: "300",
    btn_d: "309",
    correta: "a"
  },
  {
    numeroPergunta: 23,
    pergunta: "Qual técnico substituiu Brendan Rodgers no Liverpool?",
    btn_a: "Rafael Benítez",
    btn_b: "Roy Hodgson",
    btn_c: "Jurgen Klopp",
    btn_d: "Kenny Dalglish",
    correta: "c"
  },
  {
    numeroPergunta: 24,
    pergunta: "Quantos pontos o Liverpool somou na temporada 2019/20 da Premier League?",
    btn_a: "97",
    btn_b: "99",
    btn_c: "100",
    btn_d: "98",
    correta: "b"
  },
  {
    numeroPergunta: 25,
    pergunta: "Quem foi o capitão do Liverpool durante a histórica final da Champions League de 2005?",
    btn_a: "Jamie Carragher",
    btn_b: "Steven Gerrard",
    btn_c: "Didi Hamann",
    btn_d: "Xabi Alonso",
    correta: "b"
  },
  {
    numeroPergunta: 26,
    pergunta: "Qual jogador marcou um hat-trick mais rápido na história da Premier League pelo Liverpool?",
    btn_a: "Luis Suárez",
    btn_b: "Robbie Fowler",
    btn_c: "Mohamed Salah",
    btn_d: "Sadio Mané",
    correta: "d"
  },
  {
    numeroPergunta: 27,
    pergunta: "Qual é o nome da área dos torcedores mais apaixonados do estádio Anfield?",
    btn_a: "The Kop",
    btn_b: "The Red Zone",
    btn_c: "The Terrace",
    btn_d: "The Main Stand",
    correta: "a"
  },
  {
    numeroPergunta: 28,
    pergunta: "Qual jogador do Liverpool ganhou o prêmio de Melhor Jogador da UEFA em 2019?",
    btn_a: "Virgil van Dijk",
    btn_b: "Mohamed Salah",
    btn_c: "Sadio Mané",
    btn_d: "Jordan Henderson",
    correta: "a"
  },
  {
    numeroPergunta: 29,
    pergunta: "Quantos títulos da Liga Europa (ou Copa da UEFA) o Liverpool possui?",
    btn_a: "2",
    btn_b: "3",
    btn_c: "4",
    btn_d: "5",
    correta: "b"
  },
  {
    numeroPergunta: 30,
    pergunta: "Qual é a nacionalidade de Jurgen Klopp?",
    btn_a: "Holandesa",
    btn_b: "Inglesa",
    btn_c: "Alemã",
    btn_d: "Austríaca",
    correta: "c"
  },
  {
    numeroPergunta: 31,
    pergunta: "Quem foi o jogador mais caro da história do Liverpool até 2023?",
    btn_a: "Darwin Núñez",
    btn_b: "Virgil van Dijk",
    btn_c: "Alisson Becker",
    btn_d: "Luis Díaz",
    correta: "a"
  },
  {
    numeroPergunta: 32,
    pergunta: "Em que ano o Liverpool inaugurou seu estádio, Anfield?",
    btn_a: "1884",
    btn_b: "1892",
    btn_c: "1901",
    btn_d: "1910",
    correta: "a"
  },
  {
    numeroPergunta: 33,
    pergunta: "Contra qual time o Liverpool protagonizou a famosa 'Remontada' na Champions League de 2019?",
    btn_a: "Real Madrid",
    btn_b: "Barcelona",
    btn_c: "Bayern de Munique",
    btn_d: "Roma",
    correta: "b"
  },
  {
    numeroPergunta: 34,
    pergunta: "Quem foi o principal artilheiro do Liverpool na temporada 2017/18?",
    btn_a: "Roberto Firmino",
    btn_b: "Mohamed Salah",
    btn_c: "Sadio Mané",
    btn_d: "Philippe Coutinho",
    correta: "b"
  },
  {
    numeroPergunta: 35,
    pergunta: "Quem foi o técnico do Liverpool durante a conquista da Champions League de 2005?",
    btn_a: "Gerard Houllier",
    btn_b: "Rafael Benítez",
    btn_c: "Roy Hodgson",
    btn_d: "Kenny Dalglish",
    correta: "b"
  },
  {
    numeroPergunta: 36,
    pergunta: "Quantos gols Mohamed Salah marcou em sua primeira temporada no Liverpool (2017/18)?",
    btn_a: "42",
    btn_b: "44",
    btn_c: "46",
    btn_d: "48",
    correta: "b"
  },
  {
    numeroPergunta: 37,
    pergunta: "Qual foi o primeiro adversário do Liverpool na Premier League na temporada 2019/20?",
    btn_a: "Arsenal",
    btn_b: "Chelsea",
    btn_c: "Norwich City",
    btn_d: "West Ham",
    correta: "c"
  },
  {
    numeroPergunta: 38,
    pergunta: "Qual é a música tradicional cantada pelos torcedores do Liverpool antes dos jogos?",
    btn_a: "You'll Never Walk Alone",
    btn_b: "We Are The Champions",
    btn_c: "Fields of Anfield Road",
    btn_d: "Red Forever",
    correta: "a"
  },
  {
    numeroPergunta: 39,
    pergunta: "Quem marcou o famoso gol de pênalti na final da Champions League de 2019?",
    btn_a: "Mohamed Salah",
    btn_b: "Roberto Firmino",
    btn_c: "Jordan Henderson",
    btn_d: "Divock Origi",
    correta: "a"
  },
  {
    numeroPergunta: 40,
    pergunta: "Em que temporada o Liverpool ganhou sua primeira Premier League?",
    btn_a: "2018/19",
    btn_b: "2019/20",
    btn_c: "2020/21",
    btn_d: "2017/18",
    correta: "b"
  },
  {
    numeroPergunta: 41,
    pergunta: "Quem foi o zagueiro contratado pelo Liverpool em 2018 que revolucionou a defesa?",
    btn_a: "Joe Gomez",
    btn_b: "Virgil van Dijk",
    btn_c: "Joel Matip",
    btn_d: "Dejan Lovren",
    correta: "b"
  },
  {
    numeroPergunta: 42,
    pergunta: "Qual clube é o maior rival histórico do Liverpool?",
    btn_a: "Manchester City",
    btn_b: "Everton",
    btn_c: "Manchester United",
    btn_d: "Chelsea",
    correta: "c"
  },
  {
    numeroPergunta: 43,
    pergunta: "Qual é o maior número de gols marcados pelo Liverpool em uma única temporada da Premier League?",
    btn_a: "98",
    btn_b: "101",
    btn_c: "97",
    btn_d: "99",
    correta: "b"
  },
  {
    numeroPergunta: 44,
    pergunta: "Quem era o capitão do Liverpool durante o título da Premier League de 2019/20?",
    btn_a: "Jordan Henderson",
    btn_b: "James Milner",
    btn_c: "Virgil van Dijk",
    btn_d: "Andy Robertson",
    correta: "a"
  },
  {
    numeroPergunta: 45,
    pergunta: "Quantos títulos ingleses o Liverpool possui até 2023?",
    btn_a: "18",
    btn_b: "19",
    btn_c: "20",
    btn_d: "21",
    correta: "b"
  },
  {
    numeroPergunta: 46,
    pergunta: "Qual jogador marcou o gol da vitória no 5x4 contra o Norwich em 2016?",
    btn_a: "James Milner",
    btn_b: "Roberto Firmino",
    btn_c: "Adam Lallana",
    btn_d: "Divock Origi",
    correta: "c"
  },
  {
    numeroPergunta: 47,
    pergunta: "Qual foi o maior placar da história do Liverpool em um jogo oficial?",
    btn_a: "10-0",
    btn_b: "11-0",
    btn_c: "12-0",
    btn_d: "13-0",
    correta: "b"
  },
  {
    numeroPergunta: 48,
    pergunta: "Quantos gols Steven Gerrard marcou pelo Liverpool em toda a carreira?",
    btn_a: "186",
    btn_b: "190",
    btn_c: "210",
    btn_d: "184",
    correta: "a"
  },
  {
    numeroPergunta: 49,
    pergunta: "Qual jogador marcou o gol 1000 do Liverpool na Premier League?",
    btn_a: "Steven Gerrard",
    btn_b: "Fernando Torres",
    btn_c: "Robbie Fowler",
    btn_d: "Dirk Kuyt",
    correta: "d"
  },
  {
    numeroPergunta: 50,
    pergunta: "Quantas vezes o Liverpool venceu a Supercopa da UEFA até 2023?",
    btn_a: "2",
    btn_b: "3",
    btn_c: "4",
    btn_d: "5",
    correta: "c"
  },
  {
    numeroPergunta: 51,
    pergunta: "Qual jogador do Liverpool marcou dois gols contra o Barcelona na 'Remontada' de 2019?",
    btn_a: "Divock Origi",
    btn_b: "Xerdan Shaqiri",
    btn_c: "Sadio Mané",
    btn_d: "Trent Alexander-Arnold",
    correta: "a"
  },
  {
    numeroPergunta: 52,
    pergunta: "Qual é o recorde de invencibilidade do Liverpool em Anfield na Premier League?",
    btn_a: "64 jogos",
    btn_b: "68 jogos",
    btn_c: "70 jogos",
    btn_d: "72 jogos",
    correta: "b"
  },
  {
    numeroPergunta: 53,
    pergunta: "Quem foi o maior assistente do Liverpool na temporada 2019/20?",
    btn_a: "Andrew Robertson",
    btn_b: "Trent Alexander-Arnold",
    btn_c: "Mohamed Salah",
    btn_d: "Roberto Firmino",
    correta: "b"
  },
  {
    numeroPergunta: 54,
    pergunta: "Qual foi o resultado da final da Champions League de 2005, entre Liverpool e Milan, após a prorrogação?",
    btn_a: "3-2",
    btn_b: "2-2",
    btn_c: "3-3",
    btn_d: "4-3",
    correta: "c"
  },
  {
    numeroPergunta: 55,
    pergunta: "Quem marcou o gol decisivo na final da FA Cup de 2006 contra o West Ham?",
    btn_a: "Luis García",
    btn_b: "Peter Crouch",
    btn_c: "Steven Gerrard",
    btn_d: "Dirk Kuyt",
    correta: "c"
  },
  {
    numeroPergunta: 56,
    pergunta: "Quantos gols o Liverpool marcou na histórica vitória de 7-0 contra o Manchester United em 2023?",
    btn_a: "5",
    btn_b: "6",
    btn_c: "7",
    btn_d: "8",
    correta: "c"
  },
  {
    numeroPergunta: 57,
    pergunta: "Qual jogador usou a camisa 8 após Steven Gerrard no Liverpool?",
    btn_a: "James Milner",
    btn_b: "Jordan Henderson",
    btn_c: "Naby Keïta",
    btn_d: "Curtis Jones",
    correta: "c"
  },
  {
    numeroPergunta: 58,
    pergunta: "Em que ano o Liverpool conquistou seu primeiro título da Copa da Liga Inglesa?",
    btn_a: "1981",
    btn_b: "1978",
    btn_c: "1983",
    btn_d: "1984",
    correta: "a"
  },
  {
    numeroPergunta: 59,
    pergunta: "Quem foi o artilheiro do Liverpool na temporada 2018/19 da Champions League?",
    btn_a: "Sadio Mané",
    btn_b: "Mohamed Salah",
    btn_c: "Roberto Firmino",
    btn_d: "Divock Origi",
    correta: "a"
  },
  {
    numeroPergunta: 60,
    pergunta: "Qual time foi derrotado pelo Liverpool na final da Copa da UEFA de 2001?",
    btn_a: "Roma",
    btn_b: "Alavés",
    btn_c: "Borussia Dortmund",
    btn_d: "Valencia",
    correta: "b"
  },
  {
    numeroPergunta: 61,
    pergunta: "Qual foi o valor da transferência de Virgil van Dijk para o Liverpool?",
    btn_a: "75 milhões de libras",
    btn_b: "80 milhões de libras",
    btn_c: "70 milhões de libras",
    btn_d: "85 milhões de libras",
    correta: "a"
  },
  {
    numeroPergunta: 62,
    pergunta: "Quem foi o goleiro do Liverpool na final da Champions League de 2018 contra o Real Madrid?",
    btn_a: "Alisson Becker",
    btn_b: "Simon Mignolet",
    btn_c: "Loris Karius",
    btn_d: "Adrián",
    correta: "c"
  },
  {
    numeroPergunta: 63,
    pergunta: "Qual jogador marcou o gol 2000 do Liverpool na Premier League?",
    btn_a: "Luis Suárez",
    btn_b: "Mohamed Salah",
    btn_c: "Roberto Firmino",
    btn_d: "Diogo Jota",
    correta: "b"
  },
  {
    numeroPergunta: 64,
    pergunta: "Quem era o técnico do Liverpool antes de Bill Shankly assumir?",
    btn_a: "Don Welsh",
    btn_b: "George Kay",
    btn_c: "Phil Taylor",
    btn_d: "Matt Busby",
    correta: "c"
  },
  {
    numeroPergunta: 65,
    pergunta: "Qual foi o placar da vitória do Liverpool sobre o Crystal Palace na temporada 2019/20 que garantiu o título da Premier League?",
    btn_a: "4-0",
    btn_b: "5-0",
    btn_c: "3-1",
    btn_d: "2-1",
    correta: "a"
  },
  {
    numeroPergunta: 66,
    pergunta: "Quem foi o técnico do Liverpool quando o clube venceu seu primeiro título da Liga dos Campeões em 1977?",
    btn_a: "Bob Paisley",
    btn_b: "Bill Shankly",
    btn_c: "Joe Fagan",
    btn_d: "Ronnie Moran",
    correta: "a"
  },
  {
    numeroPergunta: 67,
    pergunta: "Qual jogador do Liverpool ficou famoso pelo apelido 'Spice Boy' nos anos 1990?",
    btn_a: "Robbie Fowler",
    btn_b: "Steve McManaman",
    btn_c: "Jamie Redknapp",
    btn_d: "Michael Owen",
    correta: "b"
  },
  {
    numeroPergunta: 68,
    pergunta: "Quantos gols o Liverpool marcou no total na temporada 2019/20 da Premier League?",
    btn_a: "82",
    btn_b: "85",
    btn_c: "89",
    btn_d: "99",
    correta: "c"
  },
  {
    numeroPergunta: 69,
    pergunta: "Qual foi a maior transferência de saída do Liverpool até 2023?",
    btn_a: "Philippe Coutinho",
    btn_b: "Luis Suárez",
    btn_c: "Fernando Torres",
    btn_d: "Sadio Mané",
    correta: "a"
  },
  {
    numeroPergunta: 70,
    pergunta: "Quem marcou o gol de número 6000 do Liverpool na história da liga inglesa?",
    btn_a: "Steven Gerrard",
    btn_b: "James Milner",
    btn_c: "Divock Origi",
    btn_d: "Sadio Mané",
    correta: "b"
  },
  {
    numeroPergunta: 71,
    pergunta: "Em que ano o Liverpool venceu sua primeira Supercopa da Inglaterra (Community Shield)?",
    btn_a: "1964",
    btn_b: "1965",
    btn_c: "1966",
    btn_d: "1977",
    correta: "b"
  },
  {
    numeroPergunta: 72,
    pergunta: "Qual é o nome da principal loja oficial do Liverpool?",
    btn_a: "The Kop Shop",
    btn_b: "LFC Store",
    btn_c: "Anfield Shop",
    btn_d: "Red Empire",
    correta: "a"
  },
  {
    numeroPergunta: 73,
    pergunta: "Quantos jogadores do Liverpool marcaram mais de 20 gols na temporada 2013/14?",
    btn_a: "2",
    btn_b: "3",
    btn_c: "1",
    btn_d: "4",
    correta: "a"
  },
  {
    numeroPergunta: 74,
    pergunta: "Qual time o Liverpool enfrentou na final da Carabao Cup em 2022?",
    btn_a: "Chelsea",
    btn_b: "Manchester City",
    btn_c: "Arsenal",
    btn_d: "Tottenham",
    correta: "a"
  },
  {
    numeroPergunta: 75,
    pergunta: "Quem marcou o gol decisivo contra o Borussia Dortmund na virada histórica da Europa League de 2016?",
    btn_a: "Divock Origi",
    btn_b: "Dejan Lovren",
    btn_c: "James Milner",
    btn_d: "Adam Lallana",
    correta: "b"
  },
  {
    numeroPergunta: 76,
    pergunta: "Qual jogador do Liverpool marcou um gol de bicicleta contra o Manchester United em 2021?",
    btn_a: "Diogo Jota",
    btn_b: "Roberto Firmino",
    btn_c: "Mohamed Salah",
    btn_d: "Xherdan Shaqiri",
    correta: "c"
  },
  {
    numeroPergunta: 77,
    pergunta: "Qual é o maior estádio já enfrentado pelo Liverpool fora de casa em competições europeias?",
    btn_a: "Camp Nou",
    btn_b: "San Siro",
    btn_c: "Estádio Santiago Bernabéu",
    btn_d: "Estádio Luzhniki",
    correta: "a"
  },
  {
    numeroPergunta: 78,
    pergunta: "Qual jogador brasileiro fez parte do elenco do Liverpool na conquista da Champions League de 2005?",
    btn_a: "Fabinho",
    btn_b: "Lucas Leiva",
    btn_c: "José Kléberson",
    btn_d: "Fábio Aurélio",
    correta: "d"
  },
  {
    numeroPergunta: 79,
    pergunta: "Em que ano o Liverpool adotou o emblema com a inscrição 'You'll Never Walk Alone'?",
    btn_a: "1982",
    btn_b: "1989",
    btn_c: "1992",
    btn_d: "1998",
    correta: "b"
  },
  {
    numeroPergunta: 80,
    pergunta: "Quem foi o primeiro jogador africano a marcar 100 gols pelo Liverpool?",
    btn_a: "Mohamed Salah",
    btn_b: "Sadio Mané",
    btn_c: "Naby Keïta",
    btn_d: "Divock Origi",
    correta: "a"
  },
  {
    numeroPergunta: 81,
    pergunta: "Qual foi o último título conquistado pelo Liverpool sob o comando de Bob Paisley?",
    btn_a: "Premier League",
    btn_b: "Champions League",
    btn_c: "FA Cup",
    btn_d: "Copa da Liga Inglesa",
    correta: "b"
  },
  {
    numeroPergunta: 82,
    pergunta: "Quantos gols Steven Gerrard marcou na final da Champions League de 2005?",
    btn_a: "1",
    btn_b: "2",
    btn_c: "3",
    btn_d: "Nenhum",
    correta: "a"
  },
  {
    numeroPergunta: 83,
    pergunta: "Qual técnico trouxe o zagueiro Sami Hyypiä para o Liverpool?",
    btn_a: "Rafael Benítez",
    btn_b: "Gerard Houllier",
    btn_c: "Roy Hodgson",
    btn_d: "Kenny Dalglish",
    correta: "b"
  },
  {
    numeroPergunta: 84,
    pergunta: "Em que ano o Liverpool conquistou sua décima Copa da Inglaterra (FA Cup)?",
    btn_a: "2006",
    btn_b: "2022",
    btn_c: "2012",
    btn_d: "1992",
    correta: "b"
  },
  {
    numeroPergunta: 85,
    pergunta: "Qual jogador foi o capitão do Liverpool antes de Steven Gerrard assumir a braçadeira?",
    btn_a: "Jamie Redknapp",
    btn_b: "Sami Hyypiä",
    btn_c: "Paul Ince",
    btn_d: "Robbie Fowler",
    correta: "b"
  },
  {
    numeroPergunta: 86,
    pergunta: "Quantas vezes o Liverpool venceu a Liga dos Campeões da UEFA até 2023?",
    btn_a: "5",
    btn_b: "6",
    btn_c: "7",
    btn_d: "8",
    correta: "b"
  },
  {
    numeroPergunta: 87,
    pergunta: "Quem foi o jogador mais jovem a marcar pelo Liverpool em uma partida oficial?",
    btn_a: "Michael Owen",
    btn_b: "Ben Woodburn",
    btn_c: "Trent Alexander-Arnold",
    btn_d: "Curtis Jones",
    correta: "b"
  },
  {
    numeroPergunta: 88,
    pergunta: "Qual foi o primeiro estádio utilizado pelo Liverpool antes de Anfield?",
    btn_a: "Goodison Park",
    btn_b: "Prenton Park",
    btn_c: "Stanley Park",
    btn_d: "Anfield sempre foi o estádio",
    correta: "d"
  },
  {
    numeroPergunta: 89,
    pergunta: "Quem marcou o gol da vitória do Liverpool na final da Champions League de 2019 contra o Tottenham?",
    btn_a: "Mohamed Salah",
    btn_b: "Divock Origi",
    btn_c: "Sadio Mané",
    btn_d: "Jordan Henderson",
    correta: "b"
  },
  {
    numeroPergunta: 90,
    pergunta: "Quem foi o primeiro goleiro brasileiro a jogar pelo Liverpool?",
    btn_a: "Alisson Becker",
    btn_b: "Cláudio Taffarel",
    btn_c: "Diego Cavalieri",
    btn_d: "Julio César",
    correta: "c"
  },
  {
    numeroPergunta: 91,
    pergunta: "Qual foi o maior número de gols marcados por Sadio Mané em uma temporada do Liverpool?",
    btn_a: "23",
    btn_b: "28",
    btn_c: "34",
    btn_d: "22",
    correta: "b"
  },
  {
    numeroPergunta: 92,
    pergunta: "Quem foi o jogador que mais vezes vestiu a camisa 7 do Liverpool?",
    btn_a: "Luis Suárez",
    btn_b: "Robbie Fowler",
    btn_c: "Kevin Keegan",
    btn_d: "Mohamed Salah",
    correta: "b"
  },
  {
    numeroPergunta: 93,
    pergunta: "Em que ano o Liverpool conquistou sua última FA Cup (até 2023)?",
    btn_a: "2006",
    btn_b: "2012",
    btn_c: "2001",
    btn_d: "1998",
    correta: "2006"
  },
  {
    numeroPergunta: 94,
    pergunta: "Qual jogador marcou o gol do título da Premier League para o Liverpool na temporada 2019/20?",
    btn_a: "Mohamed Salah",
    btn_b: "Sadio Mané",
    btn_c: "Divock Origi",
    btn_d: "Trent Alexander-Arnold",
    correta: "c"
  },
  {
    numeroPergunta: 95,
    pergunta: "Quem foi o artilheiro do Liverpool na temporada 2019/20 da Premier League?",
    btn_a: "Mohamed Salah",
    btn_b: "Sadio Mané",
    btn_c: "Roberto Firmino",
    btn_d: "Divock Origi",
    correta: "b"
  },
  {
    numeroPergunta: 96,
    pergunta: "Qual jogador do Liverpool foi eleito o Melhor Jogador da Premier League em 2019?",
    btn_a: "Virgil van Dijk",
    btn_b: "Sadio Mané",
    btn_c: "Mohamed Salah",
    btn_d: "Roberto Firmino",
    correta: "a"
  },
  {
    numeroPergunta: 97,
    pergunta: "Quantos gols Roberto Firmino marcou pelo Liverpool em sua primeira temporada completa (2015/16)?",
    btn_a: "7",
    btn_b: "10",
    btn_c: "12",
    btn_d: "9",
    correta: "b"
  },
  {
    numeroPergunta: 98,
    pergunta: "Qual é o nome do estádio onde o Liverpool realiza seus treinos?",
    btn_a: "Melwood",
    btn_b: "Anfield",
    btn_c: "Kirkby",
    btn_d: "Goodison Park",
    correta: "a"
  },
  {
    numeroPergunta: 99,
    pergunta: "Quem foi o primeiro jogador a marcar 50 gols pelo Liverpool na Premier League?",
    btn_a: "Steven Gerrard",
    btn_b: "Mohamed Salah",
    btn_c: "Robbie Fowler",
    btn_d: "Fernando Torres",
    correta: "b"
  }
];


var lista_perguntas_aleatorias = [];

function jogar() {
  var instrucao = document.getElementById("box_infos");
  var tela_jogo = document.getElementById("box_jogo");

  instrucao.style.display = "none";
  tela_jogo.style.display = "flex";

  for (var contador = 0; contador < 1; contador++) {
    var limite = todas_as_perguntas.length;
    var sorteio = Math.floor(Math.random() * limite);

    if (!lista_perguntas_aleatorias.includes(sorteio)) {
      lista_perguntas_aleatorias.push(sorteio);
    }

    if (lista_perguntas_aleatorias.length < todas_as_perguntas.length) {
      contador--;
    }
  }

  renderizarPergunta();
}

var contador = 0;
var pontos = 0;

function renderizarPergunta() {
  var renderizar_pergunta = document.getElementById("h2_pergunta");
  var btn_a = document.getElementById("a");
  var btn_b = document.getElementById("b");
  var btn_c = document.getElementById("c");
  var btn_d = document.getElementById("d");
  var pontuacao = document.getElementById("pontuacao");

  renderizar_pergunta.innerHTML =
    todas_as_perguntas[lista_perguntas_aleatorias[contador]].pergunta;
  btn_a.innerHTML =
    todas_as_perguntas[lista_perguntas_aleatorias[contador]].btn_a;
  btn_b.innerHTML =
    todas_as_perguntas[lista_perguntas_aleatorias[contador]].btn_b;
  btn_c.innerHTML =
    todas_as_perguntas[lista_perguntas_aleatorias[contador]].btn_c;
  btn_d.innerHTML =
    todas_as_perguntas[lista_perguntas_aleatorias[contador]].btn_d;
}

function escolher(opcao) {
  if (contador < todas_as_perguntas.length - 1) {
    if (
      opcao == todas_as_perguntas[lista_perguntas_aleatorias[contador]].correta
    ) {
      pontos += 10;
    } else if (pontos > 0) {
      pontos -= 10;
    }
    contador++;
    pontuacao.innerHTML = `<h1>Sua pontuação atual: ${pontos}</h2>`;
    renderizarPergunta();
  } else {
    console.log("Finalizou");
    var jogo = document.getElementById("box_jogo");
    var resultado = document.getElementById("div_resultado");
    jogo.style.display = "none";
    resultado.style.display = "flex";
  }
}
