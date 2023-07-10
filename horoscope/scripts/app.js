
    // DOM ELEMENTS

    const selectSection = document.getElementById('select-section')
    const resultSection = document.getElementById('result-section')
    const conclusionSection = document.getElementById('conclusion-section')

    // ARRAYS

    horoscopeArray = [
        {
            sign: 'Vodnár',
            signDefinition: "Je to vzdušné znamenie. Sú to ľudia kamarátski, rodinne založení, nepokojní, originálni. Majú pevnú vôľu, veľké sociálne cítenie. Snažia sa žiť v súlade s prírodou. Ich vládnucou planétou je Urán, ktorý im dáva impulzívnosť, akčnosť, odvahu stále čeliť novým a novým výzvam. Dáva im aj vizionársku schopnosť a pomáha im odhaľovať tajomstvá a záhady. Majú stále nové nápady, potrebujú byť stále v pohybe. Ubíja ich jednotvárnosť. Citlivá oblasť tela sú nohy – kolená, až k členkom." ,
        },
        {
            sign: 'Ryba',
            signDefinition: "Je to vodné znamenie. Sú to ľudia veľmi citliví, zraniteľní, sú výborní pozorovatelia, majú umelecké sklony. Vládnucou planétou je Neptún, ktorý im dáva neobyčajnú fantáziu a výborné herecké sklony. Majú sklon k sebaobetovaniu. Ľahko podľahnú ilúziám. Citlivá oblasť tela sú chodidlá." ,
        },
        {
            sign: 'Baran',
            signDefinition: "Je to ohnivé znamenie. Barani sú kamarátski, impulzívni, súťaživí, vždy otvorení novým veciam. Potrebujú byť dominantní a neznášajú prehry. Vládnucou planétou je Mars, ktorá im dáva obrovské množstvo nespútanej energie a hnaciu silu. Citlivá oblasť tela je hlava, oči, nos" ,
        },
        {
            sign: 'Býk',
            signDefinition: "Je to zemské znamenie. Sú to ľudia stáli, konzervatívni, tvrdohlaví, pôžitkárski. Potrebujú mať pocit istoty, milujú stabilitu vo všetkom – v bývaní, vo vzťahoch, v práci. Sú zaťažení na peniaze. Sú pokojnej povahy pokiaľ ich niekto úmyselne nevyprovokuje. Vládne im planéta Venuša , ktorá im dáva zmysel pre krásu a umenie. Citlivá oblasť tela je krk, uši a čeľusť." ,
        },
        {
            sign: 'Blíženci',
            signDefinition: "Je to vzdušné znamenie. Sú to ľudia citliví, nedokážu úmyselne ublížiť, sú rozpoltení a sú otvorení k novým veciam. Vládne im planéta Merkúr, ktorá im dáva schopnosť výborne komunikovať a stále sa vzdelávať. Sú nesmierne inteligentní. Škodí im prílišné rozmýšľanie. Citlivá oblasť tela sú horné končatiny, priedušky a pľúca." ,
        },
        {
            sign: 'Rak',
            signDefinition: "Je to vodné znamenie. Sú veľmi rodinne založení. Majú silný pud sebazáchovy. Ich vládnucou planétou je Luna, ktorá im dáva hlboké city, jemnosť , materinskú starostlivosť. Citlivá oblasť tela je žalúdok, prsia. " ,
        },
        {
            sign: 'Lev',
            signDefinition: "Je to ohnivé znamenie. Títo ľudia sú egocentrickí, radi stávajú stredobodom pozornosti. Majú prirodzený vodcovský talent. Ich vládnucou planétou je Slnko, ktoré im dodáva nevyčerpateľné množstvo energie, hravosť, spontánnosť a večný úsmev na tvári. Citlivá oblasť tela je srdce a chrbtica. " ,
        },
        {
            sign: 'Panna',
            signIcon: "img/icons/virgin.jpg",
            signDefinition: "Je to zemské znamenie. Sú to ľudia silní, vplyvní, produktívni. Ich život sa toči okolo služby a sebaobetovania. Ich vládnucou planétou je Merkúr, ktorá im dáva precíznosť, múdrosť, poriadkumilovnosť. Citlivá oblasť tela sú brušná dutina a črevá." ,
        },
        {
            sign: 'Váhy',
            signDefinition: "Je to vzdušné znamenie. Títo ľudia sú kamarátski, úprimní, poctiví, slobodomyseľní a neznášajú konflikty. Vzťahy s druhými sú pre nich mimoriadne dôležité. Majú zmysel pre spravodlivosť a česť. Ich vládnucou planétou je Venuša, ktorá im dáva cit pre krásu, umenie. Dokážu prepadnúť ilúziám a pochybnostiam. Citlivá oblasť tela je močový mechúr a obličky." ,
        },
        {
            sign: 'Škorpión',
            signDefinition: "Je to vodné znamenie. Sú to ľudia originálni, tvrdohlaví, majú vynikajúcu pamäť, logické a analytické myslenie. Disponujú výbornými nápadmi. Vedia byť veľmi starostliví a nápomocní. Ich vládnucou planétou je Pluto, ktorá im dáva záhadnosť, nevyspytateľnosť. Sami nepoznajú svoje hranice. Ak ich niekto nahnevá, tak vedia poriadne poštípať. V spoločnosti sú obľúbení a vyhľadávaní. Citlivá oblasť tela sú pohlavné orgány." ,
        },
        {
            sign: 'Strelec',
            signDefinition: "Je to ohnivé znamenie. Sú to ľudia spoločenskí, veľmi spravodliví, vždy pripravení a veľmi úprimní. Ich vládnucou planétou je Jupiter, ktorý im dáva šťastie a pôvab. Sú otvorení novým myšlienkam, stále sa učia a vzdelávajú sa. Majú vysoký stupeň mentálnej energie. Citlivá oblasť tela sú kĺby a stehná. " ,
        },
        {
            sign: 'Kozorožec',
            signDefinition: "Je to zemské znamenie. Sú to ľudia veľmi rodinne založení, starostliví, ale aj ťažkopádni. Ich vládnucou planétou je Saturn, ktorý ich učí k trpezlivosti. Chcú mať všetko pod kontrolou a sú materiálne založení. Majú sklony k manipulácii s druhými. Citlivá oblasť tela sú kosti, koža. " ,
        },
    ]

    // FUNCTIONS

    //general functions

    function show(element) {
        if(element.classList.contains('hide')){
            element.classList.remove('hide')
        } else{
            element.style.display = 'block'
        }
    }

    function hide(element) {
        element.classList.add('hide')
    }

    // fade in and fade out

    function fadeIn(element) {
        element.style.animation = 'fade-in .4s ease-in forwards'
    }

    function fadeOut(element) {
        element.style.animation = 'fade-out .4s ease-in forwards' 
    }

    // app functions

    // show options

    const dropdownButton = document.getElementById('dropdown-button')
    const optionsList = document.getElementById('dropdown-list')
    const options = document.querySelectorAll('.dropdown-option')

    function showOptions() {
        if(optionsList.classList.contains('hide')){
            show(optionsList)
        } else if(!optionsList.classList.contains('hide')){
            hide(optionsList)
        }
    }

    // choose birth date and generate horoscope

    const dropdownTitle = document.querySelector('.dropdown-title')
    let chosenDateIndex = undefined

    function choseDate(clickedOption) {
        chosenDateIndex = parseFloat(clickedOption.dataset.index)
        dropdownTitle.innerHTML = clickedOption.innerHTML
        hide(optionsList)
    }

    const chosenSignSpan = document.getElementById('chosen-sign')
    const signDefinition = document.getElementById('sign-definition')

    let randomSignDefinition
    let randomIndex  



    function generateHoroscope () {

        // error check

        const errorMessage = document.getElementById('error-message')
        if(chosenDateIndex == undefined){
            show(errorMessage)
            return
        }

        // generate random horoscope definition

        randomIndex = Math.floor(Math.random() * horoscopeArray.length)
        randomSignDefinition = horoscopeArray[randomIndex].signDefinition

        // show result

        chosenSignSpan.innerHTML = horoscopeArray[chosenDateIndex].sign
        signDefinition.innerHTML = randomSignDefinition

        fadeOut(selectSection)
        setTimeout(()=>{
            hide(selectSection)
            fadeIn(resultSection)
            show(resultSection)
        }, 400)  

        dropdownTitle.innerHTML = 'zvoľte dátum narodenia'
    }
    
    // check result

    const corectHorospeResultElement = document.getElementById('corect-horoscope-result')
    const incorectHoroscopeResultElement = document.getElementById('incorect-horoscope-result')
    const realSignSpan = document.getElementById('real-sign')

    let horoscopeCorrectnes
    let displayedResultElement
    function checkResult() {
        realSignSpan.innerHTML =  horoscopeArray[randomIndex].sign
        fadeOut(resultSection)
        setTimeout(()=>{
            hide(resultSection)
            if(horoscopeCorrectnes == true){
                fadeIn(corectHorospeResultElement)
                show(corectHorospeResultElement)
                displayedResultElement = corectHorospeResultElement
            }
             else if(horoscopeCorrectnes == false){
                fadeIn(incorectHoroscopeResultElement)
                show(incorectHoroscopeResultElement)
                displayedResultElement = incorectHoroscopeResultElement
            }
        },400)
    }

    // try again

    function tryAgain() {
        fadeOut(displayedResultElement)
        setTimeout(()=>{
            hide(displayedResultElement)
            fadeIn(selectSection)
            show(selectSection)
        },400)
    }

    //EVENTS

    // chose birthdate and generate horoscope

    const generateBtn = document.getElementById('generate-btn')

    dropdownButton.addEventListener('click', (event)=>{
        showOptions()
    })

    options.forEach(element =>{
        element.addEventListener('click', (event)=>{
            choseDate(event.target)
        })
    })

    generateBtn.addEventListener('click', (event)=>{
        event.preventDefault()
        generateHoroscope(event.target)
    })

    // check result

    document.addEventListener('click', (event)=>{
        event.preventDefault()
        if(event.target.classList.contains('true-btn')){
            horoscopeCorrectnes = true
            checkResult()
        }
        else if(event.target.classList.contains('false-btn')){
            horoscopeCorrectnes = false
            checkResult()
        }
    })

    // try again

    document.addEventListener('click', (event)=>{
        event.preventDefault()
        if(event.target.classList.contains('try-again')){
            tryAgain()
        }
    })
