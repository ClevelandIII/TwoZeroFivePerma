const mongoose = require('mongoose')

const OdysseySchema = new mongoose.Schema (
    {
        createdBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: [true, "Please provide user"],
          },
        Name: {
            type: String,
            required: [true, 'Must enter a name'],
            maxlength: 40
        },
        Lives: {
            type: Number,
            default: 50
        },
        Options: {
            extremeMode: {
                type: Boolean,
                default: false
            }
        },
        Monkeys: {
            max: {
                type: Number,
                default: 20
            },
            banned: {
                default: []
            }
        },
        Games: {
            type: Object,
            required: true,
            gameOne: {
                type: Object,
                required: true,
                Cash: {
                    type: Number,
                    default: 650
                },
                Map: {
                    type: String,
                    required: [true, 'Must enter a map'],
                },
                Difficulty: {
                    type: String,
                    default: "medium",
                    enum: ["easy", "medium", "hard"]
                },
                options: {
                    powers: {
                        type: Boolean,
                        default: true
                    },
                    selling: {
                        type: Boolean,
                        default: true
                    },
                    allCamo: {
                        type: Boolean,
                        default: false
                    },
                    doubleCashDisabled: {
                        type: Boolean,
                        default: false
                    },
                    monkeyKnowledge: {
                        type: Boolean,
                        default: true
                    },
                    continues: {
                        type: Boolean,
                        default: true
                    },
                    allRegrow: {
                        type: Boolean,
                        default: false
                    },
                    bloonSpeed: {
                        type: Number,
                        default: 100
                    },
                    moabSpeed: {
                        type: Number,
                        default: 100
                    },
                    ceramicHealth: {
                        type: Number,
                        default: 100
                    },
                    moabHealth: {
                        type: Number,
                        default: 100
                    },
                    regrowRate: {
                        type: Number,
                        default: 100
                    },
                    chimps: {
                        type: Boolean,
                        default: false
                    },
                    alternateBloonsRounds: {
                        type: Boolean,
                        default: false
                    },
                    halfCash: {
                        type: Boolean,
                        default: false
                    },
                    apopalypse: {
                        type: Boolean,
                        default: false
                    },
                },
            },
            gameTwo: {
                type: Object,
                required: true,
                Cash: {
                    type: Number,
                    default: 650
                },
                Map: {
                    type: String,
                    required: [true, 'Must enter a map'],
                },
                Difficulty: {
                    type: String,
                    default: "medium",
                    enum: ["easy", "medium", "hard"]
                },
                options: {
                    powers: {
                        type: Boolean,
                        default: true
                    },
                    selling: {
                        type: Boolean,
                        default: true
                    },
                    allCamo: {
                        type: Boolean,
                        default: false
                    },
                    doubleCashDisabled: {
                        type: Boolean,
                        default: false
                    },
                    monkeyKnowledge: {
                        type: Boolean,
                        default: true
                    },
                    continues: {
                        type: Boolean,
                        default: true
                    },
                    allRegrow: {
                        type: Boolean,
                        default: false
                    },
                    bloonSpeed: {
                        type: Number,
                        default: 100
                    },
                    moabSpeed: {
                        type: Number,
                        default: 100
                    },
                    ceramicHealth: {
                        type: Number,
                        default: 100
                    },
                    moabHealth: {
                        type: Number,
                        default: 100
                    },
                    regrowRate: {
                        type: Number,
                        default: 100
                    },
                    chimps: {
                        type: Boolean,
                        default: false
                    },
                    alternateBloonsRounds: {
                        type: Boolean,
                        default: false
                    },
                    halfCash: {
                        type: Boolean,
                        default: false
                    },
                    apopalypse: {
                        type: Boolean,
                        default: false
                    },
                },
            },
            gameThree: {
                type: Object,
                required: true,
                Cash: {
                    type: Number,
                    default: 650
                },
                Map: {
                    type: String,
                    required: [true, 'Must enter a map'],
                },
                Difficulty: {
                    type: String,
                    default: "medium",
                    enum: ["easy", "medium", "hard"]
                },
                options: {
                    powers: {
                        type: Boolean,
                        default: true
                    },
                    selling: {
                        type: Boolean,
                        default: true
                    },
                    allCamo: {
                        type: Boolean,
                        default: false
                    },
                    doubleCashDisabled: {
                        type: Boolean,
                        default: false
                    },
                    monkeyKnowledge: {
                        type: Boolean,
                        default: true
                    },
                    continues: {
                        type: Boolean,
                        default: true
                    },
                    allRegrow: {
                        type: Boolean,
                        default: false
                    },
                    bloonSpeed: {
                        type: Number,
                        default: 100
                    },
                    moabSpeed: {
                        type: Number,
                        default: 100
                    },
                    ceramicHealth: {
                        type: Number,
                        default: 100
                    },
                    moabHealth: {
                        type: Number,
                        default: 100
                    },
                    regrowRate: {
                        type: Number,
                        default: 100
                    },
                    chimps: {
                        type: Boolean,
                        default: false
                    },
                    alternateBloonsRounds: {
                        type: Boolean,
                        default: false
                    },
                    halfCash: {
                        type: Boolean,
                        default: false
                    },
                    apopalypse: {
                        type: Boolean,
                        default: false
                    },
                },
            },
            gameFour: {
                Cash: {
                    type: Number,
                    default: 650
                },
                Map: {
                    type: String,
                    required: [true, 'Must enter a map'],
                },
                Difficulty: {
                    type: String,
                    default: "medium",
                    enum: ["easy", "medium", "hard"]
                },
                options: {
                    powers: {
                        type: Boolean,
                        default: true
                    },
                    selling: {
                        type: Boolean,
                        default: true
                    },
                    allCamo: {
                        type: Boolean,
                        default: false
                    },
                    doubleCashDisabled: {
                        type: Boolean,
                        default: false
                    },
                    monkeyKnowledge: {
                        type: Boolean,
                        default: true
                    },
                    continues: {
                        type: Boolean,
                        default: true
                    },
                    allRegrow: {
                        type: Boolean,
                        default: false
                    },
                    bloonSpeed: {
                        type: Number,
                        default: 100
                    },
                    moabSpeed: {
                        type: Number,
                        default: 100
                    },
                    ceramicHealth: {
                        type: Number,
                        default: 100
                    },
                    moabHealth: {
                        type: Number,
                        default: 100
                    },
                    regrowRate: {
                        type: Number,
                        default: 100
                    },
                    chimps: {
                        type: Boolean,
                        default: false
                    },
                    alternateBloonsRounds: {
                        type: Boolean,
                        default: false
                    },
                    halfCash: {
                        type: Boolean,
                        default: false
                    },
                    apopalypse: {
                        type: Boolean,
                        default: false
                    },
                },
            },
            gameFive: {
                Cash: {
                    type: Number,
                    default: 650
                },
                Map: {
                    type: String,
                    required: [true, 'Must enter a map'],
                },
                Difficulty: {
                    type: String,
                    default: "medium",
                    enum: ["easy", "medium", "hard"]
                },
                options: {
                    powers: {
                        type: Boolean,
                        default: true
                    },
                    selling: {
                        type: Boolean,
                        default: true
                    },
                    allCamo: {
                        type: Boolean,
                        default: false
                    },
                    doubleCashDisabled: {
                        type: Boolean,
                        default: false
                    },
                    monkeyKnowledge: {
                        type: Boolean,
                        default: true
                    },
                    continues: {
                        type: Boolean,
                        default: true
                    },
                    allRegrow: {
                        type: Boolean,
                        default: false
                    },
                    bloonSpeed: {
                        type: Number,
                        default: 100
                    },
                    moabSpeed: {
                        type: Number,
                        default: 100
                    },
                    ceramicHealth: {
                        type: Number,
                        default: 100
                    },
                    moabHealth: {
                        type: Number,
                        default: 100
                    },
                    regrowRate: {
                        type: Number,
                        default: 100
                    },
                    chimps: {
                        type: Boolean,
                        default: false
                    },
                    alternateBloonsRounds: {
                        type: Boolean,
                        default: false
                    },
                    halfCash: {
                        type: Boolean,
                        default: false
                    },
                    apopalypse: {
                        type: Boolean,
                        default: false
                    },
                },
            },
        },
    }
)

module.exports = mongoose.model("Odyssey", OdysseySchema)