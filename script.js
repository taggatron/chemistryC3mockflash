// Flashcards updated to match the pasted Chemistry C3 mock worksheet images
const foundationFlashcards = [
    {
        id: 1,
        question: "Define strong acids. (Which ion is responsible for acidity)",
        answer: "A strong acid fully ionises in water. Acidity is due to hydrogen ions, H+ (or hydronium ions, H3O+)."
    },
    {
        id: 2,
        question: "State the products of the reaction between sodium carbonate and nitric acid.",
        answer: "Sodium nitrate, water and carbon dioxide."
    },
    {
        id: 3,
        question: "What is the pH of a: strong acid, weak acid, weak alkali and strong alkali.",
        answer: "Strong acid: around 0-2. Weak acid: around 4-6. Weak alkali: around 8-10. Strong alkali: around 12-14."
    },
    {
        id: 4,
        question: "State the products of the reaction between potassium hydroxide and sulfuric acid.",
        answer: "Potassium sulfate and water."
    },
    {
        id: 5,
        question: "How many atoms are there in one mole of any substance?",
        answer: "Avogadro's number: 6.02 x 10^23 particles (atoms for elemental atoms)."
    },
    {
        id: 6,
        question: "State the equation for calculating concentration.",
        answer: "Concentration = amount of solute / volume of solution. Common forms: concentration (g/dm^3) = mass (g) / volume (dm^3), and concentration (mol/dm^3) = moles / volume (dm^3)."
    },
    {
        id: 7,
        question: "State the equation that links mass, moles and molecular mass.",
        answer: "Moles = mass / Mr (relative formula mass). Rearranged: mass = moles x Mr."
    },
    {
        id: 8,
        question: "How many moles are there in 50 g of HCl?",
        answer: "Mr(HCl) = 1 + 35.5 = 36.5. Moles = 50 / 36.5 = 1.37 mol (3 s.f.)."
    },
    {
        id: 9,
        question: "What is the mass of 2 moles of H2O?",
        answer: "Mr(H2O) = (2 x 1) + 16 = 18. Mass = moles x Mr = 2 x 18 = 36 g."
    },
    {
        id: 10,
        question: "Draw labelled reaction profiles for endothermic and exothermic reactions.",
        answer: "Exothermic profile: products lower than reactants, with activation energy hump, and delta H negative. Endothermic profile: products higher than reactants, with activation energy hump, and delta H positive. Label axes: Energy (y) and Reaction progress (x)."
    },
    {
        id: 11,
        question: "Define endothermic and exothermic reactions in terms of bond making and breaking.",
        answer: "Bond breaking is endothermic (takes in energy). Bond making is exothermic (releases energy). Exothermic reactions release more energy in bond making than they take in breaking bonds; endothermic reactions take in more than they release."
    },
    {
        id: 12,
        question: "State the equation for calculating overall energy change of a reaction.",
        answer: "Overall energy change = energy needed to break bonds - energy released when bonds form."
    },
    {
        id: 13,
        question: "How can you use the overall energy change to determine whether a reaction is endothermic or exothermic?",
        answer: "If overall energy change is negative, the reaction is exothermic. If it is positive, the reaction is endothermic."
    },
    {
        id: 14,
        question: "Iron reacts with oxygen to form iron oxide. Write the word equation for this reaction.",
        answer: "Iron + oxygen -> iron oxide"
    },
    {
        id: 15,
        question: "Define oxidation and reduction in terms of oxygen and electrons.",
        answerImage: "oilrigjpg.jpg",
        answerImageAlt: "Offshore oil rig",
        answer: "Oxidation is gain of oxygen or loss of electrons. Reduction is loss of oxygen or gain of electrons."
    },
    {
        id: 16,
        question: "State the balanced symbol reaction between iron, Fe, and oxygen, O2, to form iron oxide, FeO.",
        answer: "2Fe + O2 -> 2FeO"
    },
    {
        id: 17,
        question: "Describe fully how you could use a titration to find the strength of an acid.",
        answer: "Use a pipette to measure a known volume of alkali into a conical flask, add indicator, then add acid from a burette until the end point color change. Record the acid volume used, repeat for concordant results, then calculate moles of alkali and use stoichiometry to find acid concentration (strength)."
    },
    {
        id: 18,
        question: "Explain how you could ensure your results are accurate when carrying out a titration.",
        answer: "Rinse pipette with alkali and burette with acid, remove funnel, read meniscus at eye level, add acid dropwise near end point while swirling, use a white tile to see color change clearly, and repeat until concordant titres are obtained then average them."
    },
    {
        id: 19,
        question: "How do you find the range of a set of data.",
        answer: "Range = highest value - lowest value."
    },
    {
        id: 20,
        question: "How do you know a solution is neutral when you add universal indicator?",
        answer: "Universal indicator turns green at pH 7, which is neutral."
    },
    {
        id: 21,
        question: "What are the names, and chemical symbols, of the three acids you need to know.",
        answer: "Hydrochloric acid (HCl), sulfuric acid (H2SO4), nitric acid (HNO3)."
    },
    {
        id: 22,
        question: "How does adding water affect pH?",
        answer: "Adding water dilutes the solution so pH moves toward 7. Acids become less acidic (pH increases) and alkalis become less alkaline (pH decreases)."
    },
    {
        id: 23,
        question: "What is produced when you react an acid with an alkali? Include an example word equation.",
        answer: "A salt and water are produced (neutralisation). Example: hydrochloric acid + sodium hydroxide -> sodium chloride + water."
    },
    {
        id: 24,
        question: "What is produced when you react an acid with a metal? Include an example word equation.",
        answer: "A salt and hydrogen gas are produced. Example: magnesium + hydrochloric acid -> magnesium chloride + hydrogen."
    },
    {
        id: 25,
        question: "What are the tests for the following gases: hydrogen, carbon dioxide, oxygen?",
        answer: "Hydrogen: lit splint gives a squeaky pop. Carbon dioxide: turns limewater milky/cloudy. Oxygen: relights a glowing splint."
    },
    {
        id: 26,
        question: "State two ways of finding the pH of a solution.",
        answer: "Use universal indicator/pH paper with color chart, or use a pH probe/pH meter."
    },
    {
        id: 27,
        question: "Describe fully how copper sulfate crystals can be formed using sulfuric acid and copper oxide.",
        answer: "Warm dilute sulfuric acid, add excess copper oxide and stir until no more reacts, filter to remove unreacted solid, gently evaporate some water from the filtrate, leave to cool so crystals form, then filter and dry the crystals."
    },
    {
        id: 28,
        question: "Explain how a titration can be used to find the strength of an acid.",
        answer: "In titration, a measured volume of alkali is neutralised by acid from a burette. The volume at end point gives moles of acid used. From moles and volume, calculate concentration; higher concentration means a stronger acid solution."
    },
    {
        id: 29,
        question: "Define endothermic and exothermic reactions. How do reaction profiles differ?",
        answer: "Exothermic reactions release energy to surroundings and have products at lower energy than reactants (negative delta H). Endothermic reactions take in energy and have products at higher energy (positive delta H)."
    },
    {
        id: 30,
        question: "How do you calculate the overall energy change of a reaction?",
        answer: "Use bond energies: overall energy change = total energy to break bonds - total energy released forming bonds."
    },
    {
        id: 31,
        question: "How does the overall energy change identify if it is endothermic or exothermic?",
        answer: "Negative overall energy change means exothermic; positive means endothermic."
    },
    {
        id: 32,
        question: "Lithium and water react to form hydrogen, H2, and lithium hydroxide, LiOH. State the balanced symbol equation for this reaction.",
        answer: "2Li + 2H2O -> 2LiOH + H2"
    },
    {
        id: 33,
        question: "Calculate the overall energy change for the reaction between lithium and water. Use O-H = 436 kJ/mol, H-H = 464 kJ/mol, Li-O = 310 kJ/mol.",
        answer: "Using 2Li + 2H2O -> 2LiOH + H2: break 2 O-H bonds = 2 x 436 = 872 kJ. Form 2 Li-O and 1 H-H = (2 x 310) + 464 = 1084 kJ. Overall energy change = 872 - 1084 = -212 kJ/mol, so exothermic."
    }
];

const strictAnswers = {
    1: "Mark points: strong acids fully ionise in water; acidity is caused by H+ ions.",
    2: "Mark points: sodium nitrate + water + carbon dioxide.",
    3: "Mark points: strong acid 0-2, weak acid 4-6, weak alkali 8-10, strong alkali 12-14.",
    4: "Mark points: potassium sulfate + water.",
    5: "Mark points: 6.02 x 10^23 (Avogadro constant).",
    6: "Mark points: concentration = amount/volume; g/dm^3 = mass/volume; mol/dm^3 = moles/volume.",
    7: "Mark points: moles = mass/Mr; mass = moles x Mr.",
    8: "Mark points: Mr(HCl)=36.5; n=50/36.5=1.37 mol.",
    9: "Mark points: Mr(H2O)=18; mass=2x18=36 g.",
    10: "Mark points: both have activation energy hump; exothermic products lower than reactants (delta H negative); endothermic products higher (delta H positive).",
    11: "Mark points: bond breaking takes in energy; bond making releases energy; compare totals to classify reaction.",
    12: "Mark points: overall energy change = bonds broken - bonds formed.",
    13: "Mark points: negative overall energy change = exothermic; positive = endothermic.",
    14: "Mark points: iron + oxygen -> iron oxide.",
    15: "Mark points: oxidation = gain O or loss e-; reduction = loss O or gain e-.",
    16: "Mark points: 2Fe + O2 -> 2FeO.",
    17: "Mark points: measured alkali + indicator in flask; acid in burette to endpoint; repeat to concordant titres; use stoichiometry to calculate concentration.",
    18: "Mark points: rinse apparatus correctly; eye-level meniscus reading; dropwise near endpoint with swirling; repeat and average concordant titres.",
    19: "Mark points: range = highest - lowest.",
    20: "Mark points: universal indicator green at pH 7.",
    21: "Mark points: hydrochloric HCl; sulfuric H2SO4; nitric HNO3.",
    22: "Mark points: dilution moves pH toward 7; acids increase in pH, alkalis decrease in pH.",
    23: "Mark points: acid + alkali -> salt + water. Example: hydrochloric acid + sodium hydroxide -> sodium chloride + water.",
    24: "Mark points: acid + metal -> salt + hydrogen. Example: magnesium + hydrochloric acid -> magnesium chloride + hydrogen.",
    25: "Mark points: H2 squeaky pop; CO2 turns limewater milky; O2 relights glowing splint.",
    26: "Mark points: universal indicator/pH paper; pH probe or meter.",
    27: "Mark points: warm acid; add excess CuO; filter excess solid; evaporate filtrate; cool to crystallise; filter/dry crystals.",
    28: "Mark points: titration gives neutralising volume; calculate moles then concentration; higher concentration = stronger solution.",
    29: "Mark points: exothermic releases energy (products lower); endothermic takes in energy (products higher).",
    30: "Mark points: overall energy change = sum bonds broken - sum bonds formed.",
    31: "Mark points: negative = exothermic, positive = endothermic.",
    32: "Mark points: 2Li + 2H2O -> 2LiOH + H2.",
    33: "Mark points: break 2 O-H = 872 kJ; form 2 Li-O + H-H = 1084 kJ; delta H = -212 kJ/mol (exothermic)."
};

function getTopicFromId(id) {
    if (id >= 1 && id <= 4) return 'Acids and Alkalis';
    if (id >= 5 && id <= 9) return 'Moles and Calculations';
    if (id >= 10 && id <= 13) return 'Energy Changes';
    if (id >= 14 && id <= 16) return 'Oxidation and Equations';
    if (id >= 17 && id <= 20) return 'Titration and Data';
    if (id >= 21 && id <= 26) return 'Core Reactions and Tests';
    if (id >= 27 && id <= 28) return 'Required Practical';
    return 'Bond Energy Changes';
}

const cardsWithTopics = foundationFlashcards.map((card) => ({
    ...card,
    topic: getTopicFromId(card.id)
}));

// Initialize the flashcard app
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');
    const topicFilter = document.getElementById('topic-filter');
    const shuffleButton = document.getElementById('shuffle-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const cardCounter = document.getElementById('card-counter');

    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalIframe = document.getElementById('modal-iframe');

    let strictMode = false;
    let currentTopic = 'all';
    let currentDeck = [...cardsWithTopics].sort((a, b) => a.id - b.id);
    let currentIndex = 0;
    let isShuffled = false;
    const cardById = new Map(cardsWithTopics.map((card) => [card.id, card]));

    function getAnswerText(card) {
        return strictMode ? (strictAnswers[card.id] || card.answer) : card.answer;
    }

    function getVisibleCards() {
        const filtered = currentTopic === 'all'
            ? [...currentDeck]
            : currentDeck.filter((card) => card.topic === currentTopic);
        return filtered;
    }

    function updateCounter() {
        const visibleCards = getVisibleCards();
        const total = visibleCards.length;
        if (total === 0) {
            cardCounter.textContent = 'Card 0 of 0';
            return;
        }
        const position = Math.min(currentIndex + 1, total);
        cardCounter.textContent = `Card ${position} of ${total}`;
    }

    function buildCardElement(card, orderIndex) {
        const flashcardElement = document.createElement('div');
        flashcardElement.className = 'flashcard foundation' + ((card.answerImage || card.image) ? ' has-diagram' : '');
        flashcardElement.setAttribute('data-id', String(card.id));
        flashcardElement.setAttribute('data-order', String(orderIndex));

        flashcardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="question-number">Question ${card.id}</div>
                    <div class="question-text">${card.question}</div>
                    ${card.image ? `<img src="${card.image}" alt="${card.imageAlt || 'Flashcard image'}" class="card-front-image">` : ''}
                    <div class="click-hint">${card.topic}</div>
                </div>
                <div class="card-back">
                    <div class="answer-label">Answer ${card.id}</div>
                    ${card.answerImage ? `<img src="${card.answerImage}" alt="${card.answerImageAlt || 'Answer diagram'}" class="card-back-image">` : ''}
                    <div class="answer-text">${getAnswerText(card)}</div>
                    <button type="button" class="strict-toggle ${strictMode ? 'on' : ''}">
                        ${strictMode ? 'Strict Mark Scheme: On' : 'Switch To Strict Mark Scheme'}
                    </button>
                    <div class="click-hint">Click card to show question</div>
                </div>
            </div>
        `;

        flashcardElement.addEventListener('click', function(e) {
            if (e.target.closest('button') || e.target.closest('.modal-trigger')) return;
            this.classList.toggle('flipped');
            const newIndex = Number(this.getAttribute('data-order'));
            if (!Number.isNaN(newIndex)) {
                currentIndex = newIndex;
                highlightActiveCard();
                updateCounter();
            }
        });

        return flashcardElement;
    }

    function renderByTopic(cardsArray) {
        container.innerHTML = '';
        const grouped = new Map();

        cardsArray.forEach((card) => {
            if (!grouped.has(card.topic)) {
                grouped.set(card.topic, []);
            }
            grouped.get(card.topic).push(card);
        });

        let orderIndex = 0;
        grouped.forEach((cards, topic) => {
            const section = document.createElement('section');
            section.className = 'topic-section';

            const title = document.createElement('h2');
            title.className = 'topic-title';
            title.textContent = topic;

            const grid = document.createElement('div');
            grid.className = 'flashcard-container topic-grid';

            cards.forEach((card) => {
                grid.appendChild(buildCardElement(card, orderIndex));
                orderIndex += 1;
            });

            section.appendChild(title);
            section.appendChild(grid);
            container.appendChild(section);
        });
    }

    function renderFlat(cardsArray) {
        container.innerHTML = '';
        cardsArray.forEach((card, orderIndex) => {
            container.appendChild(buildCardElement(card, orderIndex));
        });
    }

    function renderFlashcards() {
        const visibleCards = getVisibleCards();
        if (currentIndex >= visibleCards.length) {
            currentIndex = Math.max(visibleCards.length - 1, 0);
        }

        const shouldGroupByTopic = currentTopic === 'all' && !isShuffled;
        if (shouldGroupByTopic) {
            renderByTopic(visibleCards);
        } else {
            renderFlat(visibleCards);
        }

        highlightActiveCard();
        updateCounter();
    }

    function updateStrictModeInPlace() {
        const renderedCards = document.querySelectorAll('.flashcard');
        renderedCards.forEach((flashcard) => {
            const id = Number(flashcard.getAttribute('data-id'));
            const card = cardById.get(id);
            if (!card) return;

            const answerText = flashcard.querySelector('.answer-text');
            if (answerText) {
                answerText.innerHTML = getAnswerText(card);
            }

            const strictButton = flashcard.querySelector('.strict-toggle');
            if (strictButton) {
                strictButton.classList.toggle('on', strictMode);
                strictButton.textContent = strictMode ? 'Strict Mark Scheme: On' : 'Switch To Strict Mark Scheme';
            }
        });
    }

    function highlightActiveCard() {
        const cards = document.querySelectorAll('.flashcard');
        cards.forEach((card, idx) => {
            if (idx === currentIndex) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    }

    function navigate(direction) {
        const visibleCards = getVisibleCards();
        if (visibleCards.length === 0) return;

        currentIndex += direction;
        if (currentIndex < 0) currentIndex = visibleCards.length - 1;
        if (currentIndex >= visibleCards.length) currentIndex = 0;

        highlightActiveCard();
        updateCounter();

        const activeCard = document.querySelector(`.flashcard[data-order="${currentIndex}"]`);
        if (activeCard) {
            activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function resetAllCards() {
        const allCards = document.querySelectorAll('.flashcard');
        allCards.forEach((card) => {
            card.classList.remove('flipped');
        });
    }

    function shuffleDeck() {
        const shuffled = [...currentDeck];
        for (let i = shuffled.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        currentDeck = shuffled;
        isShuffled = true;
        currentIndex = 0;
        renderFlashcards();
    }

    function populateTopics() {
        const topics = [...new Set(cardsWithTopics.map((card) => card.topic))];
        topics.forEach((topic) => {
            const option = document.createElement('option');
            option.value = topic;
            option.textContent = topic;
            topicFilter.appendChild(option);
        });
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
            modalIframe.src = '';
        }, 300);
    }

    populateTopics();
    renderFlashcards();

    resetButton.addEventListener('click', resetAllCards);
    shuffleButton.addEventListener('click', shuffleDeck);
    prevButton.addEventListener('click', () => navigate(-1));
    nextButton.addEventListener('click', () => navigate(1));

    topicFilter.addEventListener('change', function() {
        currentTopic = this.value;
        currentIndex = 0;
        renderFlashcards();
    });

    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('strict-toggle')) {
            e.stopPropagation();
            strictMode = !strictMode;
            updateStrictModeInPlace();
            return;
        }

        if (e.target.classList.contains('modal-trigger')) {
            e.stopPropagation();
            const url = e.target.getAttribute('data-url');
            if (url) {
                modalIframe.src = url;
                modalOverlay.style.display = 'flex';
                setTimeout(() => modalOverlay.classList.add('active'), 10);
            }
        }
    });

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
});