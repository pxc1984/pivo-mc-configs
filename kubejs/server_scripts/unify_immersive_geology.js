// priority: 0

ServerEvents.tags('item', event => {
	event.removeAllTagsFrom(
		'immersivegeology:ingot_bronze','immersivegeology:ingot_osmium','immersivegeology:ingot_tin','immersivegeology:ingot_zinc','immersivegeology:ingot_chromium',
		'immersivegeology:ingot_stainless_steel',
		'immersivegeology:wire_bronze','immersivegeology:wire_iron','immersivegeology:wire_osmium','immersivegeology:wire_tin','immersivegeology:wire_platinum',
		'immersivegeology:wire_zinc','immersivegeology:wire_chromium','immersivegeology:wire_stainless_steel',
		'immersivegeology:rod_bronze','immersivegeology:rod_copper','immersivegeology:rod_chromium','immersivegeology:rod_osmium','immersivegeology:rod_tin','immersivegeology:rod_zinc',
		'immersivegeology:rod_stainless_steel',
		'immersivegeology:dust_bronze','immersivegeology:dust_osmium',
		'immersivegeology:plate_bronze','immersivegeology:plate_osmium','immersivegeology:plate_tin','immersivegeology:plate_zinc','immersivegeology:plate_stainless_steel',
		'immersivegeology:nugget_bronze','immersivegeology:nugget_osmium','immersivegeology:nugget_tin',
		'immersivegeology:storage_block_bronze','immersivegeology:storage_block_osmium','immersivegeology:storage_block_zinc',
		'immersivegeology:gear_aluminum','immersivegeology:gear_bronze','immersivegeology:gear_chromium','immersivegeology:gear_copper','immersivegeology:gear_gold',
		'immersivegeology:gear_iron','immersivegeology:gear_lead','immersivegeology:gear_nickel','immersivegeology:gear_silver','immersivegeology:gear_steel',
		'immersivegeology:gear_stainlesssteel','immersivegeology:gear_tin','immersivegeology:gear_uranium','immersivegeology:gear_zinc','immersivegeology:gear_stainless_steel',
	)
	event.add('forge:grits/iron', ['immersivegeology:grit_iron'])
	event.add('forge:grits/steel', ['immersivegeology:grit_steel'])
	event.add('forge:grits/lead', ['immersivegeology:grit_lead'])
	event.add('forge:grits/uranium', ['immersivegeology:grit_uranium'])
	event.add('forge:grits/copper', ['immersivegeology:grit_copper'])
	// =====   add ores TFC to IG
	event.add('forge:rich_ore/hematite', ['tfc:ore/rich_hematite'])
	event.add('forge:normal_ore/hematite', ['tfc:ore/normal_hematite'])
	event.add('forge:poor_ore/hematite', ['tfc:ore/poor_hematite'])
	event.add('forge:rich_ore/copper', ['tfc:ore/rich_native_copper'])
	event.add('forge:normal_ore/copper', ['tfc:ore/normal_native_copper'])
	event.add('forge:poor_ore/copper', ['tfc:ore/poor_native_copper'])
	event.add('forge:rich_ore/gold', ['tfc:ore/rich_native_gold'])
	event.add('forge:normal_ore/gold', ['tfc:ore/normal_native_gold'])
	event.add('forge:poor_ore/gold', ['tfc:ore/poor_native_gold'])
	event.add('forge:rich_ore/silver', ['tfc:ore/rich_native_silver'])
	event.add('forge:normal_ore/silver', ['tfc:ore/normal_native_silver'])
	event.add('forge:poor_ore/silver', ['tfc:ore/poor_native_silver'])
	event.add('forge:rich_ore/bauxite', ['tfc_ie_addon:ore/rich_bauxite'])
	event.add('forge:normal_ore/bauxite', ['tfc_ie_addon:ore/normal_bauxite'])
	event.add('forge:poor_ore/bauxite', ['tfc_ie_addon:ore/poor_bauxite'])
	event.add('forge:rich_ore/cassiterite', ['tfc:ore/rich_cassiterite'])
	event.add('forge:normal_ore/cassiterite', ['tfc:ore/normal_cassiterite'])
	event.add('forge:poor_ore/cassiterite', ['tfc:ore/poor_cassiterite'])
	event.add('forge:rich_ore/chromite', ['firmalife:ore/rich_chromite'])
	event.add('forge:normal_ore/chromite', ['firmalife:ore/normal_chromite'])
	event.add('forge:poor_ore/chromite', ['firmalife:ore/poor_chromite'])
	event.add('forge:rich_ore/galena', ['tfc_ie_addon:ore/rich_galena'])
	event.add('forge:normal_ore/galena', ['tfc_ie_addon:ore/normal_galena'])
	event.add('forge:poor_ore/galena', ['tfc_ie_addon:ore/poor_galena'])
	event.add('forge:rich_ore/gypsum', ['tfc:ore/gypsum'])
	event.add('forge:rich_ore/magnetite', ['tfc:ore/rich_magnetite'])
	event.add('forge:normal_ore/magnetite', ['tfc:ore/normal_magnetite'])
	event.add('forge:poor_ore/magnetite', ['tfc:ore/poor_magnetite'])
	event.add('forge:rich_ore/pyrite', ['tfc:ore/pyrite'])
	event.add('forge:rich_ore/sphalerite', ['tfc:ore/rich_sphalerite'])
	event.add('forge:normal_ore/sphalerite', ['tfc:ore/normal_sphalerite'])
	event.add('forge:poor_ore/sphalerite', ['tfc:ore/poor_sphalerite'])
	event.add('forge:rich_ore/uraninite', ['tfc_ie_addon:ore/rich_uraninite'])
	event.add('forge:normal_ore/uraninite', ['tfc_ie_addon:ore/normal_uraninite'])
	event.add('forge:poor_ore/uraninite', ['tfc_ie_addon:ore/poor_uraninite'])
})
ServerEvents.recipes(event => {
// ---------  replace  -----------------------------------------------------------------------------------------------------------------------
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersivegeology:ingot_bronze', '#forge:ingots/bronze'),
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersivegeology:ingot_stainless_steel', '#forge:ingots/stainless_steel'),
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersivegeology:rod_stainless_steel', '#forge:rods/stainless_steel'),
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersivegeology:plate_stainless_steel', '#forge:plates/stainless_steel'),
	event.replaceInput({type: 'minecraft:crafting_shaped'}, 'immersivegeology:plate_zinc', '#forge:plates/zinc'),
//---------- remove recipe -------------------------------------------------------------------------------------------------------------------
	event.remove([
		{id: 'immersivegeology:blasting/blast_crude_steel_extraction'},
		{id: 'immersivegeology:coking/normal_block_bituminous_to_coke'},
		{id: 'immersivegeology:crafting/coal_to_block_bituminous'},
		{id: 'immersivegeology:crafting/craft_computational_engineering_2'},
	])
// --------- remove output in crafting table -------------------------------------------------------------------------------------------------
	event.remove({output: ['#forge:dirty_crushed_ore'], type: 'minecraft:crafting_shapeless'})
	event.remove({output: ['#forge:crushed_ore'], type: 'minecraft:crafting_shapeless'})
})
