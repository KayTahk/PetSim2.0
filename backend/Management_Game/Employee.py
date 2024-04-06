class Employee:
    def __init__(self, stress, stress_limit, skillset, strength, strength_growth, 
    dexterity, dexterity_growth, intelligence, intelligence_growth, charisma):
        self.stress = stress
        self.xp = 0
        self.next_xp = 128
        self.level = 1
        self.stress_limit = stress_limit
        self.skillset = skillset
        self.strength = strength
        self.strength_growth = strength_growth
        self.dexterity = dexterity
        self.dexterity_growth = dexterity_growth
        self.intelligence = intelligence
        self.intelligence_growth = intelligence_growth
        self.charisma = charisma
        self.charisma_growth = charisma_growth

    def add_xp(self, xp_adding):
        self.xp += xp_adding
        if self.xp >= self.next_xp:
            self.level += 1
            self.strength += strength_growth
            self.dexterity += dexterity_growth
            self.intelligence += intelligence_growth
            self.charisma += charisma_growth
            self.next_xp = (128 + (32 * level)) * level
    