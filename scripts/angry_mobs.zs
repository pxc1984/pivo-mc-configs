import mods.angrymobs.AITweaks;
// priority 10

// wiki  - https://github.com/Mrbysco/AngryMobs/wiki/1.18


// all attack when one hurt
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:trevally>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:bison>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:hyena>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:boar>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:cow>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:goat>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:snake>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:rhino>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:hippo>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:bear>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:untamedwilds:big_cat>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:crocodile>, 1, true);
AITweaks.addHurtByTargetTweak(<entitytype:tfc:sabertooth>, 1, true);
//  actively avoids players
AITweaks.addAvoidEntityTweak(<entitytype:untamedwilds:hyena>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:tfc:boar>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:untamedwilds:snake>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:untamedwilds:rhino>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:untamedwilds:hippo>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:untamedwilds:bear>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:untamedwilds:big_cat>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:tfc:crocodile>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
AITweaks.addAvoidEntityTweak(<entitytype:tfc:sabertooth>, <entitytype:minecraft:player>, 3, 6.0F, 1.0D, 1.2D);
// jump on target
//AITweaks.addLeapTweak(<entitytype:untamedwilds:trevally>, 4, 0.3F);
// angry mobs attack when see player
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:trevally>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:tarantula>, <entitytype:minecraft:player>, 2, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:shark>, <entitytype:minecraft:player>, 4, true);
AITweaks.addAttackNearestTweak(<entitytype:untamedwilds:large_snake>, <entitytype:minecraft:player>, 4, true);
AITweaks.addAttackNearestTweak(<entitytype:tfc:grizzly_bear>, <entitytype:minecraft:player>, 3, true);
AITweaks.addAttackNearestTweak(<entitytype:tfc:panther>, <entitytype:minecraft:player>, 4, true);