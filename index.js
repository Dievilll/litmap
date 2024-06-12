ymaps.ready(['Map', 'geoQuery'])
    .then(function () {
        myMap = new ymaps.Map('map', {
                center: [53.964386, 37.514684],
                zoom: 9,
                controls:[]
            });

            var myGeoObjects = new ymaps.GeoObjectCollection();

            var ignatovi = new ymaps.Placemark([53.798323, 36.146258],{ 
                iconContent: 'Дом Игнатовых',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3533-6665-4435-b936-383235313032/photo.jpg"/> <br> <p> <b>Михаил Пришвин</b> любил город Белёв с раннего детства, когда навещал вместе с матерью, Марией Ивановной, её родовое гнездо — дом Игнатовых на Берестовой улице в Завырье (теперь — один из корпусов ПУ-40 на ул. К. Маркса).</p>'
            },

            {
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#orangeGlyphIcon',     
                iconGlyph: 'home',
                iconGlyphColor: 'rgb(132,122,130)',
            });
            myGeoObjects.add(ignatovi);
            
            var yasnaya_polyana = new ymaps.Placemark([54.075501, 37.526414],{ 
                iconContent: 'Дом-музей Ясная Поляна',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3162-3534-4865-b830-366265663830/noroot.png"/> <br> <p> <b>Ясная Поляна</b> — родовое имение великого русского писателя Льва Николаевича Толстого. Здесь он родился, прожил большую часть жизни, здесь он похоронен. Именно здесь можно по-настоящему окунуться в мир Толстого и его произведений.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greenGlyphIcon',     
                iconGlyph: 'home',
                iconGlyphColor: 'rgb(172,122,13)',
            });
            myGeoObjects.add(yasnaya_polyana);

            var dom_veresaeva = new ymaps.Placemark([54.188692, 37.601460],{ 
                iconContent: 'Дом-музей В.В. Вересаева',
                balloonContent: '<img style="width: 100%" src="https://avatars.mds.yandex.net/get-altay/4581272/2a00000179d81fad69a8b31236a3f88a9e47/XXXL"/> <br> <p>Дом, на который смотрит <b>скульптура В.В. Вересаева</b>.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'home',
                iconGlyphColor: 'rgb(12,12,173)',
            });
            myGeoObjects.add(dom_veresaeva);

            
            var pokrovskoe = new ymaps.Placemark([53.454377, 36.908979],{ 
                iconContent: 'Покровское',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3464-3833-4763-a430-643462396530/noroot.png"/> <br> <p> Покровское (небольшая деревня в 10 км северо-западнее пгт. Чернь) было одним из родовых имений разветвленного рода Толстых и в конце XVIII в. принадлежало двоюродному дяде писателя П. И. Толстому. В восьмидесятых годах прошлого века решили создать <b>памятник Льву Николаевичу Толстому и Ивану Сергеевичу Тургеневу</b>.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greenGlyphIcon',     
                iconGlyph: 'home',
                iconGlyphColor: 'rgb(172,192,123)',
            });
            myGeoObjects.add(pokrovskoe);

            var lutovinovo = new ymaps.Placemark([53.372271, 36.631875],{ 
                iconContent: 'Усадьба Спасское-Лутовиново',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3966-6330-4239-a335-363234646364/bb802fdc736706a82302.jpeg"/> <br> <p> <b>Усадьба Спасское-Лутовиново</b> — имение, принадлежавшее <b>матери Ивана Тургенева</b>, которое перешло ему по наследству. Сейчас это государственный музей-заповедник, посвящённый И.С.Тургеневу, который стремятся посетить все, кому небезразлична русская культура и её духовное наследие.</p>'
            },

            {
                
                balloonMaxWidth: 500,
                balloonMaxHeight: 700,
                preset: 'islands#greenGlyphIcon',     
                iconGlyph: 'home',
                iconGlyphColor: 'rgb(112,142,123)',
            });
            myGeoObjects.add(lutovinovo);


            var bezhin_lug = new ymaps.Placemark([53.468312, 36.732415],{ 
                iconContent: 'Музей Бежин Луг',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3564-6235-4236-b834-613836323166/adres-istorii_201808.jpg"/> <br> <p> Сейчас в селе Тургенево сохранился усадебный комплекс, включающий парк начала XIX века, каменную церковь, здание бывшей бумажной фабрики, каретный сарай, домик дворовых, подвалы. От барской усадьбы, сожженной крестьянами, остался лишь фундамент.<br>В здании бывшей бумажной фабрики находится <b>музей «Бежин Луг»</b>.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greenGlyphIcon',     
                iconGlyph: 'home',
                iconGlyphColor: 'rgb(112,222,123)',
            });
            myGeoObjects.add(bezhin_lug);

            var levsha = new ymaps.Placemark([54.201455, 37.615277],{ 
                iconContent: 'Памятник Левше',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3262-3963-4863-b635-656435356436/noroot.png"/> <br> <p> В Туле находится <b>памятник Левше</b>, который изначально установили на территории «Туламаршзавода», и он был недоступен для осмотра туристами и жителями города. Спустя почти двадцать лет, в мае 2009 года администрация предприятия подарила скульптуру городу и перенесла ее на городскую улицу.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'user',
                iconGlyphColor: 'rgb(212,122,130)',
            });
            myGeoObjects.add(levsha);
            

            var zhukovskiy = new ymaps.Placemark([54.192114, 37.622141],{ 
                iconContent: 'Бюст В.А. Жуковского',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3336-3563-4362-b165-353831333833/noroot.png"/> <br> <p> В сквере корпуса 1 ТГПУ им. Л.Н. Толстого установлен <b>бюст В.А. Жуковского</b>. Почему в сквере около филологического корпуса установлен памятник поэту? Дело в том, что Жуковский был не только известным поэтом-романтиком, но и педагогом!<br>Также поэт рисовал корпус (на тот момент особняк Лугининых).</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'user',
                iconGlyphColor: 'rgb(172,122,13)',
            });
            myGeoObjects.add(zhukovskiy);
            
            var pushkin = new ymaps.Placemark([54.187506, 37.612173],{ 
                iconContent: 'Бюст А.С. Пушкина',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3065-3564-4561-b465-623832646439/noroot.png"/> <br> <p> В один день в Туле родились сразу три пушкинских места – <b>бюст писателю, Пушкинский сад и улица Пушкинская.</b><br>Также помимо бюста, сквера и улицы фанаты писателя могут найти в Туле <b>памятник героям сказок А.С. Пушкина</b>.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'user',
                iconGlyphColor: 'rgb(12,122,13)',
            });
            myGeoObjects.add(pushkin);
            

            var skazki_pushkin = new ymaps.Placemark([54.190710, 37.602872],{ 
                iconContent: 'Памятник героям сказок А.С. Пушкина',
                balloonContent: '<img style="width: 80%" src="https://avatars.mds.yandex.net/get-altay/5245944/2a0000017b1cac422886b8eef4f5cc3f4c3c/XXXL"/> <br> <p>Памятник <b>героям сказок А.С. Пушкина</b>.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'user',
                iconGlyphColor: 'rgb(12,182,13)',
            });
            myGeoObjects.add(skazki_pushkin);

            var esenin = new ymaps.Placemark([54.183875, 37.595849],{ 
                iconContent: 'Памятник С.А. Есенину',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3462-3039-4465-b139-303261623234/noroot.png"/> <br> <p> На доме по улице Коминтерна № 40 в память о пребывании Есенина в этом доме укреплена <b>мемориальная доска.</b><br>В Центральном парке Тулы установили <b>памятник писателю</b>.</p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'user',
                iconGlyphColor: 'rgb(172,12,13)',
                
            });
            myGeoObjects.add(esenin);




            var veresaev = new ymaps.Placemark([54.183706, 37.597008],{ 
                iconContent: 'Памятник В.В. Вересаеву',
                balloonContent: '<img style="width: 100%" src="https://static.tildacdn.info/tild3162-6133-4137-a365-373764303031/MyCollages.png"/> <br> <p> <b>Памятник</b> в Туле русскому писателю В.В. Вересаеву расположен перед входом в парк им. Белоусова.<br>Скульптура поставлена так, что писатель смотрит вдоль улицы на расположенный в 500 метрах дом, где он родился, — ныне <b>Дом-музей В.В. Вересаева.</b></p>'
            },

            {
                
                balloonMaxWidth: 400,
                balloonMaxHeight: 500,
                preset: 'islands#greyGlyphIcon',     
                iconGlyph: 'user',
                iconGlyphColor: 'rgb(12,12,123)',
            });
            myGeoObjects.add(veresaev);
            
            var geoObjects = new ymaps.GeoObjectCollection({
                children: [myGeoObjects]
            });
            //myMap.geoObjects.add(geoObjects);
            
            geoObjectsQuery = ymaps.geoQuery(geoObjects);
            //console.log(geoObjectsQuery.getLength());
            geoObjectsQuery.searchInside(myMap).addToMap(myMap);
            // И затем добавим найденные объекты на карту.
            
            //objects.addToMap(myMap);
            VisibleList();
            myMap.events.add('boundschange', function () {
                var visibleObjects = geoObjectsQuery.searchInside(myMap).addToMap(myMap);
                geoObjectsQuery.remove(visibleObjects).removeFromMap(myMap);

            });
            
            
    })
    .catch(console.error);

  function VisibleList() {
    // С помощью geoQuery получаем список объектов на карте.
    var visibleGeoObjects = geoObjectsQuery;
  
    // Собираем данные из видимых гео-объектов.
    var visibleObjectsHtml = [];
    var i = 0;
    visibleGeoObjects.each(function(x) {
      
      //var iconContent = x.properties.get('iconContent');
      var iconContent = x.properties.get('iconContent');
      var icon = x.options.get('iconGlyph')
      //console.log(x.options.get('iconGlyph'));
      if (icon == 'user') {
        visibleObjectsHtml.push(`<button name="${iconContent}" id="${i}" onclick="get_center_placemark(${i})"><img id="icon" src="user.png">&nbsp&nbsp${iconContent}</button>`);
        i++;
        }
      else{
        visibleObjectsHtml.push(`<button name="${iconContent}" id="${i}" onclick="get_center_placemark(${i})"><img id="icon" src="home.png">&nbsp&nbsp${iconContent}</button>`);
        i++;
    }//console.log("OK")}
      
      
    });
    
    // Обновляем список.
    var visibleElement = document.getElementById('visible');
    visibleElement.innerHTML =
      '<ul style="display:flex; width:100%">' + visibleObjectsHtml.join('') + '</ul>'
  }
var kult = [['Дом Игнатовых', [53.798323, 36.146258]],
            ['Дом-музей Ясная Поляна', [54.075501, 37.526414]],
            ['Дом-музей В.В. Вересаева', [54.188692, 37.601460]],
            ['Покровское', [53.454377, 36.908979]],
            ['Усадьба Спасское-Лутовиново', [53.372271, 36.631875]],
            ['Музей Бежин Луг',[53.468312, 36.732415]],
            ['Памятник Левше', [54.201455, 37.615277]],
            ['Бюст В.А. Жуковского', [54.192114, 37.622141]],
            ['Бюст А.С. Пушкина', [54.187506, 37.612173]],
            ['Памятник героям сказок А.С. Пушкина',[54.190710, 37.602872]],
            ['Памятник С.А. Есенину', [54.183875, 37.595849]],
            ['Памятник В.В. Вересаеву',[54.183706, 37.597008]]
        ];
//console.log(kult[0][0]);
function get_center_placemark(id) {

    var butt = document.getElementById(id);
    if(butt)
    { 
        var name = butt.getAttribute('name');
        if (name == kult[id][0])
        {
            //console.log(kult[id][1]);
            myMap.setCenter(kult[id][1],16);
        }
    }
}
