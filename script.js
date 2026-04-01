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

// Initialize the flashcard app (foundation-only)
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('flashcard-container');
    const resetButton = document.getElementById('reset-button');

    // Create flashcards from a given array
    function createFlashcards(cardsArray) {
        container.innerHTML = '';

        cardsArray.forEach(card => {
            const flashcardElement = document.createElement('div');
            // Add 'has-diagram' class if EITHER side has an image, making the card taller
            flashcardElement.className = 'flashcard foundation' + ((card.answerImage || card.image) ? ' has-diagram' : '');
            flashcardElement.setAttribute('data-id', card.id);

            flashcardElement.innerHTML = `
                <div class="card-inner">
                    <div class="card-front">
                        <div class="question-number">Question ${card.id}</div>
                        <div class="question-text">${card.question}</div>
                        ${card.image ? `<img src="${card.image}" alt="${card.imageAlt || 'Flashcard image'}" class="card-front-image">` : ''}
                        <div class="click-hint">Click to reveal answer</div>
                    </div>
                    <div class="card-back">
                        <div class="answer-label">Answer ${card.id}</div>
                        ${card.answerImage ? `<img src="${card.answerImage}" alt="${card.answerImageAlt || 'Answer diagram'}" class="card-back-image">` : ''}
                        <div class="answer-text">${card.answer}</div>
                        <div class="click-hint">Click to show question</div>
                    </div>
                </div>
            `;

            // Add click handler
            flashcardElement.addEventListener('click', function(e) {
                if (e.target.closest('.modal-trigger')) return; // Ignore clicks on buttons
                this.classList.toggle('flipped');
            });

            container.appendChild(flashcardElement);
        });
    }

    // Reset all cards
    function resetAllCards() {
        const allCards = document.querySelectorAll('.flashcard');
        allCards.forEach(card => {
            card.classList.remove('flipped');
        });
    }

    // Render foundation flashcards only
    createFlashcards(foundationFlashcards);

    // Reset button functionality
    resetButton.addEventListener('click', resetAllCards);

    // Modal Logic
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const modalIframe = document.getElementById('modal-iframe');

    // Close Modal Function
    function closeModal() {
        modalOverlay.classList.remove('active');
        setTimeout(() => {
            modalOverlay.style.display = 'none';
            modalIframe.src = ''; // Stop video/content
        }, 300); // Match transition logic
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });

    // Delegated listener for modal triggers (buttons inside dynamic cards)
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal-trigger')) {
            e.stopPropagation(); // Prevent card flip
            const url = e.target.getAttribute('data-url');
            if (url) {
                modalIframe.src = url;
                modalOverlay.style.display = 'flex';
                // Trigger reflow for transition
                setTimeout(() => modalOverlay.classList.add('active'), 10);
            }
        }
    });

});