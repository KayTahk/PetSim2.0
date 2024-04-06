class Facilities:
    def __init__(self):
        self.charisma_mod = 1
        self.charisma_boost = 0
        self.strength_mod = 1
        self.strength_boost = 0
        self.dexterity_mod = 1
        self.dexterity_boost = 0
        self.intelligence_mod = 1
        self.intelligence_boost = 0

    def set_charisma_mod(self, value):
        self._charisma_mod = value

    def set_charisma_boost(self, value):
        self._charisma_boost = value

    def set_strength_mod(self, value):
        self._strength_mod = value

    def set_strength_boost(self, value):
        self._strength_boost = value

    def set_dexterity_mod(self, value):
        self._dexterity_mod = value

    def set_dexterity_boost(self, value):
        self._dexterity_boost = value

    def set_intelligence_mod(self, value):
        self._dexterity_mod = value

    def set_intelligence_boost(self, value):
        self._dexterity_boost = value    