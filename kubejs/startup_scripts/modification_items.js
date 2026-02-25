const noEat = [
	'cold_sweat:soul_sprout',
	'minecraft:sweet_berries',
	'minecraft:glow_berries',
	'minecraft:chorus_fruit'
]

ItemEvents.modification(event => {
	event.modify('create:sand_paper', item => {
	  item.maxStackSize = 1,
	  item.maxDamage = 1
	})
	event.modify('tfc:ore/lignite', item => {
	  item.burnTime = 1200
	})
	event.modify('tfc:ore/bituminous_coal', item => {
	  item.burnTime = 1600
	})
	noEat.forEach((food) => {
		event.modify(`${food}`, item => {
		item.foodProperties = null
		})
	})
})