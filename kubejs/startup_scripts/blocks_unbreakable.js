// priority: 0
const samples = [
	'amethyst',
	'bismuthinite',
	'bituminous_coal',
	'borax',
	'cassiterite',
	'cinnabar',
	'copper',
	'cryolite',
	'diamond_sample',
	'emerald_sample',
	'garnierite',
	'golds',		// This is correct, it is defined as such in the mod unfortunately
	'graphite',
	'gypsum',
	'halite',
	'hematite',
	'kaolinite',
	'lapislazuli',
	'lignite',
	'limonite',
	'magnetite',
	'malachite',
	'saltpeter',
	'silver',
	'sphalerite',
	'sulfur',
	'sylvite',
	'tetrahedrite',
	'vulcanic_sulfur'
]

const TwiceHard = [
	'minecraft:netherrack',
	'minecraft:basalt',
	'minecraft:blackstone'
]

const SuperHard = [
    'minecraft:spawner'
]
	
BlockEvents.modification(HTFC4 => {
	samples.forEach((name) => {
		HTFC4.modify('hardrock_samples:' + name, block => {
			block.destroySpeed = 0.75
		})
	});
})

BlockEvents.modification(e => {
	e.modify( SuperHard , block => {
	  block.destroySpeed = 50.0
	})
})

BlockEvents.modification(e => {
	e.modify( TwiceHard , block => {
	  block.destroySpeed = 3.0
	})
})

BlockEvents.modification(e => {
	e.modify( 'minecraft:obsidian' , block => {
	  block.explosionResistance = 0.75
	})
})

BlockEvents.modification(e => {
	e.modify( 'thinair:safety_lantern' , block => {
	  block.lightEmission = 5
	})
})
