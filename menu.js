/* =========================================================
   MENU — todos os dados do menu vivem aqui.
   Para atualizar o menu, edita apenas este ficheiro.

   Cada item:
     nome        — objeto com pt / en / es / fr
     descricao   — objeto com pt / en / es / fr (máx. 12 palavras)
     preco       — número (12.5 → mostrado como "12,50 €")
     alergenios  — códigos dos 14 alergénios da UE (ver MENU.alergenios)
     tags        — "vegetariano" | "picante" | "sem_gluten" | "favorito"

   Nas Diárias, cada item tem também:
     dia — 0=domingo, 1=segunda, … 6=sábado (como new Date().getDay())
   ========================================================= */

const MENU = {
  restaurante: {
    nome: "Bamboo",
    local: "Furadouro",
    horario: "12h00–23h00 · terça a domingo",
    morada: "Av. Marginal 123, 3880-355 Furadouro, Ovar",
    mapsUrl: "https://maps.google.com/?q=Av.+Marginal+123,+Furadouro,+Ovar",
    telefone: "+351 256 000 000",
    wifi: "bamboo2026",
    instagram: "https://instagram.com/bamboo.furadouro",
    facebook: "https://facebook.com/bamboo.furadouro"
  },

  alergenios: {
    1:  { pt: "Cereais com glúten", en: "Cereals with gluten", es: "Cereales con gluten", fr: "Céréales avec gluten" },
    2:  { pt: "Crustáceos", en: "Crustaceans", es: "Crustáceos", fr: "Crustacés" },
    3:  { pt: "Ovos", en: "Eggs", es: "Huevos", fr: "Œufs" },
    4:  { pt: "Peixe", en: "Fish", es: "Pescado", fr: "Poisson" },
    5:  { pt: "Amendoins", en: "Peanuts", es: "Cacahuetes", fr: "Arachides" },
    6:  { pt: "Soja", en: "Soybeans", es: "Soja", fr: "Soja" },
    7:  { pt: "Leite", en: "Milk", es: "Leche", fr: "Lait" },
    8:  { pt: "Frutos de casca rija", en: "Tree nuts", es: "Frutos de cáscara", fr: "Fruits à coque" },
    9:  { pt: "Aipo", en: "Celery", es: "Apio", fr: "Céleri" },
    10: { pt: "Mostarda", en: "Mustard", es: "Mostaza", fr: "Moutarde" },
    11: { pt: "Sementes de sésamo", en: "Sesame seeds", es: "Sésamo", fr: "Graines de sésame" },
    12: { pt: "Sulfitos", en: "Sulphites", es: "Sulfitos", fr: "Sulfites" },
    13: { pt: "Tremoço", en: "Lupin", es: "Altramuces", fr: "Lupin" },
    14: { pt: "Moluscos", en: "Molluscs", es: "Moluscos", fr: "Mollusques" }
  },

  tags: {
    vegetariano: { pt: "Vegetariano", en: "Vegetarian", es: "Vegetariano", fr: "Végétarien" },
    picante:     { pt: "Picante", en: "Spicy", es: "Picante", fr: "Épicé" },
    sem_gluten:  { pt: "Sem glúten", en: "Gluten-free", es: "Sin gluten", fr: "Sans gluten" },
    favorito:    { pt: "Favorito da casa", en: "House favourite", es: "Favorito de la casa", fr: "Favori de la maison" }
  },

  ui: {
    dias: {
      pt: ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"],
      en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      es: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      fr: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
    },
    pratoDoDia:   { pt: "Prato do dia", en: "Dish of the day", es: "Plato del día", fr: "Plat du jour" },
    hoje:         { pt: "hoje", en: "today", es: "hoy", fr: "aujourd'hui" },
    outrosDias:   { pt: "Os outros dias da semana", en: "The rest of the week", es: "El resto de la semana", fr: "Le reste de la semaine" },
    filtros:      { pt: "Filtrar o menu", en: "Filter the menu", es: "Filtrar el menú", fr: "Filtrer le menu" },
    semResultados:{ pt: "Nenhum prato corresponde aos filtros escolhidos.", en: "No dishes match the selected filters.", es: "Ningún plato coincide con los filtros.", fr: "Aucun plat ne correspond aux filtres." },
    alergenios:   { pt: "Alergénios", en: "Allergens", es: "Alérgenos", fr: "Allergènes" },
    alergeniosNota: {
      pt: "Números junto a cada prato. Em caso de alergia, fale connosco.",
      en: "Numbers shown next to each dish. Please tell us about any allergy.",
      es: "Números junto a cada plato. Si tiene alergias, avísenos.",
      fr: "Numéros à côté de chaque plat. Signalez-nous toute allergie."
    },
    voltarTopo:   { pt: "Voltar ao topo", en: "Back to top", es: "Volver arriba", fr: "Retour en haut" },
    categorias:   { pt: "Categorias do menu", en: "Menu categories", es: "Categorías del menú", fr: "Catégories du menu" },
    idioma:       { pt: "Idioma", en: "Language", es: "Idioma", fr: "Langue" },
    zonas: {
      esplanada: { pt: "Esplanada", en: "Terrace", es: "Terraza", fr: "Terrasse" },
      interior:  { pt: "Sala interior", en: "Indoor room", es: "Sala interior", fr: "Salle intérieure" },
      bar:       { pt: "Bar", en: "Bar", es: "Bar", fr: "Bar" }
    },
    rodape: {
      horario:  { pt: "Horário", en: "Hours", es: "Horario", fr: "Horaires" },
      morada:   { pt: "Morada", en: "Address", es: "Dirección", fr: "Adresse" },
      telefone: { pt: "Telefone", en: "Phone", es: "Teléfono", fr: "Téléphone" },
      wifi:     { pt: "Wi-Fi", en: "Wi-Fi", es: "Wi-Fi", fr: "Wi-Fi" }
    },
    ivaNota: {
      pt: "Preços em euros, IVA incluído.",
      en: "Prices in euros, VAT included.",
      es: "Precios en euros, IVA incluido.",
      fr: "Prix en euros, TVA incluse."
    }
  },

  categorias: [
    {
      id: "diarias",
      nome: { pt: "Diárias", en: "Daily specials", es: "Menú del día", fr: "Plats du jour" },
      itens: [
        {
          dia: 1,
          nome: { pt: "Carne de porco à alentejana", en: "Alentejo-style pork with clams", es: "Cerdo a la alentejana con almejas", fr: "Porc à l'alentejana aux palourdes" },
          descricao: { pt: "Porco frito com amêijoas, batata aos cubos e coentros", en: "Fried pork with clams, diced potato and coriander", es: "Cerdo frito con almejas, patata y cilantro", fr: "Porc sauté, palourdes, pommes de terre et coriandre" },
          preco: 10.5, alergenios: [14], tags: []
        },
        {
          dia: 2,
          nome: { pt: "Arroz de polvo malandrinho", en: "Soupy octopus rice", es: "Arroz caldoso de pulpo", fr: "Riz de poulpe moelleux" },
          descricao: { pt: "Polvo, arroz caldoso, pimento e coentros", en: "Octopus, brothy rice, pepper and coriander", es: "Pulpo, arroz caldoso, pimiento y cilantro", fr: "Poulpe, riz en bouillon, poivron et coriandre" },
          preco: 11, alergenios: [14], tags: []
        },
        {
          dia: 3,
          nome: { pt: "Bacalhau à Brás", en: "Bacalhau à Brás (shredded cod)", es: "Bacalao dorado a la Brás", fr: "Morue à Brás" },
          descricao: { pt: "Bacalhau desfiado, batata palha, ovo e azeitonas", en: "Shredded cod, straw potatoes, egg and olives", es: "Bacalao, patata paja, huevo y aceitunas", fr: "Morue effilochée, pommes paille, œuf, olives" },
          preco: 10.5, alergenios: [3, 4], tags: []
        },
        {
          dia: 4,
          nome: { pt: "Frango no churrasco", en: "Chargrilled piri-piri chicken", es: "Pollo a la brasa", fr: "Poulet grillé au feu de bois" },
          descricao: { pt: "Meio frango grelhado, arroz e salada", en: "Half grilled chicken, rice and salad", es: "Medio pollo a la brasa, arroz y ensalada", fr: "Demi-poulet grillé, riz et salade" },
          preco: 9.5, alergenios: [], tags: ["picante", "sem_gluten"]
        },
        {
          dia: 5,
          nome: { pt: "Cataplana de peixe", en: "Fish cataplana", es: "Cataplana de pescado", fr: "Cataplane de poisson" },
          descricao: { pt: "Peixe do dia, batata, pimentos e vinho branco", en: "Catch of the day, potato, peppers, white wine", es: "Pescado del día, patata, pimientos, vino blanco", fr: "Poisson du jour, pommes de terre, poivrons, vin blanc" },
          preco: 12.5, alergenios: [4, 12], tags: ["sem_gluten"]
        },
        {
          dia: 6,
          nome: { pt: "Arroz de marisco", en: "Seafood rice", es: "Arroz de marisco", fr: "Riz aux fruits de mer" },
          descricao: { pt: "Camarão, amêijoa e mexilhão em arroz caldoso", en: "Prawns, clams and mussels in brothy rice", es: "Gambas, almejas y mejillones en arroz caldoso", fr: "Crevettes, palourdes et moules, riz en bouillon" },
          preco: 13.5, alergenios: [2, 14], tags: ["favorito"]
        },
        {
          dia: 0,
          nome: { pt: "Vitela assada no forno", en: "Oven-roasted veal", es: "Ternera asada al horno", fr: "Veau rôti au four" },
          descricao: { pt: "Vitela assada, batata assada e grelos salteados", en: "Roast veal, roast potatoes and sautéed greens", es: "Ternera asada, patatas asadas y grelos", fr: "Veau rôti, pommes de terre rôties et brocolis-raves" },
          preco: 12, alergenios: [], tags: ["sem_gluten"]
        }
      ]
    },

    {
      id: "entradas",
      nome: { pt: "Entradas & Petiscos", en: "Starters & snacks", es: "Entrantes y tapas", fr: "Entrées & tapas" },
      itens: [
        {
          nome: { pt: "Couvert da casa", en: "House couvert", es: "Couvert de la casa", fr: "Couvert maison" },
          descricao: { pt: "Pão, azeitonas, manteiga e paté de atum", en: "Bread, olives, butter and tuna pâté", es: "Pan, aceitunas, mantequilla y paté de atún", fr: "Pain, olives, beurre et pâté de thon" },
          preco: 2.5, alergenios: [1, 4, 7], tags: []
        },
        {
          nome: { pt: "Camarão ao alhinho", en: "Garlic prawns", es: "Gambas al ajillo", fr: "Crevettes à l'ail" },
          descricao: { pt: "Camarão salteado em azeite, alho e piri-piri", en: "Prawns sautéed in olive oil, garlic, piri-piri", es: "Gambas salteadas con aceite, ajo y guindilla", fr: "Crevettes sautées à l'huile, ail et piment" },
          preco: 9.5, alergenios: [2], tags: ["picante", "sem_gluten", "favorito"]
        },
        {
          nome: { pt: "Salada de polvo", en: "Octopus salad", es: "Ensalada de pulpo", fr: "Salade de poulpe" },
          descricao: { pt: "Polvo frio, cebola, pimento e coentros", en: "Cold octopus, onion, pepper and coriander", es: "Pulpo frío, cebolla, pimiento y cilantro", fr: "Poulpe froid, oignon, poivron et coriandre" },
          preco: 8, alergenios: [14], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Pica-pau de novilho", en: "Beef pica-pau", es: "Pica-pau de ternera", fr: "Pica-pau de bœuf" },
          descricao: { pt: "Tiras de novilho em molho de mostarda e picles", en: "Beef strips in mustard sauce with pickles", es: "Tiras de ternera en salsa de mostaza y encurtidos", fr: "Lamelles de bœuf, sauce moutarde et pickles" },
          preco: 8.5, alergenios: [10, 12], tags: []
        },
        {
          nome: { pt: "Chouriço assado", en: "Flame-grilled chouriço", es: "Chorizo asado", fr: "Chouriço grillé" },
          descricao: { pt: "Chouriço de porco assado à mesa", en: "Pork chouriço flamed at the table", es: "Chorizo asado en la mesa", fr: "Chouriço flambé à table" },
          preco: 6.5, alergenios: [], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Moelas guisadas", en: "Stewed chicken gizzards", es: "Mollejas guisadas", fr: "Gésiers mijotés" },
          descricao: { pt: "Moelas em molho de tomate e vinho branco", en: "Gizzards in tomato and white wine sauce", es: "Mollejas en salsa de tomate y vino blanco", fr: "Gésiers, sauce tomate et vin blanc" },
          preco: 5.5, alergenios: [12], tags: []
        },
        {
          nome: { pt: "Peixinhos da horta", en: "Green bean fritters", es: "Judías verdes en tempura", fr: "Beignets de haricots verts" },
          descricao: { pt: "Feijão-verde em polme frito, maionese de limão", en: "Battered green beans with lemon mayonnaise", es: "Judías rebozadas con mayonesa de limón", fr: "Haricots verts frits, mayonnaise au citron" },
          preco: 5, alergenios: [1, 3], tags: ["vegetariano"]
        },
        {
          nome: { pt: "Tábua de queijo e presunto", en: "Cheese and cured ham board", es: "Tabla de queso y jamón", fr: "Planche fromage et jambon sec" },
          descricao: { pt: "Queijo da Serra, presunto e tostas", en: "Serra cheese, cured ham and toasts", es: "Queso de la Serra, jamón y tostas", fr: "Fromage de la Serra, jambon sec, toasts" },
          preco: 9, alergenios: [1, 7], tags: []
        }
      ]
    },

    {
      id: "pizzas",
      nome: { pt: "Pizzas", en: "Pizzas", es: "Pizzas", fr: "Pizzas" },
      itens: [
        {
          nome: { pt: "Margherita", en: "Margherita", es: "Margarita", fr: "Margherita" },
          descricao: { pt: "Tomate, mozzarella e manjericão", en: "Tomato, mozzarella and basil", es: "Tomate, mozzarella y albahaca", fr: "Tomate, mozzarella et basilic" },
          preco: 9, alergenios: [1, 7], tags: ["vegetariano"]
        },
        {
          nome: { pt: "Presunto e rúcula", en: "Cured ham and rocket", es: "Jamón y rúcula", fr: "Jambon sec et roquette" },
          descricao: { pt: "Tomate, mozzarella, presunto, rúcula e parmesão", en: "Tomato, mozzarella, cured ham, rocket, parmesan", es: "Tomate, mozzarella, jamón, rúcula y parmesano", fr: "Tomate, mozzarella, jambon sec, roquette, parmesan" },
          preco: 11.5, alergenios: [1, 7], tags: []
        },
        {
          nome: { pt: "Atum e cebola roxa", en: "Tuna and red onion", es: "Atún y cebolla morada", fr: "Thon et oignon rouge" },
          descricao: { pt: "Tomate, mozzarella, atum e cebola roxa", en: "Tomato, mozzarella, tuna and red onion", es: "Tomate, mozzarella, atún y cebolla morada", fr: "Tomate, mozzarella, thon et oignon rouge" },
          preco: 11, alergenios: [1, 4, 7], tags: []
        },
        {
          nome: { pt: "Quatro queijos", en: "Four cheeses", es: "Cuatro quesos", fr: "Quatre fromages" },
          descricao: { pt: "Mozzarella, queijo da ilha, gorgonzola e chèvre", en: "Mozzarella, island cheese, gorgonzola and goat cheese", es: "Mozzarella, queso curado, gorgonzola y cabra", fr: "Mozzarella, fromage affiné, gorgonzola et chèvre" },
          preco: 11.5, alergenios: [1, 7], tags: ["vegetariano"]
        },
        {
          nome: { pt: "Diavola", en: "Diavola", es: "Diavola", fr: "Diavola" },
          descricao: { pt: "Tomate, mozzarella, salame picante e mel", en: "Tomato, mozzarella, spicy salami and honey", es: "Tomate, mozzarella, salami picante y miel", fr: "Tomate, mozzarella, salami piquant et miel" },
          preco: 11, alergenios: [1, 7], tags: ["picante"]
        },
        {
          nome: { pt: "Camarão e alho", en: "Prawn and garlic", es: "Gambas y ajo", fr: "Crevettes et ail" },
          descricao: { pt: "Tomate, mozzarella, camarão, alho e coentros", en: "Tomato, mozzarella, prawns, garlic and coriander", es: "Tomate, mozzarella, gambas, ajo y cilantro", fr: "Tomate, mozzarella, crevettes, ail et coriandre" },
          preco: 13, alergenios: [1, 2, 7], tags: ["favorito"]
        }
      ]
    },

    {
      id: "francesinhas",
      nome: { pt: "Francesinhas", en: "Francesinhas", es: "Francesinhas", fr: "Francesinhas" },
      itens: [
        {
          nome: { pt: "Tradicional", en: "Traditional", es: "Tradicional", fr: "Traditionnelle" },
          descricao: { pt: "Bife, linguiça, salsicha, fiambre, queijo e molho da casa", en: "Steak, sausages, ham, cheese and house sauce", es: "Bistec, salchichas, jamón, queso y salsa de la casa", fr: "Steak, saucisses, jambon, fromage, sauce maison" },
          preco: 11.5, alergenios: [1, 7, 12], tags: ["favorito"]
        },
        {
          nome: { pt: "De frango", en: "Chicken", es: "De pollo", fr: "Au poulet" },
          descricao: { pt: "Peito de frango grelhado, fiambre, queijo e molho", en: "Grilled chicken breast, ham, cheese and sauce", es: "Pechuga de pollo, jamón, queso y salsa", fr: "Blanc de poulet grillé, jambon, fromage, sauce" },
          preco: 10.5, alergenios: [1, 7, 12], tags: []
        },
        {
          nome: { pt: "Vegetariana", en: "Vegetarian", es: "Vegetariana", fr: "Végétarienne" },
          descricao: { pt: "Cogumelos grelhados, queijo e molho sem carne", en: "Grilled mushrooms, cheese and meat-free sauce", es: "Setas a la plancha, queso y salsa sin carne", fr: "Champignons grillés, fromage, sauce sans viande" },
          preco: 10, alergenios: [1, 7], tags: ["vegetariano"]
        },
        {
          nome: { pt: "Especial da casa", en: "House special", es: "Especial de la casa", fr: "Spéciale maison" },
          descricao: { pt: "Tradicional com ovo, camarão e batata frita caseira", en: "Traditional plus egg, prawns and homemade fries", es: "Tradicional con huevo, gambas y patatas caseras", fr: "Traditionnelle avec œuf, crevettes et frites maison" },
          preco: 13.5, alergenios: [1, 2, 3, 7, 12], tags: ["picante", "favorito"]
        }
      ]
    },

    {
      id: "massas",
      nome: { pt: "Massas", en: "Pasta", es: "Pastas", fr: "Pâtes" },
      itens: [
        {
          nome: { pt: "Esparguete com camarão", en: "Spaghetti with prawns", es: "Espaguetis con gambas", fr: "Spaghettis aux crevettes" },
          descricao: { pt: "Camarão, alho, tomate-cereja e vinho branco", en: "Prawns, garlic, cherry tomato and white wine", es: "Gambas, ajo, tomate cherry y vino blanco", fr: "Crevettes, ail, tomates cerises et vin blanc" },
          preco: 12.5, alergenios: [1, 2, 12], tags: []
        },
        {
          nome: { pt: "Tagliatelle de cogumelos", en: "Mushroom tagliatelle", es: "Tallarines con setas", fr: "Tagliatelles aux champignons" },
          descricao: { pt: "Cogumelos salteados, natas e parmesão", en: "Sautéed mushrooms, cream and parmesan", es: "Setas salteadas, nata y parmesano", fr: "Champignons sautés, crème et parmesan" },
          preco: 10.5, alergenios: [1, 7], tags: ["vegetariano"]
        },
        {
          nome: { pt: "Carbonara", en: "Carbonara", es: "Carbonara", fr: "Carbonara" },
          descricao: { pt: "Bacon, gema de ovo e queijo curado", en: "Bacon, egg yolk and cured cheese", es: "Bacon, yema de huevo y queso curado", fr: "Lardons, jaune d'œuf et fromage affiné" },
          preco: 10.5, alergenios: [1, 3, 7], tags: []
        },
        {
          nome: { pt: "Lasanha de carne", en: "Beef lasagne", es: "Lasaña de carne", fr: "Lasagnes à la viande" },
          descricao: { pt: "Carne de novilho, tomate e bechamel gratinado", en: "Beef ragù, tomato and baked béchamel", es: "Ternera, tomate y bechamel gratinada", fr: "Bœuf, tomate et béchamel gratinée" },
          preco: 10, alergenios: [1, 7, 9], tags: []
        },
        {
          nome: { pt: "Penne arrabbiata", en: "Penne arrabbiata", es: "Penne arrabbiata", fr: "Penne arrabbiata" },
          descricao: { pt: "Tomate, alho, malagueta e manjericão", en: "Tomato, garlic, chilli and basil", es: "Tomate, ajo, guindilla y albahaca", fr: "Tomate, ail, piment et basilic" },
          preco: 9, alergenios: [1], tags: ["vegetariano", "picante"]
        }
      ]
    },

    {
      id: "peixe",
      nome: { pt: "Peixe", en: "Fish", es: "Pescado", fr: "Poisson" },
      itens: [
        {
          nome: { pt: "Salmão grelhado", en: "Grilled salmon", es: "Salmón a la plancha", fr: "Saumon grillé" },
          descricao: { pt: "Lombo de salmão, legumes salteados e batata cozida", en: "Salmon fillet, sautéed vegetables and boiled potato", es: "Lomo de salmón, verduras salteadas y patata", fr: "Pavé de saumon, légumes sautés, pommes vapeur" },
          preco: 13.5, alergenios: [4], tags: ["favorito", "sem_gluten"]
        },
        {
          nome: { pt: "Dourada grelhada", en: "Grilled sea bream", es: "Dorada a la brasa", fr: "Daurade grillée" },
          descricao: { pt: "Dourada inteira, batata cozida e legumes", en: "Whole sea bream, boiled potato and vegetables", es: "Dorada entera, patata cocida y verduras", fr: "Daurade entière, pommes vapeur et légumes" },
          preco: 12.5, alergenios: [4], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Robalo grelhado", en: "Grilled sea bass", es: "Lubina a la brasa", fr: "Bar grillé" },
          descricao: { pt: "Robalo inteiro, batata cozida e salada", en: "Whole sea bass, boiled potato and salad", es: "Lubina entera, patata cocida y ensalada", fr: "Bar entier, pommes vapeur et salade" },
          preco: 13, alergenios: [4], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Polvo à lagareiro", en: "Lagareiro-style octopus", es: "Pulpo a la lagareiro", fr: "Poulpe à la lagareiro" },
          descricao: { pt: "Polvo assado, batata a murro e muito azeite", en: "Roast octopus, punched potatoes, plenty of olive oil", es: "Pulpo asado, patatas al horno y aceite", fr: "Poulpe rôti, pommes écrasées, huile d'olive" },
          preco: 15.5, alergenios: [14], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Bacalhau com broa", en: "Cod with cornbread crust", es: "Bacalao con costra de maíz", fr: "Morue en croûte de pain de maïs" },
          descricao: { pt: "Lombo de bacalhau, broa de milho e grelos", en: "Cod loin, cornbread crumb and turnip greens", es: "Lomo de bacalao, pan de maíz y grelos", fr: "Dos de morue, chapelure de maïs, brocolis-raves" },
          preco: 14, alergenios: [1, 4], tags: []
        },
        {
          nome: { pt: "Sardinhas assadas (época)", en: "Grilled sardines (seasonal)", es: "Sardinas asadas (temporada)", fr: "Sardines grillées (saison)" },
          descricao: { pt: "Sardinhas na brasa, pimento assado e batata", en: "Charcoal sardines, roast pepper and potato", es: "Sardinas a la brasa, pimiento asado y patata", fr: "Sardines au charbon, poivron rôti, pommes de terre" },
          preco: 9.5, alergenios: [4], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Espetada de lulas", en: "Squid skewer", es: "Brocheta de calamar", fr: "Brochette de calamars" },
          descricao: { pt: "Lulas grelhadas com pimento, arroz de tomate", en: "Grilled squid with pepper, tomato rice", es: "Calamares a la plancha con pimiento, arroz de tomate", fr: "Calamars grillés au poivron, riz à la tomate" },
          preco: 11.5, alergenios: [14], tags: ["sem_gluten"]
        }
      ]
    },

    {
      id: "sobremesas",
      nome: { pt: "Sobremesas", en: "Desserts", es: "Postres", fr: "Desserts" },
      itens: [
        {
          nome: { pt: "Baba de camelo", en: "Caramel mousse", es: "Mousse de caramelo", fr: "Mousse au caramel" },
          descricao: { pt: "Mousse de leite condensado cozido", en: "Cooked condensed milk mousse", es: "Mousse de leche condensada cocida", fr: "Mousse de lait concentré cuit" },
          preco: 3.5, alergenios: [3, 7], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Mousse de chocolate", en: "Chocolate mousse", es: "Mousse de chocolate", fr: "Mousse au chocolat" },
          descricao: { pt: "Chocolate negro e um fio de flor de sal", en: "Dark chocolate with a pinch of sea salt", es: "Chocolate negro con flor de sal", fr: "Chocolat noir et fleur de sel" },
          preco: 3.5, alergenios: [3, 6, 7], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Leite-creme queimado", en: "Portuguese crème brûlée", es: "Crema catalana portuguesa", fr: "Crème brûlée portugaise" },
          descricao: { pt: "Creme de ovos queimado na hora", en: "Egg custard caramelised to order", es: "Crema de huevo quemada al momento", fr: "Crème aux œufs caramélisée à la minute" },
          preco: 3.5, alergenios: [3, 7], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Tarte de amêndoa", en: "Almond tart", es: "Tarta de almendra", fr: "Tarte aux amandes" },
          descricao: { pt: "Fatia de tarte com amêndoa caramelizada", en: "Tart slice with caramelised almonds", es: "Porción de tarta con almendra caramelizada", fr: "Part de tarte aux amandes caramélisées" },
          preco: 4, alergenios: [1, 3, 7, 8], tags: []
        },
        {
          nome: { pt: "Gelado (2 bolas)", en: "Ice cream (2 scoops)", es: "Helado (2 bolas)", fr: "Glace (2 boules)" },
          descricao: { pt: "Baunilha, chocolate, morango ou limão", en: "Vanilla, chocolate, strawberry or lemon", es: "Vainilla, chocolate, fresa o limón", fr: "Vanille, chocolat, fraise ou citron" },
          preco: 3, alergenios: [7], tags: ["sem_gluten"]
        },
        {
          nome: { pt: "Fruta da época", en: "Seasonal fruit", es: "Fruta de temporada", fr: "Fruits de saison" },
          descricao: { pt: "Fruta fresca laminada", en: "Sliced fresh fruit", es: "Fruta fresca laminada", fr: "Fruits frais tranchés" },
          preco: 3, alergenios: [], tags: ["vegetariano", "sem_gluten"]
        }
      ]
    },

    {
      id: "bebidas",
      nome: { pt: "Bebidas", en: "Drinks", es: "Bebidas", fr: "Boissons" },
      subgrupos: [
        {
          id: "refrigerantes",
          nome: { pt: "Refrigerantes & águas", en: "Soft drinks & water", es: "Refrescos y aguas", fr: "Sodas & eaux" },
          itens: [
            {
              nome: { pt: "Água 50 cl", en: "Still water 50 cl", es: "Agua 50 cl", fr: "Eau plate 50 cl" },
              descricao: { pt: "Fresca ou natural", en: "Chilled or room temperature", es: "Fría o del tiempo", fr: "Fraîche ou tempérée" },
              preco: 1.5, alergenios: [], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Água com gás 25 cl", en: "Sparkling water 25 cl", es: "Agua con gas 25 cl", fr: "Eau gazeuse 25 cl" },
              descricao: { pt: "Castello ou Pedras", en: "Castello or Pedras", es: "Castello o Pedras", fr: "Castello ou Pedras" },
              preco: 1.8, alergenios: [], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Refrigerante 33 cl", en: "Soft drink 33 cl", es: "Refresco 33 cl", fr: "Soda 33 cl" },
              descricao: { pt: "Coca-Cola, Sumol, Seven-Up ou ice tea", en: "Coca-Cola, Sumol, Seven-Up or iced tea", es: "Coca-Cola, Sumol, Seven-Up o ice tea", fr: "Coca-Cola, Sumol, Seven-Up ou thé glacé" },
              preco: 2, alergenios: [], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Limonada da casa", en: "House lemonade", es: "Limonada de la casa", fr: "Limonade maison" },
              descricao: { pt: "Limão espremido na hora com hortelã", en: "Freshly squeezed lemon with mint", es: "Limón recién exprimido con hierbabuena", fr: "Citron pressé à la minute, menthe" },
              preco: 3, alergenios: [], tags: ["sem_gluten"]
            }
          ]
        },
        {
          id: "cervejas",
          nome: { pt: "Cervejas", en: "Beers", es: "Cervezas", fr: "Bières" },
          itens: [
            {
              nome: { pt: "Imperial 20 cl", en: "Draught beer 20 cl", es: "Caña 20 cl", fr: "Demi pression 20 cl" },
              descricao: { pt: "Super Bock à pressão", en: "Super Bock on tap", es: "Super Bock de barril", fr: "Super Bock pression" },
              preco: 1.5, alergenios: [1], tags: []
            },
            {
              nome: { pt: "Caneca 50 cl", en: "Pint 50 cl", es: "Jarra 50 cl", fr: "Pinte 50 cl" },
              descricao: { pt: "Super Bock à pressão", en: "Super Bock on tap", es: "Super Bock de barril", fr: "Super Bock pression" },
              preco: 2.8, alergenios: [1], tags: []
            },
            {
              nome: { pt: "Garrafa 33 cl", en: "Bottle 33 cl", es: "Botella 33 cl", fr: "Bouteille 33 cl" },
              descricao: { pt: "Super Bock ou Sagres", en: "Super Bock or Sagres", es: "Super Bock o Sagres", fr: "Super Bock ou Sagres" },
              preco: 2, alergenios: [1], tags: []
            },
            {
              nome: { pt: "Cerveja sem álcool", en: "Alcohol-free beer", es: "Cerveza sin alcohol", fr: "Bière sans alcool" },
              descricao: { pt: "Super Bock 0,0 em garrafa", en: "Super Bock 0.0 bottle", es: "Super Bock 0,0 en botella", fr: "Super Bock 0,0 en bouteille" },
              preco: 2, alergenios: [1], tags: []
            }
          ]
        },
        {
          id: "vinhos",
          nome: { pt: "Vinhos & sangrias", en: "Wines & sangria", es: "Vinos y sangrías", fr: "Vins & sangrias" },
          itens: [
            {
              nome: { pt: "Copo de vinho da casa", en: "Glass of house wine", es: "Copa de vino de la casa", fr: "Verre de vin maison" },
              descricao: { pt: "Tinto, branco ou verde", en: "Red, white or vinho verde", es: "Tinto, blanco o verde", fr: "Rouge, blanc ou vinho verde" },
              preco: 2.5, alergenios: [12], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Jarro de vinho da casa 50 cl", en: "House wine carafe 50 cl", es: "Jarra de vino 50 cl", fr: "Pichet de vin maison 50 cl" },
              descricao: { pt: "Tinto, branco ou verde", en: "Red, white or vinho verde", es: "Tinto, blanco o verde", fr: "Rouge, blanc ou vinho verde" },
              preco: 4.5, alergenios: [12], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Vinho verde (garrafa)", en: "Vinho verde (bottle)", es: "Vino verde (botella)", fr: "Vinho verde (bouteille)" },
              descricao: { pt: "Branco fresco da região dos Vinhos Verdes", en: "Crisp white from the Vinho Verde region", es: "Blanco fresco de la región de Vinho Verde", fr: "Blanc frais de la région du Vinho Verde" },
              preco: 9, alergenios: [12], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Alvarinho (garrafa)", en: "Alvarinho (bottle)", es: "Alvarinho (botella)", fr: "Alvarinho (bouteille)" },
              descricao: { pt: "Monção e Melgaço", en: "From Monção e Melgaço", es: "De Monção e Melgaço", fr: "De Monção e Melgaço" },
              preco: 14, alergenios: [12], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Tinto do Douro (garrafa)", en: "Douro red (bottle)", es: "Tinto del Duero portugués (botella)", fr: "Rouge du Douro (bouteille)" },
              descricao: { pt: "Tinto encorpado da região do Douro", en: "Full-bodied red from the Douro valley", es: "Tinto con cuerpo de la región del Duero", fr: "Rouge corsé de la vallée du Douro" },
              preco: 12, alergenios: [12], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Sangria 1 l", en: "Sangria 1 l", es: "Sangría 1 l", fr: "Sangria 1 l" },
              descricao: { pt: "Tinta, branca ou de espumante, com fruta", en: "Red, white or sparkling, with fresh fruit", es: "Tinta, blanca o de espumoso, con fruta", fr: "Rouge, blanche ou pétillante, aux fruits" },
              preco: 9.5, alergenios: [12], tags: []
            },
            {
              nome: { pt: "Cálice de Porto", en: "Glass of Port", es: "Copa de Oporto", fr: "Verre de Porto" },
              descricao: { pt: "Tawny ou ruby", en: "Tawny or ruby", es: "Tawny o ruby", fr: "Tawny ou ruby" },
              preco: 3, alergenios: [12], tags: ["sem_gluten"]
            }
          ]
        },
        {
          id: "cafes",
          nome: { pt: "Cafés & chás", en: "Coffee & tea", es: "Cafés y tés", fr: "Cafés & thés" },
          itens: [
            {
              nome: { pt: "Café expresso", en: "Espresso", es: "Café solo", fr: "Expresso" },
              descricao: { pt: "Também disponível descafeinado", en: "Decaf also available", es: "También descafeinado", fr: "Aussi disponible en déca" },
              preco: 0.9, alergenios: [], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Meia de leite", en: "Coffee with milk", es: "Café con leche", fr: "Café au lait" },
              descricao: { pt: "Café e leite em chávena grande", en: "Coffee and milk in a large cup", es: "Café y leche en taza grande", fr: "Café et lait en grande tasse" },
              preco: 1.5, alergenios: [7], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Chá", en: "Tea", es: "Té", fr: "Thé" },
              descricao: { pt: "Preto, verde, camomila ou lúcia-lima", en: "Black, green, chamomile or lemon verbena", es: "Negro, verde, manzanilla o hierbaluisa", fr: "Noir, vert, camomille ou verveine" },
              preco: 1.5, alergenios: [], tags: ["sem_gluten"]
            },
            {
              nome: { pt: "Café com cheirinho", en: "Espresso with brandy", es: "Carajillo", fr: "Café arrosé" },
              descricao: { pt: "Expresso com aguardente velha", en: "Espresso with aged Portuguese brandy", es: "Café solo con aguardiente", fr: "Expresso à l'eau-de-vie vieillie" },
              preco: 1.8, alergenios: [], tags: []
            }
          ]
        }
      ]
    }
  ]
};
