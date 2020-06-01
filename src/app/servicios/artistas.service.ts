import { Injectable } from "@angular/core";

@Injectable()
export class ArtistasService {

    private artistas:Artista[] = [
        {
            id:"1",
            idbanda:"1",
            nombre:'Axl Rose',
            intro:'William Bruce Rose Jr. (Lafayette, Indiana, 6 de febrero de 1962), originalmente William Bruce Bailey, más conocido por su nombre artístico Axl Rose, es un músico cantautor, compositor y pianista estadounidense. Es famoso por ser el cantante, líder y compositor del mítico grupo de hard rock Guns N\' Roses, con el que tuvo gran éxito alrededor del mundo a finales de las décadas de 1980 y principios de la de 1990.',
            foto:'assets/img/axlrose.png',
            bio:'Nacido como William Bruce Rose Jr. en Lafayette, Indiana, una ciudad del Medio Oeste de los Estados Unidos, cerca de la frontera con Canadá. Rose sería el hijo mayor de Sharon Elizabeth Falkenhörst Leitner, de 16 años y todavía en el instituto, y de William Bruce Rose Caulfield, de 20 años, en 1962.8​ Rose es de ascendencia escocesa por parte paterna y alemana por parte materna.9 \
            Sus padres se separaron cuando Rose tenía apenas tres años. Su madre se casó de nuevo con Stephen L. Bailey, y cambió el nombre de su hijo a William Bruce Bailey. Rose tiene dos hermanos por parte de madre, nacidos de este segundo matrimonio, Amy y Stuart.8​ La familia Bailey era muy religiosa, y junto con Rose asistían a una iglesia Pentecostal, de tres a ocho veces por semana, aunque también asistían a una escuela dominical. Axl Rose mencionó en una ocasión que sufrió una crianza opresiva debido al fanatismo religioso de su padrastro, el cual según él era muy violento, y que solía golpear a su madre, a sus hermanos y a él. En una ocasión recordó que: \
            podíamos ver la televisión solo una vez por semana, ya que mi padrastro escondía los televisores porque eran satánicos. No se nos permitía escuchar cierto tipo de música. Las mujeres eran malvadas. Todo era malvado y satánico.\
            Axl comenzó sus andaduras en el mundo de la música tocando el piano y cantando en el coro de la iglesia pentecostal, a la edad de cinco años. Hasta los 17 años no descubrió que el hombre a quien siempre había creído su padre, L. Stephen Bailey era en realidad su padrastro, ya que nunca vio a su verdadero padre hasta que fue adulto. Tras enterarse de esto, Axl decidió cambiar su apellido Bailey por el de Rose (el apellido de su verdadero padre). William Rose, Sr. murió asesinado en Marion, Illinois, en 1984, de lo cual Rose no se enteró hasta años más tarde. En esa época, en 1979, comenzó a pensar en montar un grupo y así formó una banda en Lafayette llamada A.X.L (de ahí su nombre artístico).\
            En 1990, en una entrevista a la revista Rolling Stone, comentó que su padrastro lo llevaba al museo de la marina y abusaba sexualmente de él, en el baño.10​ Estos acontecimientos se repitieron durante su infancia, según él. Al contárselo a su madre, no le creyó, y le dijo que su padrastro a pesar de ser una persona violenta y "difícil" era incapaz de hacer semejante atrocidad.\
            Antes de cumplir 18 años había sido arrestado más de 30 veces, algunas de ellas por pequeños robos a tiendas, además de iniciar disturbios, fumar marihuana y estar borracho en la vía pública, lo que causaba peleas callejeras. Estos acontecimientos provocaron que Axl se ganase la reputación de forajido y de chico problemático en su pequeño pueblo natal, el cual a la postre abandonaría hastiado, para continuar con sus sueños de convertirse en estrella de rock.\
            En la escuela secundaria nunca destacó, y era un alumno con muy mal comportamiento: solía escaparse de la escuela, ya que a él no le parecía que fuera una manera correcta de educar. Destacaba en las clases de canto, interpretando diferentes voces para confundir a su profesor. Durante la secundaria, conoció a un joven llamado Jeffrey Isbell, más conocido como Izzy Stradlin, con el cual entablaría una gran amistad y lograría formar una banda llamada Hollywood Rose. Posteriormente, en una entrevista, comentó que solían escaparse de la escuela para fumar marihuana cerca del lago en Lafayette, lo cual él veía como la libertad absoluta. Tiempo después, Izzy Stradlin se mudaría a Los Ángeles, pasos que el mismo Rose seguiría poco después.\​Cuando tenía 20 años fue diagnosticado por un psiquiatra, el cual concluyó que sufría de Trastorno Bipolar y Trastorno explosivo intermitente, y que debido a ambos trastornos su comportamiento era habitualmente errático, y su carácter irascible y agresivo, aunque también tomó nota de su elevado coeficiente intelectual. En una entrevista posterior, Rose cuestionó el diagnóstico por completo, indicando:\
            Fui a una clínica psiquiatra, pensando que me ayudaría con mi carácter y estado de ánimo. Y Lo único que hicieron fue entrevistarme y entrevistarme para luego realizarme una prueba de alrededor de 500 preguntas, ya sabes, donde te hacen ir marcando tus respuestas con pequeños puntos negros y donde ellos luego miran e interpretan tus respuestas a través de un \"caleidoscopio\". Y bueno al finalizar, de repente, me diagnostican como Maniaco Depresivo, lo siguiente fue " te vamos a dar medicación y también te pondremos en terapia". De verdad, los medicamentos lo único que logran es que parezca un zombie, no me gusta ir dopado por la vida, ni tampoco tener a gente colgando de mi espalda para recordarme que me tengo que medicar y las terapias son una verdadera pérdida de tiempo, al final nada de eso me ayuda a lidiar con el estrés y con los cambios de ánimo.\
            A diferencia de la creencia popular, Rose nunca fue un gran adicto a las drogas y el alcohol, aunque no negó el uso de sustancia ilícitas de su parte. Posteriormente sus compañeros confirmaron que Rose nunca fue adicto a drogas duras, y que únicamente solía consumir marihuana en ocasiones, y que sus problemas habitualmente se debían a su carácter volátil.​',
            imagenes:['assets/img/axl1.jpg','assets/img/axl2.jpg','assets/img/axl3.jpg','assets/img/axl4.jpg']
        },
        {
            id:"2",
            idbanda:"1",
            nombre:"Slash",
            intro:'Saul Hudson (Hampstead, Londres; 23 de julio de 1965) más conocido por su nombre artístico Slash, es un músico y compositor británico-estadounidense. Es el guitarrista principal del grupo de rock estadounidense Guns N\' Roses, volviendo después de casi veinte años fuera de la banda.',
            foto:'assets/img/slash.png',
            bio:'Saul Hudson (23 de julio de 1965) guitarrista y compositor. Nació el en Stoke-On-trent en Inglaterra. su nombre artístico es Slash. Su padre Anthony Hudson, se ganaba la vida diseñando tapas para las caratulas de los cds, y su madre, Ola Hudson, era diseñadora de moda. Los primeros años estuvieron separados porque su madre decidió buscar mejores rumbos para darle estabilidad económica a su hijo. Posteriormente, la madre de Slash fue contratada para que diseñara el atuendo de David Bowie a fines de los 70 para Bowie en The man Who Fell To Earth, así que Slash pudo reunirse con su madre y conocerlo personalmente, cuestión que marcó su vida para siempre.\
            Luego de unos años, sus padres se separan luego de haberse trasladado a Los Ángeles, Estados Unidos en 1977. Cuando cumplió 15 años, su abuela le regaló su primera guitarra acústica de cuerda, aprendió a tocarla rápidamente, empezó a dedicarle gran parte de su tiempo a la música, aunque esto generó que su rendimiento en la escuela bajara y decidió abandonarla a los 17 años. Conoció a Steven Adler con quien recorrería el mundo de la música. Mientras tocaba conoció a Axl Rose en 1984, este lo invito para que adicionara en una banda, pero no fue elegido, luego se juntaría en Seattle con Steven Adler, Rose, Sradlin y Duff McKagan para formar la banda Guns N’ Roses.\
            En 1987 sacan a la venta su álbum debut: Appetite for Destruction, no tuvo una gran acogida, pero más tarde varios temas se convertirían en clásicos como Welcome to the jungle, Sweet child o’ mine y Paradise city. Tres años después pidió la nacionalidad estadounidense. Rápidamente, llegaron los reconocimientos y también los escándalos; recibió un premio de American Music Awards, mientras estaba ebrio en el escenario, esto le ganó mucha fama y la admiración de sus fans. En Guns N’ Rose tuvo ciertas diferencias con Axl Rose.\
            A raíz de estas diferencias, surgieron varios conflictos hasta que el 30 de octubre de 1996, Slash se retira de la banda, argumentado que no podía trabajar con él, dejó la dirección musical y prefirió apartarse. Al lado de Steven Adler y Matt Sorum, formaron Slash’s Snakepit, y grabaron el disco It´s Five O´Clock Somewhere. Durante su exitosa carrera Slash ha compartido escenario con grandes de la música como Bob Dylan, Michael Jackson, Iggy Pop, Alice Cooper, Lenny Kravitz, Steven Tyler, Rolling Stones entre otros.\
            Ha acompañado a artistas latinos como Marta Sanchez y ambos estuvieron en la realización de la B.S.O. de un film de Tarantino. Años más tarde formo Velvet Revolver con Duff McKagan y Matt Sorum. Al poco tiempo de admitir a Scott Weiland como vocalista se separaron en el 2002. Años más tarde, Slash comenzó su propio proyecto solista: su primer álbum se llamaría Slash, tuvo la colaboración de diversos artistas entre ellos: Fergie, Ozzy Osbourne, Myles Kennedy, Chris Cornell, Izzy Stradlin, Duff McKagan, Steven Adler, Andrew Stockdale, Dave Grohl, Kid Rock, M. Shadows, Iggy Pop, Alice Cooper y Lemmy Kilmister.\
            Después, inició una gira mundial en donde convocó a varios artistas para conformar su banda: Myles Kennedy (Voz), Bobby Schneck (Guitarra), Todd Kerns (Bajo) y Brent Fitz en la (Batería) Bajo el nombre de Slash Feat. En dicha gira Slash interpretó canciones propias y algunas de Guns N’ Roses sobre todo del disco Appetite For Destruction y la canción Slither de Velvet Revolver. Ahora bien, después ganó mucho éxito con Apocalyptic Love lanzado en el año 2012. Al año siguiente trabajo y lanzó World on Fire.\
            Los rumores empezaron a afirmar que Slash se había acercado a Axl Rose después de más de 20 años de distanciamiento con la intención de limar asperezas. A los días participó con la formación en el festival Coachella, haciendo oficial la presentación de Slash en Guns N’ Roses, una vez más se confirmó la información en la cuenta de Twitter de Slash. El guitarrista no dejo su proyecto solista a un lado. Siguió trabajando en su nuevo disco junto a Myles Kennedy And The Conspirators se espera que sea lanzado a finales del 2018. Slash realizó una importante gira con Guns N’ Roses.',
            imagenes:['assets/img/slash1.jpg','assets/img/slash2.jpg','assets/img/slash3.jpg','assets/img/slash4.jpg']
        },
        {
            id:"3",
            idbanda:"1",
            nombre:"Duff McKagan",
            intro:'Michael Andrew "Duff" McKagan (Seattle, Washington, Estados Unidos; 5 de febrero de 1964) es un músico, compositor y productor discográfico estadounidense, es el bajista y segundo vocalista de la banda de hard rock Guns N\' Roses y guitarrista de Loaded. En el 2016 regresó a la banda después de casi 18 años.',
            foto:'assets/img/duff.png',
            bio:'Duff McKagan nació el 5 de febrero de 1964 en la ciudad de [Seattle], Washington, Estados Unidos.2​ Duff es el menor de ocho hijos (5 hombres y 3 mujeres) de la pareja "Elmer y Marie Alice McKagan". Desde muy pequeño, sus padres y sus hermanos lo llamaron Duff, a lo que se refirió una vez como una cosa Irlandesa.2​ También, su vecino decía que había muchos "Michael" en su edificio y por eso le dicen así.\
            A la hora de tocar, su preferencia era la guitarra, aunque sabía tocar la batería. Fue un amigo de la infancia, Cliff Burton, quien lo influyó a tocar el bajo. A los 19 años, McKagan, ya era adicto a la heroína, al igual que su novia y su compañero de habitación en Seattle. Más adelante se mudó a la ciudad de Los Ángeles.',
            imagenes:['assets/img/duff1.jpg','assets/img/duff2.jpg','assets/img/duff3.jpg','assets/img/duff4.jpg']
        },
        {
            id:"4",
            idbanda:"1",
            nombre:"Izzy Stradlin",
            intro:'Izzy Stradlin (8 de abril de 1962 en Lafayette, Indiana) cuyo verdadero nombre es Jeffrey Dean lsbell, es un músico, guitarrista, compositor y productor discográfico estadounidense. Conocido por ser el guitarrista rítmico, segundo compositor y uno de los miembros fundadores de la banda de hard rock, Guns N\' Roses, la que abandonó en la cima de su fama en 1991 habiendo grabado cuatro álbumes de estudio.',
            foto:'assets/img/izzy.png',
            bio:'Izzy Stradlin nació como Jeffrey Dean Isbell el 8 de abril de 1962 en el estado de Indiana, en Lafayette.1​ Su padre era grabador y su madre trabajaba para una compañía telefónica; se divorciaron cuando tenía ocho años. Acerca de Lafayette, Izzy explica: "Fue genial haber crecido ahí. Hay un tribunal, una universidad, un río y las vías del ferrocarril. Es una ciudad pequeña, así que no había mucho que hacer ahí. Montábamos bicicleta, fumábamos hierba, nos metíamos en problemas, era muy parecido a Beavis and Butt-Head pero en la vida real\".\
            Interesado en la música desde temprana edad, Izzy aprendió a tocar una variedad de instrumentos musicales. Sus influencias iniciales fueron bandas y artistas como Aerosmith, Alice Cooper, Led Zeppelin, The Rolling Stones y Bob Dylan,2​ pero la influencia más grande la ejerció su abuela paterna, quien tenía una banda de swing jazz con sus amigas. Inspirado, Izzy convenció a sus padres para que le compraran una batería. Se quedó con ella hasta 1983, decidiendo cambiar a la guitarra, ya que ésta le resultaba más útil para componer.\
            Izzy estudió en el instituto Jefferson High de Lafayette, donde empezó a tocar en una banda con sus amigos, con los que compartía los mismos gustos musicales y ambiciones. Fue allí donde conoció un día a un pequeño pre-adolescente travieso e introvertido llamado William Bailey, más tarde conocido como Axl Rose. Acerca de Axl, Izzy recuerda: “el primer día de clases oí un ruido por el pasillo del colegio, era Axl siendo perseguido por todos los profesores, cuando salieron al patio y finalmente lo atraparon, hubo gritos, patadas y aullidos. Axl era muy tímido para cantar en ese entonces, pero siempre supe que iba a terminar cantando”.',
            imagenes:['assets/img/izzy1.jpg','assets/img/izzy2.jpg','assets/img/izzy3.jpg','assets/img/izzy4.jpg']
        },
        {
            id:"5",
            idbanda:"1",
            nombre:"Steven Adler",
            intro: 'Steven Adler (Michael Coletti; Cleveland, Ohio, 22 de enero de 1965) es un baterista estadounidense, conocido especialmente por su trabajo con la popular agrupación estadounidense Guns N\' Roses. Con dicha banda grabó el álbum Appetite for Destruction y G N\' R Lies. ​Ocupa el puesto número 98 de la lista de "los 100 mejores bateristas de la historia", elaborada por Rolling Stone.',
            foto:'assets/img/steven.png',
            bio:'Steven Adler nació bajo el nombre de Michael Coletti en Cleveland, Ohio, el 22 de enero de 1965, de un padre italo-americano, Michael Coletti, y de una madre americana de confesion judía, Deanna.2​ Tras el divorcio de sus padres, marcha con su madre a Los Ángeles. Para respetar la regla judía que impide nombrar a los hijos con el nombre del padre, su madre le pone el nombre de Steven, y más tarde toma el apellido del nuevo marido de su madre, Melvin Adler. Tiene un hermano mayor, Kenny, y una hermana menor, Jamie.3​ Steven Adler creció en el Valle de San Fernando hasta la edad de 13 años. Después vive con sus abuelos en Hollywood. Conoce al futuro guitarrista líder de Guns N\' Roses, Slash, en el colegio Bancroft Junior High. Esto pasó una tarde cuando Steven andaba en patineta y tras una caída, Slash se le acercó en su bicicleta para ver si se encontraba bien. Ese mismo día —según comenta Slash en una entrevista— Steven le mostró unos acordes en su vieja guitarra y despertó el amor de Slash por la guitarra.',
            imagenes:['assets/img/steven1.jpg','assets/img/steven2.jpg','assets/img/steven3.jpg','assets/img/steven4.jpg']
        },
        {
            id:"6",
            idbanda:"2",
            nombre:"Anthony Kiedis",
            intro:'Anthony Kiedis (Grand Rapids, Míchigan; 1 de noviembre de 1962) es un músico estadounidense, vocalista y líder de Red Hot Chili Peppers. Figura en el puesto 53 en el listado de Los 100 mejores vocalistas del Rock de todos los tiempos.',
            foto:'assets/img/anthony.png',
            bio:'Nació el 1 de noviembre de 1962 en Grand Rapids, Míchigan, hijo de John «Blackie Dammet» Kiedis y Margaret «Peggy» Noble. Tiene dos medias hermanas —Julie y Jenny— y un medio hermano —James—. Sus padres se divorciaron en 1966 cuando él tenía cuatro años.\
            Vivió con su madre hasta los once años de edad, quien creía que su padre no era un «buen amigo» para él, pero a su vez creía y reconocía cuan importante era para él tener una buena comunicación. Posteriormente se mudó a California junto a Blackie —su padre, actor y presidente de Rockinfreakapotamus—, donde tuvo una vida llena de libertades, excesos y drogas. Kiedis confesó que perdió la virginidad a los 12 años con la novia de su padre, y con el consentimiento del mismo.\
            Estudió en Fairfax High School donde conoció a Hillel Slovak, Flea y más tarde a Jack Irons. Contó que antes de ser amigo de Flea tuvieron un enfrentamiento, y dijo sobre ello: «Fuimos unidos por las fuerzas del dolor y el amor, nos hicimos virtualmente inseparables. Ambos éramos parias sociales, nos encontramos uno al otro y esto se convirtió en la amistad más duradera de toda mi vida». En 1976, Anthony fue matriculado a una escuela para niños actores con Diane Hull, y llegó a participar bajo el apodo de Cole Dammett en una serie cómica para la televisión llamada Jokes That My Folks Never Told Me haciendo el papel del alumno problemático y rebelde de la clase, algo que no estaba alejado de su precoz vida real. Tanto fue así que fue llamado para hacer el papel de uno de los hijos del mismo Sylvester Stallone en su película F.I.S.T..1​ Gracias a los turbios negocios de su padre actor-dealer, pudo conocer los clubes del Sunset Strip a pesar de su edad y presenciar las bandas que formaron la escena Punk Rock de Los Ángeles como The Germs, The Weirdos, Circle Jerks entre otras.2​ Para 1979 estuvo sirviendo de presentador para las actuaciones de la banda de sus amigos de secundaria Anthym. No fue hasta principios de 1983 cuando se juntó con tres amigos y miembros de Anthym y fundó su grupo llamado por aquel entonces Tony Flow & The Miraculously Majestic Masters of Mayhem para servir de acto de apertura a su amigo Gary Allen y su banda The Neighbours Voices, para lo que compusieron su propia música bajo la fuerte inspiración de una banda neoyorquina de funk con energía punk llamada Defunkt.3​4​ Estos compañeros eran: Michael Balzary —mejor conocido como Flea— en el bajo, quien aún pertenece al grupo, el batería Jack Irons y su excompañero Hillel Slovak —fallecido por una sobredosis de heroína el 25 de junio de 1988—. Ya para su segundo show habían cambiado su nombre al actual. Cursó estudios universitarios en la Universidad de California en Los Ángeles. Mientras estudiaba en Fairfax su profesora de inglés (Mrs. Vernon) le animó a escribir poesía, muchas de las cuales se convertirían después en canciones.',
            imagenes:['assets/img/kiedis1.jpg','assets/img/kiedis2.jpg','assets/img/kiedis3.jpg','assets/img/kiedis4.jpg']
        },
        {
            id:"7",
            idbanda:"2",
            nombre:"John Frusciante",
            intro:"John Anthony Frusciante (Nueva York, 5 de marzo de 1970) es un guitarrista, cantante, compositor y productor estadounidense. En la actualidad es el guitarrista de los Red Hot Chili Peppers, con quienes ha grabado cinco álbumes de estudio en los periodos 1988-1992 y 1998-2008.",
            foto:'assets/img/frusciante.png',
            bio:'John Anthony Frusciante nació en Queens, el 5 de marzo de 1970. Su padre, Sr. John Frusciante, era pianista y juez, y su madre, Gail Frusciante, era una vocalista que dejó su carrera musical para convertirse en ama de casa. Frusciante tiene ascendencia italiana por parte paterna; su bisabuelo, Generoso Frusciante, era originario de Benevento.5​ La familia Frusciante se trasladó a Tucson, Arizona, y posteriormente a Florida, donde su padre ejerce actualmente la profesión de juez. Cuando sus padres se separaron, Frusciante y su madre se mudaron a Santa Mónica, California.6​ Un año después, se trasladaron nuevamente, esta vez a Mar Vista, en el extrarradio de Los Ángeles, con el padrastro de John. Según éste, el nuevo novio de su madre le «apoyaba», y le «hacía sentir bien».6​ Ya en su adolescencia, Frusciante entró en contacto con la juventud angelina inmersa en el punk rock.7​ A los nueve años, comenzó a escuchar a The Germs, y a los "diez" ya sabía tocar en su guitarra casi todas las canciones del álbum (GI),6​ y comenzó a recibir clases de guitarra. A los once años descubrió a guitarristas como Jeff Beck, Jimmy Page y Jimi Hendrix, y poco después escuchó por primera vez a Frank Zappa.8​ Durante su adolescencia llegaba a tocar sus temas hasta quince horas al día.9​ A los dieciséis años, Frusciante dejó el instituto para dedicarse a la música, y se mudó al centro de Los Ángeles (California) para mejorar sus técnicas musicales.',
            imagenes:['assets/img/frusciante1.jpg','assets/img/frusciante2.jpg','assets/img/frusciante3.jpg','assets/img/frusciante4.jpg']
        },
        {
            id:"8",
            idbanda:"2",
            nombre:"Flea",
            intro:"Michael Peter Balzary (Melbourne, Victoria, 16 de octubre de 1962), más conocido como Flea, es un músico y bajista australiano-estadounidense, conocido por ser miembro de la banda de funk rock Red Hot Chili Peppers.",
            foto:'assets/img/flea.png',
            bio:'Michael Peter Balzary nació en Melbourne, Australia, el 16 de octubre de 1962. Su padre, Mick Balzary, era un pescador que solía llevar a su hijo a pescar con él.2​ Al cumplir los 5 años de edad, su familia se mudó a Rye, en Nueva York debido a la profesión de su padre. En 1971, sus padres se divorciaron, y mientras Mick Balzary regresó a Australia, su madre, Patricia, permaneció en los Estados Unidos, casándose poco tiempo después con un músico de jazz. El padrastro de Flea invitaba frecuentemente a otros músicos a su casa, y numerosas Jam sessions se daban lugar allí. Al tiempo, la familia de Flea volvió a mudarse, esta vez a Los Ángeles, California, y allí comenzó la afición de Flea por la trompeta.3​ Sus profesores le consideraban todo un prodigio, comparable únicamente al músico Herb Alpert, quien asistía también al Instituto Fairfax.4​ A esta edad, Flea aún no se sentía interesado en el rock, siendo sus músicos más idolatrados artistas de la talla de Miles Davis, Louis Armstrong, Dizzy Gillespie, entre otros.\
            El padrastro de Flea era un alcohólico agresivo, quien frecuentemente se veía envuelto en tiroteos con la policía. Sobre ello, Flea diría más tarde: "He crecido en un hogar muy violento e influido por el alcohol. Crecí siendo aterrorizado por mis padres, particularmente por la figura de mi padre. Me causó un montón de problemas posteriores en mi vida\". Flea comenzó a experimentar fuertemente con el cannabis a la edad de 13 años.',
            imagenes:['assets/img/flea1.jpg','assets/img/flea2.jpg','assets/img/flea3.jpg','assets/img/flea4.jpg']
        },
        {
            id:"9",
            idbanda:"2",
            nombre:"Chad Smith",
            intro:"Chad Gaylord Smith (Saint Paul, Minnesota; 25 de octubre de 1961)1​ es un músico estadounidense. Es más conocido por ser el baterista de la banda de rock Red Hot Chili Peppers, con quienes grabó ocho álbumes de estudio y de la cual es miembro desde 1988 hasta la actualidad. ",
            foto:'assets/img/chad.png',
            bio:'Smith comenzó a tocar la batería a los 7 años. Durante su adolescencia tuvo varios trabajos pero ninguno parecía satisfacerle ya que su único interés era practicar y perfeccionar su habilidad de tocar. Se graduó de la secundaria "Bloomfield Hill\'s Lasher\" en el año 1980 ese mismo año fue a vivir a Uruguay donde fue miembro fundacional de la mítica orquesta Karibe con k al volver a su ciudad natal comenzó a tocar con varias bandas. Además concurrió a la \"Andover High School\" y \"Lahser High School\", graduándose de esta última en el año 1980. Estando todavía en la escuela, se fue de su casa por un tiempo. Cuando regresó, su madre lo envió a un colegio de internos. Trabajó en una serie de empleos mientras tocaba en varias bandas.\
            Más adelante, a sus 20 años, se mudó a California, donde vivía su hermano Brad, y terminó en Los Ángeles, donde se unió a los Red Hot Chili Peppers. Después de tocar en la banda Toby Redd, Chad ganó una muy buena reputación como baterista. Fue el último en audicionar para los Red Hot Chili Peppers con la reputación de \"comer batería para el desayuno\". Durante la audición, Flea y Anthony Kiedis quedaron gratamente sorprendidos por la potencia, habilidad y el ritmo que tenía este \"gigante\". Terminó uniéndose a la banda en marzo de 1989. El estilo de Chad encajaba perfectamente con lo que estaban buscando. Sin embargo, de acuerdo a la autobiografía de Anthony Kiedis, Scar Tissue, después de la primera audición para la banda, Kiedis le dijo que lo admitirían en la banda si primero se afeitaba la cabeza, como prueba de devoción a la banda, pero sobre todo, por la aversión de Kiedis al estilo de pelo rock and roll de Smith (el cantante lo comparaba con el estilo de Guns N\' Roses; pelo largo y bandana), pues no era la imagen de la banda punk funk. Smith volvió al día siguiente con su pelo todavía en un pañuelo, sin embargo, Anthony le permitió quedarse, al darse cuenta de su terquedad y según Flea, porque les gustó su estilo funk-groove. La tenacidad de Smith para mantener su pelo largo era muy grande, probablemente debido a la incomodidad con sus entradas, clarificando así la razón por la que casi siempre lleva puesto un gorro.',
            imagenes:['assets/img/chad1.jpg','assets/img/chad2.jpg','assets/img/chad3.jpg','assets/img/chad4.jpg']
        },
        {
            id:"10",
            idbanda:"3",
            nombre:"Indio Solari",
            intro:"Carlos Alberto Solari (Paraná, Entre Ríos; 17 de enero de 1949) conocido como Indio Solari, es un músico,compositor,cantante argentino, miembro fundador del grupo Patricio Rey y sus Redonditos de Ricota. Su voz y el uso de metáforas en sus letras lo convirtieron en un icono de la contracultura en la escena del rock argentino. Su imagen pública se caracteriza por su escasa aparición y la concesión de entrevistas sólo mediante la radiocomunicación.",
            foto:"assets/img/indio.png",
            bio:'Nació en Paraná, Entre Ríos, Argentina, el 17 de enero de 1949.1​ Al poco tiempo de vida, su familia se mudó a la ciudad de La Plata donde pasó su infancia y adolescencia.2​ Desde muy chico se vio influenciado con autores y poetas beatnik como Jack Kerouac, Lawrence Ferlinghetti, Gregory Corso, entre otros, y además por historietas y libros de ciencia ficción. Desde joven estuvo ligado al arte: era aficionado al dibujo y las artes gráficas. En 1966 fue alumno de la Escuela Primaria N° 33 de La Plata donde conoció a Isa Portugheis, su amigo de la infancia que luego sería baterista de la banda.\
            Al terminar la escuela secundaria a la edad de 18 años, ingresó al instituto de Bellas Artes. Rindió algunas materias pero fue expulsado un año más tarde. Tres décadas después, contestaría su primera entrevista para la revista de rock La García donde refirió el hecho: \"En esa época lo más importante era la rebeldía\", declaró.\
            En la década de 1970 sería socio con su amigo Guillermo Beilinson en un pequeño taller de estampado de telas en Valeria del Mar llamado "El Mercurio". Por ese entonces el Indio ya era catalogado en su ciudad como un personaje enigmático por su dialéctica ácida y sus comportamientos poco convencionales.\
            La lírica especial del \"Indio\", junto con la creatividad musical de Eduardo Beilinson, hicieron que la banda se convirtiera en un auténtico mito viviente de la música argentina. Se suele afirmar que "Los Redondos" alcanzaron no sólo la popularidad musical, sino que generaron un fenómeno socio-cultural importante de características muy peculiares. Carlos Solari fue vocalista y líder de la agrupación desde su fundación en 1976 hasta su disolución en 2001.',
            imagenes:['assets/img/indio1.jpg','assets/img/indio2.jpg','assets/img/indio3.jpg','assets/img/indio4.jpg']
        },
        {
            id:"11",
            idbanda:"3",
            nombre:"Skay Beilinson",
            intro:"Eduardo Federico Beilinson, conocido popularmente como Skay Beilinson (La Plata, Buenos Aires, 15 de enero de 1952)1​ es un guitarrista, cantante y compositor argentino, considerado como un gran exponente del rock de su país.2​ Reconocido por haber sido miembro fundador de la reconocida banda argentina Patricio Rey y sus Redonditos de Ricota, junto a Carlos Alberto \"Indio\" Solari, es considerado uno de las figuras e íconos de la afirmación del rock en la cultura musical argentina.",
            foto:"assets/img/skay.png",
            bio:'Eduardo Beilinson comenzó a los 12 años a estudiar guitarra con el maestro Leopoldo Ezcurra. Tras cuatro años de estudios, conformó una banda junto a sus amigos Miguel, Jorge y Alfredo (también conocido como "Rata"), la banda la llamaron Taxi Rural, como parodia a su presente como peón de taxi, cuyo empleo utilizaba para financiar sus instrumentos y el recorrido de la banda.\
            Se consagró y fue reconocido como un importante e influyente artista del rock, estando al mando de la emblemática banda Patricio Rey y sus Redonditos de Ricota, liderazgo que compartió con el Indio Solari.\
            Anteriormente, formó parte, junto a su hermano Guillermo Beilinson y músicos como Héctor \"Topo\" D\'Aloisio, Bernardo Rubaja, Kubero Díaz, \"Morci\" Requena e Isa Portugheis, de las bandas Diplodocum Red & Brown5​6​ y La Cofradía de la Flor Solar,7​ fuertemente influenciadas por la psicodelia y la cultura hippie. Fue durante esta etapa, viviendo en comunas y en diversos sitios de la geografía argentina, que conoció a su pareja y futura mánager y alma mater de los Redondos y bandas posteriores, Carmen Castro, más conocida como La Negra Poli.\
            Tras la separación indefinida de Patricio Rey y sus Redonditos de Ricota en 2002, comenzó su carrera como solista, que Skay insiste en redefinir como de solista-en-banda, ya que «El concepto de solista... en realidad no me veo en esa idea. Siempre vi como solista al tipo que llama a los músicos ocasionalmente o cambia de banda y todo sigue sonando igual. Yo, si cambiara la banda, cambiaría el sonido».\
            El primer disco de esta nueva época fue publicado en 2002, titulado A través del Mar de los Sargazos, acompañado por Daniel Colombres en batería y Claudio Quartero en bajo, con producción de la "Negra Poli". Este álbum está compuesto por canciones que surgieron de las tantas composiciones hechas durante la etapa en Patricio Rey y sus Redonditos de Ricota, de las cuales se destaca \"Oda a la sin Nombre\".',
            imagenes:['assets/img/skay1.jpg','assets/img/skay2.jpg','assets/img/skay3.jpg','assets/img/skay4.jpg']
        },
        {
            id:"12",
            idbanda:"3",
            nombre:"Sergio Dawi",
            intro:"Sergio Dawi residió en España durante nueve años, en donde se desempeñó como músico en diversas formaciones de música popular. Fue el saxofonista y tecladista de Pateicio Rey y Sus Redonditos de Ricota durante más de 14 años.",
            foto:"assets/img/dawi.png",
            bio:'Sergio Dawi residió en España durante nueve años, en donde se desempeñó como músico en diversas formaciones de música popular. Fue el saxofonista y tecladista de Pateicio Rey y Sus Redonditos de Ricota durante más de 14 años.\
            Al regresar a Argentina en 1985 creó junto a Damián Nisenson la compañía de música escénica Dosaxos. Sus shows se caracterizaron por presentar una estética particular. Investigaron recursos sonoros y ofrecieron espectáculos con propuestas teatrales, proyecciones fílmicas, números circenses y un vínculo particular con el público; creando así un espacio de juego, poesía, sueños y humor. \ En el año 1987, el dúo de saxofonistas participó de la noche inaugural del Centro Parakultural, formando parte del staff por más de un año. A partir de ese momento fueron convocados en diversas propuestas, en donde desarrollaron su concepto Performer.\
            En 1998 presentaron el espectáculo \“Bazar Limbus\” en Babilonia. Luego en el Teatro Regio, Centro Cultural Ricardo Rojas, Club del Vino y Ave Porco, entre otros locales.\
            En el año 2000 crearon \“Kachivachetur\”, presentado durante dos años en el IMPA, además del espectáculo brindado en el Teatro Payró en homenaje a sus 50 años. También realizaron numerosas presentaciones en Uruguay. En ese mismo año se realizó para “Canal A” un especial que coincidió con la participación del dúo dentro del Festival Internacional de Teatro de Buenos Aires. En el libro de Jorge Dubatti, “El Teatro Argentino”, se describe esa etapa artística.\
            En 2003 nació “In & out”, espectáculo con una visión futurista que tomaba, entre otros, temas ligados a la clonación y la condición humana. Durante los meses de Enero y Febrero se presentaron en la Sala Contemporánea del Centro Cultural Recoleta. Compartieron escenario con Fernando Kabusacki en guitarra, Sami Abadi en violín eléctrico, Gerardo Rotblatt en percusión (Los Fabulosos Cadillacs, Cienfuegos), Juancho Farías Gómez, Sonnenstrahl, Semilla Bucciarelli, Ruger Blavia (Fura dels Baus), Sergio Bulgakov, Pablo Dawidowicz, Marcelo García, José Balé, Douglas Felis y Nora Sarmoria. ',
            imagenes:['assets/img/dawi1.jpg','assets/img/dawi2.jpg','assets/img/dawi3.jpg','assets/img/dawi4.jpg']
        },
        {
            id:"13",
            idbanda:"3",
            nombre:"Semilla Bucciarelli",
            intro:"Daniel Fernando \"Semilla\" Bucciarelli (Villa María, Córdoba, Argentina, 3 de julio de 1959) es un músico y artista plástico argentino. Reconocido por su notable participación como bajista de Patricio Rey y sus Redonditos de Ricota, en la cual se mantuvo activo desde 1982 hasta la separación de la misma en 2001.",
            foto:"assets/img/bucciarelli.png",
            bio:'Daniel Bucciarelli vivió su juventud en la provincia de Buenos Aires, y sus comienzos en la música datan desde mediados hasta fines de la década de 1970, en donde integró algunos grupos y llegó a ser encargado de equipos del grupo Crucis. En 1982, Alejandro Pensa (quién colaboraba con Skay por aquel entonces) lo invita a formar parte de Patricio Rey y permaneció con ellos hasta su disolución, con quienes grabó desde el primer álbum Gulp! (1985) hasta el último Momo Sampler (2000).4​ También ha colaborado en la composición de dos canciones las cuales forman parte del repertorio de la banda; "Ella Debe Estar tan Linda" de Un baión para el ojo idiota (1988) y "Mi Perro Dinamita" de La mosca y la sopa (1991)5​ además realizó el arte de portada del álbum Lobo Suelto, Cordero Atado, Vol. 2 de 1993 en el cual también aporto un alfabeto especial.6​ Tras la disolución de Patricio Rey, se había retirado de la práctica profesional de la música, dedicándose a sus proyectos de pintura artística. En 2011, formó junto a su excompañero Redondo Sergio Dawi, el espectáculo conceptual "SemiDawi: Ambos a la vez", por el cual Bucciarelli aportaba imagen y color a los acordes que Dawi ejecutaba con su saxofón. En 2013, el espectáculo se fusionó con las presentaciones de la banda "The Comando Pickless" de Walter Sidoti, formando el espectáculo "SemiDawi + The Comando Pickless". En este mismo año, Bucciarelli, Dawi y Sidoti colaboraron junto a su excompañero Indio Solari en la producción del tema "La pajarita pechiblanca", formándose la reunión de ex-redondos más grande desde la separación.7​ Finalmente y tras cuatro años desarrollando el espectáculo "SemiDawi + The Comando Pickless", en 2017 se produce una reunión entre Bucciarelli, Dawi y Sidoti a la que también se suma el guitarrista Tito Fargo, tras la cual comienzan a presentarse como una nueva agrupación bajo el nombre de Los Decoradores.',
            imagenes:['assets/img/semilla1.jpg','assets/img/semilla2.jpg','assets/img/semilla3.jpg','assets/img/semilla4.jpg']
        },
        {
            id:"14",
            idbanda:"5",
            nombre:"John Lennon",
            intro:"John Winston Ono Lennon (Liverpool, 9 de octubre de 1940-Nueva York, 8 de diciembre de 1980), de nacimiento John Winston Lennon, fue un artista, músico, multinstrumentista, cantautor, compositor, poeta, dibujante, escritor, pacifista, activista y actor inglés, conocido por ser uno de los miembros fundadores de la banda de rock The Beatles.",
            foto:"assets/img/lennon.png",
            bio:'Lennon nació durante la Segunda Guerra Mundial, el 9 de octubre de 1940 en el Hospital Materno de Liverpool, hijo de Julia y Alfred Lennon, un marino mercante de ascendencia irlandesa, que estaba ausente durante el nacimiento de su hijo.​ Debido a su deber como soldado y marino en plena guerra. Sus padres le llamaron John Winston Lennon en honor a su abuelo paterno, John «Jack» Lennon, y por el primer ministro de ese entonces, Winston Churchill.6​ Su padre se hallaba a menudo lejos de casa, pero regulamente enviaba cheques de pago al número 9 de Newcastle Road, Liverpool, donde Lennon vivía con su madre;7​ sin embargo, los cheques dejaron de llegar cuando fue arrestado en febrero de 1944 por ser un «ausente sin permiso». Seis meses después regresó a casa y se ofreció a cuidar de su familia, pero Julia —por entonces embarazada de otro hombre— rechazó la idea. Bajo una presión considerable, Julia le otorgó el cuidado de Lennon a su hermana, Mimi Smith, después de que esta denunciara la situación familiar del niño en varias ocasiones ante los servicios sociales de Liverpool.nota 2​ En julio de 1946, el padre de Lennon visitó a Smith y secretamente se marchó con su hijo a Blackpool, con la intención de llevarlo a Nueva Zelanda con él.​ Julia los siguió —junto a su actual pareja, «Bobby» Dykins— y, después de una acalorada discusión entre ambos, Alfred obligó al niño, de tan solo cinco años, a elegir con quién se quedaría. Lennon escogió a su padre dos veces, pero conforme su madre se alejaba, comenzó a llorar y la siguió. Desde ese momento tendrían que pasar veinte años para que Lennon volviese a ver a su padre.',
            imagenes:['assets/img/lennon1.jpg','assets/img/lennon2.jpg','assets/img/lennon3.jpg','assets/img/lennon4.jpg']
        },
        {
            id:"15",
            idbanda:"5",
            nombre:"Paul McCartney",
            intro:"James Paul McCartney (Liverpool, 18 de junio de 1942) es un cantautor, compositor, músico, multiinstrumentista, escritor y actor británico. Junto a John Lennon, George Harrison y Ringo Starr, ganó fama mundial por ser el bajista y cantante de la banda de rock The Beatles, reconocida como la más popular e influyente en la historia de la música popular; su asociación compositora con Lennon es una de las más célebres del siglo xx. Después de la separación de la banda, continuó su carrera musical en solitario y formó Wings con su primera esposa, Linda, y Denny Laine.",
            foto:"assets/img/paul.png",
            bio:'James Paul McCartney nació el 18 de junio de 1942 en el Hospital Walton, en Liverpool, Inglaterra, donde su madre, Mary Patricia (nombre de soltera, Mohin) (1909-1956), había trabajado como enfermera. Su padre, James («Jim») McCartney (1902-1976), se hallaba ausente durante el nacimiento de su hijo debido a su labor voluntaria como bombero durante la batalla de Inglaterra.8​ Paul tiene un hermano menor, Michael, nacido el 7 de enero de 1944. Aunque fueron bautizados por la iglesia de su madre, católica, su padre era protestante y más tarde se volvió agnóstico, por lo que ninguna religión fue practicada en casa.9\
            Comenzó sus estudios en la Escuela Primaria de Stockton Wood Road en Speke, a la cual asistió desde 1947 hasta 1949, año en que fue trasladado al colegio Joseph Williams Junior School en Belle Vale debido a la superpoblación de alumnos en Stockton.10​ En 1953, aprobó el examen 11-plus, junto a otros tres de un total de noventa examinados, ganando así su admisión al prestigioso Liverpool Institute.11​ En 1954, conoció al también estudiante George Harrison en el autobús que iba al instituto desde sus casas en Speke. Harrison había aprobado también el examen, lo que significaba que podía asistir a una grammar school en lugar de una secondary modern school, donde la mayoría de los estudiantes asistían hasta estar aptos para laborar. Rápidamente se volvieron amigos; McCartney admitiría posteriormente: «Tendía a hablarle con superioridad porque era un año más joven.»',
            imagenes:['assets/img/paul1.jpg','assets/img/paul2.jpg','assets/img/paul3.jpg','assets/img/paul4.jpg']
        },
        {
            id:"16",
            idbanda:"5",
            nombre:"George Harrison",
            intro:"George Harrison (Liverpool, 25 de febrero2​ de 1943-Los Ángeles, 29 de noviembre de 2001) fue un músico multiinstrumentista, compositor, cantautor, productor musical, productor cinematográfico y actor británico, guitarrista y cantante de la banda de rock The Beatles. Aunque John Lennon y Paul McCartney fueron los principales compositores dentro del grupo, Harrison también incluyó composiciones propias en los discos de The Beatles.",
            foto:"assets/img/harrison.png",
            bio:'George Harrison nació el 25 de febrero de 1943 en el 12 de Arnold Grove, Liverpool, Inglaterra, en el seno de una familia católica y de ascendencia irlandesa por parte de su madre, Louise.5​ Fue el único Beatle cuya infancia no fue empañada por la muerte o el divorcio de sus padres. Su padre, Harold Harrison, había sido marino hasta que abandonó su puesto y desempeñó el de conductor de autobús.\
            Acudió a la escuela infantil Dovedale Road, cerca de Penny Lane, al mismo tiempo que John Lennon,5​ aunque por la diferencia de edad no se conocieron. A los once años, tras pasar una prueba, le fue concedida una plaza en el Liverpool Institute for Boys, edificio hoy en día convertido en el Liverpool Institute for Performing Arts, en el cual conoció a Paul McCartney. A los doce años, poco antes de dar inicio el curso, fue ingresado en el hospital debido a una nefritis. Durante su convalecencia compró su primera guitarra, una Egmond, a un compañero de Dovedale, Raymond Hughes, por 3 libras y 10 chelines.\
            Poco después, al tiempo que se hacía con su primera \"guitarra decente\", una Hofner President, forma su primer grupo tras el auge del skiffle: The Rebels, junto a su hermano Peter y Arthur Kelly.6​ Entre los artistas que influyen en su forma de tocar destacan Chuck Berry, Elvis Presley, Little Richard, Buddy Holly, Fats Domino, Bill Halley, Eddie Cochran, Lonnie Donegan y Chet Atkins.\
            Tras abandonar la escuela en 1959, alternó durante poco tiempo a su afición a la música con un trabajo de aprendiz de electricista. Su formación ayudó a hacer de Harrison el miembro más eficaz del grupo a la hora de experimentar nuevos sonidos y de arreglar equipos. A mediados de los 60, fue el primero en equipar su casa de Esher con un estudio personal donde podría componer y trabajar con mayor eficacia.',
            imagenes:['assets/img/george1.jpg','assets/img/george2.jpg','assets/img/george3.jpg','assets/img/george4.jpg']
        },
        {
            id:"17",
            idbanda:"5",
            nombre:"Ringo Starr",
            intro:"Richard Starkey1​2​ (Liverpool, 7 de julio de 1940) más conocido como Ringo Starr, es un multinstrumentista músico, cantante, compositor y actor británico que fue el baterista de la banda de rock The Beatles. Antes de formar parte de The Beatles, Starr fue miembro de otra banda de Liverpool, Rory Storm and the Hurricanes. En agosto de 1962, Pete Best fue despedido y Ringo ocupó su lugar.",
            foto:"assets/img/ringo.png",
            bio:'Starkey nació en el seno de una familia trabajadora el 7 de julio de 1940 en el 9 de Madryn Street de Dingle, un suburbio portuario de Liverpool, Inglaterra. Sus padres, Elsie Gleave Parkin y Richard Starkey, se divorciaron, quedando el joven al cuidado de su madre. Ambos se mudaron al 10 de Admiral Grove, a la vez que su madre alternaba distintos trabajos.\
            Con seis años, debido a las complicaciones de una grave peritonitis, permaneció en coma durante diez semanas.7​8​ A los trece, después de que su madre contrajera matrimonio con Harry Greaves, un resfriado se convirtió en pleuresía, lo que le obligó a ser ingresado en el Myrtle Street Hospital, donde permaneció durante dos años.\
            Su ausencia del aula le dificultó el aprendizaje, por lo que a su salida apenas sabía leer y escribir. Trabajó, gracias al apoyo de su padrastro, para la British Rail como mensajero, aunque a las seis semanas fue despedido por no pasar el examen médico. Poco después, Harry Greaves logró encontrarle trabajo como aprendiz de ensamblador en una compañía mecánica local.\
            Pese a todo, y debido al auge del skiffle, la mayor afición de Ringo era la música. Durante su estancia en el hospital, aprendió a tocar el tambor en las clases de música que se impartían. A su salida de éste, Harry Greaves le compró una batería de segunda mano. Tocó para algunas bandas locales: primero en bailes junto a Eddie Clayton y más tarde con The Darktown Skiffle Group, aunque alcanzó cierta reputación en el grupo Rory Storm & The Hurricanes, donde cambió su nombre por el de Ringo Starr (Ringo debido a los numerosos anillos que usaba (aunque él en una entrevista dijo "lo elegí porque es nombre de perro y los perros me agradan"), y Starr para anunciar su solo de batería como Starr Time).',
            imagenes:['assets/img/ringo1.jpg','assets/img/ringo2.jpg','assets/img/ringo3.jpg','assets/img/ringo4.jpg']
        },
        {
            id:"18",
            idbanda:"6",
            nombre:"Roger Waters",
            intro:"George Roger Waters (Surrey, Reino Unido; 6 de septiembre de 1943)1​ es un cofundador de Pink Floyd, convirtiéndose tras la marcha de Syd Barrett en el compositor conceptual de la banda. Además de ser el bajista, compartió el lugar de cantante principal y experimentó con sintetizadores, loops, guitarra eléctrica y acústica. Con él, Pink Floyd alcanzó éxito mundial en la década de 1970 gracias a sus álbumes conceptuales The Dark Side of the Moon, Wish You Were Here, Animals y The Wall.",
            foto:"assets/img/roger.png",
            bio:'Roger Waters, el más joven de dos hermanos, nació en Great Bookham, Surrey, hijo de Eric Fletcher Waters y Mary.​ Su padre, nieto de un minero del condado de Durham y destacado líder del Partido Laborista, era maestro de escuela, cristiano devoto, pacifista y, más tarde, miembro del Partido Comunista de Gran Bretaña.1​ En 1939, previo a la guerra, Eric Fletcher, pacifista desde una perspectiva cristiana, fue declarado objetor de conciencia, por lo que condujo una ambulancia durante los Blitzkrieg (bombardeos nazi sobre el Reino Unido) y durante los primeros años de la Segunda Guerra Mundial.1​ Más adelante, abandonó su pacifismo impulsado por su militancia comunista y antifascista y se unió a la infantería del Ejército británico. Murió en combate junto a la Compañía Z, 8º Batallón del Regimiento de Infantería Royal Fusiliers durante la batalla de Anzio, Italia, en febrero de 1944, cuando Roger contaba con cinco meses.11​ Después de la muerte de su marido, la madre de Roger, Mary, también maestra, se mudó junto a sus dos hijos a Cambridge.\
            Waters asistió en Cambridge al Morley Memorial Junior School y después al Cambridgeshire High School para Chicos (renombrada como Hills Road Sixth Form College) donde conoció a Syd Barrett, mientras que otro de sus futuros compañeros musicales, David Gilmour, vivía cerca y asistía a The Perse School.',
            imagenes:['assets/img/roger1.jpg','assets/img/roger2.jpg','assets/img/roger3.jpg','assets/img/roger4.jpg']
        },
        {
            id:"19",
            idbanda:"6",
            nombre:"David Gilmour",
            intro:"David Jon Gilmour, CBE (Cambridge, Reino Unido, 6 de marzo de 1946) es un influyente músico, compositor y multiinstrumentista británico. Es conocido por haber sido vocalista, guitarrista y uno de los compositores de la banda de rock progresivo Pink Floyd, a la cual se unió poco antes del abandono de Syd Barrett en 1968. Junto con su trabajo en esta banda, Gilmour ha colaborado en otras publicaciones como productor y ha estado envuelto activamente en eventos benéficos a lo largo de su carrera.",
            foto:"assets/img/gilmour.png",
            bio:'David Jon Gilmour nació el 6 de marzo de 1946 en Cambridge, Inglaterra.1​ Su padre, Douglas Gilmour, fue un experto en zoología y docente de la Universidad de Cambridge y su madre Sylvia se desempeñó como editora para la BBC.2​ En 1956, cuando David era todavía un niño, la familia se mudó a Grantchester.\
            Los padres de Gilmour lo estimularon para que siguiera sus intereses musicales, y en 1954 le compraron su primer disco, "Rock Around the Clock" de Bill Halley.3​ Su entusiasmo por la música incrementó al año siguiente con la canción de Elvis Presley "Heartbreak Hotel" y más tarde con "Bye Bye Love" de Everly Brothers, canción que le hizo interesarse en la ejecución de la guitarra. Para poder practicar le pidió una guitarra prestada a un vecino y nunca se la devolvió. Al poco tiempo empezó a practicar con un método creado por Pete Seeger.4​ A los once años asistió a la Perse School en Cambridge, algo que no disfrutaba.5​ Allí conoció a sus futuros compañeros en Pink Floyd, el guitarrista Syd Barrett y el bajista Roger Waters.\
            En 1962 empezó a estudiar lenguas modernas en el Colegio Técnico de Cambridge.5​ Aunque no finalizó sus estudios aprendió a hablar francés de manera fluida.5​ Barrett también estudiaba en el mismo colegio y pasaba algunos momentos con él practicando guitarra.5​ A finales de 1962 se unió a la banda de blues rock Jokers Wild, agrupación con la que grabó un álbum y un sencillo en el estudio Regent Sound en Londres, aunque se fabricaron solamente quince copias de cada uno.5​ En agosto de 1965, Gilmour viajó a España y a Francia con Barrett y otros amigos para conseguir algo de dinero interpretando canciones de The Beatles en las calles y en algunos bares. Allí fueron arrestados en una ocasión por indigencia, e incluso David requirió tratamiento en un hospital por su estado de desnutrición. 7​ Luego se trasladó hasta París con Barrett, donde acamparon fuera de la ciudad por una semana y visitaron el museo de Louvre.8​ Durante esta época Gilmour trabajó en varios sitios, e incluso llegó a desempeñarse como conductor y asistente del diseñador de modas Ossie Clark.',
            imagenes:['assets/img/gilmour1.jpg','assets/img/gilmour2.jpg','assets/img/gilmour3.jpg','assets/img/gilmour4.jpg']
        },
        {
            id:"20",
            idbanda:"4",
            nombre:"Robert Plant",
            intro:"Robert Anthony Plant CBE (West Bromwich, Inglaterra, 20 de agosto de 1948) es un músico, compositor y productor inglés, conocido mayormente por haber sido cantante de la banda de rock Led Zeppelin desde su fundación hasta su separación en 1980.",
            foto:"assets/img/plant.png",
            bio:'Robert Plant nació el 20 de agosto de 1948 en West Bromwich, Staffordshire, en la zona conocida como Black Country.n. 2​ Su padre, Robert C. Plant, era un ingeniero civil que trabajó para la Real Fuerza Aérea Británica durante la Segunda Guerra Mundial, mientras que la familia de su madre, Annie Celia Plant (nacida como Annie Cain), tenía orígenes gitanos.17​ Plant creció en Kidderminster, Worcestershire, y desde pequeño tuvo interés en el canto y el rock and roll: «Cuando era niño solía ocultarme tras las cortinas de la casa en Navidad y trataba de imitar a Elvis. Había un cierto ambiente entre las cortinas y las ventanas francesas, había un cierto sonido para un niño de 10 años. Eso fue todo el ambiente que conseguí a los 10 años... creo».1​ En 1962 se presentó por primera vez como cantante en una pista de patinaje en el pueblo de Swadlincote, Midlands del Este, y al poco tiempo abandonó sus estudios de contador público para iniciar una carrera en la escena de blues de dicha región inglesa.18​ «A los 16 años me fui de la casa y comencé mi verdadera educación musical, moviéndome de grupo en grupo y ampliando mis conocimientos de blues y otras clases de música que valiera la pena escuchar». Fue así como, inspirado por la música de Willie Dixon y Robert Johnson, debutó como primera voz en el grupo New Memphis Bluebreakers en 1963 y posteriormente integró las agrupaciones Sounds of Blue, Delta Blues Band y Black Snake Moan, en las que ocasionalmente tocaba la guitarra y la armónica.1​\
            En 1965 ingresó a Tennessee Teens, que tenía una estrecha relación con el movimiento mod e influencias del rhythm and blues y el soul. Al año siguiente cambiaron su nombre a Listen y en octubre publicaron el sencillo «You\'d Better Run» a través de CBS Records, pero debido a su escasa popularidad decidieron separarse a finales de 1966. No obstante, Plant mantuvo su contrato con CBS y en 1967 publicó dos sencillos como solista; «Our Song» y «Long Time Coming».1​ En ese mismo año, entusiasmado con el sonido de los grupos estadounidenses Jefferson Airplane, The Byrds y Moby Grape formó Band of Joy junto con Vernon Pareira (guitarra), Mick Reeves (bajo), Chris Brown (órgano) y Pete Robinson (batería). Sin embargo, su paso por la banda fue de tan solo cuatro meses ya que el mánager —padre de Chris Brown— afirmaba que Plant no era bueno como cantante. Más tarde el resto de la banda decidió cambiar su nombre a The Good Egg, mientras que Plant fundó una segunda versión de Band of Joy, que tampoco duró demasiado.1​ Luego reformó la agrupación con otros músicos, entre ellos su amigo y baterista John Bonham, pero esta solo duró hasta comienzos de 1968 cuando un contrato de grabación que esperaban no se materializó.',
            imagenes:['assets/img/plant1.jpg','assets/img/plant2.jpg','assets/img/plant3.jpg','assets/img/plant4.jpg']
        },
        {
            id:"21",
            idbanda:"4",
            nombre:"Jimmy Page",
            intro:"James Patrick «Jimmy» Page, OBE (Heston, Middlesex, Inglaterra; 9 de enero de 1944) es un músico multiinstrumentista y un virtuoso guitarrista de rock clásico británico; fundador del grupo Led Zeppelin desde 1968 hasta su disolución en 1980, considerado uno de los más grandes, influyentes y versátiles músicos y guitarristas de todos los tiempos.",
            foto:"assets/img/jimmypage.png",
            bio:'Jimmy Page es hijo único de un empleado administrativo, James Page, y de una secretaria y enfermera, Patricia Elizabeth Gaffikin.8​Nacido en Heston, una antigua villa devenida en suburbio del Gran Londres, en la zona occidental. Cuando Jimmy contaba con ocho años, en 1952, su familia se mudó a Epsom, otro suburbio del Gran Londres, en el sur, donde recibió sus primeros contactos con la música.\
            A los 12 años, Page consiguió su primera guitarra, y aunque tomó algunas clases, es en su mayoría un músico autodidacta.9​ Entre sus primeras influencias destacaban Scotty Moore y James Burton, ambos guitarristas de rockabilly y que habían tocado con Elvis Presley,10​ y Johnny Day, colaborador de The Everly Brothers.\
            En 1957, con 13 años, apareció por primera vez en televisión en un programa de jóvenes talentos, Huw Wheldon Show, tocó el tema \"Mama Don\'t Wanna Play No Skiffle No More\" y \"cotton fields\".​ La afición de Page por la guitarra era tan grande que solía llevar su instrumento al colegio, siendo confiscado la mayoría de las veces. Aunque estaba interesado por las ciencias, llegó a recibir una oferta de trabajo como asistente de laboratorio, decidió dejar sus estudios para comenzar una carrera musical, y después de varios intentos, entró a formar parte de una banda de rock, The Crusaders, que contaba con el vocalista Neil Christian. Su estancia en esta banda se extendió durante más de dos años, durante los cuales Page contrajo una mononucleosis que no le impidió seguir dando conciertos, aunque decidió dejar aparcada su carrera musical para sumergirse en su otra pasión, la pintura, por lo que se matriculó en el colegio de arte de Sutton, en Surrey.',
            imagenes:['assets/img/jimmy1.jpg','assets/img/jimmy2.jpg','assets/img/jimmy3.jpg','assets/img/jimmy4.jpg']
        },
    ]

    constructor(){
        console.log("servicio listo");
    }

    public getArtistas(){
        return this.artistas;
    }

    public getArtista(unId:string){
        for (let art of this.artistas){
            if (art.id == unId){
                return art;
            }
        }
        return {};
    }

    public getArtistasDeBanda(id: string){
        let artistasArr:Artista [] = [];
        for (let art of this.artistas){
            if (art.idbanda == id){
                artistasArr.push(art);
            }
        }
        return artistasArr;
    }

    getBusqueda (termino:string){

        let artistasArr:Artista[] = [];
        termino = termino.toLowerCase();

        for (let artista of this.artistas){
            let nombre = artista.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0){
                artistasArr.push(artista);
            }
        }

        return artistasArr;

    }

    getFotos (idArtista:string){
        for (let art of this.artistas){
            if (art.id == idArtista){
                return art.imagenes;
            }
        }
        return [];
    }

}

export interface Artista {
    id:string;
    idbanda:string
    nombre:string;
    intro:string;
    bio:string;
    foto:string;
    imagenes:string [];
}