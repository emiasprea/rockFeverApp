import { Injectable } from "@angular/core";

@Injectable()
export class BandasService {

    private bandas:Banda[] = [
        {
            id:"1",
            nombre:'Guns n\' Roses',
            anio:"1987",
            intro:'Guns n\' Roses es una banda estadounidense de hard rock formada en Hollywood en la zona de Sunset Strip alrededor de Santa Monica, en la ciudad de Los Ángeles, California en 1985.',
            bio:'La banda fue formada en marzo de 1985 por Axl Rose (voz, teclados), Tracii Guns (guitarra líder), Izzy Stradlin (guitarra rítmica, coros), Ole Beich (bajo) y Rob Gardner (batería). Los cinco miembros originales eran de dos grupos diferentes, L.A. Guns (que más tarde fue reformado) y Hollywood Rose. Posteriormente, los miembros decidieron combinar los nombres de los dos grupos anteriores y llamar a la banda Guns N\' Roses. Desde Hollywood Rose llegaron Axl Rose (voz) e Izzy Stradlin (guitarra rítmica), mientras que de L.A. Guns llegaron Tracii Guns (guitarra solista), Ole Beich (bajo) y Rob Gardner (batería).​ La banda se presentó por primera vez el 26 de marzo de 1985. Ole Beich, originalmente de L.A Guns, dejó de ser parte de la formación justo antes de ser reemplazado por Duff McKagan, quien debutaría con los demás miembros de la banda el 11 de abril de ese año, en el «Radio City» local en Anaheim, California. Además, Rob Gardner fue reemplazado por Steven Adler. Poco después, el guitarrista Tracii Guns también dejó la banda debido a diferencias con Axl Rose, y refundó L.A Guns. En su lugar llegó Saul Hudson, más conocido como Slash, quien había tenido experiencia previa en varias bandas, incluyendo London31​ y Black Sheep,32​ además de haber audicionado antes para Hollywood Rose y no ser aceptado. Con esta formación (Axl, Slash, Izzy Stradlin, Duff y Adler) alcanzarian la fama mundial.',
            integrantes:['Axl Rose','Slash','Duff McKagan','Izzy Stradlin','Steven Adler'],
            logo:'assets/img/gunsnroses.png',
            fotogrupal:'assets/img/gunsnrosesgrupal.jpg'
        },
        {
            id:"2",
            nombre:'Red Hot Chili Peppers',
            anio:"1983",
            intro:'Red Hot Chili Peppers es una banda de funk rock estadounidense formada en 1983 en Los Ángeles, California.',
            bio:'El núcleo de la banda fue formado en la preparatoria Fairfax High School como Anthym con el chileno Alain Johannes como vocalista. Anthony Kiedis, quien estuvo haciendo una pequeña carrera como actor juvenil televisivo bajo el apodo de Cole Dammett, solía ser su presentador y "hypeman". En febrero de 1983, Anthony fue pedido por su amigo Gary Allen de la banda Neighbours Voices para que lo teloneara junto a sus amigos. ​Bajo la influencia principal de las bandas neoyorkinas Defunkt13​ y Grandmaster Flash & The Furious Five,12​ armaron una banda para la ocasión con el nombre de "Tony Flow and the Miraculously Majestic Masters of Mayhem".14​ El rendimiento en vivo de la banda fue tan bueno que se les pidió regresar la semana siguiente. Debido a este inesperado éxito, los miembros de la banda cambiaron el nombre por el de Red Hot Chili Peppers, debido a que vieron el nombre original un poco incómodo.15​ Luego siguieron tocando en varios conciertos por clubes de Los Ángeles y cabarets como el Kit Kat Club. Es en estos primeros momentos cuando empiezan a hacerse populares por sus actuaciones en las que aparecían completamente desnudos, con solo un calcetín en los genitales (Sock on Cock). Seis de las canciones que tocaban en esos shows fueron grabadas en su primer demo.',
            integrantes:['Anthony Kiedis','John Frusciante','Flea','Chad Smith'],
            logo:'assets/img/rhcp.png',
            fotogrupal:'assets/img/rhcpgrupal.jpg'
        },
        {
            id:"3",
            nombre:'Patricio Rey y sus Redonditos de Ricota',
            anio:"1977",
            intro:'Patricio Rey y sus Redonditos de Ricota, también conocidos como Los Redondos, fue una banda de rock de La Plata, Argentina, que está considerada como una de las bandas más importantes e influyentes de la música popular argentina.',
            bio:'La banda se formó en 1977 y, aunque a lo largo de su historia contó en sus filas con varios integrantes, siempre tuvo como líderes centrales al Indio Solari (cantante), Skay Beilinson (guitarrista), la Negra Poli (mánager) y Rocambole Cohen (diseñador gráfico). Alcanzaron una gran popularidad dentro del rock argentino manteniéndose como una banda independiente y autogestionada, sin recurrir al apoyo de las grandes compañías discográficas. A medida que su popularidad aumentaba, se fueron convirtiendo en un símbolo contracultural y en un paradigma de la independencia artística. Obtuvieron alta reverencia de sus fanáticos, que se comportaban como una hinchada de fútbol, e imbuyeron a Los Redondos de un halo casi religioso, denominando a sus recitales como misas y realizando auténticas peregrinaciones masivas a los distintos puntos del país donde la banda se presentara. ',
            integrantes:['Indio Solari','Skay Beilinson','Semilla Bucciarelli','Sergio Dawi','Walter Sidotti'],
            logo:'assets/img/losredondos.png',
            fotogrupal:'assets/img/losredondosgrupal.jpg'
        },
        {
            id:"4",
            nombre:'Led Zeppelin',
            anio:"1968",
            intro:'Led Zeppelin fue un grupo británico de hard rock fundado en 1968.',
            bio:'La banda fue fundada por el guitarrista Jimmy Page, e integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería (que había coincidido con Plant en The Band of Joy). Led Zeppelin presentó elementos de un amplio espectro de influencias, como el blues, el rock and roll, el soul, la música celta, la música india, el folk, y el country. Más de treinta años después de la disgregación de la banda en 1980, la música de Led Zeppelin continúa vendiéndose, disfruta de una amplia difusión radiofónica, y ha demostrado ser una de las bandas más influyentes en la música rock.',
            integrantes:['Robert Plant','Jimmy Page','John Paul Jones','John Bohnam'],
            logo:'assets/img/ledzeppelin.png',
            fotogrupal:'assets/img/zeppelingrupal.jpg'
        },
        {
            id:"5",
            nombre:'The Beatles',
            anio:"1962",
            intro:'The Beatles fue una banda de rock​ inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular y de la música rock.',
            bio:'La banda fue formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años 1950, la banda trabajó más tarde con distintos géneros musicales, tales como rock and roll y pop de los años 1950, rock pop, música beat, folk rock, rock psicodélico hasta hard rock, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.',   
            integrantes:['John Lennon','Paul McCartney','George Harrison','Ringo Starr'],
            logo:'assets/img/thebeatles.png',
            fotogrupal:'assets/img/thebeatlesgrupal.jpg'
        },
        {
            id:"6",
            nombre:'Pink Floyd',
            anio:"1965",
            intro:'Pink Floyd fue una banda de rock británica, fundada en Londres en 1965.',
            bio:'Inicialmente el grupo estaba formado por el batería Nick Mason, el teclista y vocalista Richard Wright, el bajista y vocalista Roger Waters y el guitarrista y vocalista principal Syd Barrett, quien se convirtió en el primer líder de la banda. Bob Klose fue guitarrista inicialmente por un corto tiempo, pero no llegó a aparecer en ningún disco. El errático e impredecible comportamiento de Barrett, causado por el excesivo consumo de drogas, especialmente LSD,1​ hizo que su amigo David Gilmour se integrara al grupo en diciembre de 1967 y que quedase definida la formación clásica del grupo tras la marcha de Barrett en abril de 1968.',
            integrantes:['David Gilmour','Nick Mason'],
            logo:'assets/img/pinkfloyd.png',
            fotogrupal:'assets/img/pinkfloydgrupal.jpg'        
        }
    ]

    constructor(){
        console.log("servicio listo");
    }

    public getBandas(){
        return this.bandas;
    }

    public getBanda (idParam:string){
        var max = this.bandas.length;
        var index = 0;
        while (index < max){
            if (this.bandas[index].id == idParam){
                return this.bandas[index];
            }else{
                index = index + 1;
            }
        }
    }

    getBusqueda (termino:string){

        let bandaArr:Banda[] = [];
        termino = termino.toLowerCase();

        for (let banda of this.bandas){
            let nombre = banda.nombre.toLowerCase();
            if (nombre.indexOf(termino) >= 0){
                bandaArr.push(banda);
            }
        }

        return bandaArr;

    }



}

export interface Banda {
    id:string;
    nombre:string;
    anio:string;
    intro:string;
    bio:string;
    integrantes: string [];
    logo:string;
    fotogrupal:string;
}